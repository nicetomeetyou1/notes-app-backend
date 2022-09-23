const InvariantError = require('../../exceptions/InvariantError');
const {ExportPayloadSchema} = require('./schema');

const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    const validatorResult = ExportPayloadSchema.validate(payload);
    if (validatorResult.error) {
      throw new InvariantError(validatorResult.error.message);
    }
  },
};

module.exports = ExportsValidator;
