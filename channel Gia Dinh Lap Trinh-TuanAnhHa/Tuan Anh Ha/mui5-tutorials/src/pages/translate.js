import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    vn: {
      translation: {
        'Welcome to React': 'Chào mừng đến với React',
      },
    },
    de: {
      translation: {
        'Welcome to React': 'Willkommen bei React',
      },
    },
  },
  lng: 'de',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

function Translate() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}

export default Translate
