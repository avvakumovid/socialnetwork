import s from './Profile.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
        if(!props.userProfile){
        return <Preloader/>
    }
  return (<section>
      <div className={s.profile}>
          {/*<div className={s.avatar}><img src="https://image.flaticon.com/icons/png/512/5188/5188670.png" alt=""/>*/}
          {/*</div>*/}
          <div className={s.description}>
              <img className={s.avatar} alt={'ava'} src={props.userProfile.photos.large ?? 'https://image.flaticon.com/icons/png/512/5188/5188670.png'}/>
              <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
              <h2>{props.userProfile.fullName}</h2>
              <ul>
                  <li>Description: {props.userProfile.aboutMe}</li>
                  <li>Date of birthday: 11.09.1997</li>
                  <li>City: Zven</li>
                  <li>Education: MPEI</li>
                  <li>Web Site: none.com</li>
              </ul>
          </div>
      </div>
  </section>);
}

export default ProfileInfo;