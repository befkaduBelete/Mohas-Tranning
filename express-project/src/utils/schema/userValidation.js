export const userValidationSchema = {
  username: {
    notEmpty: {
      errorMessage: "Username Can no be null",
    },
    isLength: {
      options: {
        min: 3,
        max: 20,
      },
      errorMessage: " THis is b/n 3-20 characters ",
    },
  },
  displayName: {
    notEmpty: true,
  },
  password: {
    notEmpty: true,
  },
};
