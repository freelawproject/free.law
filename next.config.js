const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  trailingSlash: true,
};

module.exports = withSentryConfig(nextConfig, {
  silent: !process.env.CI,
  sourcemaps: {
    disable: true,
  },
});
