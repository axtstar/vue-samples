const mix = require('laravel-mix');

const glob = require('laravel-mix-glob');

const globFunc = new glob({ mix });

const isMap = mix.inProduction() ? false : process.env.NODE_DEBUG=='true';

if ( isMap ) {
  mix.webpackConfig({
      devtool: 'inline-source-map'
  })
}

mix.webpackConfig({
  resolve: {
    extensions: ['.js','.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
});

mix.vue();

globFunc.js(['src/**/*.js'],'dist/', null, {
  base: {
    js:'src/'
  }
});
