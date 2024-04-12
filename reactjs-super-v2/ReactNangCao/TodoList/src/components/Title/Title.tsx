import styles from './title.module.scss'
import React from 'react'

type TitleProps = {
  address: {
    street: string
  }
}

const Title = (props: TitleProps) => {
  console.log('prop in component Title', props)
  return <h1 className={styles.title}>To do list typescript</h1>
}

const equal = (prevProp: TitleProps, nextProps: any) => {
  return prevProp.address.street === nextProps.address.street
}

export default React.memo(Title)
