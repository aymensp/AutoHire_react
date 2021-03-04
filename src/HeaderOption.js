import React from 'react'
import { Avatar } from '@material-ui/core'
import './HeaderOption.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser)
    
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon">{user?.username[0]}</Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
