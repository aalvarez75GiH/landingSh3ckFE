import React from 'react'
import { FaTimes } from 'react-icons/fa'
import QAAccordion from './QaAccordion'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'
import { bindActionCreators } from '@reduxjs/toolkit'


const QASideBar = ({ language }) => {
    const dispatch = useDispatch()
    const {  openingQASideBar } = bindActionCreators(actionCreators, dispatch)
    const QASideBarOpen = useSelector((state) => state.sideBarState.QASideBarOpen)

     const toggleQASideBarToClose = () => {
        openingQASideBar(false)
    }

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