package com.spring.services;

import java.util.List;

import com.spring.entities.Hostel;

public interface HostelService {
    
    Hostel save(Hostel h);
    
	List<Hostel> findAll();
	
	boolean deleteByHid(int hid);

}
