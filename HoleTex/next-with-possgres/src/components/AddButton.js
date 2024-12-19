'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

export const AddButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='bg-black text-white p-1 rounded'
      disabled={pending}
    >
      {pending ? 'Adding' : 'Add'}
    </button>
  );
};
