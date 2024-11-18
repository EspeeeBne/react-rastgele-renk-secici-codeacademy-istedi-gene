import React from 'react';
import Button from './Button';
import { Typography } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import useStyles from './styles';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [255, 0, 0] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }

  handleClick() {
    this.setState({ color: this.chooseColor() });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Typography variant="h2" className={classes.title} style={{ textAlign: 'center' }}>
          Rastgele Renk Seçici
        </Typography>
        <Typography variant="h4" className={classes.colorText} style={{ textAlign: 'center', marginBottom: '20px' }}>
          Gelen renk: {this.formatColor(this.state.color)}
        </Typography>
        <Button light={this.isLight()} onClick={this.handleClick} />
        <footer className={classes.footerRight} style={{ position: 'fixed', bottom: '10px', right: '10px' }}>Created by EspeeeBne</footer>
      </div>
    );
  }
}

export default withStyles(useStyles)(Random);
