import { Box, Grid } from "@mui/material";
import style from './Page3.module.css'
function Content3(){
    return(
        <>
        <Grid container sx={{width:"100%",height:"100vh",backgroundColor:"white"}} className={style.container}>
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} className={style.main}>
                <Grid className={style.main_child}>
                <Box className={style.Img}></Box>
                <Box className={style.Heading}>
                    <h1 style={{color:"#006838",fontWeight:"bolder"}}>MUHAMMAD ALI MUGHAL</h1>
                    <p style={{color:"grey"}}>Founder of Jawan Pakistan</p>
                </Box>
                <Box className={style.text}>
                    <p>We aim to be most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry.</p>
                </Box>
                </Grid>
           </Grid>
        </Grid>
        </>
    )
}

export default Content3