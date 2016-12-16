import MainNav from './main-nav.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export default ngModule => {
  ngModule.directive('smMainNav', () => {
    return {
      restrict: 'E',
      scope: {},
      controller: function($scope) {
        const vm = this;
        console.log('| hello world');
        //$scope.greeting = 'Hello Worlds';
      },
      link: function(scope, el, attrs) {

        ReactDOM.render(React.createElement(MainNav, {store:scope}), el[0]);
      }
    }
  });
};