import classes from './text.module.scss'
import ButtonForCheckPass from "../elements/buttonForCheckPass/buttonForCheckPass";
import CheckThePass from "./checkThePass/checkThePass";

function Text(props) {
    return <div className={classes.text}>
        <div className={classes.circle}><p>🛈</p></div>
        <div className={classes.textBlock}>
            Оформление пропуска на МКАД Москвы – это обязательное условие свободного перемещения большегрузов и тягачей
            (с
            массой более 12 т) по территории Кольцевой, а также по самому городу вплоть до 3-го транспортного кольца.
            Без
            него въехать в указанную зону на грузовой машине можно лишь в ночное время. <br/>

            Введение такой системы разрешений было обусловлено стабильно ухудшающейся экологической обстановкой в
            столице, в
            результате чего Правительство Москвы было вынуждено принять меры по ограничению движения тяжелого
            транспорта,
            наиболее загрязняющего атмосферный воздух выхлопными газами. По этой же причине оформить пропуски для
            проезда по
            МКАД специальной техники и грузовиков, экологический класс которых ниже Евро-2, невозможно.
            <div className={classes.btn} onClick={props.checkThePass}><ButtonForCheckPass/></div>
        </div>
        {props.isCheckThePass ? <CheckThePass/> : null}
    </div>
}

export default Text