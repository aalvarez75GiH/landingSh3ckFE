import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import { Link as LinkS } from 'react-scroll'

export const CheckerSectionContainer = styled(motion.div) `
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
overflow-y: hidden; 


`
export const CheckerSectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 50%;
height: auto;
background-color: #eeeeee;
overflow-y: hidden;
margin-top: 4%;


@media (max-width:1280px) and (min-width: 768px){
width: 85%;
}

@media (max-width:768px) and (min-width: 414px){
width: 95%;
}
@media (max-width:414px) and (min-width: 320px){
width: 100%;
}

`


export const CheckersTitleContainer = styled.div`
display: flex;
align-items: center ;
justify-content: flex-start ;
width: 95%;
height: 100px;
background-color: #010606;
margin-top: 4% ;

@media (max-width:560px) and (min-width: 320px){
width: 95%;
height: 40px;
}

`
export const CheckersOptionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 95%;
height: 70px;
background-color: #eeeeee;
margin-top: 4%;
`

export const CheckerTypeButton1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: 70%;
background-color: ${({ checkers_type }) => checkers_type === 'checkers'  ? '#FAD570' : '#010606' };
padding: 5%;
border-radius: 100px;
margin-left: 3%;
color: ${({ checkers_type }) => checkers_type === 'checkers'  ? '#010606' : '#ffffff' }; 
`
export const CheckerTypeButton2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: 70%;
/* background-color: #FAD570; */
background-color: ${({ checkers_type }) => checkers_type === 'authCenters'  ? '#FAD570' : '#010606' };
padding: 5%;
border-radius: 100px;
margin-left: 3%;
color: ${({ checkers_type }) => checkers_type === 'authCenters' ? '#010606' : '#ffffff' }; ;
`

export const CheckersSectionTitle = styled.h1 `
font-size: 1.5rem;
font-weight: 400;
margin-left: 5%;
color: #ffffff;

@media (max-width:1920px) and (min-width: 560px){
font-size: 2rem;
}

@media (max-width:560px) and (min-width: 320px){
font-size: 1rem;
}

` 

export const CheckerItemContainerFlex = styled.div `
display: flex;
flex-direction: column;
align-items: center ;
width: 95%;
height: auto;
background-color: #eeeeee;
margin-top: 2%;

` 

// **************** Checker Profile Interface ************************

// *************  checker profile Tile
export const CheckerProfileContainer = styled(motion.div) `
width: 100%;
height: auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
overflow-y: hidden; 
 
`
export const CheckerProfileWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 50%;
height: auto;
background-color: #eeeeee;
overflow-y: hidden;
overflow-x: hidden;
margin-top: 4%;

@media (max-width:1280px) and (min-width: 768px){
width: 85%;
}

@media (max-width:768px) and (min-width: 414px){
width: 95%;
}
@media (max-width:414px) and (min-width: 320px){
width: 100%;
}

`

export const CheckerProfileItemsContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 95%;
height: auto;
margin-top: 2%;

`
export const CheckerProfileTile = styled.div`
display: flex;
width: 100%;
height: 350px;
margin: 10px;
background-color: #ffffff;

@media (max-width:560px) and (min-width: 480px) {
height: 270px;
margin: 10px;
}
@media (max-width:480px) and (min-width: 320px) {
height: 250px;
margin: 10px;
}

`
export const  CheckerItemAvatar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 30%;

@media (max-width:560px) {
width: 40%;
}
`  


export const CheckerInfoContainer = styled.div`
width: 58%;
height: 100%;
background-color: #ffffff;
`
export const CheckerProfileInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 60%;
`

