import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight:600,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    borderRadius: 2.5,
                    '&.MuiButton-contained': {
                        backgroundColor: '#009be5',
                        '&:hover': {
                        backgroundColor: '#006db3',
                        },
                    },
                    '&.MuiButton-outlined': {
                        color: '#fff',
                        borderColor: '#fff',
                        '&hover': {
                        backgroundColor:'transparent',
                        }
                    }
                },
            },
        },
    },
/*     palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Provide every color token (light, main, dark, and contrastText) when using
        // custom colors for props in Material UI's components.
        // Then you will be able to use it like this: `<Button color="custom">`
        // (For TypeScript, you need to add module augmentation for the `custom` value)
        custom: {
            light: '#ffa726',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
        'apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: [4, 8 ,12, 16, 20]
  // theme.spacing (4) */
});