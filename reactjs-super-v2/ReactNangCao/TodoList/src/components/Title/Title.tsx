import styles from './title.module.scss'
import React from 'react'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

const Title = (props: TitleProps) => {
  const { handleClickTitle, address } = props
  console.log('prop in component Title --> ', 'handleClickTitle:', handleClickTitle, 'and address:', address)

  return (
    <h1 className={styles.title} onClick={() => handleClickTitle(100)}>
      To do list typescript
    </h1>
  )
}

const equal = (prevProp: TitleProps, nextProps: any) => {
  return prevProp.address.street === nextProps.address.street
}

export default React.memo(Title)
