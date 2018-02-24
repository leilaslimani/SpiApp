app.controller('modifierFormationController', function($scope, $http, $routeParams,$location) {
		$scope.formation = {};
		  $http.get("/formations/id/"+$routeParams.id)
	 	   .then( function(response){
	 		
	 		  $scope.formation=response.data;
	 		  $scope.formation.debutAccreditation = new Date($scope.formation.debutAccreditation);
	 	      $scope.formation.finAccreditation = new Date($scope.formation.finAccreditation);
	 	   });
		  $scope.updatedata = function(){
			  $http.put("/formations", $scope.formation)
	        .success(function (formation) {
	            console.log("updated");
	            $location.path('formations');
	        });
		  }
	});

