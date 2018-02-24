app.controller('detailEnseignantController', function($scope, $http, $routeParams) {
	   $http.get("/enseignants/id/"+$routeParams.id)
 	   .then( function(response){
 		
 		   $scope.detailEnseignant=response.data;
 		   console.log($scope.detailEnseignant);
 	   });
	
  /*  $scope.detail=function(id){
 	   $http.get("/formations/"+id)
 	   .then( function(response){

 		   $scope.detailFormation=response.data;
 	   });
    }*/
});