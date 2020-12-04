module.exports = {
  poweredByHeader: false,
  trailingSlash: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(ts|tsx)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  }
};
