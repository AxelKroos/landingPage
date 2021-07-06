import './formElem.css'
import ButtonInForm from "../buttonInForm/buttonInForm";
import React from "react";

export default class FormElem extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data: {
                'Имя': '',
                'Email': '',
                'Сообщение': ''
            }
        };

        this.saveData = this.saveData.bind(this);
    }

    saveData(event) {
        const data = { ...this.state.data, [event.target.name]: event.target.value }
        this.setState(() => ({ data }))
    }

    render() {
        return (
            <div>
                <div className="form-at">
                    <div className="validate-input-at w-50" data-validate="Обязательное поле">
                        <input className="input-at" type="text" name="Имя" placeholder="Ваше имя" onInput={this.saveData}/>
                        <span className="focus-input-at"></span>
                    </div>
                    <div className="validate-input-at w-50" data-validate="Обязательное поле">
                        <input className="input-at" type="text" name="Email" placeholder="Ваш телефон или email" onInput={this.saveData}/>
                        <span className="focus-input-at"></span>
                    </div>
                    <div className="validate-input-at" data-validate="Обязательное поле">
                        <textarea className="input-at" name="Сообщение" placeholder="Ваше сообщение" onInput={this.saveData}></textarea>
                        <span className="focus-input-at"></span>
                    </div>
                    <input checked="checked" className="input-at" id="checkbox-at" type="checkbox" name="checkbox-at"
                           onChange="document.getElementById('submit-at').disabled = !this.checked;"/>
                    <label htmlFor="checkbox-at">
                        Настоящим подтверждаю, что я ознакомлен и согласен с <a href="#rules">пользовательским соглашением</a>
                    </label>
                    <input type="hidden" name="subject-at" value="Тема формы"/>
                    <ButtonInForm dataForm={this.state.data}/>
                </div>
                <div className="result-at"></div>
            </div>
        )
    }


}