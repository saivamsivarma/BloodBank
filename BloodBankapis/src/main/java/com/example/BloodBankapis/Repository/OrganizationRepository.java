package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.Organization;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface OrganizationRepository extends MongoRepository<Organization,String> {
    //custom query's
    Organization findBy_id(String _id);

    @Query(value="{Status: ?0}")
    ArrayList<Organization> findByStatus(String state);
    @Query(value="{City: ?0}")
    ArrayList<Organization> findByCity(String City);

    @Query(value="{State: ?0}")
    ArrayList<Organization> findByState(String State);
}
