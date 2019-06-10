/*
 * AboutUs
 */

import React from 'react';
import Helmet from 'react-helmet';
import StaticContentDiv from '../../components/StaticContentDiv';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>About US</title>
        </Helmet>
        <div className="container mx-auto">
          <StaticContentDiv contentKey="aboutusheader" />
        </div>
      </React.Fragment>
    );
  }
}
