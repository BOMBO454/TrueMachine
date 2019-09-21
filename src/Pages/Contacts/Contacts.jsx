import React from 'react'
import css from './Contacts.module.scss'

class Contacts extends React.Component{
    render(){
        return(
            <header className={css.header}>
                <span>Я контакты</span>
            </header>
        )
    }
}

export default Contacts
