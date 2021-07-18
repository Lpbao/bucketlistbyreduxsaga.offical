import React from 'react'
import { Component } from 'react';
import {Card , CardContent , Typography ,TextField , Button, FormControlLabel, Checkbox } from '@material-ui/core'
import {withStyles} from "@material-ui/styles"
import styles from './styles'
import {Link} from 'react-router-dom'


class SignupPage extends Component {
    render(){
        const {classes} = this.props
        return (
            <div className={classes.background}>
                <div className={classes.signup}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Create acount here!
                                    </Typography>
                                </div>
                                <TextField  
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField  
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                />
                                <TextField  
                                    id="cpassword"
                                    label="Confirm Password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                />
                                <FormControlLabel 
                                    control={<Checkbox value="agree" />}
                                    label="I had readed policy and agree with condition"
                                    className={classes.fillWidth}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                >
                                    Create Account
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/task-board">
                                        <Button>I have an acount</Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SignupPage)