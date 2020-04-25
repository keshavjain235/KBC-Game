var app = angular.module("myapp2",[]);
app.controller("restartController", function($scope, $location, $rootScope, $http, $window) {

    new Audio("audio/Correctans.mp3").play();
	
    $scope.reStart = function() {
		$window.location.href = "home1.html";
	};
	
    $scope.urlParam = function(name){
    	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    	if (results==null) {
       		return null;
    	}
    	return decodeURI(results[1]) || 0;
	};

});