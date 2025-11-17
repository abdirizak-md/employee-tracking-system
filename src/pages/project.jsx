import styles from '../pageStyle/project.module.scss';
import { MdAssignment, MdDashboard,MdGroup,MdCallToAction,MdContactEmergency } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function Project() {
  return (
    <div className={styles.Projects}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <MdAssignment className={styles.icon} />
           <h1>project lists</h1>
        </div>
        <div className={styles.rightSide}>
           <h1>project</h1>
           <span>add task</span>
        </div>
      </div>

     <div className={styles.contents}>
      <div className={styles.div1}>
        <ul>
            <li><MdDashboard className={styles.icons}/>
               dashbord
            </li>
            <li><MdGroup className={styles.icons} />
                employee
            </li>
            <li><MdCallToAction className={styles.icons}/>
                projects
            </li>
            <li><MdContactEmergency className={styles.icons}/>
                Tasks
            </li>
             <li><IoMdSettings className={styles.icons}/>
                settings
            </li>
            </ul>
      </div>
      <div className={styles.div2}>

       <div className={styles.search}>
         <input type='search' placeholder='search'/>
        <p>filter</p>
       </div>
       <div className={styles.divContents}>
        <div className={styles.divContent}>
          <span>webDevelopment</span>
          <div className={styles.image}>
            <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div className={styles.imageRight}>
              <p className={styles.name}>abdikadir</p>
              <p>may 1 ,2025</p>

            </div>

          </div>
          <div className={styles.start}>
            <p>start 1/24</p>
             <p>team</p>
          </div>
        </div>
        
        <div className={styles.divContent}>
          <span>webDevelopment</span>
          <div className={styles.image}>
            <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div className={styles.imageRight}>
              <p className={styles.name}>abdikadir</p>
              <p>may 1 ,2025</p>

            </div>

          </div>
          <div className={styles.start}>
            <p>start 1/24</p>
             <p>team</p>
          </div>
        </div>
        
       </div>

     
      </div>
     <div className={styles.div3}>
      <div className={styles.topside}>
        <p>ovarview</p>
        <p>tasks</p>
        <p>team members</p>
        <p>timeLines</p>
        <p>file</p>
      </div>
      <div className={styles.contents}>
        <p>april</p>
        <p>may</p>
        <p>june</p>
        <p>july</p>
        <p>sep</p>
        <p>oct</p>
      </div>
     </div>

     </div>


    </div>
  )
}

export default Project