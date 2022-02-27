import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { infoLoginSB } from '../../utils/data'
import QAAccordion from './QaAccordion'




const QASideBar = ({ 
    loginSideBarOpen,  
    language,
    toggleLoginSideBarToClose
}) => {
    return (
        <aside
        className={`${loginSideBarOpen ? "QASideBarContainerOpen" : "QASideBarContainer" }`}>
        {/* className="QASideBarContainerOpen"> */}
            <div className="QAContactForms">
                <div 
                    className="QASideBarIcon"
                    onClick={ toggleLoginSideBarToClose }
                >
                    <FaTimes className="QACloseIcon"/>
                </div>
                <div className="QASideHeader">

                </div>
                <div className="QASideBarFormTitle">
                        <h1 className="QASideBarTitle">Preguntas y respuestas</h1>
                    </div>
                    <div className="QASideBarFormDescription">
                        <p>Generales</p>
                    </div>
                <QAAccordion/>             
            </div>
        </aside>
    )
    
    
}

export default QASideBar