import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

class ReverseSlider extends React.Component {
  state = {
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider value={value} onChange={this.handleChange} />
        <Slider value={value} onChange={this.handleChange} reverse />
      </div>
    );
  }
}

ReverseSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ReverseSlider1 = withStyles(styles)(ReverseSlider);

const Box = () => {
  return(
    <div className="box box-default">
      <div className="box-header">Reverse slider</div>
      <div className="box-body d-flex justify-content-center">
        <ReverseSlider1 />
      </div>
    </div>
  )
}

export default Box;