export const CheckerInfoName = styled.div`
margin-top: 5%;
margin-left: 1%;

@media (max-width:768px) and (min-width: 560px){
font-size: 1.6rem;
margin-top: 5%;
margin-left: 1%;
    
}
@media (max-width:560px) and (min-width: 360px){
font-size: 0.8rem;
margin-top: 5%;
margin-left: 1%;    
}
@media (max-width:360px) and (min-width: 320px){
font-size: 0.7rem;
margin-top: 5%;
margin-left: 1%;
}

`
export const CheckerInfoNameH1 = styled.h1`
font-weight: 500;
@media (max-width:1536px) and (min-width: 1366px){
font-size: 3rem;
}
@media (max-width:1366px) and (min-width: 560px){
font-size: 2.9rem;
}
@media (max-width:560px) and (min-width: 480px){
font-size: 2.1rem;
}
@media (max-width:480px) and (min-width: 414px){
font-size: 2rem;
}
@media (max-width:414px) and (min-width: 360px){
font-size: 1.6rem;
}
@media (max-width:360px) and (min-width: 320px){
font-size: 1.3rem;
}
`
export const CheckerInfoCiudad = styled.div `
margin-top: 3%;
margin-left: 1%;
`
export const CheckerInfoCiudadH3 = styled.h3`
font-size: 1.4rem;

@media (max-width:560px) and (min-width: 360px){
font-size: 1rem;

}
@media (max-width:360px) and (min-width: 320px){
font-size: 0.8rem;

}
`
export const CheckerInfoRating = styled.div `
display: flex;
align-items: center;
margin-top: 3%;
margin-left: 1%;

`
export const CheckerInfoRatingH3 = styled.h3 `
font-size: 1.4rem;
font-weight: 600;
margin-right: 2%;

@media (max-width: 414px) and (min-width:360px){
font-size: 0.9rem;
font-weight: 600;
margin-right: 2%;   
}

@media (max-width:360px) and (min-width: 320px){
font-size: 0.8rem;

}
`
export const CheckerInfoRatingH4 = styled.h4 `
font-size: 1.4rem;
margin-left: 4%;
margin-top: 1%;
font-weight: 300;

@media (max-width: 1366px) and (min-width:414px){
    margin-top: 0%;
        
}
@media (max-width: 414px) and (min-width:320px){
    font-size: 0.8rem;
    margin-left: 4%;
    margin-top: 1%;
    font-weight: 300;    
}
`

export const CheckerBioButton = styled.div `
width: 50%;
height: 65px;
background-color: #010606;
border-radius: 45px;
margin-top: 5%;
color:#ffffff;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;
margin-left: 50%;


@media (max-width: 1536px) and (min-width:1366px){
    margin-left: 65% ;
}


@media (max-width: 1366px) and (min-width:1280px){
    margin-left: 50%;
    width: 65%;
}
@media (max-width: 1280px) and (min-width:560px){
    width: 55%;
    margin-left: 50%;
}

@media (max-width: 560px) and (min-width:320px){
width: 90%;
height: 50px;
border-radius: 45px;
margin-top: 8%;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;
margin-left: 0%;
}
`

export const CheckerBioButtonP = styled.p `
font-size: 1.4rem;
font-weight: 500;

@media (max-width: 1920px) and (min-width:560px){
font-size: 1.4rem;
}
@media (max-width: 560px){
font-size: 1rem;
}
`
// *************  check type Tile
export const CheckTypeContainer = styled.div`
width: 100%;
/* height: 55vh; */
height: 350px;
/* background-color: blue; */
margin-bottom: 3%;
display: flex;
flex-direction: column;
`
export const CheckTypeTileContainer = styled(motion.div)`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 350px;
background-color: #ffffff;

`
export const CheckTypeCaption = styled.h1`
margin-top: 8%;
font-size: 3rem;

@media (max-width: 1536px) and (min-width:560px){
    font-size: 2.5rem;
}

@media (max-width: 560px) and (min-width:414px){
    font-size: 1.7rem;
}
@media (max-width: 414px) and (min-width:360px){
    font-size: 1.4rem;
}
@media (max-width: 360px) and (min-width:320px){
    font-size: 1.2rem;
}
`

export const CheckTypeTileContainer2 = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 295px;
background-color: #ffffff;
position: relative;
top: -100%;

@media (max-width: 1920px) and (min-width:560px){
height: 650px;
}
@media (max-width: 560px) and (min-width:480px){
height: 480px;
}
@media (max-width: 480px) and (min-width:414px){
height: 450px;
}

@media (max-width: 414px) and (min-width:360px){
height: 405px;
}

`

export const CheckTypeTileTitle = styled.span`
display: flex;
align-items: center;
padding-left: 4%;
width: 100%;
height: 40px;
background-color: #010606;
color: #ffffff;
font-size: 1rem;
margin-bottom: 2%;

