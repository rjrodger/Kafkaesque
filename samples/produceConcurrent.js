'use strict';

var kafkaesque = require('../lib/kafkaesque')({brokers: [{host: 'localhost', port: 9092}],
                                               clientId: 'fish',
                                               maxBytes: 2000000});
kafkaesque.tearUp(function() {
  kafkaesque.produce({topic: 'testing', partition: 0}, ['wotcher mush', 'orwlight geezer'], function(err, response) {
    console.log(err);
    console.log(response);
  });
  kafkaesque.produce({topic: 'testing', partition: 0}, ['wotcher mush', 'orwlight geezer'], function(err, response) {
    console.log(err);
    console.log(response);
  });
  kafkaesque.produce({topic: 'testing', partition: 0}, ['wotcher mush', 'orwlight geezer'], function(err, response) {
    console.log(err);
    console.log(response);
  });
  kafkaesque.produce({topic: 'testing', partition: 0}, ['wotcher mush', 'orwlight geezer'], function(err, response) {
    console.log(err);
    console.log(response);
  });
  kafkaesque.produce({topic: 'testing', partition: 0}, ['wotcher mush', 'orwlight geezer'], function(err, response) {
    console.log(err);
    console.log(response);
  });
  kafkaesque.produce({topic: 'testing', partition: 0}, ['wotcher mush', 'orwlight geezer'], function(err, response) {
    console.log(err);
    console.log(response);
  });
  kafkaesque.produce({topic: 'testing', partition: 0}, ['wotcher mush', 'orwlight geezer'], function(err, response) {
    console.log(err);
    console.log(response);
  });
});


