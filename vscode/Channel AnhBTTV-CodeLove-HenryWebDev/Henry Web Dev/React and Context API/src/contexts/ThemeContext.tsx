import { PropTypes } from '@material-ui/core'
import { createContext, ReactNode, useState } from 'react'

interface ThemeContextProps {
	children: ReactNode
}

export interface ThemeContextDefault {
	theme: PropTypes.Color
	toggleTheme: (theme: PropTypes.Color) => void
}

const themeContextDataDefault = {
	theme: 'primary' as PropTypes.Color,
	toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextDefault>(
	themeContextDataDefault
)

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
	const [theme, setTheme] = useState<PropTypes.Color>(
		themeContextDataDefault.theme
	)

	const toggleTheme = (theme: PropTypes.Color) => setTheme(theme)

	const themeContextData = { theme, toggleTheme }

	return (
		<ThemeContext.Provider value={themeContextData}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
