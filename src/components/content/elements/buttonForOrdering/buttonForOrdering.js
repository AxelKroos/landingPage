import classes from './buttonForOrdering.module.scss'
import React from "react";

function ButtonForOrdering() {
    return <div className={classes.btn} data-type="diagonal_swipe_left">Заказать звонок</div>
}

export default ButtonForOrdering