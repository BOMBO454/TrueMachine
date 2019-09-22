import React from 'react'
import css from './HeaderBar.module.scss'
import { Search,Notifications } from "Components/SvgComponent/SvgComponent"

class HeaderBar extends React.Component{
    render(){
        return(
            <header className={css.HeaderBar}>
                <div className={css.inputWrapper}>
                    <Search className={css.icon}/>
                    <input className={css.input} placeholder='Global search' />
                </div>

                <div className={css.notifications}>
                    <Notifications className={css.icon}/>
                </div>
            </header>
        )
    }
}

export default HeaderBar
