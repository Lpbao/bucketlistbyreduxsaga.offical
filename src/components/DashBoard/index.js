import React, { Component } from 'react'
import styles from './styles'
import {withStyles} from '@material-ui/styles'
import {PropTypes} from 'prop-types'
import Header from './Header'
import SideBar from './SideBar'
import cn from 'classnames'
import {connect} from 'react-redux'
import {compose} from 'redux'

class DashBoard extends Component {
    render(){
        const {children , classes , name , showSidebar} = this.props
        
        return (
            <div className={classes.dashBoard}>
                <Header name={name} />
                <div className={classes.wrapper}>
                    <SideBar />
                    <div className={cn(classes.wrapperContent, 
                        {[classes.shiftLeft]: showSidebar === false,}    
                    )}>{children}</div>
                </div>
            </div>
        )
    }
}

DashBoard.propTypes = {
    children: PropTypes.object,
    classes: PropTypes.object
}

const mapStateToProps = state => {
    return {
        showSidebar: state.loading.showSidebar
    }
}

const withConnect = connect(mapStateToProps , null)

export default compose(withStyles(styles) , withConnect)(DashBoard)