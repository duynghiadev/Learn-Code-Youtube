import { redirect } from 'next/navigation'

import { PATHS } from '@/src/lib/constants'

export default function Home() {
  redirect(PATHS.AUTH.LOGIN)
}
