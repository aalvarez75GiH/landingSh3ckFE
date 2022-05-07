import React from 'react'
import { 
    InstagramPost, InstagramPostContainer, 
    PostHeader, HeaderImg, InstagramPostLogoContainer, 
    InstagramPostLogo, InstagramPostInfo, PostInfoTitle, 
    PostInfoStores, Store, StoreIcon, StoreName 
} from './emilioAppElements'
import header_image from '../../images/emilioPostHeaderImg_2.png'
import logo from '../../images/MrEmilio_logo.jpg'
import store_icon from '../../images/store_icon.jpg'
import '../../sh3ck.css'

const EmilioApp = () => {
    
    return (
        <InstagramPostContainer>
            <PostHeader>
                <HeaderImg
                src={header_image}
                />
            </PostHeader>
            <InstagramPost>
                <InstagramPostLogoContainer>
                    <InstagramPostLogo
                    src={logo}
                    />
                </InstagramPostLogoContainer>
                <InstagramPostInfo>
                    <PostInfoTitle>Estamos en Indiana:</PostInfoTitle>
                    <PostInfoStores>
                        <Store>
                            <StoreIcon
                            src={store_icon}
                            />
                            <StoreName>El Paisano, IN</StoreName>
                        </Store>
                        <Store>
                            <StoreIcon
                            src={store_icon}
                            />
                            <StoreName>Tienda Latina Corporation</StoreName>
                        </Store>
                        <Store>
                            <StoreIcon
                            src={store_icon}
                            />
                            <StoreName>Las Américas Store And Restaurant</StoreName>
                        </Store>
                    </PostInfoStores>
                </InstagramPostInfo>
            </InstagramPost>
        </InstagramPostContainer>
    )
}

export default EmilioApp