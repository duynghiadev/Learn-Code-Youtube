import React, {createContext} from 'react'

export const RouterContext = createContext()

function Routes(props)
{

	const objectData = {
		location: window.location,
		history: window.history
	}

	return (
		<RouterContext.Provider value={objectData}>
			{props.children}
		</RouterContext.Provider>
	)

}

export default Routes