import React, { useEffect } from 'react';
import './modal.scss';

type ModalProps = {
    onOk?: () => void;
    onCancel?: () => void;
    renderFooter?: () => JSX.Element;
    title?: string;
    isVisible?: boolean;
    isRenderHeader?: boolean;
    isRenderCloseIcon?: boolean;
}

const ModalDemo: React.FC<ModalProps> = ({
    onOk,
    onCancel,
    renderFooter,
    title,
    children,
    isVisible,
    isRenderHeader,
    isRenderCloseIcon,
}) => {

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27 && isVisible) {
                onCancel()
            }
        })
        return () => {
            document.removeEventListener('keyup', () => { });
        }
    }, [isVisible, onCancel])

    useEffect(() => {
        if (isVisible) {
            document.querySelector("body").classList.add("tcl-modal__open");
        } else {
            document.querySelector("body").classList.remove("tcl-modal__open");
        }
    }, [isVisible])

    const _renderFooter = (): JSX.Element => {
        if (renderFooter && typeof renderFooter === 'function') {
            return renderFooter();
        }
        return (
            <>
                <button className="tcl-modal__cancel" onClick={onCancel}>Cancel</button>
                <button className="tcl-modal__ok" onClick={onOk}>Ok</button>
            </>
        )
    }

    if (isVisible === false) return null;

    return (
        <div className={`tcl-modal__wrapper ${isVisible ? 'show' : ''}`}>
            <div className="tcl-mask" onClick={onCancel}></div>
            <div className="tcl-dialog">
                <div className="tcl-modal__content">
                    {
                        isRenderHeader &&
                        <div className="tcl-modal__header">
                            {title}
                            {
                                isRenderCloseIcon &&
                                <button onClick={onCancel}
                                    className="tcl-modal__close">X</button>
                            }
                        </div>

                    }
                    <div className="tcl-modal__body">{children}</div>

                    <div className="tcl-modal__footer">
                        {_renderFooter()}
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalDemo.defaultProps = {
    isVisible: false,
    onCancel: () => {},
    onOk: () => {},
    isRenderHeader: true,
    isRenderCloseIcon: true,
    renderFooter: null,
}

export default ModalDemo;