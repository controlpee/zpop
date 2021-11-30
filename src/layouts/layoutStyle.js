import { makeStyles } from '@material-ui/core'
import { blueGrey } from '@material-ui/core/colors'
import React from 'react'


export const useStyles = makeStyles((theme) => ({
    section: {
        margin: theme.spacing(3, 0)
    },
    pageTitle: {
        color: blueGrey[800],
        marginBottom: theme.spacing(2),
        textTransform: 'capitalize'
    },
    pageSubTitle: {
        color: blueGrey[500],
        margin: theme.spacing(1, 0),
        textTransform: 'uppercase'
    },
    cardLabel: {
        textTransform: 'uppercase',
        color: blueGrey[500],
        textAlign: 'center',
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down('xs')] : {
            fontSize: '0.8rem'
        },
    },
    cardTitle: {
        textTransform: 'uppercase',
        color: blueGrey[800],
        textAlign: 'center',
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down('xs')] : {
            fontSize: '1.8rem'
        }
    },

rationBtn: {
    fontSize: '1rem',
    fontWeight: 'bold'
},
displayCardGraph: {
    position: "'absolute'",
    bottom: "0",
    left: "0",
    width: "100%,",
    height: "45%"
}
    
    }))