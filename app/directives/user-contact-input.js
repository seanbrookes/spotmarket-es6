import UserContactInput from './user-contact-input.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export default ngModule => {
  ngModule.directive('smUserContact', () => {
    return {
      restrict: 'E',
      scope: {},
      controller: function($scope) {
        const vm = this;
        //$scope.greeting = 'Hello Worlds';
      },
      link: function(scope, el, attrs) {

        ReactDOM.render(React.createElement(MainNav, {store:scope}), el[0]);
      }
    }
  });
};

