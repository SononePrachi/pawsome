package com.spring.services;

import java.util.List;

import com.spring.entities.Dog;

public interface DogService {
    
    Dog save(Dog dog);
	
	Dog findByDname(String dname);
	
	List<Dog> findByDbreed(String dbreed);
	
	List<Dog> findAll();
	
	boolean deleteByDid(int did);

}
