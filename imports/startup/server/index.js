import express from 'express';
import path from 'path';

const app = express();
const publicDir = path.resolve(__dirname, '../../../public');

app.use('/', express.static(publicDir));
app.listen(process.env.PORT || 8080);
