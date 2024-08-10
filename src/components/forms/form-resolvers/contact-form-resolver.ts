import { z, ZodSchema } from 'zod';
import { STATUS } from '../../../models/enums';

// Zod schema for Contact form validation
export const CONTACT_FORM_ZOD: ZodSchema = z.object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    status: z.enum([STATUS.ACTIVE, STATUS.INACTIVE], {
        required_error: 'Status is required',
    }),
});
  
//TypeScript interface for form inputs
type ContactFormZod = z.infer<typeof CONTACT_FORM_ZOD>;
  
export default ContactFormZod;