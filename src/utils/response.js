export const success = (message, data = null) => ({
  success: true,
  message,
  data,
});

export const error = (message, err = null) => ({
  success: false,
  message,
  error: err?.message || err,
});
