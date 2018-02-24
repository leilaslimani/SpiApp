package fr.univbrest.dosi.repositories;

import org.springframework.data.repository.CrudRepository;

import fr.univbrest.dosi.bean.DemoUser;


public interface DemoUserRepository extends CrudRepository<DemoUser, Long> {
	
	DemoUser findByUserName(String userName);
}
