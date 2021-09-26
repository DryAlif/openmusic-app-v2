const {
  PostAuthenticationPayLoadSchema,
  PutAuthenticationPayLoadSchema,
  DeleteAuthenticationPayLoadSchema,
} = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const AuthenticationsValidator = {
  validatePostAuthenticationPayLoad: (payload) => {
    const validationResult = PostAuthenticationPayLoadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutAuthenticationPayLoad: (payload) => {
    const validationResult = PutAuthenticationPayLoadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateDeleteAuthenticationPayLoad: (payload) => {
    const validationResult =
      DeleteAuthenticationPayLoadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AuthenticationsValidator;
