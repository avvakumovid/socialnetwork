import s from './Footer.module.css'

const Footer = (props) => {
  return ( <footer className={s.footer}>
      <div className={s.copy}>Copy, 2021</div>
      <div className={s.text}>Lorem ipsum dolor sit amet.</div>
  </footer>);
}
export default Footer;