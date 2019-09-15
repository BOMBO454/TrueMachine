import React from 'react'
import css from './TaskCard.module.scss'

class TaskCard extends React.Component{
    state = {}
    render(){
        let {header,date,type,name,status} = this.props.value
        return(
            <div className={css.cardWrapper}>
                <div className={css.topWrapper}>
                    <div className={css.description}>
                        <div className={css.title}>{header}</div>
                        <div className={css.date}>Due date: <span>{header}</span></div>
                    </div>
                    <div className={css.type}>{type}</div>
                </div>
                <div className={css.bottomWrapper}>
                    <div className={css.personeWrapper}>
                        <span className={css.imgWrapper}><img src={"https://thispersondoesnotexist.com/image"} alt=""/></span>
                        <span className={css.nameWrapper}>{name}</span>
                    </div>
                    <div className={css.extraAction}>
                        { (status === 'Completed')
                            ?<div className={css.button + ' ' + css.button_completed}>{status}</div>
                            :<div className={css.button + ' ' + css.button_ended}>{status}</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskCard
