import React from 'react'
import { Badge, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BasicMenu from '../BasicMenu/BasicMenu';

const NotificationBell = ({iconColor, notifications}) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  
  return (
    <div>
        <Tooltip title={notifications.length >1 ? `Alerts • You have ${notifications.length} alerts` : 'Alerts • No alerts'}>
            <IconButton color={iconColor} onClick={notifications.length > 0 ? handleOpen : null} anchorEl={anchorEl}>
                <Badge badgeContent={notifications.length} color='error'><NotificationsIcon/></Badge>
            </IconButton>
        </Tooltip>
            {/* Notifications Menu */}
        <BasicMenu 
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            menuItems={notifications}
        />
    </div>
  )
}

/* IconButton is responsible for the overlay on the badge */

export default NotificationBell