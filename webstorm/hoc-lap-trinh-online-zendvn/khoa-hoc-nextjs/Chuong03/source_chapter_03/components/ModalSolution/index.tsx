import React, { useEffect, useState } from "react";
import "./modal.scss";

type ModalProps = {
    isVisible?: boolean;
    isRenderHeader?: boolean;
    isRenderCloseIcon?: boolean;
    btnOkText?: string;
    btnCancelText?: string;
    onOk?: () => void;
    onCancel?: () => void;
    setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
    renderFooter?: () => JSX.Element;
}

const CLASS_DEFAULT = "tcl-modal__wrapper";

const ModalSolution: React.FC<ModalProps> = ({ 
    children, 
    isVisible: isVisibleOutside,
    setVisible: any,
    isRenderHeader,
    isRenderCloseIcon,
    btnOkText,
    btnCancelText,
    onOk,
    onCancel,
    renderFooter
}) => {
    const [className, setClassName] = useState(CLASS_DEFAULT);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handler(evt) {
            if(evt.which === 27)
                onCancel();
        }
        document.addEventListener("keyup", handler);
        return () => {
            document.removeEventListener("keyup", handler);
        }
    }, [])

    useEffect(() => {
        setIsVisible(isVisibleOutside);
    }, [ isVisibleOutside ])

    useEffect(() => {
        if(isVisible === true) {
            setClassName((oldClass) => oldClass + " show");
            // setClassName(className + " show"); -> Sai
            document.querySelector("body").classList.add("tcl-modal__open");
        } else {
            setClassName(CLASS_DEFAULT);
            document.querySelector("body").classList.remove("tcl-modal__open");
        }
    }, [ isVisible ])

    const _onCancel = (): void => {
        if(onCancel) {
            onCancel();
        } else {
            setIsVisible(false);
        }
    }

    const _renderFooter = (): JSX.Element => {
        if(renderFooter) {
            return renderFooter();
        }

        return (
            <>
                <button className="tcl-modal__cancel" onClick={_onCancel}>{btnCancelText}</button>
                <button className="tcl-modal__ok" onClick={onOk}>{btnOkText}</button>
            </>
        )
    }

    if(isVisible === false) return null;
    return (
        <div className={className}>
            <div className="tcl-mask" onClick={_onCancel}></div>
            <div className="tcl-dialog">
                <div className="tcl-modal__content">
                    {
                        isRenderHeader && 
                        <div className="tcl-modal__header">
                            Title demo
                            {
                                isRenderCloseIcon && 
                                <button onClick={_onCancel} className="tcl-modal__close">X</button>
                            }
                        </div>
                    }
                    
                    <div className="tcl-modal__body">
                        { children }
                    </div>

                    <div className="tcl-modal__footer">
                        { _renderFooter() }
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalSolution.defaultProps = {
    isVisible: false,
    btnCancelText: "Cancel",
    btnOkText: "Ok",
    isRenderHeader: true,
    isRenderCloseIcon: true,
}

export default ModalSolution;