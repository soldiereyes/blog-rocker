
import style from "./Modal.module.css"
function Modal ({closeModalHandler, title}) {
    return (
        <div className={style.modal}>
            <div className={style.innerModal}>
                <div className={style.innerModal_header}>
                    <div>{title}</div>
                    <div onClick={()=> closeModalHandler()} >X</div>
                </div>
            </div>
        </div>
    )
}

export default Modal