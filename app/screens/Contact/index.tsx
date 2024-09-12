'use client';

import { motion } from 'framer-motion';
import React from 'react';
import toast from 'react-hot-toast';

import SectionTitle from '@/app/components/SectionTitle';
import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';

import SubmitButton from './components/SubmitButton';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      className="mb-28 w-[min(100%,38rem)] scroll-mt-36 text-center sm:mb-28"
      id="contact"
      initial={{ opacity: 0 }}
      ref={ref}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <SectionTitle>Contact Me</SectionTitle>
      <p className="-mt-6  text-gray-700">
        Please contact em directly at{' '}
        <a className="underline" href="mailto:example@gmail.cgom">
          example@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Message sent successfully');
        }}
        className="mt-10 flex flex-col"
      >
        <input
          className="borderBlack h-14 rounded-lg px-4"
          maxLength={500}
          name="senderEmail"
          placeholder="Your email"
          required
          type="email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4"
          maxLength={5000}
          name="message"
          placeholder="Your message"
          required
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
