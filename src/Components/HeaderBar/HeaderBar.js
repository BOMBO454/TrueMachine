import React from 'react'
import css from './HeaderBar.module.scss'

class HeaderBar extends React.Component{
    render(){
        return(
            <header className={css.HeaderBar}>
                <div className={css.appName}>
                    <a href='/'>Header Kit</a>
                </div>
            </header>
        )
    }
}

export default HeaderBar
