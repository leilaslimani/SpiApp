app.controller('statistiquesController', function($scope, $http) {

	   $http.get("/formations/count")
 	   .then( function(response){
 		 //  console.log($routeParams.noEnseignant);
 		   $scope.nbFormations = response.data;
 		  // $scope.detailFormation=response.data;
 		   
 	   });
	   
	   $http.get("/enseignants/count")
 	   .then( function(response){
 		 //  console.log($routeParams.noEnseignant);
 		   $scope.nbEnseignants = response.data;
 		  // $scope.detailFormation=response.data;
 		   
 	   });


});