import styles from './title.module.scss'
import React, { useRef, useState } from 'react'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

const Title = (props: TitleProps) => {
  // const [color, setColor] = useState<string | undefined>(undefined)

  const { handleClickTitle, address } = props
  console.log('prop in component Title --> ', 'handleClickTitle:', handleClickTitle, 'and address:', address)

  const h1Ref = useRef<HTMLHeadingElement>(null)

  const clickH1 = () => {
    console.log('h1Ref:', h1Ref)
    console.log('h1Ref.current:', h1Ref.current)

    if (h1Ref.current) {
      h1Ref.current.style.color = 'red'
    }
    // setColor('red')
  }

  return (
    <h1 className={styles.title} ref={h1Ref} onClick={clickH1}>
      To do list typescript
    </h1>
  )
}

const equal = (prevProp: TitleProps, nextProps: any) => {
  return prevProp.address.street === nextProps.address.street
}

export default React.memo(Title)
