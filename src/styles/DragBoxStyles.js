import queries from './queries';
import chroma from 'chroma-js';

const styles = {
    root: {
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [queries.down('lg')]: {
            width: '25%',
            height: "20%"
        },
        [queries.down('md')]: {
            width: '50%',
            height: "10%"
        },
        [queries.down('sm')]: {
            width: '100%',
            height: "5%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: props => chroma(props.color).luminance() >= 0.65 ? "rgba(0,0,0,0.5)": "white",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        [queries.down('sm')]: {
            bottom: '-6px'
        }
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out",
        [queries.down('sm')]: {
            height: '0.8em'
        }
    }
}

export default styles