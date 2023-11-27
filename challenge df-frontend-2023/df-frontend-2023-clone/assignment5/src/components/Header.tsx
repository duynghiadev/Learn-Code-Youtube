import { PATHS } from '@/src/lib/constants'
import ThemeSwitch from '@/src/components/ThemeSwitch'
import Container from '@/src/components/Container'

export default function Header() {
  return (
    <header className="bg-slate-100 px-4 py-3 shadow shadow-black/30 transition-colors ease-linear dark:bg-slate-700">
      <Container className="flex items-center justify-between">
        <a href={PATHS.ROOT}>
          <h1 className="text-xl font-bold sm:text-2xl">📚 Bookstore</h1>
        </a>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </Container>
    </header>
  )
}
