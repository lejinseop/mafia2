const { dependencies } = require('./package.json');

module.exports = {
  name: 'mafia2',
  filename: 'remoteEntry.js',
  remotes: {
    mafia_helper: 'mafia_helper@http://localhost:7500/remoteEntry.js',
  },
  exposes: {
    './RouteTest': './src/components/RouteTest.tsx',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    }
  }
}
