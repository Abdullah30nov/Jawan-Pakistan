import {Grid } from "@mui/material";
import style from './Content5.module.css'
function Content5() {
    return (
        <>
            <Grid container className={style.main}>
                <h1>Glimpses of sessions conducted by Jawan Pakistan</h1>
                <Grid item xs={12} sm={10} md={6} lg={5.5} xl={6} className={style.grid_item}>
                    <Grid container className={style.second_main}>
                        <Grid item xs={5.9} sm={5.9} md={5.9} lg={5.9} xl={5.9} className={style.grid_item1_2}>
                        </Grid>
                        <Grid item xs={5.9} sm={5.9} md={5.9} lg={5.9} xl={5.9} className={style.grid_item1_3}>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={style.grid_item1_1}>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={10} md={6} lg={5.5} xl={6} className={style.grid_item1}>
                <Grid container className={style.second_main1}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={style.grid_item2_1}>
                        </Grid>
                        <Grid item xs={5.9} sm={5.9} md={5.9} lg={5.9} xl={5.9} className={style.grid_item2_2}>
                        </Grid>
                        <Grid item xs={5.9} sm={5.9} md={5.9} lg={5.9} xl={5.9} className={style.grid_item2_3}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Content5