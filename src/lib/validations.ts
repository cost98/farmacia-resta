import { z } from 'zod';

export const contactFormSchema = z.object({
  nome: z.string().min(2, 'Il nome deve contenere almeno 2 caratteri'),
  cognome: z.string().optional(),
  telefono: z
    .string()
    .min(9, 'Inserisci un numero di telefono valido')
    .regex(/^[0-9\s+()-]+$/, 'Il numero di telefono contiene caratteri non validi'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  servizio: z.string().optional(),
  messaggio: z.string().min(10, 'Il messaggio deve contenere almeno 10 caratteri'),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Devi accettare l\'informativa sulla privacy',
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
