import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeSelectPassword, makeSelectPasswordError } from '../selectors';
import * as mapDispatchToProps from '../actions';

const PasswordInput = props => {
  const { password, setStoreValue, errors, classes } = props;
  const [isSecure, setIsSecure] = useState();

  const handleTogglePassword = () => {
    setIsSecure(state => !state);
  };

  const handleChange = e =>
    setStoreValue({ key: 'password', value: e.target.value });
  const hasError = Boolean(errors);
  return (
    <div className="mb-4">
      <label
        className="block uppercase tracking-wide text-gray-800 text-xs mb-2"
        htmlFor="Password"
      >
        Password
      </label>
      <div className="relative">
        <input
          error={hasError.toString()}
          onChange={handleChange}
          value={password}
          id="Password"
          type={isSecure ? 'text' : 'password'}
          className="inputbox"
        />
        <span
          className={classes.EyeIcon}
          aria-label="Toggle password visibility"
          onClick={handleTogglePassword}
        >
          {isSecure ? <Visibility /> : <VisibilityOff />}
        </span>
      </div>

      {errors && <div id="component-error-text">{errors}</div>}
      <Link
        className="inline-block align-baseline text-xs text-blue-700 hover:text-blue-700-darker"
        to="/forgot-password-user"
      >
        Forgot Password?
      </Link>
    </div>
  );
};

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
  errors: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  password: makeSelectPassword(),
  errors: makeSelectPasswordError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const styles = theme => ({
  EyeIcon: { position: 'absolute', right: 12, top: 6 },
});

const withStyle = withStyles(styles);

export default compose(
  withConnect,
  withStyle,
)(PasswordInput);
