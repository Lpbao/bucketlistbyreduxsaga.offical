import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class DefaultLayout extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          console.log("ROUTEPROPS" , routeProps)
          return (
            <YourComponent {...routeProps} />
          );
        }}
      />
    );
  }
}

DefaultLayout.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};

export default DefaultLayout;