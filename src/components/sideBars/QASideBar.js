import React from 'react'
import { FaTimes } from 'react-icons/fa'
import QAAccordion from './QaAccordion'




const QASideBar = ({ 
    QASideBarOpen,  
    language,
    toggleQASideBarToClose
}) => {
    return (
        <aside
        className={`${QASideBarOpen ? "QASideBarContainerOpen" : "QASideBarContainer" }`}>
        {/* className="QASideBarContainerOpen"> */}
            <div className="QAContactForms">
                <div 
                    className="QASideBarIcon"
                    onClick={ toggleQASideBarToClose }
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