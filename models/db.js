const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017//blogDB',{ useNewUrlParser: true } ,(err) => {
    if(!err) { console.log('MongoDB Connection succeeded') }
    else { console.log('Error in DB connection : ' + err)}
});

require('./blog.model');


