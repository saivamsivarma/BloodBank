package com.example.BloodBankapis.Controller;

import com.example.BloodBankapis.Models.Organization;
import com.example.BloodBankapis.Repository.OrganizationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/organization")
public class OrganizationController {
    private final OrganizationRepository organizationRepository;

    public OrganizationController(OrganizationRepository organizationRepository) {
        this.organizationRepository = organizationRepository;
    }

    //creating Organization
    @PostMapping
    public ResponseEntity createOrg(@RequestBody Organization organization){
        organizationRepository.insert(organization);
        return ResponseEntity.ok(organization);
    }

    //getting all organizations
    @GetMapping
    public ResponseEntity<List<Organization>> getAllOrganizations(){
        return ResponseEntity.ok(organizationRepository.findAll());
    }

    @GetMapping("/pending")
    public ResponseEntity<ArrayList<Organization>> getAllPendingOrganizations(){
        ArrayList<Organization> pendingOrganizations = organizationRepository.findByStatus("Pending");
       return ResponseEntity.ok(pendingOrganizations);
    }


    //getting specified Organization
    @GetMapping("/{_id}")
    public ResponseEntity findOrganization(@PathVariable String _id) {
        try{
            return ResponseEntity.ok(organizationRepository.findById(_id));
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e);
        }
    }

    //get organization based on city
    @GetMapping("/city/{city_name}")
    public ResponseEntity<ArrayList<Organization>> findOrganizationCity(@PathVariable String city_name){
        ArrayList<Organization> organizationsList = organizationRepository.findByCity(city_name);
        ArrayList<Organization> cityOrganizationArrayList = new ArrayList<>();
        for(int i =0;i<=organizationsList.size()-1;i++){
            String status = organizationsList.get(i).getStatus();
            if(status.equals("Completed")){
                cityOrganizationArrayList.add(organizationsList.get(i));
            }
        }
            return ResponseEntity.ok(cityOrganizationArrayList);
    }

    @GetMapping("/State/{name}")
    public ResponseEntity<List<Organization>> findOrganizationState(@PathVariable String name){
        ArrayList<Organization> organizationsList = organizationRepository.findByState(name);
        ArrayList<Organization> stateOrganizationArrayList = new ArrayList<>();
        for(int i =0;i<=organizationsList.size()-1;i++){
            String status = organizationsList.get(i).getStatus();
            if(status.equals("Completed")){
                stateOrganizationArrayList.add(organizationsList.get(i));
            }
        }
        return ResponseEntity.ok(stateOrganizationArrayList);
    }

    //updating organization Status
    @PostMapping("/status/")
    public ResponseEntity updateUserStatus(@RequestBody Organization org){
        Organization organization = organizationRepository.findBy_id(org.get_id());
        try{
            organization.setStatus(org.getStatus());
            organizationRepository.save(organization);
            return ResponseEntity.ok(organization);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e);
        }
    }

}
