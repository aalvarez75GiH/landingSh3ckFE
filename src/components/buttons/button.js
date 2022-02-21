import React, { useState } from 'react'
import { Link as LinkS } from 'react-scroll'


const Button = ({ 
    btnBG, 
    big, 
    fontBig, 
    fontColor, 
    buttonLabel, 
    linkedTo,
    offSet,
}) => {
    
    const [ hover, setHover ] = useState(false)
    
    const handlingHover = () => {
       setHover(!hover)
       console.log(hover)
    }

    return (
        <LinkS
        activeClass="active"
        to={linkedTo}
        spy={true}
        smooth={true}
        offset={offSet}
        duration={500}
        className="button" 
        style={{  
        backgroundColor: `${ btnBG }`,
        color:`${ fontColor ? '#010606' : '#ffffff'}`,
        padding: `${ big ? '14px 48px' : '12px 30px' }` ,
        fontSize: `${ fontBig ? '20px' : '16px' }`,
        }}
        onMouseEnter={ handlingHover }
        onMouseLeave={ handlingHover }
        >
            { buttonLabel }    
        </LinkS>       
    )

}

export default Button

