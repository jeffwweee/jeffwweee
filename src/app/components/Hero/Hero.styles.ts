import {
    SxProps, 
    Theme
} from '@mui/material/styles';

export const heroStyles: Record<string, SxProps<Theme>> = {
    heroContainer: {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000000',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: 1,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%',
        '@media (max-width: 768px)': {
            backgroundAttachment: 'scroll'
        },
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 2,
    },
    contentContainer: {
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    textContainer: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    heroTitle: {
        fontSize: {
            xs: '2.5rem',
            sm: '3.5rem',
            md: '4.5rem',
            lg: '5rem',
        },
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        color: '#F5E8E3',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    },
    rotatingText: {
        color: '#EEB5AB',
        fontWeight: 600,
        transition: 'color 0.3s ease-in-out',
    },
    cursor: {
        color: '#E17557',
        fontWeight: 400,
        animation: 'blink 1s infinite',
        marginLeft: '2px',
        transition: 'opacity 0.1 ease-in-out'
    },
    subtitle: {
        fontSize: {
            xs: '1.1rem',
            sm: '1.3rem',
            md: '1.5rem',
        },
        fontWeight: 400,
        color: 'rgba(245, 232, 227, 0.8)',
        marginBottom: '3rem',
        lineHeight: 1.6,
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
    },
    ctaContainer: {
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '2rem',
    },
    ctaButton: {
        background: 'linear-gradient(135deg, #7E8283 0%, #EEB5AB 100%)',
        color: '#F5E8E3',
        border: 'none',
        borderRadius: '12px',
        padding: '16px 32px',
        fontSize: '1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2 1)',
        textTransform: 'none',
        boxShadow: '0 8px 25px rgba(238, 181, 171, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 35px rgba(238, 181, 171, 0.4)',
            background: 'linear-gradient(135deg, #EEB5AB 0%, #E17557 100%)',
        },
        '&:active': {
            transform: 'translateY(-1px)',
        },
        '&:focus-visible': {
            outline: '2px solid #EEB5AB',
            outlineOffset: '2px',
        },
    },
    catButtonOutlined: {
        background: 'transparent',
    }
}