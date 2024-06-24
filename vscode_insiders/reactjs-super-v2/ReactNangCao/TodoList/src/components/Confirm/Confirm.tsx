import styles from './confirm.module.scss'
import { createPortal } from 'react-dom'

interface ConfirmProps {
  visible: boolean
  ok: () => void
  cancel: () => void
}

const root = document.getElementById('root') as HTMLElement

const Confirm = ({ visible, ok, cancel }: ConfirmProps) => {
  const handleOK = () => {
    ok()
  }

  const handleCancel = () => {
    cancel()
  }

  return createPortal(
    <div className={styles.modalRoot} style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.confirm}>
          <p className={styles.title}>Are you sure?</p>
          <button onClick={handleOK}>OK</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>,
    root
  )
}

export default Confirm