@media (max-width: 1920px) and (min-width:560px){
height: 100px;
font-size: 2rem ;
}
`

export const CheckTypeTileInfo = styled(LinkS) `
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
width: 45%;
height: 180px;
background-color: ${({ check_type, check_type_active }) => check_type._id === check_type_active._id ? '#FAD570' : '#eeeeee'};
border-radius: 20px;

@media (max-width: 1920px) and (min-width:560px){
height: 275px;
}

`
export const CheckTypeTileInfo2 = styled(LinkS)`
display: flex;
align-items: center;
flex-direction: column;
width: 95%;
height: 280px;
/* background-color: ${({ check_type }) => check_type._id === '6243156a821ae231895b11ce' ? '#FAD570' : '#eeeeee'}; */
background-color: ${({ check_type, check_type_active }) => check_type._id === check_type_active._id ? '#FAD570' : '#eeeeee'};
border-radius: 20px;

@media (max-width: 1920px) and (min-width:560px){
height: 460px;
}
@media (max-width: 560px) and (min-width:480px){
height: 350px;
}
@media (max-width: 480px) and (min-width:414px){
height: 320px;
}
@media (max-width: 414px) and (min-width:320px){
height: 280px;
}


`

export const CheckTypeTileInfoPrice = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 25%;
background-color: transparent;
`
export const CheckTypeTileInfoPriceLabel = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 35%;
background-color: transparent;
`

export const CheckTypeActiveIconContainer = styled.div`
display: flex;
width: 20%;
height: 30px;
margin-left: 60%;
padding-top: 8%;
opacity: ${({ check_type, check_type_active }) => check_type._id === check_type_active._id ? 1 : 0};

@media (max-width: 1920px) and (min-width:560px){
height: 40px;
padding-top: 0%;
}
@media (max-width: 560px) and (min-width:480px){
padding-top: 4%;
}
`
export const CheckTypeActiveIcon = styled.img`
width: 30px;
height: 30px;

@media (max-width: 1920px) and (min-width:560px){
width: 40px;
height: 40px;
}
`

export const Price = styled.h1`
font-size: 4rem;

@media (max-width: 560px) and (min-width:320px){
    font-size: 3rem;
}


`
export const CheckTypeTileInfoPriceDesc = styled.small`
width: 100%;
height: 10%;
background-color: transparent;
padding-left: 25%;
font-size: 1rem;
padding-top: 6%;

@media (max-width: 560px) and (min-width:480px){
    padding-left: 20%;
}
@media (max-width: 480px) and (min-width:360px){
    width: 101% ;
    height: 8%;
    font-size: 0.7rem;
    padding-left: 16%;
}
@media (max-width: 360px) and (min-width:320px){
    height: 8%;
    font-size: 0.6rem;
    padding-left: 16%;
}
`

export const CheckTypeTileInfoCaption = styled.div`
width: 100%;
height: 25%;
background-color: transparent;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 8%;

`


export const CheckTypeBioButton = styled.div`
width: 70%;
height: 80px;
background-color: #010606;
border-radius: 45px;
margin-top: 5%;
color:#ffffff;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;


@media (max-width: 1536px) and (min-width:1280px){
    margin-left: 2% ;
}

@media (max-width: 560px) and (min-width:360px){
width: 80%;
height: 50px;
background-color: #010606;
border-radius: 45px;
margin-top: 8%;
color:#ffffff;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;

}
@media (max-width: 360px) and (min-width:320px){
width: 90%;
height: 50px;
margin-top: 8%;

}

`

export const CheckTypeBioButtonP = styled.p `
font-size: 1.4rem;
font-weight: 500;

@media (max-width: 1920px) and (min-width:560px){
font-size: 1.4rem;

}
@media (max-width: 560px) and (min-width:360px){
font-size: 0.9rem;
}
@media (max-width: 360px){
    font-size: 0.8rem;
}

`

export const CheckerProfileButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 95%;
height: auto;
background-color: #eeeeee;
margin-bottom: 3%;

@media (max-width:414px) and (min-width: 320px){
width: 100%;

}

`

export const CheckTypeSliceButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
width: 95%;
height: 40px;
background-color: #ffffff;
margin-top: 2%;

@media (max-width:1920px) and (min-width: 560px){
height: 80px;
}

