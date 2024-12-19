import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE comments ( Name varchar(255), Content varchar(255), CreatedAt TIMESTAMP );`;
      // await sql`DROP TABLE comments`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}