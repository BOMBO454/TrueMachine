import React from 'react'
// import css from './TaskTreckBoard.module.scss'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import arrayMove from 'array-move'

import TaskCard from 'Components/TaskCard/TaskCard'

const SortableItem = SortableElement(({value}) => <TaskCard value={value} />);

const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
            {items.map((value, index) => {
                return(<SortableItem key={index} index={index} value={value} />)
            })}
        </ul>
    );
});

class TaskTreckBoard extends React.Component{
    state = {
        items: [
            {
                'header':'Send benefit review by Sunday',
                'date':'December 23, 2018',
                'type':'Reminder',
                'name':'George Fields',
                'status':'Completed'
            },
            {
                'header':'Invite to office meet-up',
                'date':'December 23, 2018',
                'type':'Call',
                'name':'Rebecca Moore',
                'status':'Ended'
            },
            {
                'header':'Office meet-up',
                'date':'December 23, 2018',
                'type':'Event',
                'name':'Lindsey Stroud',
                'status':'Completed'
            }
        ]
    };
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };
    render() {
        return(
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        )
    }
}

export default TaskTreckBoard
