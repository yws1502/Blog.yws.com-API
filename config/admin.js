module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '86f1b2e6fc17765cad6f17dbe6c3a3cb'),
  },
});
