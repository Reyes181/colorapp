import queries from './queries';
const drawerWidth = 300;

const styles = theme => ({
    root: {
        display: 'flex'
    },
    hide: {
        display: 'none'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    navButtons: {
        marginRight: '1rem',
        [queries.down('xs')]: {
            marginRight: '0.5rem',
            display: 'flex'
        }
    },
    button: {
        margin: '0 0.5rem',
        [queries.down('xs')]: {
            margin: '0 0.2rem',
            padding: '0.2rem',
            fontSize: '0.6rem'
        }
    }
})

export default styles