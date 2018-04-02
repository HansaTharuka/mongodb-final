const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe our test
describe('Nesting Records',function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });

  //Creates Tests
  it('Create an author with sub-documents',function(done){
      var pat=new Author({
        name:'Hansa Tharuka',
        books:[{title:'Harry Potter Final',pages:400}]
      });
    pat.save().then(function(){
      Author.findOne({name:'Hansa Tharuka'}).then(function(record){
        assert(record.books.length===1);
        done();

      });

    });

  });

  it('Adds a Book to an author',function(done){

    var pat=new Author({
      name:'Hansa Tharuka',
      books:[{title:'Harry Potter Final',pages:400}]
    });
    pat.save().then(function(){

      Author.findOne({name:'Hansa Tharuka'}).then(function(record){
        //add a book to a book array
        record.books.push({title:'harry Potter secound',pages:500});
        record.save().then(function(){
          Author.findOne({name:'Hansa Tharuka'}).then(function(result){
            assert(result.books.length===2);
            done();
          });
        });

      });

    });

  });

});
