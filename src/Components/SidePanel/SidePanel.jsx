import React from 'react'
import css from './SidePanel.module.scss'
import { NavLink } from "react-router-dom"
import { CONTACTS_PAGE, MAIN_PAGE } from "Pages/Router"
import { Dashboard,Tasks,Email,Contacts,Chat,Deals,Settings,ToggleSidebar } from "Components/SvgComponent/SvgComponent"
import SideProfileComponent from "Components/SideProfileComponent/SideProfileComponent"

class SidePanel extends React.Component{
    menuItems = [
        {
            title: 'Dashboard',
            icon: Dashboard,
            link: MAIN_PAGE
        },
        {
            title: 'Tasks',
            icon: Tasks,
            link: CONTACTS_PAGE
        },
        {
            title: 'Email',
            icon: Email,
            link: CONTACTS_PAGE
        },
        {
            title: 'Contacts',
            icon: Contacts,
            link: CONTACTS_PAGE
        },
        {
            title: 'Chat',
            icon: Chat,
            link: CONTACTS_PAGE
        },
        {
            title: 'Deals',
            icon: Deals,
            link: CONTACTS_PAGE
        }
    ]

    persone = {
        name:'Sierra Ferguson',
        email:'s.ferguson@gmail.com',
        img: "persone.png"
    }

    render(){
        return(
            <div className={css.sidePanel}>
                <div className={css.appName}>
                    <a href='/'>SaaS Kit</a>
                </div>
                <div className={css.personeWrapper}>
                    <SideProfileComponent
                        {...this.persone}
                    />
                </div>
                <nav>
                    <ul>
                        {this.menuItems.map((item, key)=>{
                            let Icon = item.icon
                            return(
                                <NavLink key={key} exact={true} className={css.link} activeClassName={css.activeLink} to={item.link}>
                                    <li className={css.menu_items}>
                                        <Icon className={css.icon}/>
                                        {item.title}
                                    </li>
                                </NavLink>
                            )
                        })}
                    </ul>
                </nav>
                <div className={css.extraPanel}>
                    <a href='/#' className={css.link}>
                        <li className={css.menu_items}>
                            <Settings className={css.icon}/>
                              Settings
                        </li>
                    </a>
                </div>
                <div className={css.toggleWrapper}>
                <a href='/#' className={css.sideBarToggle}>
                    <li className={css.menu_items}>
                        <ToggleSidebar className={css.icon}/>
                        Toggle sidebar
                    </li>
                </a>
                </div>
            </div>
        )
    }
}

export default SidePanel
