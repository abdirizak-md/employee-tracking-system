import styles from '../asidebar/asidebar.module.scss';
import { MdDashboard,MdGroup,MdContactEmergency,MdCallToAction,MdCreditCard,MdOutlineContrast,MdOutlineAnalytics  } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function AsideBar() {
  return (
    <div className={styles.container}>
     
        <ul>
            <li><MdDashboard className={styles.icons}/>
           <Link to="/dashboard">dashbord</Link>
            </li>
            <li><MdGroup className={styles.icons} />
             <NavLink
              to="/employee"
              className={({ isActive }) =>
               isActive ? `${styles.active}` : ""
               }
             ></NavLink>
           <Link to="/employee">
            
           employee</Link>
            </li>
            <li><MdCallToAction className={styles.icons}/>
            <Link to="/projects">projects</Link>
            </li>
            <li><MdContactEmergency className={styles.icons}/>
            <Link to="/tasks">Tasks</Link>
            </li>
            <li><MdCreditCard className={styles.icons}/>
            
            <Link to="/attendance">attendance</Link>
            </li>
            <li><MdOutlineContrast className={styles.icons}/>
           <Link to="/timeTacking">time tracking</Link>
            </li>
            <li><MdOutlineAnalytics className={styles.icons}/>
            <Link to="/report">report</Link>
            </li>
            <li><IoMdSettings className={styles.icons}/>
           <Link to="/settings">settings</Link>
            </li>
        </ul>
      </div>
   
  )
}

export default AsideBar
