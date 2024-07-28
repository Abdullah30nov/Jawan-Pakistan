import { Box, Grid } from "@mui/material";
import style from './Card.module.css'
import CardImg from '../../assets/JWPImages/digital.png'
function Card({ImageSrc,ImageType,Text}) {
    return (
        <>
            <Grid className={style.main} sx={{
                width: {xs: "70%",sm: "60%",md: '28%',lg: "28%",xl: '30%'},
                 height: "auto",
                 paddingBottom:"20px",
                  margin: '2px',
                  backgroundColor:"white",
                  marginTop:{xs:'20px',sm:"20px",md:'25px',lg:'10px',xl:'35px'},
                  marginBottom:{xs:'20px',sm:"20px",md:'25px',lg:'10px',xl:'35px'},
                  marginLeft:{xs:'auto',sm:"auto",md:'15px',lg:'12px',xl:'12px'},
                  marginRight:{xs:'auto',sm:"auto",md:'15px',lg:'12px',xl:'12px'}
            }}>
                <Box className={style.Image}>
                    <img src={ImageSrc} alt={ImageType} />
                </Box>
                <Box>
                    <h5>{Text}</h5>
                </Box>
            </Grid>
        </>
    )
}


export default Card