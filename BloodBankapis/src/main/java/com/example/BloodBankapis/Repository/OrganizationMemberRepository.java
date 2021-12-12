package com.example.BloodBankapis.Repository;


import com.example.BloodBankapis.Models.Organization_members;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrganizationMemberRepository extends MongoRepository<Organization_members,String> {
    //custom query's
    Organization_members findBy_id(String _id);
    @Query(value = "{Email: ?0}")
    Optional<Organization_members> findByEmail(String Email);
    @Query(value="{Organization_id: ?0}")
    Organization_members findByOrganization_id(ObjectId _id);
    @Query(value="{Organization_id: ?0}")
    List<Organization_members> findByOrg_id(ObjectId _id);
}
