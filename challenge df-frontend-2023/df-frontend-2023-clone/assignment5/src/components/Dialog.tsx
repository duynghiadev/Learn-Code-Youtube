import {
  DetailedHTMLProps,
  DialogHTMLAttributes,
  LegacyRef,
  RefObject,
  forwardRef,
} from 'react'

import { IButton } from '@/src/types/button'
import Button from '@/src/components/Button'

interface IAction extends IButton {
  ref?: RefObject<HTMLButtonElement>
  label: string
}

interface IDialog
  extends DetailedHTMLProps<
    DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > {
  title?: string
  actions: IAction[]
}

export default forwardRef(function Dialog(
  { title, children, actions, ...other }: IDialog,
  ref: LegacyRef<HTMLDialogElement> | undefined,
) {
  return (
    <dialog
      {...other}
      ref={ref}
      className="w-[calc(100%-2rem)] rounded-md bg-white p-6 text-current backdrop:bg-black/20 dark:bg-slate-600 xs:w-[22.5rem] sm:p-8"
    >
      {title && (
        <div className="mb-6 text-xl font-bold sm:text-2xl">{title}</div>
      )}
      {children}
      <div className="mt-8 flex justify-between gap-4">
        {actions.map((action, index) => (
          <Button key={index} {...action}>
            {action.label}
          </Button>
        ))}
      </div>
    </dialog>
  )
})
