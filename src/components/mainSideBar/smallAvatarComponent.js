import React from 'react'
import { useSelector } from 'react-redux'


// import LoginForm from '../contactSection/loginForm'

const SmallAvatarComponent = () => {
    const user = useSelector((state) => state.checkOrderState.user)
    return(
        <div className="mainSideBarUserImage">
            <img src={user.picture} alt="my pic" className="avatar" />
        </div>
    )
}

export default SmallAvatarComponent