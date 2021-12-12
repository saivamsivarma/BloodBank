package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.Appointments;
import com.example.BloodBankapis.Models.User;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointments,String> {
    //custom query's
    @Query(value="{UserId: ?0}")
    List<Appointments> findByUser_id(ObjectId _id);

    @Query(value="{OrganizationId: ?0}")
    List<Appointments> findByOrganizationId(ObjectId _id);

    List<Appointments> findAllBy(TextCriteria criteria, Sort sort);

    Appointments findBy_id(String id);
    void deleteBy_id(String id);
}
