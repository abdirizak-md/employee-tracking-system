import style from './dashboard.module.scss'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const attendanceData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 30 },
  { month: "Mar", value: 22 },
  { month: "Apr", value: 35 },
  { month: "May", value: 25 },
  { month: "Jun", value: 18 },
  { month: "Jul", value: 23 },
];


function Dashboard() {

  const data = [
    { day: "Mon", value: 60 },
    { day: "Tue", value: 75 },
    { day: "Wed", value: 50 },
    { day: "Thu", value: 80 },
    { day: "Fri", value: 70 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 55 },
  ];

  const maxValue = 100;



  return (
    <div className={style.mainPage} >
      <div className={style.dashboard}>Dashboard</div>
      <div className={style.activities}>
        <div className={style.totalEmployee}>
          <span>Total Employees</span>
          <p>200</p>
        </div>
        
        <div className={style.activeProjects}>
          <span>Active Projects</span>
          <p>50</p>
        </div>
        
        <div className={style.attendance}>
          <span>Today's Attendances</span>
          <div className={style.attendances}>
            <div>
              <h2>133</h2>
              <h4>Present</h4>
            </div>

            <div>
              <h2>77</h2>
              <h4>Absent</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={style.attendanceProductivity}>

        <div className={style.attendanced}>
          <h2 className={style.name}>Attendance</h2>

          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>


        <div className="p-6 bg-white rounded-2xl shadow w-full">
        <h2 className="text-lg font-semibold mb-4">Productivity</h2>

        <div className="flex items-end justify-between h-44 px-2">
          {data.map((item) => (
            <div key={item.day} className="flex flex-col items-center">
              <div
                className="w-6 bg-blue-500 rounded-xl"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                  transition: "height 0.6s ease",
                }}
              ></div>
              <span className="text-xs text-gray-500 mt-2">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      </div>
    
    </div>


  )
}

export default Dashboard
