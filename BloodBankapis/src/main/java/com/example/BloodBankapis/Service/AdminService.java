package com.example.BloodBankapis.Service;

import com.example.BloodBankapis.Exception.UserExistsException;
import com.example.BloodBankapis.Models.Admin;
import com.example.BloodBankapis.Repository.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    private static final String User_Already_Exists ="Email Already Exists";
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public void addAdmin(Admin admin) {
        boolean emailExists = adminRepository.findByEmail(admin.getEmail()).isPresent();
        try{
            if(!emailExists){
                adminRepository.insert(admin);
            }else{
                throw new UserExistsException(String.format(User_Already_Exists));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public Admin getAdmin(String _id){
        return adminRepository.findById(_id)
                .orElseThrow(() -> new RuntimeException(String.format("Cannot Find Admin with - %s", _id)));
    }
}
