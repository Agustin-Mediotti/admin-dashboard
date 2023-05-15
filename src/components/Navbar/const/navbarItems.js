import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export const mainNavBarItems = [
    {
        id: 0,
        icon: <PeopleIcon/>,
        label: 'Authentication',
        route: 'authentication',
    },
        {
        id: 1,
        icon: <StorageIcon/>,
        label: 'Database',
        route: 'database',
    },
        {
        id: 2,
        icon: <ImageIcon/>,
        label: 'Storage',
        route: 'storage',
    },
        {
        id: 3,
        icon: <PublicIcon/>,
        label: 'Hosting',
        route: 'hosting',
    },
        {
        id: 4,
        icon: <SettingsEthernetIcon/>,
        label: 'Functions',
        route: 'functions',
    },
        {
        id: 5,
        icon: <SettingsInputComponentIcon/>,
        label: 'Machine Learning',
        route: 'machine-learning',
    },
]