import convertAccentedVietnamese from './convertAccentedVietnamese'

export default function convertToSlug(input) {
  const withoutDiacritics = convertAccentedVietnamese(input)
  const lowercase = withoutDiacritics.toLowerCase()
  const slug = lowercase.replace(/\s+/g, '-')
  return slug
}
