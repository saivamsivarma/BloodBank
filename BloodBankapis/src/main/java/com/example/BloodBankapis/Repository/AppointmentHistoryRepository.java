package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.AppointmentHistory;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface AppointmentHistoryRepository extends MongoRepository<AppointmentHistory,String> {
    //custom query's
    @Query(value="{UserId: ?0}")
    List<AppointmentHistory> findByUser_id(ObjectId _id);
}
