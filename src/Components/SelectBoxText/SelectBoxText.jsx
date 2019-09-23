import React from 'react'
import css from './SelectBoxText.module.scss'
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'

class SelectBoxText extends React.Component{
    state = {}
    handleChange = (e, { text }) => this.setState({ text })
    render(){
        const {options, placeholder, text} = this.props
        const { value } = this.state
        return(
            <span className={css.SelectBoxText}>
                <span>{text}:&nbsp;</span>
                <Dropdown
                    className={css.selectedText}
                    onChange={this.handleChange}
                    options={options}
                    placeholder={placeholder}
                    value={value}
                    text={value}
                >
                </Dropdown>
            </span>
        )
    }
}

export default SelectBoxText
