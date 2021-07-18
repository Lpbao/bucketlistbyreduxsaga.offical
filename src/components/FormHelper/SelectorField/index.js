import React from 'react'
import {FormHelperText , FormControl , InputLabel , Select} from "@material-ui/core"
import { PropTypes } from 'prop-types'
import styles from './styles'
import { withStyles } from '@material-ui/styles'

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }

const renderSelectField = ({
    classes,
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
      
    <FormControl className={classes.formControl} error={touched && error}>
      <InputLabel >{label}</InputLabel>
      <Select
        
        {...input}
        {...custom}
        inputProps={{
          name: 'age',
          id: 'age-native-simple'
        }}
        value={input.value}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )

  renderSelectField.propTypes = {
      input: PropTypes.object,
      meta: PropTypes.object,
      label: PropTypes.string,
      children: PropTypes.array,
      classes: PropTypes.object
  }

  export default withStyles(styles)(renderSelectField)