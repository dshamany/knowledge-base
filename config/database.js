let mongoose = require('mongoose');

mongoose.connect(process.env.LOCAL_HOST,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }    
)

let db = mongoose.connection;

db.on('connected', () => {
    console.log(`MongoDB on ${db.host}:${db.port}`);
});

module.exports = mongoose;