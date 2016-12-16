const angular = require('angular');
const uiRouter = require('angular-ui-router');

const ngModule = angular.module('Main', [uiRouter])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('hello', {
        url: '/hello',
        templateUrl: './home.html'
      });
    });

require('./directives')(ngModule);