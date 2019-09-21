import React from 'react'
import css from './CalendarBox.module.scss'
import Calendar from 'react-calendar';
import './Calendar.scss'

class CalendarBox extends React.Component{
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    render(){
        return(
            <div className={css.container}>
                <Calendar
                    className='calendarCss'
                    calendarType='US'
                    locale='en-US'
                    tileClassName={css.calendarTile}
                    onChange={this.onChange}
                    value={this.state.date}
                    next2Label = {null}
                    prev2Label = {null}
                />
            </div>
        )
    }
}

export default CalendarBox
