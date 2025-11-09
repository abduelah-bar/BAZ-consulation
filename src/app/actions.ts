"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .regex(/^\+?[0-9]+$/, { message: "Only numbers are allowed (you can start with +)." })
    .min(8, { message: "Phone number must be at least 8 digits." }),

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
      error: "Invalid data provided.",
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL || "https://discord.com/api/webhooks/1435974090078031902/fA2bbX82mP3k_yMiY0rMAYbOt_WDzoRjyeTYBH9I696Qr5JmK2WWu-ciy7jTdGpCX02f";

    const embed = {
      embeds: [
        {
          title: "📩 New Contact Form Submission",
          color: 0x00bfff,
          fields: [
            { name: "👤 Name", value: name, inline: true },
            { name: "📧 Email", value: email, inline: true },
            { name: "💬 Message", value: message },
          ],
          footer: { text: "Contact Form • BAZ Consultation" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(embed),
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending to Discord:", error);
    return { success: false, error: "Failed to send message." };
  }
}
