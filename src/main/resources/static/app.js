

var app = angular.module('SpiApp', [
		'ngRoute'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/statistiques.html',
				controller: 'statistiquesController'
			})
			.when('/formations', {
				templateUrl: 'views/formations.html',
				controller: 'formationController'
			})
			.when('/ajouterFormation', {
				templateUrl: 'views/ajouterFormation.html',
				controller: 'ajouterFormationController'
			})			
			.when('/modifierFormation/:id', {
				templateUrl: 'views/modifierFormation.html',
				controller: 'modifierFormationController'
			})
			.when('/detailFormation/:id', {
				templateUrl: 'views/detailFormation.html',
				controller: 'detailFormationController'
			})
			.when('/enseignants', {
				templateUrl: 'views/enseignants.html',
				controller: 'enseignantController'
			})
			.when('/ajouterEnseignant', {
				templateUrl: 'views/ajouterEnseignant.html',
				controller: 'ajouterEnseignantController'
			})			
			.when('/modifierEnseignant/:id', {
				templateUrl: 'views/modifierEnseignant.html',
				controller: 'modifierEnseignantController'
			})
			.when('/detailEnseignant/:id', {
				templateUrl: 'views/detailEnseignant.html',
				controller: 'detailEnseignantController'
			})
			.otherwise({
				redirectTo: '/'
			});
		
		
	});










