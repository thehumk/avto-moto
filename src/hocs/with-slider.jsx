import React from 'react';

export const withSlider = (Component) => {
  class WithSlider extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        slide: 1,
      };

      this.nextSlideHandler = this.nextSlideHandler.bind(this);
      this.previousSlideHandler = this.previousSlideHandler.bind(this);
    }

    nextSlideHandler() {
      this.setState({slide: this.state.slide + 1});
    }

    previousSlideHandler() {
      this.setState({slide: this.state.slide - 1});
    }

    render() {
      return (
        <Component
          {...this.props}
          slide={this.state.slide}
          nextSlideHandler={this.nextSlideHandler}
          previousSlideHandler={this.previousSlideHandler}
        />
      );
    }
  }

  return WithSlider;
};
