import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import {Button, Modal ,Box, Typography, Grid} from '@material-ui/core'
import styles from './styles'
import {bindActionCreators , compose} from 'redux'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import *as modalActions from '../../reduxField/actions/modal'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../FormHelper/TextField'
import validate from './validate'
import *as taskActions from '../../reduxField/actions/task'
import selectorField from '../FormHelper/SelectorField'

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

    renderSelector = () => {
        var result = null
        const {edittingMode , classes} = this.props
        if(edittingMode){
            result = (
                <Field 
                    id="status"
                    label="Condition"
                    className={classes.textField}
                    margin="normal"
                    name="status"
                    component={selectorField}
                >
                    <option value={1}>READY</option>
                    <option value={2}>ON PROGRESS</option>
                    <option value={3}>COMPLETED</option>
                </Field>
            )
        }
        return result
    }

    render(){
        const {open , classes , onActionsCreators , handleSubmit , 
            invalid , submitting , edittingMode } = this.props

        const {closeModal} = onActionsCreators
        
        return(
            <Modal
                open={open}
                onClose={() => closeModal()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modal}>
                    <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                        <Typography variant="h6">
                            {edittingMode?"Edit your task on this board !" : "Add a new task here"}
                        </Typography>
                        <Grid container>
                            <Grid item md={12}>
                                <Field 
                                    id="title"
                                    label="Title"
                                    className={classes.textField}
                                    margin="normal"
                                    name="title"
                                    component={renderTextField}
                                    
                                />
                            </Grid>
                            <Box component="span" mt={4} className={classes.fullWidth}>
                                <Grid item md={12} className={classes.item}>
                                    <Field 
                                        id="description"
                                        label="Description"
                                        className={classes.textField}
                                        margin="normal"
                                        name="description"
                                        component={renderTextField}
                                        
                                    />
                                </Grid>
                            </Box>
                            
                            <Box component="span" mt={4} className={classes.fullWidth}>
                                {this.renderSelector()}
                                <Grid item md={12} className={classes.btn}>
                                    <Button onClick={() => closeModal()} color="primary">
                                        Cancel
                                    </Button>
                                    <Button disabled={invalid || submitting } type="submit" color="primary" >Save</Button>
                                    
                                </Grid>
                            </Box>
                        </Grid>
                    </form>
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
        open: state.modal.showModal,
        edittingMode: state.modal.edittingMode,
        edittedTask: state.modal.edittedTask,
        initialValues: state.modal.edittedTask,
        enableReinitialize: true
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onActionsCreators: bindActionCreators(modalActions , dispatch),
        onTaskActionsCreators: bindActionCreators(taskActions , dispatch),
    }
}

const TASK_FORM = "TASK_FORM"

const withReduxForm = reduxForm({ 
    form: TASK_FORM ,
    validate
})

const withConnect = connect(mapStateToProps , mapDispatchToProps)

export default compose(withStyles(styles) , withConnect , withReduxForm)(TaskForm)