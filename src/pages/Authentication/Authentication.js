import React from 'react'
import Grid from '@mui/material/Grid';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import BasicMenu from '../../components/common/BasicMenu/BasicMenu';
import CommonButton from '../../components/common/CommonButton/CommonButton';

const Authentication = () => {
    const notifications = [
    {
        id: 0,
        label: 'notification 1...'
    },
    {
        id: 1,
        label: 'notification 2...'
    },
        {
        id: 2,
        label: 'Cande te envio un zumbido'
    }
  ]

  return (
    <Grid item xs={8}>
        Authentication page.
        <CommonButton
          variant={'default'}
        >Go to Docs</CommonButton>
        <NotificationBell 
          iconColor='primary'
          notifications={notifications}
        />
    </Grid>
  )
}

export default Authentication