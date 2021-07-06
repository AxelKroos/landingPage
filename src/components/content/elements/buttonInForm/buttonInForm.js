import classes from './buttonInForm.module.scss'
import React from 'react';

export default class ButtonInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isFetching: false,
            sended: false
        };
    }


    sendData = () => {
        this.setState({
            isFetching: true
        })

        let urlSend = "https://www.help-cargo.ru/sender.php";
        var xhr = new XMLHttpRequest();
        xhr.open('POST', urlSend);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('param=' + JSON.stringify(this.props));
        xhr.addEventListener("readystatechange", () => {

            if (xhr.readyState === 4 && xhr.status === 200) {
                this.setState({
                    isFetching: false,
                    sended: true
                })
                setTimeout(() => {
                    this.setState({
                        sended: false
                    })
                }, 2000)
            }
        });
    }



    render() {

        let {isFetching, sended} = this.state;
        let button;

        if (isFetching) {
            button = "Отправляется";
        } else if (sended) {
            button = "Спасибо за заявку! Ожидайте ответа оператора в течении 30 мин";
        } else {
            button = <div className={classes.btn} data-type="diagonal_swipe_left" onClick={this.sendData}>Заказать звонок</div>
        }

        return (
            <React.Fragment>
                {button}
            </React.Fragment>
        )
    }


}