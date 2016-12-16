import PageHeader from './page-header.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export default ngModule => {
  ngModule.directive('smPageHeader', () => {
    return {
      restrict: 'E',
      scope: {},
      controller: function($scope) {
        const vm = this;
        //$scope.greeting = 'Hello Worlds';
      },
      link: function(scope, el, attrs) {

        ReactDOM.render(React.createElement(PageHeader, {store:scope}), el[0]);
      }
    }
  });
};