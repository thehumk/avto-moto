import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import {KeyCode} from '../const';
import {addReview} from '../store/actions';

export const withReviews = (Component) => {
  class WithReviews extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
        name: ``,
        advantage: ``,
        disadvantage: ``,
        rating: ``,
        comment: ``,
      };

      this.onAddFormOpen = this.onAddFormOpen.bind(this);
      this.onAddFormClose = this.onAddFormClose.bind(this);
      this.closePopupKeydown = this.closePopupKeydown.bind(this);
      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    closePopupKeydown(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        this.onAddFormClose();
      }
    }

    onAddFormOpen() {
      this.setState({isOpen: true});

      document.addEventListener(`keydown`, this.closePopupKeydown);
    }

    onAddFormClose() {
      this.setState({isOpen: false});

      document.removeEventListener(`keydown`, this.closePopupKeydown);
    }

    onValueChange(evt) {
      const {name, value} = evt.target;

      this.setState({[name]: value});
      localStorage.setItem(name, value);
    }

    onSubmit(evt) {
      evt.preventDefault();

      this.props.addReview({
        author: this.state.name,
        advantage: this.state.advantage,
        disadvantage: this.state.disadvantage,
        rating: this.state.rating,
        comment: this.state.comment,
        date: moment(Date.parse(new Date())).fromNow(),
      });

      localStorage.removeItem(`name`);
      localStorage.removeItem(`advantage`);
      localStorage.removeItem(`disadvantage`);
      localStorage.removeItem(`rating`);
      localStorage.removeItem(`comment`);

      this.onAddFormClose();
    }

    render() {
      return (
        <Component
          {...this.props}
          isOpen={this.state.isOpen}
          onAddFormOpen={this.onAddFormOpen}
          onAddFormClose={this.onAddFormClose}
          onValueChange={this.onValueChange}
          onSubmit={this.onSubmit}
        />
      );
    }
  }

  WithReviews.propTypes = {
    addReview: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({reviews}) => ({
    reviews,
  });

  const mapDispatchToProps = (dispatch) => ({
    addReview(review) {
      dispatch(addReview(review));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviews);
};
