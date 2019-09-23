import React from 'react'
import css from './ContactsTable.module.scss'
import {Checkbox} from 'Components/SimpleComponents/SimpleComponents'

class ContactsTable extends React.Component{
    render(){
        const {header,body} = this.props
        return(
            <table className={css.tableContact}>
                <thead>
                    <tr>
                        <td><Checkbox name='header' /></td>
                        {header.map((item,key)=>{
                            return(
                                <td key={key}>{item}</td>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {body.map((item,key)=>{
                        return(
                            <tr key={key}>
                                <td><Checkbox name={key} /></td>
                                <td>
                                    <div className={css.personeWrapper}>
                                        <div className={css.imgWrapper}>
                                            <img src={item.image} alt={item.name}/>
                                        </div>
                                        {item.Name}
                                    </div>
                                </td>
                                <td>{item.Email}</td>
                                <td>{item.CompanyName}</td>
                                <td>{item.Role}</td>
                                <td>{item.Forecast}</td>
                                <td>{item.RecentActivity}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default ContactsTable
