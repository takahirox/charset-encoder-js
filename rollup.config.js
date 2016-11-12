export default {
  entry: 'index.js',
  targets: [
    {
      format: 'umd',
      moduleName: 'window',  // for upward compatibility
      dest: 'build/charsetencoder.js'
    },
    {
      format: 'es',
      dest: 'build/charsetencoder.module.js'
    }
  ]
};
