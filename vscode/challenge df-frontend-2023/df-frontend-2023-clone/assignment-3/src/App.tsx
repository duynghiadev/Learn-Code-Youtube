import './App.css'
import appTheme from "classnames";
import { useTheme } from './theme/ThemeContext'
import MainLayout from './layouts/MainLayout'

function App() {
  const { isDarkTheme } = useTheme()
  return (
    <div className={appTheme("App", { darkTheme: isDarkTheme })}>
      <MainLayout />
    </div>
  )
}

export default App
