import s from './Profile.module.css'

const Profile = (props) => {
  return (<section>
      <div>
          <img className={s.image} src="https://www.ejin.ru/wp-content/uploads/2017/09/15-594.jpg" alt=""/>
      </div>
      <div className={s.profile}>
          <div className={s.avatar}>
              <img src="https://image.flaticon.com/icons/png/512/5188/5188670.png" alt=""/>
          </div>
          <div className={s.description}>
              <h2>Ivan Avvakumov</h2>
              <ul>
                  <li>Date of birthday: 11.09.1997</li>
                  <li>City: Zven</li>
                  <li>Education: MPEI</li>
                  <li>Web Site: none.com</li>
              </ul>
          </div>
      </div>
  </section>);
}

export default Profile;