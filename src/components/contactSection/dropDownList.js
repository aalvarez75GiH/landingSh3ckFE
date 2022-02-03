import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const DropDownList = ({ 
    onChange, 
    city,
    setCity,
    options, 
    cityError,
    setCityError 

}) => {
    
    // useEffect(()=> {
    //     window.addEventListener('blur', setIsActive(!isActive))
    // },[])
    
    const [ isActive, setIsActive ] = useState(false)
    
    const toggleDropDownList = () => {
        setIsActive(!isActive)
    }


    return (
        // <div className="dropdown">
        <div 
        className="dropdown"
        style={{
            borderBottom: `${cityError ? "2px solid red" : "none" }`,
            // backgroundColor: `${isActive ? "#ffffff" : "#eeeeee" }`
        }}
        >
            <div 
            className="dropdown-btn"
            onClick={toggleDropDownList}
            style={{
                color: `${isActive ? "#010606" : "#8d8d8d" }`,
                backgroundColor: `${isActive ? "#ffffff" : "#eeeeee" }`,
                border: `${isActive ? "2px solid #010606" : "none" }`
            }}
            >
                {city}
                <MdKeyboardArrowDown
                className="arrowDown"
                />
            </div>
            { isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div 
                        onClick={ e => { 
                            setCity(option)
                            setIsActive(false)
                            setCityError(false)
                        }}    
                        className="dropdown-item">
                            {option}
                        </div>
                    ))}  
                </div>
            )}
        </div>
    )
}

export default DropDownList
