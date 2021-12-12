package com.example.BloodBankapis.Service;

import com.example.BloodBankapis.Exception.UserExistsException;
import com.example.BloodBankapis.Models.Roles;
import com.example.BloodBankapis.Models.User;
import com.example.BloodBankapis.Repository.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private static final String User_Already_Exists ="Email Already Exists";
    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public User getUserDetails(String _id){
        return usersRepository.findById(_id).orElseThrow(()-> new RuntimeException(String.format("Cannot find user with -%s",_id)));
    }

    public User getUserByRole(Roles RoleType){
        return usersRepository.findByRoleType(RoleType);
    }

    public void updateStatus(String _id, Roles RoleType){
        User userDetails = usersRepository.findBy_id(_id);
        try{
            if(userDetails.getRoleType()==Roles.newUser){
                userDetails.setRoleType(RoleType);
                usersRepository.save(userDetails);
            }else{
             throw new UserExistsException("User is a "+ userDetails.getRoleType());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
