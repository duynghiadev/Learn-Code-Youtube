import { Button, ThemeControl } from 'components'
import { useAuth } from 'hooks'
import i18n from 'i18n'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const HomePage = () => {
  const { t } = useTranslation()
  const { logout, getDetailUser } = useAuth()

  useEffect(() => {
    getDetailUser('670fd545ee8caabf6ab58520')
    const language = localStorage.getItem('LANGUAGE')
    if (language) {
      i18n.changeLanguage(language)
    }
  }, [])

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguge = event?.target?.value
    i18n.changeLanguage(selectedLanguge)
    localStorage.setItem('LANGUAGE', i18n.language)
  }

  return (
    <div>
      <div className='flex items-center p-4 justify-between'>
        <ThemeControl />
        <Button type='primary' onClick={logout}>
          Logout
        </Button>
      </div>
      <select
        onChange={handleChangeLanguage}
        value={i18n.language}
        className='border-gray-300 block border rounded-lg p-2 mx-auto'
        id='change-language'
      >
        <option value='en'>English</option>
        <option value='vi'>Viet name</option>
      </select>
      <div className='flex flex-col text-center align-center justify-center'>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
      </div>
    </div>
  )
}
