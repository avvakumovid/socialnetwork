import s from './MenuItem.module.css'

const MenuItem = (props) => {
  return (
      <li><a href="" className={s.link}>{props.name}</a></li>
  );
}
export default MenuItem;