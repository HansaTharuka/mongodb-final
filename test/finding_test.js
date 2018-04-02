const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){

var char;

beforeEach(function(done){
  char = new MarioChar({
    name: 'Mario',
    weight: 50
  });

  char.save().then(function(){
  
    done();
  });

});
  // Find tests
  it('Find one record from the database', function(done){

    MarioChar.findOne({name:'Mario'}).then(function(result){
      assert(result.name==='Mario');
      done();

    });

  });

  //Find by Id
  it('Find one record by ID from the database', function(done){

    MarioChar.findOne({_id:char._id}).then(function(result){
      assert(result._id.toString()===char._id.toString());
      done();

    });

  });


});
