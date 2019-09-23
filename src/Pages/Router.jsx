import { BrowserRouter, Route } from "react-router-dom"
import css from './Router.module.scss'
import React from 'react'
import SidePanel from 'Components/SidePanel/SidePanel'
import HeaderBar from 'Components/HeaderBar/HeaderBar'
import Dashboard from 'Pages/Dashboard/Dashboard'
import Contacts from 'Pages/Contacts/Contacts'

import {createStore} from 'redux'

import {Provider} from 'react-redux'
import reducers from "reducers"

export const MAIN_PAGE = '/'
export const CONTACTS_PAGE = '/contacts'

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Provider store={store}>
                {console.log('store', store.getState())}
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
                </Provider>
            </BrowserRouter>
        )
    }
  }
  
  export default Router