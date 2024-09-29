package com.spring.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.entities.Dog;


public interface DogDao extends JpaRepository <Dog, Integer> {
    
    Dog save(Dog d);
    
	Dog findByDname(String dname);
	
	List<Dog> findByDbreed(String dbreed);
	
	List<Dog> findAll();
	
	void deleteByDid(int did);
	
}
