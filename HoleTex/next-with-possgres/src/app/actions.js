'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const createComment = async (prevState, formValues) => {
  try {
    console.log({prevState})
    const result =
    await sql`INSERT INTO Comments (Name, Content, CreatedAt) VALUES (${formValues.get(
      'name'
      )}, ${formValues.get('content')}, ${JSON.stringify(new Date())});`;
    revalidatePath('/');
    return 'Success';
  } catch (error) {
    console.log({error})
    return `Failed ${JSON.stringify(error)}`
  }
};