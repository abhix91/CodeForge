function asyncHandler(cb) {
  return (req, res, next) => {
    return cb(req, res, next)?.catch(next);
  };
}

module.exports = { asyncHandler };
