import { useEffect } from 'react'
import { useA11yDialog } from 'react-a11y-dialog'

interface UseProcessDialogProps {
  id: string
  titleId: string
  triggerValue: boolean
  onClose: () => void
}

export function useProcessDialog({
  id,
  titleId,
  triggerValue,
  onClose,
}: UseProcessDialogProps) {
  const [instance, attr] = useA11yDialog({
    id,
    role: 'dialog',
    titleId,
  })

  useEffect(() => {
    if (instance) {
      if (triggerValue) instance.show()
      else instance.hide()

      // If the dialog gets closed (pressing ESC for instance), clear the dialog.
      instance.on('hide', onClose)
    }
  }, [triggerValue, instance, onClose])

  return attr
}
