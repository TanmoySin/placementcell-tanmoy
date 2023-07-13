const mongoose = require('mongoose');
const DB = 'mongodb://tanmoysin1997:Iamgood111@ac-o1afx2o-shard-00-00.2swpsxg.mongodb.net:27017,ac-o1afx2o-shard-00-01.2swpsxg.mongodb.net:27017,ac-o1afx2o-shard-00-02.2swpsxg.mongodb.net:27017/?ssl=true&replicaSet=atlas-8mmslk-shard-0&authSource=admin&retryWrites=true&w=majority';



mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
