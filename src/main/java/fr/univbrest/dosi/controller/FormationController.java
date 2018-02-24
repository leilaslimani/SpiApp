package fr.univbrest.dosi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.univbrest.dosi.bean.Enseignant;
import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.business.FormationBusiness;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@RestController
@RequestMapping("/formations")
public class FormationController {
	
	private FormationBusiness business;

	@Autowired
	public FormationController(FormationBusiness business) {
		this.business = business;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Formation creerFormation(@RequestBody Formation formationACreer) {
		return business.creerFormation(formationACreer);
	}
	
	
	@RequestMapping(method = RequestMethod.GET)
	
	public List<Formation> recupererToutesLesFormations() {
		return business.recupererToutesLesFormations();
	}
	

	@RequestMapping(method = RequestMethod.GET, value="/nom/{nom}")
	public List<Formation> recupererLaFormationAvecLeNom(@PathVariable String nom) {
		return business.rechercherFormationParNom(nom);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value="/del/{id}")
	public String supprimerFormation( @PathVariable String id) {
		Formation c=  recupererLaFormationAvecLId(id);
		business.supprimerFormation(c);
		return "Formation supprimé";
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/id/{id}")
	public Formation recupererLaFormationAvecLId(@PathVariable String id) {
		return business.rechercherFormationParId(id);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/count")
	public long compterFormation() {
		return business.compterformation();
	}
	@RequestMapping(method = RequestMethod.PUT)
	public Formation modifierFormation(@RequestBody Formation formationAModifier) {
		return business.modifierFormation(formationAModifier);
	}
}
