import React from 'react';
import {TypeTabs} from '../const';

export const withCarCard = (Component) => {
  class WithCarCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        tab: TypeTabs.SPECIFICATIONS,
      };

      this.tabsClickHandler = this.tabsClickHandler.bind(this);
    }

    tabsClickHandler(type) {
      if (this.state.tab === type) {
        return;
      }

      this.setState({tab: type});
    }

    render() {
      return (
        <Component
          {...this.props}
          tab={this.state.tab}
          tabsClickHandler={this.tabsClickHandler}
        />
      );
    }
  }

  return WithCarCard;
};
