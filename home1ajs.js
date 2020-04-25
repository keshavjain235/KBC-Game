var a = angular.module("app",[]);
		var b = function($scope, $location, $window, $http) {
			$scope.navigate = function() {
				if($scope.enteredUserName!=null)
				{
					var naming = $scope.enteredUserName;
					$window.location.href = "main1.html?val="+naming;
				}
			}
		};
		a.controller("homeController", b);