var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
   $scope.firstName = "Daniel";

   $scope.dataTable = [
      { name: "attapon1", lastname: "jangpai1" },
      { name: "attapon2", lastname: "jangpai2" },
      { name: "attapon3", lastname: "jangpai3" },
      { name: "attapon4", lastname: "jangpai4" },
   ];

   $scope.dataTable.forEach(ele => {
      console.log("item : " + ele.name + " " + ele.lastname);
   });


   $scope.myFunc = function () {
      $scope.showData = $scope.firstName;
   }


});