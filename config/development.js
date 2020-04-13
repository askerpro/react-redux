const commonConfig = require('./common');

const config = {
  ...commonConfig,
  mail: {
    to: 'askerpro@gmail.com',
    smtpPort: 25,
    smtpHost: 'localhost',
  },
};

module.exports = config;
