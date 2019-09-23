import React from 'react'
// import css from './TaskTreckBoard.module.scss'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import arrayMove from 'array-move'
import TaskCard from 'Components/TaskCard/TaskCard'
import { ReactReduxContext } from 'react-redux'

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
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };
    render() {
        return(
            <ReactReduxContext.Consumer>
                {({ store }) => {
                    return(
                        <SortableList items={store.getState().reducerTask} onSortEnd={this.onSortEnd} />
                    )
                }}
            </ReactReduxContext.Consumer>
        )
    }
}

export default TaskTreckBoard