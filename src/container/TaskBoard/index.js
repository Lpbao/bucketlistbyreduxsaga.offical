import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import styles from "./styles";
import { STATUS } from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { withStyles } from "@material-ui/styles";
import {connect} from "react-redux"
import { bindActionCreators  , compose} from "redux";
import { PropTypes } from "prop-types";
import *as taskActions from "../../reduxField/actions/task"
import *as modalActions from "../../reduxField/actions/modal"
import SearchBox from "../../components/SearchBox";
import NoticeBoard from "../../components/noticeBoard"




class TaskBoard extends Component {

  showBoard = (listTask) => {
    const xhtml = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const filterListTask = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              key={status.value}
              filterListTask={filterListTask}
              status={status}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };


  onFilter = (e) => {
    const { taskActionCreator} = this.props
    const {filterTask } = taskActionCreator
    filterTask(e.target.value)
  }

  showSearchBox = () => {
    var html = null
    if(<SearchBox />){html = <SearchBox handleChange={this.onFilter}/>}
    return html
  }



  showForm = () => {
    return (
      <TaskForm />
    );
  };

  showNoticeBoard = () => {
    return (
      <NoticeBoard />
    )
  }

  onload = () => {
    const {taskActionCreator} = this.props
    const {gettingTask} = taskActionCreator
    gettingTask()
  }

  render() {
    const { classes , listTask ,  modalActionCreator} = this.props;
    const {openModal} = modalActionCreator
    return (
      <div>
        <div className={classes.taskBoard}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.onload}
          >
            Load data
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => openModal()}
          >
            <Add /> Add new
          </Button>
        </div>
        {this.showSearchBox()}
        {this.showBoard(listTask)}
        {this.showForm()}
        {this.showNoticeBoard()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object , 
  gettingTask: PropTypes.func,
  listTask: PropTypes.array,
  filterTask: PropTypes.func,
  openModal: PropTypes.func
} 

const mapStateToProps = (state) => {
  return {
    listTask: state.task.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreator: bindActionCreators(taskActions , dispatch),
    modalActionCreator: bindActionCreators(modalActions , dispatch),
  }
}

const withConnect = connect(mapStateToProps , mapDispatchToProps)

export default compose(withStyles(styles) , withConnect)(TaskBoard);
