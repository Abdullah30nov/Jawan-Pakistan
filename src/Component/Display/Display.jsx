import { Box, Grid } from "@mui/material";
import style from './Display.module.css'
// import Display1 from  './assets/JWPImages/display1.png'
function Content1() {
    return (
        <>
            <Grid container sx={{ height: "auto", marginBottom:"50px"}} spacing={0.5}>
                <Grid item  xs={12} sm={12} md={6} lg={7} xl={6}>
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "white",display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box className={style.box}>
                        <span><h1 style={{fontWeight:"bolder", color:"#006838"}}>Introduction to <br /> Jawan Pakistan</h1></span><br />
                        <p style={{color:"grey"}}>The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={6}>
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }} className={style.top}>
                        <Box className={style.Image}></Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Content1;