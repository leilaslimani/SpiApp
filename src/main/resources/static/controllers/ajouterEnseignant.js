app.controller('ajouterEnseignantController', function($scope, $http) {

$scope.saveEns=function () {
    	console.log($scope.noEnseignant);
    	var data = {};
    	data.noEnseignant=$scope.noEnseignant;
    	data.type=$scope.type;
    	data.sexe=$scope.sexe;
    	data.nom=$scope.nom;
    	console.log($scope.prenom);
    	data.prenom=$scope.prenom;
    	data.adresse=$scope.adresse;
    	data.codePostal=$scope.codePostal;
    	data.ville=$scope.ville;
    	data.pays=$scope.pays;
    	data.mobile=$scope.mobile;
    	data.telephone=$scope.telephone;
    	data.emailUbo=$scope.emailUbo;
    	data.emailPerso=$scope.emailPerso;
    	
    	 $http.post("/enseignants", data)
         .then(function(response){
        	 
         	console.log(response.data);
     });
    };





});