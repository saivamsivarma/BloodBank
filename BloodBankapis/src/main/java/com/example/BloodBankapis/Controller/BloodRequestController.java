package com.example.BloodBankapis.Controller;

import com.example.BloodBankapis.Models.BloodRequest;
import com.example.BloodBankapis.Models.Organization;
import com.example.BloodBankapis.Repository.BloodRequestRepository;
import com.example.BloodBankapis.Repository.OrganizationRepository;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/bloodRequest")
public class BloodRequestController {
    private final BloodRequestRepository bloodRequestRepository;
    private final OrganizationRepository organizationRepository;

    public BloodRequestController(BloodRequestRepository bloodRequestRepository, OrganizationRepository organizationRepository) {
        this.bloodRequestRepository = bloodRequestRepository;
        this.organizationRepository = organizationRepository;
    }

    @PostMapping("/")
    public ResponseEntity sendBloodRequest(@RequestBody BloodRequest bloodRequest){
        bloodRequestRepository.insert(bloodRequest);
        return ResponseEntity.ok(bloodRequest);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArrayList<Map<String,Object>>> getAllUserRequest(@PathVariable ObjectId id){
        List<BloodRequest> bloodRequestsList = bloodRequestRepository.findByResponse_id(id);
        Map<String,Object>  objectMap = new HashMap<>();
        ArrayList<Map<String,Object>> mapArrayList = new ArrayList<>();
        for(int i=0;i<=bloodRequestsList.size()-1;i++){
            String  orgId =bloodRequestsList.get(i).getRequestId();
            Organization organization = organizationRepository.findBy_id(orgId);
            objectMap.put("Request",bloodRequestsList.get(i));
            objectMap.put("Organization",organization);
            mapArrayList.add(objectMap);
        }
        return ResponseEntity.ok(mapArrayList);
    }

    @PutMapping("/{id}/{status}")
    public  ResponseEntity statusUpdate(@PathVariable String id, @PathVariable String status){
        BloodRequest request = bloodRequestRepository.findByResponse_id(id);
        request.setStatus(status);
        return ResponseEntity.ok(request);
    }

}
