import chroma from 'chroma-js';
import queries from './queries';

export default {
    ColorBox: {
        width: "20%",
        height: props => props.showLink ? "25%" : "50%",
        marginBottom: "-0.4rem",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button":{
            opacity: "1"
        },
        [queries.down('lg')]: {
            width: '25%',
            height: props => props.showLink ? "20%" : "33.333%"
        },
        [queries.down('md')]: {
            width: '50%',
            height: props => props.showLink ? "10%" : "20%"
        },
        [queries.down('xs')]: {
            width: '100%',
            height: props => props.showLink ? "5%" : "10%"
        }
    },
    copiedText: {
        color: props => 
            chroma(props.background).luminance() >= 0.65 ? "rgba(0,0,0,0.5)" : "white"
    },
    colorName: {
        color: props => 
            chroma(props.background).luminance() <= 0.09 ? "white" : "rgba(0,0,0,0.5)"
    },
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        color: props => chroma(props.background).luminance() >= 0.65 ? "rgba(0,0,0,0.5)": "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        marginLeft: "90px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props => chroma(props.background).luminance() >= 0.65 ? "rgba(0,0,0,0.5)": "white",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "2",
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        flexDirection: "column",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            color: "#FFF",
            [queries.down('xs')]: {
               fontSize: '6rem'
            }
        },
        "& p": {
            fontSize: "1.4rem",
            fontWeight: "100",
            color: "#FFF"
        }
    },
    showMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "99",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s"
    }
}