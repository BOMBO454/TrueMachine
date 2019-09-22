import React from 'react'
import css from './DatePickerLine.module.scss'
import DateCircle from 'Components/DateCircle/DateCircle'

const options = [
    { key: 1, text: 'Sun', value: 23 },
    { key: 2, text: 'Mon', value: 24, selected: true },
    { key: 3, text: 'Tue', value: 25 },
    { key: 4, text: 'Wed', value: 26 },
    { key: 5, text: 'Thu', value: 27 },
    { key: 6, text: 'Fri', value: 28 },
    { key: 7, text: 'Sat', value: 29 },
]

class DatePickerLine extends React.Component{
    render(){
        return(
            <div className={css.datePickerLine}>
            {options.map((item,key)=> {
                 return(
                     <DateCircle key={key} text={item.text} date={item.value} selected={item.selected}/>
                 )
            })}
            </div>
        )
    }
}

export default DatePickerLine
