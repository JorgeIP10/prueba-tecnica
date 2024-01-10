export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    const errors = {};
    for (const e of error.errors) {
      errors[e.path[0]] = e.message
    }
    return res.status(400).json({errors: errors});
  }
};