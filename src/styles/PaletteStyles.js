import queries from './queries';

export default {
    Palette: {
        height: '100vh',
        overflow: 'hidden'
    },
    paletteColors: {
        height: '90%'
    },
    goBack: {
        width: '20%',
        height: '50%',
        marginBottom: '-0.4rem',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        background: '#000000',
        [queries.down('lg')]: {
            width: '75%',
            height: "33.333%"
        },
        [queries.down('md')]: {
            width: '50%',
            height: "20%"
        },
        [queries.down('xs')]: {
            width: '100%',
            height: "10%"
        }
    },
    backButton: {
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color: 'white',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none',
        [queries.down('md')]: {
            height: "20%"
        },
        [queries.down('xs')]: {
            height: "50%"
        }
    }
}