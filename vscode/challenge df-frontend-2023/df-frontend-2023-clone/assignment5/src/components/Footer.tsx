import Container from '@/src/components/Container'

export default function Footer() {
  return (
    <footer className="pb-8">
      <hr className="border-t-gray-400 pb-4 dark:border-t-gray-600" />
      <div className="px-4">
        <Container>
          <a
            href="https://github.com/dnhn/df-fe-23/tree/main/assignment-5"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold underline-offset-2 hover:underline focus:underline"
          >
            GitHub
          </a>
        </Container>
      </div>
    </footer>
  )
}
