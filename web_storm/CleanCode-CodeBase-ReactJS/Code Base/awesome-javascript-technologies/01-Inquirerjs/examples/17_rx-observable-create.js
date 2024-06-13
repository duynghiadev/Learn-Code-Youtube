var inquirer = require('../node_modules/inquirer');
var Rx = require('rx-lite-aggregates');

var observe = Rx.Observable.create(function (obs) {
  obs.onNext({
    type: 'input',
    name: 'first_name',
    message: 'What\'s your first name'
  });

  obs.onNext({
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name',
    default: function () {
      return 'Doe';
    }
  });

  obs.onNext({
    type: 'input',
    name: 'phone',
    message: 'What\'s your phone number',
    validate: function (value) {
      var pass = value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  });
  obs.onCompleted();
});

inquirer.prompt(observe).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
