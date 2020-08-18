// Refer: https://github.com/lokesh-007/wasm-react-rust

const path = require('path');

module.exports = function override(config, env) {
  config.resolve.extensions.push('.wasm');

  config.module.rules.forEach((rule) => {
    (rule.oneOf || []).forEach((oneOf) => {
      if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
        // Make file-loader ignore WASM files
        oneOf.exclude.push(/\.wasm$/);
      }
    });
  });
  return config;
};
