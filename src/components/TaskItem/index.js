import React, { Component } from 'react'
import { withStyles , Grid , Card , CardContent , 
        CardActions , Typography , Fab ,Icon } from '@material-ui/core'
import styles from './styles'
import {connect} from 'react-redux'
import {compose , bindActionCreators} from 'redux'
import *as modalActions from '../../reduxField/actions/modal'
import *as noticeBoardActions from '../../reduxField/actions/noticeBoard'
import *as taskActions from '../../reduxField/actions/task'



class TaskItem extends Component {

    handleSetEdit = (task) => {
        const { onSetEditMode } = this.props
        const {setEdittingTask} = onSetEditMode
        setEdittingTask(task)
    } 

    handleDeleteTask = (task) => {
        const {onTaskActions} = this.props
        const {deleteTask} = onTaskActions
        deleteTask(task)
    }

    handleSetDelete = (task) => {
        const {onSetNoticeBoard , classes} = this.props
        const {openNoticeBoard , closeNoticeBoard} = onSetNoticeBoard
        openNoticeBoard("Delete " , 
        <div>
            <h3>Delete {task.title} are you sure about that?</h3>
            
            <div className={classes.deleteAction}>
                <button className={classes.deleteBtn}
                    onClick={() => this.handleDeleteTask(task)}
                >
                    Delete
                </button>
                <button className={classes.deleteBtn} 
                    onClick={() => closeNoticeBoard()}
                >
                    Cancel
                </button>
            </div>
            
        </div>
        )
    }

    render(){
        const {classes , task , status} = this.props
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justifyContent="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {task.title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.type}
                        </Grid>
                    </Grid>
                </CardContent>
                <Typography component="h4" className={classes.description}>{task.description}</Typography>
                <CardActions className={classes.CardActions}>
                    <Fab color="primary" aria-label="Edit" 
                        className={classes.fab} size="small"
                        onClick={() => this.handleSetEdit(task)}    
                    >
                        <Icon fontSize="small">
                            edit
                        </Icon>
                    </Fab>
                    <Fab color="primary" aria-label="Delete" 
                        className={classes.fab} size="small"
                        onClick={() => this.handleSetDelete(task)}
                    >
                        <Icon fontSize="small">
                            delete_outline
                        </Icon>
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}


const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetEditMode: bindActionCreators(modalActions , dispatch),
        onSetNoticeBoard: bindActionCreators(noticeBoardActions , dispatch),
        onTaskActions: bindActionCreators(taskActions , dispatch),
    }
}
 const withConnect = connect(mapStateToProps ,mapDispatchToProps)


export default compose(withStyles(styles) , withConnect)(TaskItem)