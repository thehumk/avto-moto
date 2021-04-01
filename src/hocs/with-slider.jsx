import React from 'react';

export const withSlider = (Component) => {
  class WithSlider extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        slide: 1,
      };

      this.onNextSlide = this.onNextSlide.bind(this);
      this.onPreviousSlide = this.onPreviousSlide.bind(this);
    }

    onNextSlide() {
      this.setState({slide: this.state.slide + 1});
    }

    onPreviousSlide() {
      this.setState({slide: this.state.slide - 1});
    }

    render() {
      return (
        <Component
          {...this.props}
          slide={this.state.slide}
          onNextSlide={this.onNextSlide}
          onPreviousSlide={this.onPreviousSlide}
        />
      );
    }
  }

  return WithSlider;
};
