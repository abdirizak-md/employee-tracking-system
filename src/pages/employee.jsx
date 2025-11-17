
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { IoEyeOutline } from 'react-icons/io5'
import { MdDeleteOutline } from 'react-icons/md'
import profileImage from '../assets/pexels-photo.webp'
import style from '../pageStyle/employee.module.scss'

function Employee() {
  return (
    <div className={style.employee}>

      <div className={style.name}>Employee Management</div>

      <div className={style.mainEmployee}>

        <div className={style.left}>

          <div className={style.search}>

            <div className={style.searched}>
            <FaSearch className={style.icons}/>
            <input type="text" name="search" id="" placeholder='Seach' className={style.searchs}/>
            </div>

            <div className={style.filter}>
            <input type="text" name="" id="" placeholder='Filter' className={style.filters}/>
            <IoIosArrowDown className={style.icon}/>
            </div>

          </div>

          <div className={style.names}>
            <span>Name</span>
            <span>Role</span>
            <span>Department</span>
            <span>Phone</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          <div className={style.rows}>
            <img src={profileImage} alt="profile" />
            <h3>Rizeh Moha</h3>
            <p>Sales</p>
            <p>+251976836</p>
            <button className={style.active}>Active</button>
            <button className={style.eye}><IoEyeOutline /></button>
            <button className={style.delete}><MdDeleteOutline /></button>
          </div>
          
          <div className={style.rows}>
            <img src={profileImage} alt="profile" />
            <h3>Cabdi Moha</h3>
            <p>UI/UX</p>
            <p>+251993043</p>
            <button className={style.active}>Active</button>
            <button className={style.eye}><IoEyeOutline /></button>
            <button className={style.delete}><MdDeleteOutline /></button>
          </div>
          
          <div className={style.rows}>
            <img src={profileImage} alt="profile" />
            <h3>Kalit Moha</h3>
            <p>Engineering</p>
            <p>+251793383</p>
            <button className={style.active}>Active</button>
            <button className={style.eye}><IoEyeOutline /></button>
            <button className={style.delete}><MdDeleteOutline /></button>
          </div>

                    
        </div>

        <div className={style.right}>

          <div className={style.names}>

            <p>Name</p>
      
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Employee
