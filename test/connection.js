const mongoose =require('mongoose');

//ES6 Promise
mongoose.Promise=global.Promise;

//Connect to the db before run the test
before(function(done){

  //Connect to MongoDB
  mongoose.connect('mongodb://localhost/testaroo');
  mongoose.connection.once('open',function(){
    console.log('Connection has been made , Now make fireworks..!');
    done();
  }).on('error',function(error){
    console.log('Connection error',error);
  });

});

//Drop the characters collection before each test
beforeEach(function(done){
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
      done();
    });
});
