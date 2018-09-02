import React, { PureComponent } from 'react';
import noUiSlider from 'nouislider';

import './Range.css';

class Range extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      minValue: this.props.min,
      maxValue: this.props.max,
    }

    this.createSlider = this.createSlider.bind(this);
    this.createRef = this.createRef.bind(this);
  }

  componentDidMount() {
    if (this.range) {
      this.createSlider();
    }
  }

  createSlider() {
    noUiSlider.create(this.range, {
      start: [this.props.min, this.props.max],
      connect: true,
      step: this.props.step,
      range: {
        'min': this.props.min,
        'max': this.props.max
      }
    });

    this.range.noUiSlider.on('update', (values, handle) => {
      this.setState({
        minValue: values[0],
        maxValue: values[1],
      });
    });
  }

  createRef(node) {
    this.range = node;
  }

  render() {
    const { minValue, maxValue } = this.state;
    const { prepend } = this.props;
    return (
      <div className="range" ref={node => this.createRef(node)}>
        <span className="range__value range__value--min">{prepend}{parseInt(minValue)}</span>
        <span className="range__value range__value--max">{prepend}{parseInt(maxValue)}</span>
      </div>
    );
  }
}

export default Range;