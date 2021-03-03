module.exports = ({ env }) => {
  // console.log(process.env);
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    admin: {
      auth: {
        secret: env("ADMIN_JWT_SECRET"),
      },
    },
  };
};