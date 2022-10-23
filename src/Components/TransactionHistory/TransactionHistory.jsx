import { Container } from '../Container/Container';
import style from './TransactionHistory.module.css'
import { TransactionHistoryRow } from './TransactionHistoryRow/TransactionHistoryRow';
import PropTypes from 'prop-types'

export const TransactionHistory = ({ items }) => {
    return (
        <Container>
            <table className={style.transactionHistory}>
                <thead>
                    <tr>
                        <th className={style.heading}>Type</th>
                        <th className={style.heading}>Amount</th>
                        <th className={style.heading}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({ id, type, amount, currency }) => {
                        return <TransactionHistoryRow key={id} type={type} amount={amount} currency={currency}/>
                    })}
                </tbody>
            </table>
        </Container>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};