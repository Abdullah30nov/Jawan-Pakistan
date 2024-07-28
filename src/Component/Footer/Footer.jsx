import { Box, Grid } from "@mui/material";
import style from './Footer.module.css'
import img from '../../assets/JWPImages/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <Grid container className={style.main}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={style.ft_1} >
                    <Box><img src={img} alt="" /></Box></Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} className={style.ft_2}>
                    <Box>
                        <ul>
                            <li><span>COMPANY</span></li><br />
                            <li>Home</li>
                            <li>About us</li>
                            <li>Trainings</li>
                            <li>Contact us</li>
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} className={style.ft_3}>
                    <Box>
                        <ul>
                            <li><span>CONTACT DETAILS</span></li><br />
                            <li>Muhammad Ali Mughal</li>
                            <li>+923005292675</li>
                            <li>jawantechpk@gmail.com</li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className={style.Last}>
                <Grid item0 xs={12} sm={12} md={12} lg={12} xl={12} className={style.secLast}>
                    <Box className={style.text}>© 2024 Abdullah</Box>
                    <Box className={style.icons}><FaFacebook style={{ cursor: "pointer" }} /><FaInstagram style={{ cursor: "pointer" }} /><FaLinkedin style={{ cursor: "pointer" }} /></Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Footer