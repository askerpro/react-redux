const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const mode = process.env.NODE_ENV;
const projectVariables = require(`./config/${mode}`);
const MailDev = require('maildev');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

let realProjectVariables = {};
for (variable in projectVariables) {
  realProjectVariables[variable.toUpperCase()] = projectVariables[variable];
}

const webpackRules = [
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },
  {
    test: /\.mp4$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          publicPath: `/_next/static`,
          outputPath: 'static',
        },
      },
    ],
  },
];

const nextConfig = {
  env: realProjectVariables,
  target: 'server',
  pageExtensions: ['tsx', 'ts'],
  [PHASE_PRODUCTION_BUILD + PHASE_PRODUCTION_SERVER]: {
    webpack: function (config, { buildId, dev, isServer, defaultLoaders, webpack }) {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.module.rules = [...config.module.rules, ...webpackRules];

      if (isServer) {
        config.plugins.push(new ImageminWebpWebpackPlugin());
      }

      return config;
    },
  },
  [PHASE_DEVELOPMENT_SERVER]: {
    webpack: function (config, { buildId, dev, isServer, defaultLoaders, webpack }) {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config

      config.module.rules = [...config.module.rules, ...webpackRules];

      if (dev && isServer) {
        config.plugins.push(new ImageminWebpWebpackPlugin());
        const maildev = new MailDev({
          smtp: realProjectVariables.MAIL.smtpPort,
          ip: realProjectVariables.MAIL.smtpHost,
        });
        maildev.listen();
      }

      return config;
    },
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // these are the default values so you don't have to provide them if they are good enough for your use-case.
        // but you can overwrite them here with any valid value you want.
        inlineImageLimit: 8192,
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'jpg'],
        optimizeImages: true,
        defaultImageLoader: 'responsive-loader',
        optimizeImagesInDev: true,
        responsive: {
          sizes: [1400, 960, 600, 400],
          placeholder: true,
          placeholderSize: 50,
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],
    [withBundleAnalyzer, {}],
  ],
  nextConfig,
);
