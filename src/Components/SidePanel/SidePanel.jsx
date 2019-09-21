import React from 'react'
import css from './SidePanel.module.scss'
import { Link, BrowserRouter as Router } from "react-router-dom"
import { CONTACTS_PAGE, MAIN_PAGE } from "Pages/Router"

class SidePanel extends React.Component{
    menuItems = [
        {
            title: 'Dashboard',
            icon: 'dashboard-active.svg',
            link: MAIN_PAGE
        },
        {
            title: 'Tasks',
            icon: 'dashboard-active.svg',
            link: CONTACTS_PAGE
        },
        {
            title: 'Email',
            icon: 'dashboard-active.svg',
            link: CONTACTS_PAGE
        },
        {
            title: 'Contacts',
            icon: 'dashboard-active.svg',
            link: CONTACTS_PAGE
        },
        {
            title: 'Chat',
            icon: 'dashboard-active.svg',
            link: CONTACTS_PAGE
        },
        {
            title: 'Deals',
            icon: 'dashboard-active.svg',
            link: CONTACTS_PAGE
        }
    ]

    render(){
        return(
            <div className={css.sidePanel}>
                <div className={css.appName}>
                    <a href='/'>SaaS Kit</a>
                </div>
                <div className={css.personeWrapper}>

                </div>
                <nav>
                    <ul>
                        {this.menuItems.map((item)=>{
                            return(
                                <Link to={item.link}>
                                    <li className={css.menu_items}>
                                        <i className={css.icon}>
                                        </i>
                                        {item.title}
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default SidePanel
