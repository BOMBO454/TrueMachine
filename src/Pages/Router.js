import { BrowserRouter, Route } from "react-router-dom"
import css from './Router.module.scss'
import React from 'react'

import SidePanel from 'Components/SidePanel/SidePanel'
import HeaderBar from 'Components/HeaderBar/HeaderBar'
import Dashboard from 'Pages/Dashboard/Dashboard'
import Contacts from 'Pages/Contacts/Contacts'

export const MAIN_PAGE = '/'
export const CONTACTS_PAGE = '/contacts'

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div className={css.pageWrapper}>
                    <SidePanel />
                    <div className={css.pageWrapperRight}>
                        <HeaderBar/>
                        <div className={css.contentWrapper}>
                            <Route path={MAIN_PAGE} exact component={Dashboard} />
                            <Route path={CONTACTS_PAGE} component={Contacts} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
  }
  
  export default Router