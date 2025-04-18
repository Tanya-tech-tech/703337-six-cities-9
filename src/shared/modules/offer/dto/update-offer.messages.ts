export const CreateUpdateOfferMessage = {
  title: {
    minLength: 'minimum title length is 10',
    maxLength: 'maximum title length is 100'
  },
  description: {
    minLength: 'minimum description length is 20',
    maxLength: 'maximum description length is 1024',
  },
  date: {
    invalidFormat: 'postData must be a valid ISO date',
  },
  city: {
    invalidId: 'City field must be valid id',
  },
  images: {
    invalidFormat: 'images is required and must be array',
    typeItem: 'item must be a string'
  },
  previewImage:{
    invalidFormat: 'Goods must be a string'
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
  rating:{
    minValue: 'Minimum amount is 1',
    maxValue: 'Maximum amount is 5',
  },
  type: {
    invalidFormat: 'type must be apartment, house, room, hotel',
  },
  price: {
    invalidFormat: 'price must be an integer',
    minValue: 'minimum price is 100',
    maxValue: 'maximum price is 100000'
  },
  goods: {
    invalidFormat: 'Goods must be an array of GoodsType'
  },

} as const;
