export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  date: {
    invalidFormat: 'date must be a valid ISO date',
  },
  images: {
    maxLength: 'Всегда 6 фотографий',
  },
  isPremium:{
    invalidFormat: 'field must be a boolean',
  },
  isFavorite: {
    invalidFormat: 'field must be a boolean',
  },
  rating:{
    minValue: 'Minimum amount is 1',
    maxValue: 'Maximum amount is 5',
  },
  type: {
    invalid: 'type must be apartment, house, room, hotel',
  },
  bedrooms:{
    invalidFormat: 'Amount rooms must be an integer',
    minValue: 'Minimum amount is 1',
    maxValue: 'Maximum amount is 8',
  },
  maxAdults:{
    invalidFormat: 'Amount men must be an integer',
    minValue: 'Minimum amount is 1',
    maxValue: 'Maximum amount is 10',
  },
  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  goods:{
    invalidFormat: 'Goods must be an array'
  },
  city: {
    invalidId: 'City field must be valid id',
  },
  previewImage:{
    invalidFormat: 'Goods must be a string'
  },
  hostId: {
    invalidId: 'userId field must be a valid id',
  },
} as const;
