app.controller('modifierEnseignantController', function($scope, $http, $routeParams,$location) {
	$scope.enseignant = {};
		  $http.get("/enseignants/id/"+$routeParams.id)
	 	   .then( function(response){
	 		
	 		  $scope.enseignant=response.data;
	 	   });
	
		 // console.log($scope.enseignant);
		  $scope.updateE =function(){
			  $http.put("/enseignants", $scope.enseignant)
	        .success(function (enseignant) {
	            console.log("updated");
	            $location.path('enseignants');
	        });
		  }
	});

