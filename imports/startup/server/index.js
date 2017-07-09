/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import { render as prettyjson } from 'prettyjson';

const app = express();
const publicDir = path.resolve(__dirname, '../../../public');

app.use('/', express.static(publicDir));
app.listen(process.env.PORT || 8080);

console.log(prettyjson(app.locals));
