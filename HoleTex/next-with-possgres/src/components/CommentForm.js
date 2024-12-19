'use client';

import React from 'react';
import { AddButton } from './AddButton';
import { useFormState } from 'react-dom';
import { createComment } from '../app/actions';

export const CommentForm = () => {
  const [state, formAction] = useFormState(createComment, '');

  console.log({ formAction });

  return (
    <div className='p-6 bg-white rounded shadow'>
      <p className='font-bold mb-3'>Add New Comment</p>
      <form
        className='border p-3 rounded flex flex-col w-1/2'
        action={formAction}
      >
        <div className='mb-1'>
          <label htmlFor='name' className='text-sm font-semibold'>
            Name
          </label>
          <input type='text' name='name' id='name' className='border w-full' />
        </div>
        <div className='mb-1'>
          <label htmlFor='content' className='text-sm font-semibold'>
            Comment
          </label>
          <textarea
            name='content'
            id='content'
            className='border w-full h-20'
          />
        </div>
        <AddButton />
        <p>{state}</p>
      </form>
    </div>
  );
};
