import React from 'react'
import { infoContact } from '../../utils/data'

const FormHeader = ({ active, loggedIn, regView, forgotPIN, language  }) => {
    // console.log(language)
    return (
        <>
        { active === 'interested' && (loggedIn || !loggedIn) ? 
        <div className="titleWrapper">
            <div className="formTitle">
                <h1 className="title_1">{language === 'ES' ? infoContact.intUsers_h1 : infoContact.intUsers_h1_EN}</h1>
            </div>
            <div className="formDescription">
                <p>{language === 'ES' ? infoContact.intUsers_p : infoContact.intUsers_p_EN}</p>
            </div>
        </div>
        : null}
        
        {active === 'check' && loggedIn === false ?
        <div className="titleWrapper">
            {regView ? 
            <>
                <div className="formTitle">
                    <h1 className="title_3">{language === 'ES' ? infoContact.users_h1 : infoContact.users_h1_EN}</h1>
                </div>
                <div className="formDescription">
                    <p>{language === 'ES' ? infoContact.users_p : infoContact.users_p_EN}</p>
                </div>
            </>
            
            : 
            forgotPIN ?
                <>
                    <div className="formTitle">
                        <h1 className="title_4"> {language === 'ES' ? infoContact.genPIN_h1 : infoContact.genPIN_h1_EN} </h1>
                    </div>
                    <div className="formDescription">
                        <p>{language === 'ES' ? infoContact.genPIN_p : infoContact.genPIN_p_EN}</p>
                    </div>
                </>
                :
                <>
                    <div className="formTitle">
                        <h1 className="title_4">{language === 'ES' ? infoContact.login_h1 : infoContact.login_h1_EN} </h1>
                    </div>
                    <div className="formDescription">
                        <p>{language === 'ES' ? infoContact.login_p : infoContact.login_p_EN}</p>
                    </div>
                </>
                
            }
            
        </div>
        :null
        }
        
        </> 
    )
}

export default FormHeader