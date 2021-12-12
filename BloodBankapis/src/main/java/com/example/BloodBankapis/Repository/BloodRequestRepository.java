package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.BloodRequest;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BloodRequestRepository extends MongoRepository<BloodRequest,String> {
    @Query(value="{Response_id: ?0}")
    List<BloodRequest> findByResponse_id(ObjectId id);

    @Query(value="{Response_id: ?0}")
    BloodRequest findByResponse_id(String id);
}
