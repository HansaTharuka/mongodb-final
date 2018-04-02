const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){

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
  // Updating tests
  it('Update one record from the database', function(done){

    MarioChar.findOneAndUpdate({name:'Mario'},{name:'Hansa'}).then(function(){
      MarioChar.findOne({_id:char._id}).then(function(result){
          assert(result.name==='Hansa');
          done();

      });
    });

  });

  // Updating tests
  it('Incriment Weight by one from one record from the database', function(done){

    MarioChar.update({},{$inc:{weight:1}}).then(function(){
      MarioChar.findOne({name:'Mario'}).then(function(record){
          assert(record.weight===51);
          done();

      });
    });

  });




});
