export default {
    container: {
        position: 'relative',
        width: "100%",
        height: "100%",
        background: '#2c577b',
        borderRadius: '3px',
        cursor: 'pointer',   
    },
    header: {
        height: '100%',
    },
    containerText: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 30,
        height: '100%',
        fontSize: '10px',
        color: 'white',
        textIndent: '1em',
        overflow: 'auto',
    },
    containerIcon: {
        float: 'right',
        display: 'flex',
        marginLeft: -30,     
        alignItems: 'center',
        justifyContent: 'center',   
        width: 30,
        height: '100%',
        fontSize: '10px',
        color: '#c4ced9',
    },
    listContainer: {
        position: 'absolute',
        width: '100%',
        outline: '1px solid #7a9cd3',
        outlineOffset: '-1px',
        background: '#2c577b',
    },
    listItem: {
        height: 20,
        fontSize: '10px',
        color: 'white',
        textIndent: '0.5em',
        lineHeight: '20px',
        '&:hover': {
            background: '#1e90ff',
        }
    }
}