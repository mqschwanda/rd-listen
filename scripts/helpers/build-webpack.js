import { exec } from 'shelljs';

export default function () {
  console.log('\n############################\n# Building with webpack... #\n############################\n');
  exec('./node_modules/.bin/webpack -p --progress --colors --config ./config/webpack.babel.js');
}
