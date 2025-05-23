import { createTheme } from '@mui/material/styles';
import { transform } from 'next/dist/build/swc/generated-native';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000',
            paper: '#000000',
        },
        primary: {
            main: '#F5E8E3',
            contrastText: '#000000',
        },
        secondary: {
            main: '#EEB5AB',
            contrastText: '#000000',
        },
        text: {
            primary: '#F5E8E3',
            secondary: '#EEB5AB',
        },
        divider: '#7E8283',
        action: {
            hover: 'rgba(238, 181, 171, 0.08)',
            selected: 'rgba(238, 181, 171, 0.12)',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#F5E8E3',
            '@media (max-width:960px)': {
                fontSize: '2.5rem',
            },
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.3,
            color: '#F5E8E3',
            '@media (max-width:960px)': {
                fontSize: '2rem',
            },
            '@media (max-width:600px)': {
                fontSize: '1.75rem',
            },
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 500,
            lineHeight: 1.4,
            color: '#F5E8E3',
            '@media (max-width:960px)': {
                fontSize: '1.75rem',
            },
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.4,
            color: '#F5E8E3',
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.4,
            color: '#F5E8E3',
        },
        h6: {
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#F5E8E3',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#F5E8E3',
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: '#EEB5AB',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    padding: '10px 24px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease-in-out',
                    color: '#F5E8E3',
                    '&:hover' : {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(238, 181, 171, 0.3)',
                    },
                },
                contained: {
                    backgroundColor: '#7E8283',
                    color: '#F5E8E3',
                    '&:hover': {
                        backgrouncColor: '#EEB5AB',
                        color: '#000000',
                    },
                },
                outlined: {
                    borderColor: '#7E8283',
                    color: '#F5E8E3',
                    '&:hover': {
                        borderColor: '#EEB5AB',
                        backgroundColor: 'rgba(238, 181, 171, 0.08)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(126, 130, 131, 0.1)',
                    border: '1px solid #7E8283',
                    borderRadius: 12,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 35px rgba(238, 181, 171, 0.2)',
                        borderColor: '#EEB5AB',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(126, 130, 131, 0.05)',
                    border: '1px solid #7E8283',
                    borderRadius: 8,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: '#F5E8E3',
                    '&.Mui-selected': {
                        color: '#EEB5AB',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: '#EEB5AB',
                    height: 3,
                    borderRadius: 2,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(238, 181, 171, 0.15)',
                    color: '#EEB5AB',
                    border: '1px solid rgba(238, 181, 171, 0.3)',
                    '&:hover': {
                        backgroundColor: 'rgba(238, 181, 171, 0.25)',
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#7E8283',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(10px)',
                },
            },
        },
    },
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default theme;