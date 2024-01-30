import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [originalStatusesIndex, setOriginalStatusesIndex] = useState({
    country: 0,
    totalCases: 0,
    todayCases: 0,
    recovered: 0,
    deaths: 0
  })
  const [covidCountries, setCovidCountries] = useState([])
  const [originalCovidCountries, setOriginalCovidCountries] = useState([])
  const [sortStatusesIndex, setSortStatusesIndex] = useState(originalStatusesIndex)

  useEffect(() => {
    const apiCall = async () => {
      // fetch is a promise --> so, i use async await
      const response = await fetch('https://coronavirus-19-api.herokuapp.com/countries', {
        method: 'GET'
      })
      let result = await response.json()

      result =
        result &&
        result.length > 0 &&
        result.filter((item) => item.country && !item.country.includes('Totals:'))

      setCovidCountries(result)
      setOriginalCovidCountries([...result])
    }
    apiCall()
  }, [])

  const handleSort = (sortBy) => {
    const currentSortIndex = sortStatusesIndex[sortBy]
    const updatedSortIndex = currentSortIndex + 1 <= 2 ? currentSortIndex + 1 : 0

    if (updatedSortIndex === 1) {
      if (sortBy === 'country') {
        covidCountries.sort((c1, c2) => {
          return c1.country.localeCompare(c2.country)
        })
      } else {
        covidCountries.sort((c1, c2) => {
          return c1[sortBy] - c2[sortBy]
        })
      }
      setCovidCountries([...covidCountries])
    } else if (updatedSortIndex === 2) {
      if (sortBy === 'country') {
        covidCountries.sort((c1, c2) => {
          return c2.country.localeCompare(c1.country)
        })
      } else {
        covidCountries.sort((c1, c2) => {
          return c2[sortBy] - c1[sortBy]
        })
      }
      setCovidCountries([...covidCountries])
    } else {
      setCovidCountries([...originalCovidCountries])
    }

    setSortStatusesIndex({ ...originalStatusesIndex, [sortBy]: updatedSortIndex })
  }

  return (
    <div className='App'>
      <h3 style={{ color: '#ff0000' }}>Corona virus cases</h3>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('country')}>Country</th>
            <th onClick={() => handleSort('cases')}>Total Cases</th>
            <th onClick={() => handleSort('todayCases')}>Today Cases</th>
            <th onClick={() => handleSort('recovered')}>Recovered</th>
            <th onClick={() => handleSort('deaths')}>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {covidCountries.map((covidCountry) => (
            <tr key={covidCountry.country}>
              <td>{covidCountry.country}</td>
              <td>{covidCountry.cases}</td>
              <td>{covidCountry.todayCases}</td>
              <td>{covidCountry.recovered}</td>
              <td>{covidCountry.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
