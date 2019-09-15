import React from 'react'
import css from './SidePanel.module.scss'

class SidePanel extends React.Component{
    render(){
        return(
            <div className={css.sidePanel}>
                <div className={css.appName}>
                    <a href='/'>SaaS Kit</a>
                </div>
            </div>
        )
    }
}

export default SidePanel
