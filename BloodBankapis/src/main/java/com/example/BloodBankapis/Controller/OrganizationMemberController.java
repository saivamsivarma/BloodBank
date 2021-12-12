package com.example.BloodBankapis.Controller;

import com.example.BloodBankapis.Models.Organization_members;
import com.example.BloodBankapis.Repository.OrganizationMemberRepository;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/organization_member")
public class OrganizationMemberController {
    private final OrganizationMemberRepository organizationMemberRepository;


    public OrganizationMemberController(OrganizationMemberRepository organizationMemberRepository) {
        this.organizationMemberRepository = organizationMemberRepository;
    }

    //create Organization Member
    @PostMapping("/{_id}")
    public ResponseEntity createOrgMember(@PathVariable ObjectId _id, @RequestBody Organization_members organization_members){
        organization_members.setOrganization_id(_id);
        organizationMemberRepository.insert(organization_members);
        return ResponseEntity.ok(organization_members);
    }

    //getting details of specified Organization Member
    @GetMapping("/{_id}")
    public ResponseEntity findMember(@PathVariable String _id) {
        try{
            Object Member = organizationMemberRepository.findById(_id);
            return ResponseEntity.ok(Member);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e);
        }
    }

    //get details member of specified Organizations and specified member
    @GetMapping("/getMembers/{_id}")
    public ResponseEntity findOrgMember(@PathVariable ObjectId _id){
        try{
            Object orgMember = organizationMemberRepository.findByOrganization_id(_id);
            return ResponseEntity.ok(orgMember);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e);
        }
    }

    //Organization_member Login
    @PostMapping("/login/")
    public ResponseEntity userLogin(@RequestBody Organization_members userLogin){
        String Email = userLogin.getEmail();
        String password = userLogin.getPassword();
        Optional<Organization_members> user = organizationMemberRepository.findByEmail(Email);
        try{
            String StoredMember = user.get().getPassword();

            if(password.equals(StoredMember)){
                return ResponseEntity.ok(user);
            }
            return ResponseEntity.status(501).body("Wrong Organization");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e);
        }
    }

    //getAll member of specified Organizations
    @GetMapping("/getOrgMembers/{id}")
    public ResponseEntity<List<Organization_members>> getALlOrgMembers(@PathVariable ObjectId id){
        List<Organization_members> results = organizationMemberRepository.findByOrg_id(id);
        return ResponseEntity.ok(results);
    }
}
