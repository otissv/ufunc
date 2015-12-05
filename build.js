const fs = require('fs');
const Browserify = require('browserify');


const b = new Browserify({debug: true});

b.add('./index.js');

b.transform('babelify', {
  presets: ['es2015', 'stage-0']
});

b.plugin('minifyify', { map: 'index.min.map', output: './dist/ufunc.min.map' });

b.bundle(function (err, src, map) {
  if (err) {
    throw err;
  }
  fs.writeFile('./dist/ufunc.min.js', src);
  fs.writeFile('./dist/ufunc.min.map', map);
});
// "build": "browserify index.js -o ./dist/ufunc.js -t [ babelify --presets [ es2015 stage-0 ] ] --debug  | ./dist/ufunc.sourcemap.js  ",
