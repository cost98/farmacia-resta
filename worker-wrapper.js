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
      // Chiama l'endpoint di refresh
      const response = await fetch('https://farmacia-resta.costdev2022.workers.dev/api/instagram/refresh', {
        method: 'GET',
        headers: {
          'User-Agent': 'Cloudflare-Worker-Cron',
          'cf-cron': 'true',
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Token refreshed successfully:', data);
      } else {
        console.error('❌ Token refresh failed:', data);
        throw new Error(`Refresh failed: ${data.error}`);
      }
    } catch (error) {
      console.error('❌ Cron execution error:', error);
      throw error;
    }
  },
};
