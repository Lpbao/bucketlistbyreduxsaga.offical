import React , { Component } from "react";
import { withStyles , Grid, Box} from '@material-ui/core'
import styles from './styles'
import TaskItem from "../TaskItem";


class TaskList extends Component {
    render(){
        const {classes , filterListTask , status} = this.props
        return (
            <Grid item md={4} xs={12}>
                <Box component="span" m={1}>
                    <div className={classes.status}>{status.type}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {filterListTask.map((task) => {
                        return (<TaskItem key={task.id}  task={task} status={status}/>)
                    })}
                </div>
            </Grid>
        )
    }
}

export default withStyles(styles)(TaskList)