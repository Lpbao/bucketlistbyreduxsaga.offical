import React, { Component } from 'react'
import {withStyles} from '@material-ui/core'
import styles from './styles'
import {ThemeProvider} from '@material-ui/styles'
import theme from '../commons/Theme'
import configureStore from '../../reduxField/redux/configueStore'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../commons/GlobalLoading'
import {BrowserRouter as Router , Switch} from 'react-router-dom'
import {ROUTES} from '../../constants'
import AdminLayout from '../commons/Layout/adminLayout'
import DefaultLayout from '../commons/Layout/defaultLayout'
import CssBaseline from '@material-ui/core/CssBaseline'
import {DEFAULT_ROUTES} from '../../constants'

const store = configureStore()

class App extends Component {

    renderAdminRoutes = () => {
        var result = ROUTES.map(route => <AdminLayout
            key={route.path} path={route.path}
            component={route.component}
            exact={route.exact}
            name={route.name}
        />
        )
        
        return result
    }

    renderDefaultRoutes = () => {
        var result = DEFAULT_ROUTES.map(route => <DefaultLayout
            key={route.path} path={route.path}
            component={route.component}
            exact={route.exact}
            name={route.name}
        />
        )
        
        return result
    }

    render(){
        return (
            <Provider store={store}>
                <Router>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ToastContainer />
                        <GlobalLoading />
                        <Switch>
                            {this.renderAdminRoutes()}
                            {this.renderDefaultRoutes()}
                        </Switch>
                    </ThemeProvider>
                </Router>
            </Provider>  
        );
    }
}

export default withStyles(styles)(App);
