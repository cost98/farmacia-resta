/**
 * Worker wrapper - Aggiunge scheduled() handler al worker OpenNext
 */

// Import del worker generato da OpenNext
import worker from './.open-next/worker.js';

export default {
  // Handler HTTP - delega a OpenNext
  async fetch(request, env, ctx) {
    return worker.fetch(request, env, ctx);
  },

  // Handler Cron - gestisce il refresh automatico
  async scheduled(event, env, ctx) {
    console.log('🔄 Cron triggered - Refreshing Instagram token...');
    
    try {
      // Get current token from KV or env
      let currentToken = env.INSTAGRAM_ACCESS_TOKEN;
      
      if (env.INSTAGRAM_KV) {
        try {
          const kvToken = await env.INSTAGRAM_KV.get('access_token');
          if (kvToken) {
            currentToken = kvToken;
            console.log('📦 Using token from KV');
          }
        } catch (e) {
          console.warn('⚠️ Failed to read from KV, using env token:', e.message);
        }
      }

      if (!currentToken) {
        console.error('❌ No Instagram token available');
        return;
      }

      const appId = env.INSTAGRAM_APP_ID;
      const appSecret = env.INSTAGRAM_APP_SECRET;

      if (!appId || !appSecret) {
        console.error('❌ Missing INSTAGRAM_APP_ID or INSTAGRAM_APP_SECRET');
        return;
      }

      // Call Instagram API to refresh token
      // Docs: https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens
      const refreshUrl = new URL('https://graph.instagram.com/refresh_access_token');
      refreshUrl.searchParams.set('grant_type', 'ig_refresh_token');
      refreshUrl.searchParams.set('access_token', currentToken);
      // Some implementations also require these:
      // refreshUrl.searchParams.set('client_id', appId);
      // refreshUrl.searchParams.set('client_secret', appSecret);
      
      console.log('📡 Calling Instagram refresh API...');
      
      const response = await fetch(refreshUrl);
      const data = await response.json();

      if (!response.ok) {
        console.error('❌ Instagram API error:', data);
        throw new Error(`Instagram API failed: ${data.error?.message || 'Unknown error'}`);
      }

      const newToken = data.access_token;
      const expiresIn = data.expires_in || 5184000; // 60 days default

      // Save to KV with expiration
      if (env.INSTAGRAM_KV) {
        await env.INSTAGRAM_KV.put('access_token', newToken, {
          expirationTtl: expiresIn,
        });
        await env.INSTAGRAM_KV.put('last_refresh', new Date().toISOString());
        console.log(`✅ Token refreshed and saved to KV (expires in ${expiresIn}s)`);
      } else {
        console.warn('⚠️ KV not available, token refreshed but not saved');
      }
    } catch (error) {
      console.error('❌ Cron execution error:', error.message);
    }
  },
};
