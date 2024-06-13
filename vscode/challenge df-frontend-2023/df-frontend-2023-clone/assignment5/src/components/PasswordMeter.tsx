import { HTMLAttributes } from 'react'
import zxcvbn from 'zxcvbn'

interface IPasswordMeter extends HTMLAttributes<HTMLDivElement> {
  text: string
}

export default function PasswordMeter({ text, ...other }: IPasswordMeter) {
  const score = zxcvbn(text).score
  const COLOUR_MAP: { [key: number]: string } = {
    0: '',
    1: 'text-red-600',
    2: 'text-orange-600',
    3: 'text-yellow-500',
    4: 'text-green-500',
  }

  return (
    <div
      {...other}
      title={`Password strength: ${score} out of 4`}
      className={`password-meter ${COLOUR_MAP[score]} ${
        other.className ? other.className : ''
      }`}
    >
      <div
        className={`password-meter__level ${
          score > 0
            ? 'h-2 border-current bg-current'
            : 'h-0 border-neutral-400 bg-transparent'
        }`}
      />
      <div
        className={`password-meter__level ${
          score > 1
            ? 'h-2 border-current bg-current'
            : 'h-0 border-neutral-400 bg-transparent'
        }`}
      />
      <div
        className={`password-meter__level ${
          score > 2
            ? 'h-2 border-current bg-current'
            : 'h-0 border-neutral-400 bg-transparent'
        }`}
      />
      <div
        className={`password-meter__level ${
          score > 3
            ? 'h-2 border-current bg-current'
            : 'h-0 border-neutral-400 bg-transparent'
        }`}
      />
    </div>
  )
}
