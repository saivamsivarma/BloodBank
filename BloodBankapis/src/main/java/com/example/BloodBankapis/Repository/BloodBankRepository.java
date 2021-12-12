package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.BloodBank;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface BloodBankRepository extends MongoRepository<BloodBank,String> {
    //custom query's
    @Query(value="{Org_id: ?0}")
    BloodBank findByOrg_id(ObjectId _id);
}
