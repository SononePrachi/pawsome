package com.spring.services;

import java.util.List;

import com.spring.entities.Community;

public interface CommunityService {
    Community save(Community community);
    
	Community findByCname(String cname);
	
	Community findByPincode(int pincode);
	
	List<Community> findAll();
	
	boolean deleteByCid(int cid);


}
