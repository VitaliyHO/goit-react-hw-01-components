import { getRandomHexColor } from "../../utils/getRandomColor";
import { Container } from "../Container/Container";
import PropTypes from 'prop-types';
import style from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <Container>
            <section className={style.statistics}>

                {title && <h2 className={style.title}>{title}</h2>}

                <ul className={style.statList}>
                    {stats.map(({ id, label, percentage }) => {
                        return <li className={style.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
                            <span className={style.label}>{label}</span>
                            <span className={style.percentage}>{percentage}%</span>
                        </li>
                    })
                    }
                </ul>
            </section>
        </Container>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired
}