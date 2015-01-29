var j4uControllers = angular.module('j4uControllers', []);

j4uControllers.controller('DealListCtrl', ['$scope', 'Deal', function($scope, Deal) {
  $scope.deals = Deal.query();
  $scope.orderProp = 'age';
}]);
