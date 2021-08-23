const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src',
        /* tsConfigPath should point to the file where "baseUrl" and "paths" 
             are specified*/
        tsConfigPath: './tsconfig.paths.json',

        extends: './tsconfig.paths.json',
      },
    },
  ],
  eslint: {
    enable: false /* (default value) */,
    mode: 'file',
    configure: (eslintConfig, { env, paths }) => {
      return eslintConfig;
    },
    pluginOptions: (eslintOptions, { env, paths }) => {
      return eslintOptions;
    },
  },
};
