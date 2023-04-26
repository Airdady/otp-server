require("regenerator-runtime/runtime");
const express = require('express');
const Routes = require('./routes');
const { methodError, serverError } = require('./middleware');
const cors = require('cors');
require('./database');

const app = express();

app.use(express.json());

app.use(cors()).use(Routes).use(methodError).use(serverError);

app.listen(process.env.PORT || 9000);
