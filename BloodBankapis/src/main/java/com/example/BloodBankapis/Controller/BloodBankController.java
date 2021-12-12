package com.example.BloodBankapis.Controller;

import com.example.BloodBankapis.Models.BloodBank;
import com.example.BloodBankapis.Repository.BloodBankRepository;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/bloodBank")
public class BloodBankController {
    final private BloodBankRepository bloodBankRepository;

    public BloodBankController(BloodBankRepository bloodBankRepository) {
        this.bloodBankRepository = bloodBankRepository;
    }

    //creating BloodBank of the Organization
    @PostMapping("/")
    public ResponseEntity createBloodBank(@RequestBody BloodBank bloodBank){
        bloodBankRepository.insert(bloodBank);
        return ResponseEntity.ok(bloodBank);
    }

    //getting details of the Blood BAnk in organizations
    @GetMapping("/bloodBankDetails/{id}")
    public ResponseEntity getBloodBankDetails(@PathVariable ObjectId id){
        Object bloodBank = bloodBankRepository.findByOrg_id(id);
        return ResponseEntity.ok(bloodBank);
    }

}
