var express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3000,
    bodyParser  = require('body-parser'),
    routes      = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log("Server Is Running on Port " + port);