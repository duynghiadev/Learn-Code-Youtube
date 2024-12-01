'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

function ProviderTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default ProviderTheme
