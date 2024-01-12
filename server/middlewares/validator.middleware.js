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

export const validateFindSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.params.dni);
    next();
  } catch (error) {
    console.log(error.errors)
    return res.status(400).json({error: error.errors[0].message});
  }
};