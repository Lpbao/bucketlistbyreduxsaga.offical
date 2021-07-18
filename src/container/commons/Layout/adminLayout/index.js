import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashBoard from '../../../../components/DashBoard';

class AdminLayout extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          console.log("ROUTEPROPS" , routeProps)
          return (
            <DashBoard {...remainProps}>
              <YourComponent {...routeProps} />
            </DashBoard>
          );
        }}
      />
    );
  }
}

AdminLayout.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};

export default AdminLayout;