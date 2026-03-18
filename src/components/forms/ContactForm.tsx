'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { servizi } from '@/lib/data/servizi';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio del messaggio');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Errore:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nome"
          placeholder="Mario"
          {...register('nome')}
          error={errors.nome?.message}
          required
        />
        <Input
          label="Cognome"
          placeholder="Rossi"
          {...register('cognome')}
          error={errors.cognome?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Telefono"
          type="tel"
          placeholder="+39 123 456 7890"
          {...register('telefono')}
          error={errors.telefono?.message}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="mario.rossi@example.com"
          {...register('email')}
          error={errors.email?.message}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Servizio di interesse
        </label>
        <select
          {...register('servizio')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        >
          <option value="">Seleziona un servizio (opzionale)</option>
          {servizi.map((servizio) => (
            <option key={servizio.id} value={servizio.titolo}>
              {servizio.titolo}
            </option>
          ))}
        </select>
      </div>

      <Textarea
        label="Messaggio"
        placeholder="Scrivi qui il tuo messaggio..."
        {...register('messaggio')}
        error={errors.messaggio?.message}
        required
        rows={6}
      />

      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacy"
          {...register('privacy')}
          className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        />
        <label htmlFor="privacy" className="ml-3 text-sm text-gray-700">
          Accetto l&apos;
          <a href="/privacy" className="text-green-600 hover:text-green-700 underline">
            informativa sulla privacy
          </a>{' '}
          e autorizzo il trattamento dei miei dati personali *
        </label>
      </div>
      {errors.privacy && (
        <p className="text-sm text-red-600 -mt-4">{errors.privacy.message}</p>
      )}

      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <CheckCircle size={24} />
          <div>
            <p className="font-semibold">Messaggio inviato con successo!</p>
            <p className="text-sm">Ti contatteremo il prima possibile.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <XCircle size={24} />
          <div>
            <p className="font-semibold">Errore durante l&apos;invio</p>
            <p className="text-sm">
              Si è verificato un errore. Riprova o contattaci telefonicamente.
            </p>
          </div>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Invio in corso...
          </>
        ) : (
          'Invia Messaggio'
        )}
      </Button>
    </form>
  );
}
