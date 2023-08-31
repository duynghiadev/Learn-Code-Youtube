import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/facebook'}>Facebook</Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          <Link href={'/youtube'}>Youtube</Link>
        </li>
        <li>
          <Link href={'/tiktok'}>Tiktok</Link>
        </li>
      </ul>
    </div>
  )
}
