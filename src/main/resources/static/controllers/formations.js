
app.controller('formationController', function($scope, $http,$routeParams,$location) {
	console.log("sss");
	
    $http.get("/formations")
    .then(function(response) {
        $scope.formations = response.data;
    });
        
    $scope.detail=function(id){
	   $http.get("/formations/id/"+id)
	   .then( function(response){
		   $scope.detailFormation=response.data;
	   });
   }
    
    $scope.recupererLaFormation = function(codeFormation){
		console.log("codeFormation:"+codeFormation);
			   $http.get("/formations/"+$routeParams.codeFormation)
			   .then( function(response){
				   $scope.formation=response.data;
			   });

	
}
    
    recupererFormations = function() {
		$http.get("/formations").then(function(response) {
			$scope.formations = response.data;

		});
	}

    
    $scope.supprimer=function(codeFormation){  	
  	  $http.delete("/formations/del/"+codeFormation)
  	 .then(	function(response){
  		 console.log("formation supprimé");
  		$location.path('formations');
	   });
  
   }

    

});