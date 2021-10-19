import s from './MenuItem.module.css'

const MenuItem = (props) => {
  return (
      <li className={s.LogIn}><a href="" className={s.link}>{props.name}</a>{props.data.login} {props.data.email}</li>
  );
}
export default MenuItem;