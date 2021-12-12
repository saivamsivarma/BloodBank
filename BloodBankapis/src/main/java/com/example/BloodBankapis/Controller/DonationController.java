package com.example.BloodBankapis.Controller;

import com.example.BloodBankapis.Models.Donation;
import com.example.BloodBankapis.Models.Roles;
import com.example.BloodBankapis.Models.User;
import com.example.BloodBankapis.Repository.AppointmentRepository;
import com.example.BloodBankapis.Repository.DonationRepository;
import com.example.BloodBankapis.Repository.UsersRepository;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/donation")
public class DonationController {
    private final DonationRepository donationRepository;
    private final UsersRepository usersRepository;

    public DonationController(DonationRepository donationRepository, UsersRepository usersRepository) {
        this.donationRepository = donationRepository;
        this.usersRepository = usersRepository;
    }

    //creating Donation record
    @PostMapping("/")
    public ResponseEntity createDonation(@RequestBody Donation donation){
        User user = usersRepository.findBy_id(donation.getUserId());
        Roles userRole = user.getRoleType();
        if(userRole.equals("Donor")){
            return ResponseEntity.ok(donationRepository.save(donation));
        }else{return ResponseEntity.ok("User Cannot donate");}
    }

    //getting Donation record
    @GetMapping("/{id}")
    public ResponseEntity<List<Donation>> getUserDonations(@PathVariable ObjectId id){
        return ResponseEntity.ok(donationRepository.findByUser_id(id));
    }
}