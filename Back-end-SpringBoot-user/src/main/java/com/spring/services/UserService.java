package com.spring.services;

import java.util.List;


import com.spring.entities.User;

public interface UserService {
    
    User save(User user);
    
	User findByEmail(String email);
	
	 User findEmail(User user);
	 
	 List<User> findAll();
	 
	 boolean deleteById(int uid);
	 
	 User update(User u);
	 
	 User findByFname(String fname);
	 
	 User findByUid(int id);
}
