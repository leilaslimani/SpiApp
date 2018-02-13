package fr.univbrest.dosi.business;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.repositories.FormationRepository;

@Component
public class FormationBusinessJPA implements FormationBusiness {

	private FormationRepository repos;
	
	@Autowired
	public FormationBusinessJPA(FormationRepository repos) {
		this.repos = repos;
	}
		
	@Override
	public Formation creerFormation(Formation formationACreer) {
		
		if(formationACreer.getDebutAccreditation() == null) {
			formationACreer.setDebutAccreditation(new Date());
		}
				
		return repos.save(formationACreer);
	}

}