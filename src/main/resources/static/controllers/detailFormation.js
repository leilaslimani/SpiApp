app.controller('detailFormationController', function($scope, $http, $routeParams) {
	   $http.get("/formations/id/"+$routeParams.id)
 	   .then( function(response){
 		
 		   $scope.detailFormation=response.data;
 		   console.log($scope.detailFormation);
 	   });
	
 
});