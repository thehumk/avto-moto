import {ActionType} from './actions';
import reviewsMock from '../mocks/reviews';

const InitialState = {
  reviews: reviewsMock,
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return Object.assign({}, state, {
        reviews: [...state.reviews, action.payload],
      });
  }

  return state;
};
