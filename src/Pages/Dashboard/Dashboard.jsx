import React from 'react'
import css from './Dashboard.module.scss'

import TaskBoard from 'Components/TaskBoard/TaskBoard'
import CalendarBox from 'Components/CalendarBox/CalendarBox'
import ChartRadialBox from 'Components/ChartRadialBox/ChartRadialBox'

class Dashboard extends React.Component{
    render(){
        return(
            <div className={css.dashboardContainer}>
                <TaskBoard />
                <div>
                    <CalendarBox />
                    <ChartRadialBox />
                </div>
            </div>
        )
    }
}

export default Dashboard
