import React from 'react'
import Grid from '@mui/material/Grid';
import Header from '../../components/Header/Header';

const Authentication = () => {
    const notifications = [
    {
        id: 0,
        label: 'Alert 1'
    },
    {
        id: 1,
        label: 'Alert 2'
    },
        {
        id: 2,
        label: 'Alert 3'
    }
  ]

  return (
    <Grid item xs={8}>
        <Header title={"Authentication"} notifications={notifications} />
    </Grid>
  )
}

export default Authentication