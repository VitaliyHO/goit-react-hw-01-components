import style from '../FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li>
            <span className={style.status}>
                <div className={isOnline ? style.online : style.offline}></div>
            </span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>)
};