import { ThemeType } from './Welcome'

export const Label = ({
  theme,
  onChangeTheme
}: {
  theme: ThemeType
  onChangeTheme: (color: 'light' | 'dark') => void
}) => {
  return (
    <label>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
      Use dark mode
    </label>
  )
}
