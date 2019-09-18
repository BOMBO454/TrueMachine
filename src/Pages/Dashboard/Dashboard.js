import React from 'react'
import css from './Dashboard.module.scss'
import axios from 'axios';


import TaskBoard from 'Components/TaskBoard/TaskBoard'
import CalendarBox from 'Components/CalendarBox/CalendarBox'

class Dashboard extends React.Component{
    componentDidMount() {
        axios.get(`${axios.defaults.baseURL}/people`)
            .then(res => {
                const people= res.data;
                this.setState({ people});
            })
    }
    render(){
        return(
            <div className={css.dashboardContainer}>
                <TaskBoard />
                <div>
                    <CalendarBox />
                    <div className={css.container}> right bottom </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
