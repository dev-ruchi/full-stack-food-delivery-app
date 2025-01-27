export function throwErrorWithStatus(status = 500, message) {
  const error = new Error(message);
  error.status = status;
  throw error;
}

export function sendErrorResponse(res, err) {
  if (err.status && err.status !== 500) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: "Server error" });
}
