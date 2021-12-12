package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.Donation;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.ArrayList;
import java.util.List;

public interface DonationRepository extends MongoRepository<Donation,String> {
    //custom query's
    @Query(value="{UserId: ?0}",sort = "{_id:-1}")
    List<Donation> findByUser_id(ObjectId _id);

    @Query(value="{UserId: ?0}",sort = "{_id:-1}")
    ArrayList<Donation> findByUserId(ObjectId _id);
}
