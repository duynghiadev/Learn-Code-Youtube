import { useEffect } from 'react'
import { useA11yDialog } from 'react-a11y-dialog'

export default function useProcessDialog({
  id,
  title,
  triggerValue,
  onClose
}) {
  const [instance, attr] = useA11yDialog({
    id: id,
    role: 'dialog',
    title
  })

  useEffect(() => {
    if (instance) {
      if (triggerValue) {
        instance.show()
      } else {
        instance.hide()
      }

      // If the dialog gets closed (pressing ESC for instance), clear the dialog.
      instance.on('hide', onClose)
    }
  }, [triggerValue, instance, onClose])

  return attr
} 
