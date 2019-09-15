import React from 'react'
import css from './TaskBoard.module.scss'

import {Progress} from 'semantic-ui-react'
import SelectBoxText from '../../Components/SelectBoxText/SelectBoxText'
import DatePickerLine from '../../Components/DatePickerLine/DatePickerLine'
import TaskTreckBoard from '../../Components/TaskTreckBoard/TaskTreckBoard'

class TaskBoard extends React.Component {
    render() {
        return (
            <div className={css.container}>
                <div className={css.wrapper + ' ' + css.topWrapper}>
                    <div className={css.rowGrid}>
                        <span> 8 task completed out of 10 </span>
                        <SelectBoxText/>
                    </div>
                    <div className={css.statusBarWrapper}>
                        <Progress className={css.statusBar} color='green' percent={70} size='tiny'/>
                    </div>
                    <div className={css.dateLabel}>
                        23 December, Sunday
                    </div>
                    <div className={css.datePickerLine}>
                        <DatePickerLine/>
                    </div>
                </div>
                <div className={css.wrapper}>
                    <TaskTreckBoard />
                </div>
            </div>
        )
    }
}

export default TaskBoard
