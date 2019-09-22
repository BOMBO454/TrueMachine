import React from 'react'
import css from './SideProfileComponent.module.scss'

class SideProfileComponent extends React.Component{
    render(){
        return(
            <div className={css.sidePanel}>
                <div className={css.imageWrapper}>
                    <img src={this.props.img} alt={this.props.name}/>
                </div>
                <div className={css.nameAndEmail}>
                    <div className={css.name}>{this.props.name}</div>
                    <div className={css.email}>{this.props.email}</div>
                </div>
            </div>
        )
    }
}

export default SideProfileComponent
