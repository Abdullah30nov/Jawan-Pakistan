import { Box, Grid } from "@mui/material";
import style from './Content4.module.css'
import Card from "../Card/Card";
import Img1 from '../../assets/JWPImages/blockchain.jpg'
import Img2 from '../../assets/JWPImages/digital.png'
import Img3 from '../../assets/JWPImages/Flutter.jpg'
import Img4 from '../../assets/JWPImages/Graphic.jpg'
import Img5 from '../../assets/JWPImages/Social.png'
function Content4(){
    return(
        <>
        <Grid className={style.main}>
            <Box sx={{textAlign:"center"}}>
                <h1 className={style.h1} >IT Trainings offering in Jawan Pakistan</h1>
            </Box>
            <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center"}} spacing={2}>

      <Card ImageSrc={Img2} ImageType="Web Development" Text="Web and Mobile Application Development"/>
      <Card ImageSrc={Img3} ImageType='Flutter' Text="Flutter Mobile Application And Development"/>
      <Card ImageSrc={Img4} ImageType="Graphic Designing" Text="Graphic Design And Video Editing"/>
      <Card ImageSrc={Img5} ImageType="Social Media" Text="Digital And Social Media Marketing"/>
      <Card ImageSrc={Img1} ImageType="Blockchain" Text="BlockChain Development"/>
      </Grid>
        </Grid>
        </>
    )
}
export default Content4