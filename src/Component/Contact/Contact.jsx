import { Grid, TextField } from "@mui/material";
import style from './Contact.module.css'
function Contact() {
    return (
        <>
            <Grid container className={style.main}>
                {/* <Grid item xs={12} sm={12} md={6} lg={5} xl={6}>
            </Grid> */}
                <Grid item xs={10} sm={6} md={6} lg={4} xl={4} className={style.container}>
                    <h3><b>Contact</b></h3>
                    <form action="https://formsubmit.co/jawantechpk@gmail.com" method="POST">
                        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: "90%" }} /><br /><br />
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: "90%" }} /><br /><br />
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={{ width: "90%" }} /><br /><br />
                        <TextField id="outlined-basic" label="Add a Message" variant="outlined" sx={{ width: "90%" }} /><br /><br />

                        <button className={style.btn} type="submit">Submit</button>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact