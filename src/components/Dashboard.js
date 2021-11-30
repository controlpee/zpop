import { Box, Button, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import { blueGrey } from '@material-ui/core/colors';
import React from 'react'
import { COLORS } from '../constants';
import { useStyles } from '../layouts/layoutStyle';
import PageTitle from '../components/Common/common';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import {DisplayCardGraph} from './Common/Graph';

export default function Dashboard(){
const classes = useStyles();

React.useEffect(() => {
    // DisplayCardGraph()
})
    return(
<main>
<Box>
{/* Section title
Section card
Section grap */}
<PageTitle label="Dashboard" pageTitle="ZPOP Dashboard Overview" />
<Grid container>
<Grid item xs={6} sm={3}>
<Card >
<CardContent>
<canvas id="myChart" className={classes.displayCardGraph}></canvas>
{/* <DisplayCardGraph /> */}
<Typography variant="body2" className={classes.cardLabel}>
    Pages
</Typography>
<Typography variant="h5" component="h6" className={classes.cardTitle}>
12340
</Typography>
<Typography 
component="p"
style={{
    textAlign: 'center',
    marginBottom: '0px'
}}
>
<Button 
size="small" 
className={classes.rationBtn} 
startIcon={<ArrowDropDownIcon />}>5%
</Button>
</Typography>
</CardContent>
</Card>
</Grid>
</Grid>
</Box>
</main>
    )
}

