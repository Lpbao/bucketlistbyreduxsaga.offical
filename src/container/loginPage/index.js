import React from 'react'
import { Component } from 'react';
import {Card , CardContent , Typography ,TextField , Button } from '@material-ui/core'
import {withStyles} from "@material-ui/styles"
import styles from './styles'
import {Link} from 'react-router-dom'


class LoginPage extends Component {
    render(){
        const {classes} = this.props
        return (
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Login to continue
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                >
                                    LOGIN
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/signup">
                                        <Button>Đăng ký tài khoản</Button>
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

export default withStyles(styles)(LoginPage)