var j4uServices = angular.module('j4uServices', ['ngResource']);

j4uServices.factory('Deal', ['$resource',
  function($resource){
    return $resource('deals/:dealId.json', {}, {
      query: {method:'GET', params:{dealId:'deals'}, isArray:true}
    });
}]);