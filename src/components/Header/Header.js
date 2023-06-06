import React from 'react'
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import { Avatar, IconButton, Typography, Tooltip, Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const Header = ({title, notifications}) => {
    const headerStyles = {
        topHeader: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                marginRight: '5px'
            }
        },
        wrapper: {
            backgroundColor: '#009be5',
            color: '#fff',
            padding: '15px',
        },
        iconButton: {
            color: '#fff',
        },
    }
  return (
    <Box sx={headerStyles.wrapper}>
        <Box sx={headerStyles.topHeader}>
            <CommonButton
                variant={'default'}
            >   Go to Docs
            </CommonButton>
            <NotificationBell 
                iconColor='inherit'
                notifications={notifications}
            />
            <Avatar src="https://mui.com/static/images/avatar/1.jpg"/>
        </Box>
        <Box sx={headerStyles.midHeader}>
            <Typography fontFamily={'Roboto'} fontSize={'26px'} fontWeight={'500'}>{title}</Typography>
        </Box>
        <Box sx={headerStyles.lowerHeader}>
            <CommonButton variant={"outlined"}>Web Setup</CommonButton>
            <Tooltip title="Help"><IconButton sx={headerStyles.iconButton}><HelpIcon /></IconButton></Tooltip>
        </Box>
    </Box>
  )  
}

export default Header