import { useEffect, useState } from 'react'
import { CharacterType, fetchCharacter } from './characters'
import { Loading } from './Loading'
import { CharacterInformation } from './CharacterInformation'

const withCharacter = (Component: any) => {
  return () => {
    const [character, setCharacter] = useState<CharacterType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c)
        setLoading(false)
      })
    }, [])

    if (loading) return <Loading />

    return <Component character={character} />
  }
}

const CharacterInformationWithCharacter = withCharacter(CharacterInformation)

const Application = () => {
  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  )
}

export default Application
