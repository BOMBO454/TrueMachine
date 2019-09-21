import React from 'react'
import css from './SelectBoxText.module.scss'
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'This week', value: 1 },
    { key: 2, text: 'Next week', value: 2 },
    { key: 3, text: 'Next mounth', value: 3 },
]

class SelectBoxText extends React.Component{
    state = {}
    handleChange = (e, { text }) => this.setState({ text })
    render(){
        const { value } = this.state
        return(
            <span className={css.SelectBoxText}>
                <span>Show:&nbsp;</span>
                <Dropdown
                    className={css.selectedText}
                    onChange={this.handleChange}
                    options={options}
                    placeholder='Choose an option'
                    value={value}
                    text={value}
                >
                </Dropdown>
            </span>
        )
    }
}

export default SelectBoxText
