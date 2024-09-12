'use server';

import React from 'react';
import { Resend } from 'resend';

import ContactEmail from '@/email/contact-email';
import { getErrorMessage, validateString } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'GTPD Site <onboarding@resend.dev>',
      react: React.createElement(ContactEmail, { message, senderEmail }),
      replyTo: senderEmail,
      subject: 'Nueva solicitud de contacto',
      text: message,
      to: 'gtpd1724@gmail.com',
    });

    if (data.error) {
      return {
        error: data.error.message,
      };
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
