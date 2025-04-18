export const CreateUserMessages = {
  email: {
    invalidFormat: 'email must be a valid address'
  },
  avatarUrl: {
    invalidFormat: 'avatarUrl format is .png or .jpg',
  },
  name: {
    invalidFormat: 'name is required',
    lengthField: 'min length is 1, max is 15',
  },
  isPro: {
    invalidFormat: 'isPro is required and boolean',
  },
  password: {
    invalidFormat: 'password is required',
    lengthField: 'min length for password is 6, max is 12'
  },
} as const;
