package com.spring.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.entities.Hostel;

public interface HostelDao extends JpaRepository<Hostel,Integer>{
    
    Hostel save(Hostel h);
    
	List<Hostel> findAll();
	
	void deleteByHid(int hid);

}
