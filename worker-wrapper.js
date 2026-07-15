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
      // Chiama l'endpoint di refresh con autenticazione
      const response = await fetch('https://farmacia-resta.costdev2022.workers.dev/api/instagram/refresh', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${env.CRON_SECRET}`,
          'User-Agent': 'Cloudflare-Worker-Cron',
        },
      });

      console.log(`📡 Response status: ${response.status}`);
      
      // Controlla se la risposta è JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('❌ Non-JSON response:', text.substring(0, 200));
        throw new Error(`Expected JSON, got ${contentType}. Response: ${text.substring(0, 100)}`);
      }

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Token refreshed successfully:', data);
      } else {
        console.error('❌ Token refresh failed:', data);
        throw new Error(`Refresh failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('❌ Cron execution error:', error.message);
      // Non rilanciare l'errore per evitare che Cloudflare marchi il cron come fallito ripetutamente
      // throw error;
    }
  },
};
