/**
 * Cloudflare Worker - Instagram Token Auto-Refresh
 * Chiamato automaticamente dal cron trigger ogni 15 giorni
 */

export default {
  async scheduled(event, env, ctx) {
    console.log('🔄 Cron triggered - Refreshing Instagram token...');
    
    try {
      const response = await fetch(env.TARGET_URL, {
        method: 'GET',
        headers: {
          'User-Agent': 'Cloudflare-Worker-Cron',
          'cf-cron': 'true', // Indica che è una chiamata da cron
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Token refreshed successfully:', data);
      } else {
        console.error('❌ Token refresh failed:', data);
        // Cloudflare invierà notifica di errore
        throw new Error(`Refresh failed: ${data.error}`);
      }
    } catch (error) {
      console.error('❌ Cron execution error:', error);
      throw error; // Cloudflare segnerà il cron come fallito
    }
  },

  // Handler fetch opzionale per test manuali
  async fetch(request, env, ctx) {
    return new Response('Cron Worker - Use scheduled trigger', { status: 200 });
  },
};
