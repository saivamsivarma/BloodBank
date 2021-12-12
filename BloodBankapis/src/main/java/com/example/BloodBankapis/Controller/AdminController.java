package com.example.BloodBankapis.Controller;

import com.example.BloodBankapis.Models.Admin;
import com.example.BloodBankapis.Repository.AdminRepository;
import com.example.BloodBankapis.Service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;
    private final AdminRepository adminRepository;

    public AdminController(AdminService adminService, AdminRepository adminRepository) {
        this.adminService = adminService;
        this.adminRepository = adminRepository;
    }

    //create Admin
    @PostMapping
    public ResponseEntity addAdmin(@RequestBody Admin admin) throws Exception {
        adminService.addAdmin(admin);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    //Admin login
    @PostMapping("/login")
    public ResponseEntity userLogin(@RequestBody Admin adminLogin){
        String password = adminLogin.getPassword();
        System.out.println(password+" "+adminLogin.getEmail());
        Optional<Admin> admin = adminRepository.findByEmail(adminLogin.getEmail());
        try{
            String StoredPassword = admin.get().getPassword();

            if(password.equals(StoredPassword)){
                return ResponseEntity.ok(admin);
            }
            return ResponseEntity.status(501).body("Wrong Password");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e);
        }
    }

    //get admin details
    @GetMapping("/{_id}")
    public ResponseEntity findAdmin(@PathVariable String _id) {
        return ResponseEntity.ok(adminService.getAdmin(_id));
    }
}
