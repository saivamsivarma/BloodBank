package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends MongoRepository<Admin,String> {
    //custom query's
    @Query(value = "{Email: ?0}")
    Optional<Admin> findByEmail(String Email);
}
