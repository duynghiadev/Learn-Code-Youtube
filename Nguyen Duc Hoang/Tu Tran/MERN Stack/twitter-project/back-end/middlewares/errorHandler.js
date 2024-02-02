export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500

  res.status(err.statusCode).json({
    status: 'fail',
    message: err.message
  })
}
