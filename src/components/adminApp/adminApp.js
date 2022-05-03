import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import AdminLoginForm from './adminLogin_form'
import { FaTimes } from 'react-icons/fa'
import { actionCreators } from '../../state'
import { 
    AdminSectionContainer, AdminSectionCloseContainer, 
    AdminSectionLogos, AdminLogoSh3ck,
    AdminLogoDetail
} from './adminElements'
import CollectionsTransactionsForm from './collections/collectionsForm'


const AdminAppUIRenderComponent = () => {

    const role = useSelector((state) => state.adminAppState.role)    

  switch (role) {
        case 'admin':
            return null
        case 'collections':
            return <CollectionsTransactionsForm />
        default:
            return null 
    }
}


const AdminApp = () => {
    
    const dispatch = useDispatch()
    const {    
        activatingAdminApp, activatingCheckAppButton,
        activatingForm, activatingAdminAppLoginForm
        } = bindActionCreators(actionCreators, dispatch)

    // const active = useSelector((state) => state.contactSectionState.active)
    const adminAppLoginFormActive = useSelector((state) => state.adminAppState.admin_app_login_form_active)
    
    const closingAdminSectionContainer = () => {
        localStorage.removeItem('SH3CK_TOKEN')
        activatingAdminApp(false)
        activatingAdminAppLoginForm(false)
        activatingCheckAppButton(false)
        activatingForm(null)
    }

    
    return (
        
        <AdminSectionContainer>
            <AdminSectionCloseContainer>
                <AdminSectionLogos>
                    <AdminLogoSh3ck>Sh3ck</AdminLogoSh3ck>
                    <AdminLogoDetail>Admin</AdminLogoDetail>
                </AdminSectionLogos>
                <FaTimes
                style={{
                    fontSize: '25px',
                    marginRight: '5%',
                    color: '#ffffff'
                }}
                onClick={closingAdminSectionContainer}
                />
            </AdminSectionCloseContainer>
            
            {/* Rendering Admin App  */}
            { adminAppLoginFormActive ? 

            <AdminLoginForm />
            :
            <AdminAppUIRenderComponent/>
            } 
        </AdminSectionContainer>
       
    )

}


export default AdminApp