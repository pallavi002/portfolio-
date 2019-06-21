
var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
    const err = new Error('The requested url was not found on this server');
    err.status = 404;
    next(err);
   });