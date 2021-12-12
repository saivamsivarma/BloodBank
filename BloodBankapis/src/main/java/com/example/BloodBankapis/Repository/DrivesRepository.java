package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.Drives;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface DrivesRepository extends MongoRepository<Drives,String> {
    //custom query's
    @Query(value="{Organized_id: ?0}")
    List<Drives> findByOrg_id(ObjectId _id);
    Drives findBy_id(String _id);

    @Query(value="{City:?0}")
    List<Drives> findByCity(String City);

    @Query(value="{State:?0}")
    List<Drives> findByState(String State);
}
