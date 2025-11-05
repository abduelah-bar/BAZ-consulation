"use server";

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  data: z.infer<typeof formSchema>
): Promise<FormState> {
  const validatedFields = formSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid data provided.',
    };
  }

  // In a real application, you would process the data here:
  // - Send an email
  // - Save to a database
  // - etc.
  console.log('Form data received:', validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error
  // if (Math.random() > 0.5) {
  //   return {
  //     success: false,
  //     error: "An unexpected error occurred. Please try again."
  //   }
  // }

  return { success: true };
}
