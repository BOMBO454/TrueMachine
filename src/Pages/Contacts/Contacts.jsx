import React from 'react'
import css from './Contacts.module.scss'
import SelectBoxText from 'Components/SelectBoxText/SelectBoxText'
import ContactsTable from 'Components/ContactsTable/ContactsTable'
import { ReactReduxContext } from 'react-redux'
const options = [
    { key: 1, text: 'All', value: 1 },
    { key: 2, text: 'Active', value: 2 },
    { key: 3, text: 'Loosers', value: 3 },
]

const header = [
    'Name',
    'Email',
    'Company name',
    'Role',
    'Forecast',
    'Recent activity',
]

class Contacts extends React.Component{
    render(){
        return(
            <div className={css.contactPage}>
                <div className={css.header}>
                    <SelectBoxText
                        options={options}
                        text='Company'
                        placeholder='Select range'
                    />
                    <button className={css.buttonAddContact}>Add contact</button>
                </div>
                <div className={css.contactBody}>
                    <ReactReduxContext.Consumer>
                        {({ store }) => {
                            return(
                                <ContactsTable
                                    header={header}
                                    body={store.getState().persones}
                                />
                            )
                        }}
                    </ReactReduxContext.Consumer>

                </div>
            </div>
        )
    }
}

export default Contacts