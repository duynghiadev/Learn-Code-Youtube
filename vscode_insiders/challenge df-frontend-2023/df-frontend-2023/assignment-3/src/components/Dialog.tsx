import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createPortal } from 'react-dom'

const Dialog = (props) =>
  createPortal(
    <div {...props.attr.container} className="dialog-container">
      <div {...props.attr.overlay} className="dialog-overlay" />
      <div {...props.attr.dialog} className="dialog-content">
        <div className="dialog-header">
          <p {...props.attr.title} className="dialog-title">
            {props.title}
          </p>
          <button {...props.attr.closeButton} className="dialog-close">
            <FontAwesomeIcon icon="times" />
          </button>
        </div>

        <div className="dialog-children">{props.children}</div>
      </div>
    </div>,
    document.body,
  )

export default Dialog
