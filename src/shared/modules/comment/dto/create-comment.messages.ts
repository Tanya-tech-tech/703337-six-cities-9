export const CreateCommentMessages = {
  commentText: {
    invalidFormat: 'text is required',
    lengthField: 'min length is 5, max is 2024'
  },
  commentOfferId: {
    invalidFormat: 'offerId field must be a valid id'
  },
  commentUserId: {
    invalidFormat: 'userId field must be a valid id'
  },
  commentRating:{
    minValue: 'Minimum amount is 1',
    maxValue: 'Maximum amount is 5',
  },
} as const;
