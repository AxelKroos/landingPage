import classes from './blockPasses.module.scss'
import imgMKAD from './../../../store/images/mkad.jpg'
import imgTTK from './../../../store/images/ttk.jpg'
import imgSK from './../../../store/images/sk.jpg'
import Heading from "../elements/heading/heading";
import Modal from "./modal/modal";
import ButtonForOrderingInCardPass from "../elements/buttonForOrderingInCardPass/buttonForOrderingInCardPass";

function BlockPasses(props) {

    const arrayText = [{
        img: imgMKAD,
        road: 'МКАД',
        text: 'Пропуск МКАД разрешает передвижение транспортных средств по МКАД, до ТТК, без права въезда и движения по ТТК, круглосуточно'
    },
        {
            img: imgTTK,
            road: 'ТТК',
            text: 'Пропуск дает право движения по МКАД и Третьему транспортному кольцу до Садового кольца, без права въезда и движения по СК круглосуточно'
        },
        {
            img: imgSK,
            road: 'СК',
            text: 'Пропуск разрешает грузовому автотранспорту передвигаться по всей территории Москвы круглосуточно'
        }]

    const passes = arrayText.map(elem => {
        return <article className={classes.gridItem}>
            <div className={classes.image}>
                <img src={elem.img}/>
            </div>
            <div className={classes.info}>
                <h2>{elem.road}</h2>
                <div className={classes.infoText}>
                    <p>{elem.text}</p>
                </div>
                <div className={classes.prices}>
                    <p>Временный пропуск <span>3500₽</span></p>
                    <p>На 6 месяцев <span>10500₽</span></p>
                    <p>На 12 месяцев <span>15000₽</span></p>
                </div>
                <a href="#Контакты"><ButtonForOrderingInCardPass/></a>
            </div>
        </article>
    })

    return <div className={classes.blockPasses} id='Виды пропусков'>
        <Modal modal={props.modal} closeModal={props.closeModal} isCheckThePass={props.isCheckThePass}/>
        <div className={classes.heading}><Heading text={'ВИДЫ ПРОПУСКОВ'}/></div>
        <section className={classes.grid}>
            {passes}
        </section>
    </div>
}

export default BlockPasses