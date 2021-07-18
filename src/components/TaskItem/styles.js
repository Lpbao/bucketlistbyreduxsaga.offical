const styles = (theme) => ({
    CardActions: {
        display: "flex",
        alignItem: "center",
        justifyContent: "flex-end"
    },
    card: {
        marginTop: "15px",
        background: "#FFEBEE"
    },
    description: {
        padding: "15px"
    },
    deleteAction: {
        display: "flex",
        marginTop: "20px",
        flexDirection: "row-reverse",
    },
    deleteBtn:{
        padding: "10px",
        borderRadius: "4px",
        background: "#0984e3",
        marginLeft: "8px",
        fontSize: "18px",
        border: "none",
        color: "white",
        cursor: "pointer"
    }
})

export default styles