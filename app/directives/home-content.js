import HomeContent from './home-content.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export default ngModule => {
  ngModule.directive('smHomeContent', () => {
    return {
      restrict: 'E',
      scope: {},
      controller: function($scope) {
        const vm = this;
        //$scope.greeting = 'Hello Worlds';
      },
      link: function(scope, el, attrs) {

        ReactDOM.render(React.createElement(HomeContent, {store:scope}), el[0]);
      }
    }
  });
};