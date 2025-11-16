import styles from '../asidebar/asidebar.module.scss'

function AsideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.sideLists}>
        <ul>
            <li><a href="">dashbord</a></li>
            <li><a href="">employee</a></li>
            <li><a href="">projects</a></li>
            <li><a href="">tasks</a></li>
            <li><a href="">attendance</a></li>
            <li><a href="">time tracking</a></li>
            <li><a href="">report</a></li>
            <li><a href="">settings</a></li>
        </ul>
      </div>
    </div>
  )
}

export default AsideBar
