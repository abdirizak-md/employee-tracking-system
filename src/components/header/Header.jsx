import styles from '../header/header.module.scss'
import { IoNotificationsSharp } from "react-icons/io5";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoname}>ETS</div>
      <div className={styles.left}>
        <IoNotificationsSharp size={24} className={styles.notification}/>
        <img src="./src/assets/pexels-photo.webp" alt="profile" className={styles.profile}/>
        <p className={styles.username}>Rizeh moha</p>
      </div>
    </div>
  )
}

export default Header
