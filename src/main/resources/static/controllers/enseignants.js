
app.controller('enseignantController', function($scope, $http) {
	
	
    $http.get("/enseignants")
    .then(function(response) {
        $scope.enseignants = response.data;
    });
        
    $scope.detail=function(noEnseignant){
	   $http.get("/enseignants/"+noEnseignant)
	   .then( function(response){
		   $scope.IsVisible = $scope.IsVisible =true ;
		   $scope.detailEnseignant=response.data;
	   });
   }
    

    recupererEneignants = function() {
		$http.get("/enseignants").then(function(response) {
			$scope.enseignants= response.data;

		});
	}

    
    $scope.supprimer=function(noEnseignant){
    	
  	   $http.delete("/enseignants/del/"+noEnseignant)
  	 .then( function(response){
  		 console.log("enseignant supprimé");
	   });
  
   }

    

});