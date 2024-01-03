import React, { useImperativeHandle } from 'react'

function CustomInput(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      return { alertValue: () => alert(props.value) }
    },
    [props.value]
  )

  return <input ref={ref} style={{ backgroundColor: 'red' }} {...props} />
}

export default React.forwardRef(CustomInput)
