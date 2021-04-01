export const ActionType = {
  ADD_REVIEW: `addReview`,
};

export const addReview = (review) => ({
  type: ActionType.ADD_REVIEW,
  payload: review,
});
