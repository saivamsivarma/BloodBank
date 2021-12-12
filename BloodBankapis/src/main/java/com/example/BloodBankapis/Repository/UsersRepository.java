package com.example.BloodBankapis.Repository;

import com.example.BloodBankapis.Models.Roles;
import com.example.BloodBankapis.Models.User;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsersRepository extends MongoRepository<User,String> {
    //custom query's
    @Query(value = "{Email: ?0}")
    Optional<User> findByEmail(String Email);
    User findBy_id(String _id);

    User findBy_id(ObjectId id);

    @Query(value="{RoleType: ?0}")
    User findByRoleType(Roles RoleType);

    List<User> findAllBy(TextCriteria criteria, Sort sort);
}
