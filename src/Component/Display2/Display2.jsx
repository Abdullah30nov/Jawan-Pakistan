import { Box, Grid } from "@mui/material";
import style from './Display2.module.css'
// import Display1 from  './assets/JWPImages/display1.png'
function Content2() {
    return (
        <>
            <Grid container sx={{ height: "auto"}} style={{boxShadow:"0px 10px 15px #00000069"}} spacing={0.5}>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={6}>
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }} className={style.top}>
                        <Box className={style.Image}></Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7} xl={6}>
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "white",display: "flex", justifyContent: "center",paddingTop:"50px" }}>
                    <Box className={style.box}>
                        <span><h1 style={{fontWeight:"bolder", color:"Content2"}}>Mission And Vision <br /> Behind Jawan Pakistan</h1></span><br />
                        <p style={{color:"grey"}}>Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth. <br /><br />Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.</p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Content2;