module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: env("SENDGRID_AUTH_EMAIL"),
      defaultReplyTo: env("SENDGRID_AUTH_EMAIL"),
    },
  },
});
