(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.msg = "";
  $scope.itemCheck = function () {
    const items = $scope.list.split(',');
    var noOfItems = items.length;
    if(items == "")
    $scope.msg = "Please enter data first";
    else if (noOfItems<=3) {
    $scope.msg = "Enjoy!";
    }
    else {
      $scope.msg = "Too Much!";
    }
  };
}

})();
