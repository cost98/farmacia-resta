import { NextRequest, NextResponse } from 'next/server';

// ⚠️ DISABILITATO PER CLOUDFLARE PAGES
// Questa route auto-refresh è specifica per Vercel e usa Vercel API
// Su Cloudflare Pages serve un Cloudflare Worker separato con Scheduled Events
// 
// TODO: Per riattivare su Cloudflare:
// 1. Creare un Cloudflare Worker con Scheduled Event
// 2. Usare Cloudflare API invece di Vercel API per aggiornare env vars
// 3. Configurare il trigger cron nel Cloudflare Dashboard

export async function GET(request: NextRequest) {
  return NextResponse.json({
    error: 'Auto-refresh disabled',
    message: 'Instagram token auto-refresh is currently disabled on Cloudflare Pages. Please refresh token manually or configure Cloudflare Workers.',
    howToRefreshManually: 'Visit https://developers.facebook.com/apps/YOUR_APP_ID/instagram-basic-display/basic-display/ to refresh token',
  }, { status: 503 });
}

/* CODICE ORIGINALE VERCEL - COMMENTATO PER CLOUDFLARE PAGES

// Questa route viene chiamata automaticamente da Vercel Cron ogni 50 giorni
// Rinnova il token Instagram e aggiorna automaticamente le Environment Variables su Vercel

export async function GET(request: NextRequest) {
  // Verifica che la chiamata provenga dal Cron di Vercel
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const appId = process.env.INSTAGRAM_APP_ID;
  const appSecret = process.env.INSTAGRAM_APP_SECRET;
  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const vercelToken = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;

  if (!appId || !appSecret || !currentToken) {
    return NextResponse.json(
      { error: 'Missing Instagram environment variables' },
      { status: 500 }
    );
  }

  if (!vercelToken || !projectId) {
    return NextResponse.json(
      { error: 'Missing Vercel API credentials' },
      { status: 500 }
    );
  }

  try {
    // STEP 1: Rinnova il token Instagram
    console.log('🔄 Refreshing Instagram token...');
    
    const refreshUrl = new URL('https://graph.instagram.com/refresh_access_token');
    refreshUrl.searchParams.set('grant_type', 'ig_refresh_token');
    refreshUrl.searchParams.set('access_token', currentToken);

    const response = await fetch(refreshUrl.toString());
    
    if (!response.ok) {
      const error = await response.text();
      console.error('❌ Token refresh failed:', error);
      return NextResponse.json(
        { error: 'Failed to refresh token', details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    const newToken = data.access_token;
    const expiresIn = data.expires_in;

    console.log('✅ Token refreshed successfully');
    console.log(`⏰ New token expires in ${Math.floor(expiresIn / 86400)} days`);

    // STEP 2: Aggiorna automaticamente la variabile su Vercel
    console.log('🔄 Updating Vercel environment variable...');

    const vercelApiUrl = teamId 
      ? `https://api.vercel.com/v10/projects/${projectId}/env`
      : `https://api.vercel.com/v10/projects/${projectId}/env`;

    // Prima troviamo l'ID della variabile esistente
    const listEnvUrl = teamId 
      ? `${vercelApiUrl}?teamId=${teamId}`
      : vercelApiUrl;

    const listResponse = await fetch(listEnvUrl, {
      headers: {
        'Authorization': `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!listResponse.ok) {
      const error = await listResponse.text();
      console.error('❌ Failed to list env vars:', error);
      return NextResponse.json(
        { error: 'Failed to list environment variables', details: error },
        { status: listResponse.status }
      );
    }

    const envVars = await listResponse.json();
    const tokenVar = envVars.envs?.find((env: any) => env.key === 'INSTAGRAM_ACCESS_TOKEN');

    if (!tokenVar) {
      console.error('❌ INSTAGRAM_ACCESS_TOKEN not found in Vercel');
      return NextResponse.json(
        { error: 'INSTAGRAM_ACCESS_TOKEN not found in Vercel project' },
        { status: 404 }
      );
    }

    // Aggiorna la variabile esistente
    const updateUrl = teamId 
      ? `${vercelApiUrl}/${tokenVar.id}?teamId=${teamId}`
      : `${vercelApiUrl}/${tokenVar.id}`;

    const updateResponse = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: newToken,
        target: ['production', 'preview'], // Solo production e preview (development usa .env.local)
      }),
    });

    if (!updateResponse.ok) {
      const error = await updateResponse.text();
      console.error('❌ Failed to update env var:', error);
      return NextResponse.json(
        { error: 'Failed to update environment variable', details: error },
        { status: updateResponse.status }
      );
    }

    console.log('✅ Vercel environment variable updated');

    // STEP 3: Trigger un redeploy automatico
    console.log('🔄 Triggering redeploy...');

    const deployUrl = teamId 
      ? `https://api.vercel.com/v13/deployments?teamId=${teamId}`
      : 'https://api.vercel.com/v13/deployments';

    const deployResponse = await fetch(deployUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: projectId,
        target: 'production',
      }),
    });

    if (!deployResponse.ok) {
      console.warn('⚠️ Redeploy trigger failed, but token was updated');
      // Non è critico se il redeploy fallisce, il token è comunque aggiornato
    } else {
      console.log('✅ Redeploy triggered successfully');
    }

    return NextResponse.json({
      success: true,
      message: '🎉 Token refreshed and automatically updated on Vercel!',
      expiresInDays: Math.floor(expiresIn / 86400),
      updatedAt: new Date().toISOString(),
      steps: {
        tokenRefresh: '✅ Completed',
        vercelUpdate: '✅ Completed',
        redeploy: deployResponse.ok ? '✅ Completed' : '⚠️ Manual redeploy recommended',
      },
    });

  } catch (error) {
    console.error('❌ Auto-refresh error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: String(error) },
      { status: 500 }
    );
  }
}

*/
