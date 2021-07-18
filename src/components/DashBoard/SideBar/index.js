import React, { Component } from 'react'
import styles from './styles'
import {withStyles} from '@material-ui/styles'
import {PropTypes} from 'prop-types'
import {Drawer , List , ListItem} from '@material-ui/core'
import {ROUTES} from '../../../constants'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators , compose} from 'redux' 
import *as uiAction from '../../../reduxField/actions/loading'

class SideBar extends Component {

    toggleDrawer = () => {
        const {onShowSidebar} = this.props
        const {hideSidebar} = onShowSidebar
        hideSidebar()
    }

    renderList = (classes) => {
        var result = null
        result = (
            <List component="nav">
                {ROUTES.map(item => {
                    return (
                        <NavLink key={item.path} to={item.path} exact={item.path} activeClassName={classes.menuLinkActive}>
                            <ListItem className={classes.menuLink} button>
                                {item.name}
                            </ListItem>
                        </NavLink>
                    )
                })}
            </List>
        )
        return result
    }

    render(){
        const {classes , showSidebar} = this.props

        return (
            <Drawer open={showSidebar} onClose={() => this.closeSidebar()} 
                classes={{paper: classes.drawerPaper}} variant="persistent">
                {this.renderList(classes)}
            </Drawer>
        )
    }
}

SideBar.propTypes = {
    classes: PropTypes.object
}

const mapStateToProps = state => {
    return {
        showSidebar: state.loading.showSidebar,
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onShowSidebar: bindActionCreators(uiAction , dispatch)
    }
}

const withConnect = connect(mapStateToProps , mapDispatchToProps)

export default compose(withStyles(styles) , withConnect)(SideBar)