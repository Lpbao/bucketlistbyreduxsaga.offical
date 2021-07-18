import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import { Modal ,Box, Typography, Grid} from '@material-ui/core'
import styles from './styles'
import {bindActionCreators , compose} from 'redux'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import *as noticeBoardActions from '../../reduxField/actions/noticeBoard'
import { reduxForm } from 'redux-form'




class TaskForm extends Component {

    handleSubmitForm = data =>{
        const {onTaskActionsCreators , edittingMode} = this.props
        const {addTask , updateTask} = onTaskActionsCreators
        if(edittingMode){
            updateTask(data)
        }
        else{
            addTask(data.title , data.description)
        }
    }


    render(){
        const {open , classes , onActionsCreators , title , body } = this.props

        const {closeNoticeBoard} = onActionsCreators
        console.log("CLOSE: " , closeNoticeBoard )
        return(
            <Modal
                open={open}
                onClose={() => closeNoticeBoard()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modal}>
                    
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>
                        <Grid container className={classes.container}>
                            <Box component="span" mt={4} className={classes.fullWidth}>
                                <Grid item md={12} className={classes.item}>
                                    
                                    {body}
                                    
                                </Grid>
                            </Box>
                            
                        </Grid>
                    
                </div>

            </Modal>
        )
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    onclose: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        open: state.noticeBoard.showNoticeBoard,
        title: state.noticeBoard.title,
        body: state.noticeBoard.body
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onActionsCreators: bindActionCreators(noticeBoardActions , dispatch),
    }
}

const NOTICE_BOARD = "NOTICE_BOARD"

const withReduxForm = reduxForm({ 
    form: NOTICE_BOARD ,
})

const withConnect = connect(mapStateToProps , mapDispatchToProps)

export default compose(withStyles(styles) , withConnect , withReduxForm)(TaskForm)