module.exports = (err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
      status: 'error',
      message: err.message || 'Internal Server Error',
      // Optionally include more details in development
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};