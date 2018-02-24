app.controller('ajouterFormationController', function($scope, $http,$location) {

	$scope.savedata = function() {


		var obj = {};
		obj.codeFormation = $scope.codeFormation;
		obj.nomFormation = $scope.nomFormation;
		obj.diplome = $scope.diplome;
		obj.n0Annee = $scope.noAnnee;
		obj.doubleDiplome = $scope.doubleDiplome;
		obj.finAccreditation = $scope.finAcc;
		obj.debutAccreditation = $scope.debutAcc;

		console.log(obj);
		$http.post("/formations", obj).then(function(response) {
			console.log(response.data);
			console.log("Ajouté !!!!");
			$location.path('formations');

		});
	};

	recupererFormations = function() {
		$http.get("/formations").then(function(response) {
			$scope.formations = response.data;

		});
	}


});