import style from '../TransactionHistory.module.css'

export const TransactionHistoryRow = ( {type, amount, currency} ) => {
    return (
        <tr>
            <td className={style.type}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}