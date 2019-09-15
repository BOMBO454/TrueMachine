import React from 'react'
import css from './DateCircle.module.scss'

class DateCircle extends React.Component{
    state = {}
    render(){
        return(
            <div className={css.colGrid}>
                <div className={css.dataName}>{this.props.text}</div>
                {(this.props.selected)
                    ? <div className={css.dataValue + ' ' + css.selected}>{this.props.date}</div>
                    : <div className={css.dataValue}>{this.props.date}</div>
                }
            </div>
        )
    }
}

export default DateCircle
