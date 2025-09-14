export const cookies = {
  getOptions: () => ({
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000, // 15 minutes
  }),

  setCookie: (res, name, value, options = {}) => {
    const cookieOptions = { ...cookies.getOptions(), ...options };
    res.cookie(name, value, cookieOptions);
  },

  clearCookie: (res, name, options = {}) => {
    const cookieOptions = { ...cookies.getOptions(), ...options };
    res.clearCookie(name, cookieOptions);
  },

  getCookie: (req, name) => {
    return req.cookies[name];
  },
};
