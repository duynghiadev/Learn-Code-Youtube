import { PATHS } from '@/src/lib/constants'
import NotFoundSection from '@/src/components/NotFoundSection'

export default function NotFound() {
  return (
    <NotFoundSection
      title="404 Book Not Found"
      message="The book you are looking for does not exist."
      linkHref={PATHS.BOOK.ROOT}
      linkLabel="Back to book list"
    />
  )
}
