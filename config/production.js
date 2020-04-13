const commonConfig = require('./common');

const config = {
  ...commonConfig,
  mail: {
    to: 'support@okna-berta.ru',
    smtpPort: 25,
    smtpHost: 'localhost',
  },
};

module.exports = config;
