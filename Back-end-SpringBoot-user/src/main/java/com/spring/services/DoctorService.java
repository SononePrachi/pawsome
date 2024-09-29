package com.spring.services;

import java.util.List;

import com.spring.entities.Doctor;
import com.spring.entities.User;

public interface DoctorService {
    
    Doctor save(Doctor doctor);
    
    Doctor findEmail(Doctor doctor);
    
    Doctor findByDrid(int drid);
    
    Doctor findByEmail(String email);
	
    Doctor findByFname(String fname);
    
	 List<Doctor> findAll();
	 
	 boolean deleteByDrid(int drid);
	 
	 Doctor update(Doctor d);
	 
	 

}
