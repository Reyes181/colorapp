import queries from './queries';
import svgBck from './svgBck.svg';

export default {
    "@global":{
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: 'opacity 500ms ease-out'
        }
    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: 'scroll',
        backgroundColor: '#ffffff',
        backgroundImage: `url(${svgBck})`
         /* background by SVGBackgrounds.com */
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [queries.down('xl')]: {
            width: '80%'
        },
        [queries.down('xs')]: {
            width: '70%'
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a":{
            color: "white"
        }
    },
    logo: {
        height: '4rem',
        width: '80%',
        backgroundSize: 'contain !important',
        backgroundRepeat: 'no-repeat !important',
        backgroundPosition: 'left !important'
    },
    button: {
        margin: '0 0.5rem',
        [queries.down('xs')]: {
            margin: '0 0.2rem',
            padding: '0.2rem'
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [queries.down('md')]: {
            gridTemplateColumns: 'repeat(2, 50%)'
        },
        [queries.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 100%)'
        }
    }
}