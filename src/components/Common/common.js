import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from '../../layouts/Header/HeaderStyle';


export default function PageHeader ({ label, pageTitle}) {
const classes = useStyles()
    return(
        <Grid container>
<Grid item xs={12} sm={12}>
<Typography variant="body2" className={classes.pageTitle}>
{label}
</Typography>
<Typography variant="h5" className={classes.pageSubTitle}>
{pageTitle}
</Typography>
</Grid>
</Grid>
    )
}

