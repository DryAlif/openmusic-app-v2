const InvariantError = require('../../exceptions/InvariantError');
const { UserPayLoadSchema } = require('./schema');

const UsersValidator = {
  validateUserPayLoad: (payload) => {
    const validationResult = UserPayLoadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UsersValidator;
