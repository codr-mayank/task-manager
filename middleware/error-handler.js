const { CustomApiError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status((err || {}).statusCode || 500).json({ msg: (err || {}).message || 'Something went wrong, try again later' });
  }
  return res.status(500).json({ msg: 'Something went wrong, try again later' });
}

module.exports = errorHandlerMiddleware;
