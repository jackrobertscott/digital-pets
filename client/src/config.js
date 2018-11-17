const environment = process.env.REACT_APP_NODE_ENV || 'development';

const config = {
  environment,
  appName: 'Digital Pets',
  website: '',
};

switch (environment) {
  case 'production':
    Object.assign(config, {
      debug: false,
      assetPath: './assets',
      urls: {
        spa: '',
        api: '',
      },
    });
    break;
  default:
    Object.assign(config, {
      debug: true,
      assetPath: '/assets',
      urls: {
        spa: 'http://localhost:3000',
        api: 'http://localhost:4000',
      },
    });
    break;
}

export default config;
