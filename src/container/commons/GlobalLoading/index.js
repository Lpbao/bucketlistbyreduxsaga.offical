import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import loadingIcon from '../../../assets/images/loading.gif'
import {compose} from 'redux'
import {connect} from 'react-redux'
import { PropTypes } from 'prop-types'


class GlobalLoading extends Component {
    render (){
        const {classes , ShowLoading} = this.props
        var html = null

        if(ShowLoading){
            html = (
                <div className={classes.globalLoading}>
                    <img src={loadingIcon} alt="loading icon" className={classes.icon} />
                </div>
            )
    
        }

        return html
        
    }
}

const mapStateToProps = state => {
    return {
        ShowLoading: state.loading.show 
    }
}

GlobalLoading.propTypes = {
    ShowLoading: PropTypes.bool
}



const withConnect = connect(mapStateToProps,null)

export default compose(withStyles(styles) , withConnect)(GlobalLoading)