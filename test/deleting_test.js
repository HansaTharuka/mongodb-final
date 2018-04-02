const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Deleting records', function(){

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
  // DeleteOne tests
  it('Delete one record from the database', function(done){

    MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
      MarioChar.findOne({name:'Mario'}).then(function(result){
          assert(result===null);
          done();

      });
    });

  });



});
