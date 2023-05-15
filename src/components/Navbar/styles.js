export const navbarStyles = {
    drawer: {
        width: 260,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 260,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 'bold',
          },
          '& .Mui-selected': {
            color: 'red',
          }
    },
    icons: {
        color: 'rgba(255, 255, 255, 0.7)!important',
        marginLeft: '20px',
    },
    text: {
        fontWeight: '600',
        marginLeft: '-10px',
        fontSize: '16px',
    },
}