@media (max-width:560px) and (min-width: 320px){
height: 40px;
}
`
export const ForwardRightArrowIcon = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 45%;
height: 40px;
`
export const RightArrow = styled.img `
width: 20px;
height: 20px;
@media (max-width:1920px) and (min-width: 768px){
width: 35px;
height: 35px;
}
@media (max-width:768px) and (min-width: 560px){
width: 18px;
height: 18px;
}
`
export const CheckTypeSliceButton = styled.div`
/* width: 95%; */
/* height: 40px; */
background-color: blue;
`
export const ForwardLabel = styled.p `
width: 120px;
height: 20px;
font-weight: 600;

@media (max-width:1920px) and (min-width: 560px){
font-size: 2rem;
height: 40px;
}

@media (max-width:560px) and (min-width: 320px){
display: flex;
align-items: center;
font-size: 1rem;
}
` 
export const BackwardLabel = styled.p`
width: 320px;
height: 20px;
font-weight: 600;
margin-left: 5%;

@media (max-width:1920px) and (min-width: 560px){
font-size: 2rem;
height: 40px;
}

@media (max-width:560px) and (min-width: 320px){
display: flex;
align-items: center;
font-size: 1rem;
}
`
export const BackwardLeftArrowIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 40px;
margin-top: 5%;
margin-left: 5%;
@media (max-width:1920px) and (min-width: 414px){
display: flex;
justify-content: flex-start;
margin-left: 5%;

}
`
export const LeftArrow = styled.img`
width: 20px;
height: 20px;
@media (max-width:1920px) and (min-width: 768px){
width: 35px;
height: 35px;
}
@media (max-width:768px) and (min-width: 560px){
width: 18px;
height: 18px;
}
`

// *************  checkers Ratings

export const CheckerRatingsTile = styled.div`
width: 100%;
height: auto;
margin: 10px;
background-color: #ffffff;
display: grid;
grid-template-columns: 33.3% 33.3% 33.3%;
grid-template-rows: auto;
`

export const CheckerRating = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
width: 100%;
height: 385px;

@media (max-width: 1536px) and (min-width:1366px){
height: 330px;

}
@media (max-width: 1366px) and (min-width:1280px){
height: 300px;

}
@media (max-width: 1280px) and (min-width:768px){
height: 385px;

}
@media (max-width: 768px) and (min-width:560px){
height: 320px;

}
@media (max-width: 560px) and (min-width:480px){
height: 235px;

}
@media (max-width: 480px) and (min-width:414px){
height: 200px;

}
@media (max-width: 414px) and (min-width:360px){
height: 180px;

}
@media (max-width: 360px) and (min-width:320px){
height: 165px;

}

`
export const CheckerRatingImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 65%;
background-color: #FAD570;
border-radius: 68%;
margin-top: 8%;

@media (max-width: 1280px) and (min-width:1098px){
width: 65%;
}
`

export const RatingImg = styled.img`
width: 100px;
height: 100px;
/* @media (max-width: 1920px) and (min-width:560px){
height: 100px;

} */
@media (max-width: 560px) and (min-width:414px){
height: 75px;

}
@media (max-width: 414px) and (min-width:360px){
height: 70px;

}
@media (max-width: 360px) and (min-width:320px){
height: 60px;

}
`
export const CheckDescriptionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
margin-top: 8%;
margin-left: 5% ;
`
export const CheckerRatingDescription = styled.span`
font-size: 1.5rem;

@media (max-width: 560px) and (min-width:320px){
font-size: 1rem;
}
`
export const RatingContainer = styled.div`
display: flex;
justify-content: center;
width: 90%;
height: 20%;
margin-top: 8%;
margin-left: 1%;
`

export const CheckersReviewsContainer = styled.div`
width: 95%;
height: auto;
margin: 10px;
background-color: #eeeeee;

`
export const ReviewTile = styled.div `
display: flex;
width: 100%;
height: 200px;
margin-bottom: 2%;
background-color: #ffffff;

`
export const ReviewUserAvatarContainer = styled.div`
width: 30%;
height: 100%;
background-color: #ffffff;
`
export const ReviewUserCommentContainer = styled.div`
display: flex;
align-items: center;
width: 70%;
height: 100%;
background-color: #ffffff;
font-style: italic;
color: #666666 ;

`
export const ReviewAvatar = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`
export const Avatar = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
object-fit: cover;

`