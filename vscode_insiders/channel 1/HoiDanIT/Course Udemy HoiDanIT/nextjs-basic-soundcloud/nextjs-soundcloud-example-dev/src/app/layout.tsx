import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AuthProvider from './lib/auth.provider';
import './app.css'
export const metadata = {
  title: ' Hỏi Dân IT ~ Next.js 13 + Material UI v5',
  description: 'Series Next.js App Router + Material UI v5',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
