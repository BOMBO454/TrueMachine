import React from 'react'
import css from './SimpleComponents.modules.scss'

export const Checkbox = (props) => {
    return (
        <>
            <input id={'input-'+props.name} className={props.className + ' ' + css.just} type="checkbox" />
            <label htmlFor={'input-'+props.name}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#D5D5D5" strokeWidth="2"/>
                    <path d="M6.49995 9.95838L4.47066 7.92909L4.39995 7.85838L4.32924 7.92909L3.62924 8.62909L3.55853 8.6998L3.62924 8.77051L6.42924 11.5705L6.49995 11.6412L6.57066 11.5705L12.5707 5.57052L12.6414 5.4998L12.5707 5.42909L11.8707 4.72909L11.8 4.65838L11.7292 4.72909L6.49995 9.95838Z" fill="" stroke="" strokeWidth="0.2"/>
                </svg>
            </label>
        </>
    )
}