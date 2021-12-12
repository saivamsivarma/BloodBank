package com.example.BloodBankapis.Controller;

import com.example.BloodBankapis.Models.Drives;
import com.example.BloodBankapis.Models.Organization;
import com.example.BloodBankapis.Models.User;
import com.example.BloodBankapis.Repository.DrivesRepository;
import com.example.BloodBankapis.Repository.OrganizationRepository;
import com.example.BloodBankapis.Repository.UsersRepository;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/drives")
public class DrivesController {
    private final DrivesRepository drivesRepository;
    private final OrganizationRepository organizationRepository;
    private  final UsersRepository usersRepository;

    public DrivesController(DrivesRepository drivesRepository, OrganizationRepository organizationRepository, UsersRepository usersRepository) {
        this.drivesRepository = drivesRepository;
        this.organizationRepository = organizationRepository;
        this.usersRepository = usersRepository;
    }

    //getting all Drives
    @GetMapping("/")
    public ResponseEntity<List<Drives>> getAllDrives(){
        return ResponseEntity.ok(drivesRepository.findAll());
    }

    //creating Drive
    @PostMapping("/")
    public ResponseEntity createDrive(@RequestBody Drives drives){
        String orgId = drives.getOrganized_id();
        Organization orgDetails = organizationRepository.findBy_id(orgId);
        String OrgName= orgDetails.getOrganization_Name();
        ArrayList<String> user = new ArrayList<>();
        try{
            drives.setUserId(user);
            drives.setOrganization_Name(OrgName);
            drivesRepository.insert(drives);
            return ResponseEntity.ok(drives);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }

    //getting drives of specified organizations
    @GetMapping("/organizationDrives/{id}")
    public ResponseEntity<List<Drives>> getAllOrgDrives(@PathVariable ObjectId id){
        List<Drives> results = drivesRepository.findByOrg_id(id);
        return ResponseEntity.ok(results);
    }

    //getting drives details
    @GetMapping("/{_id}")
    public Map<String,Object> getDriveDetails(@PathVariable String _id){
        Map<String,Object> result = new HashMap<>();
        Drives driveDetails = drivesRepository.findBy_id(_id);
        Organization organization = organizationRepository.findBy_id(driveDetails.getOrganized_id());
        result.put("driveDetails",driveDetails);
        result.put("org_details",organization);
        ArrayList<String> userIds = driveDetails.getUserId();
        ArrayList<User> userArrayList = new ArrayList<>();
        if(userIds.size()!=0){
            for(int i=0;i<=userIds.size()-1;++i) {
                User user = usersRepository.findBy_id(userIds.get(i));
                userArrayList.add(user);
            }
        }
        result.put("users",userArrayList);
        return result;
    }

    @PostMapping("/userRegister/{driveId}")
    public ResponseEntity registerUser(@RequestBody String id, @PathVariable String driveId){
       Drives drive = drivesRepository.findBy_id(driveId);
        ArrayList<String> userRegister = drive.getUserId();
        if(!userRegister.contains(id)){
            userRegister.add(id);
            drive.setUserId(userRegister);
            drivesRepository.save(drive);
            return ResponseEntity.ok(drive);
        }else{
            return ResponseEntity.ok("Your Have Already Registered!");
        }
    }

    @GetMapping("/city/{name}")
    public ResponseEntity<ArrayList<Drives>> getDrivesBasedOnCity(@PathVariable String name){
        List<Drives> drives = drivesRepository.findByCity(name);
        ArrayList<Drives> cityDrives = new ArrayList<>();
        for(int i=0;i<=drives.size()-1;i++){
            String status = drives.get(i).getDrive_Status();
            if(status.equals("upcoming")){
                cityDrives.add(drives.get(i));
            }
        }
        return ResponseEntity.ok(cityDrives);
    }

    @GetMapping("/state/{name}")
    public ResponseEntity<ArrayList<Drives>> getDrivesBasedOnState(@PathVariable String name){
        List<Drives> drives = drivesRepository.findByState(name);
        ArrayList<Drives> StateDrives = new ArrayList<>();
        for(int i=0;i<=drives.size()-1;i++){
            String status = drives.get(i).getDrive_Status();
            if(status.equals("upcoming")){
                StateDrives.add(drives.get(i));
            }
        }
        return ResponseEntity.ok(StateDrives);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Drives>> getUserRegistered(@PathVariable String id){
        List<Drives> drives= drivesRepository.findAll();
        ArrayList<Drives> userDrives = new ArrayList<>();
        for(int i=0;i<=drives.size()-1;++i){
           ArrayList<String> users= drives.get(i).getUserId();
           if(users.contains(id)){
                   userDrives.add(drives.get(i));
           }
        }
        return ResponseEntity.ok(userDrives);
    }

}
