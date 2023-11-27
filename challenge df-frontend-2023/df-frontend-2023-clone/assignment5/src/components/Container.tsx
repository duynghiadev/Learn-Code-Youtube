import { HTMLAttributes } from 'react'

export default function Container({
  children,
  ...other
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...other}
      className={`container mx-auto ${other.className ? other.className : ''}`}
    >
      {children}
    </div>
  )
}
