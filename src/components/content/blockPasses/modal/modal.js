import classes from './modal.module.scss'
import CheckThePass from "./checkThePass/checkThePass";

function Modal(props) {
    return props.isCheckThePass ?
        <div className={props.modal ? classes.modalOverlay + ' ' + classes.active : classes.modalOverlay}
             onClick={props.closeModal}>
            <CheckThePass/>
            <div className={classes.close} onClick={props.closeModal}>Закрыть</div>
        </div> : null
}

export default Modal