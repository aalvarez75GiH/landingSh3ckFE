import styled from 'styled-components/macro'

export const PostHeader = styled.div`
width: 100%;
height: 70px;
background-color: purple;
` 

export const HeaderImg = styled.img`
width: 100%;
height: auto;
`
export const InstagramPostContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
background-color: #eeeeee;

`


export const InstagramPost = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 55vh;
background-color: #ffffff;
display: flex;
`
export const InstagramPostLogoContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 135px;
/* background-color: red; */
`

export const InstagramPostLogo = styled.img`
width: 35%;
height: 100%;

`

export const InstagramPostInfo = styled.div`
width: 100%;
height: 84vh;
/* background-color: purple; */

`

export const PostInfoTitle = styled.h1`
font-size: 1.5rem;
margin-left: 12%;
/* margin-top: 5%; */

`
export const PostInfoStores = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 33vh;
margin-top: 7%;
margin-left: 5%;
/* background-color: yellowgreen; */


`
export const Store = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 5vh;
/* background-color: brown; */
margin-bottom: 5%;


`
export const StoreIcon = styled.img`
margin-left: 5%;
width: 30px;
height: 30px;

`
export const StoreName = styled.p`
margin-left: 5%;

`