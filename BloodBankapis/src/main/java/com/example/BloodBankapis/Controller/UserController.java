package com.example.BloodBankapis.Controller;
import com.example.BloodBankapis.Models.Donation;
import com.example.BloodBankapis.Models.Roles;
import com.example.BloodBankapis.Models.User;
import com.example.BloodBankapis.Repository.DonationRepository;
import com.example.BloodBankapis.Repository.UsersRepository;
import com.example.BloodBankapis.Service.UserService;
import org.bson.types.ObjectId;
import org.springframework.data.domain.*;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final UsersRepository usersRepository;
    private final DonationRepository donationRepository;

    public UserController(UserService userService, UsersRepository usersRepository, DonationRepository donationRepository) {
        this.usersRepository = usersRepository;
        this.userService = userService;
        this.donationRepository = donationRepository;
    }


    //Creating the user Profile
    @PostMapping
    public ResponseEntity userSignup(@RequestBody User user){

        boolean existUser = usersRepository.findByEmail(user.getEmail()).isPresent();
        ArrayList<String> empty = new ArrayList<>();
        System.out.println(user.getAge());
        try{
            if(!existUser){
                if(user.getAge()<=18){
                    user.setRoleType(Roles.Member);
                }
                user.setFamilyMembers(empty);
                user.setRequest(empty);
                user.setPendingMember(empty);
                usersRepository.insert(user);
                return ResponseEntity.ok(user);
            }else{
                return ResponseEntity.status(505).body("Email already Existed! "+user.getEmail());
            }
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e);
        }
    }

    //User Login
    @PostMapping("/login")
    public ResponseEntity userLogin(@RequestBody User userLogin){
        String password = userLogin.getPassword();
        Optional<User> user = usersRepository.findByEmail(userLogin.getEmail());
        try{
            String StoredPassword = user.get().getPassword();

            if(password.equals(StoredPassword)){
                return ResponseEntity.ok(user);
            }
            return ResponseEntity.status(501).body("Wrong Password");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e);
        }
    }

    @PostMapping("/GoogleLogin")
    public ResponseEntity LoginWithGoogle(@RequestBody User userLogin){
        Optional<User> user = usersRepository.findByEmail(userLogin.getEmail());
        return ResponseEntity.ok(user);
    }


    //getting user Details
    @GetMapping("/{_id}")
    public ResponseEntity findUser(@PathVariable String _id) {
        try{
            Object User = usersRepository.findById(_id);
            return ResponseEntity.ok(User);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e);
        }
    }

    //getting all user details
    @GetMapping
    public ResponseEntity<ArrayList<Map<String,Object>>> getAllUsers(){
      List<User> users = usersRepository.findAll();
      ArrayList<Map<String,Object>> allUser  =new ArrayList<>();
      for(int i=0;i<=users.size()-1;i++){
          Map<String,Object> userDetails = new HashMap<>();
          ObjectId id = users.get(i).getId();
          User user = usersRepository.findBy_id(id);
          ArrayList<Donation> donation = donationRepository.findByUserId(id);
          userDetails.put("userDetails",user);
          userDetails.put("Donation",donation);
          allUser.add(userDetails);
      }
      return ResponseEntity.ok(allUser);
           // return ResponseEntity.ok(usersRepository.findAll());
    }

    @GetMapping("/allUsers/{id}")
    public ResponseEntity<ArrayList<User>> getUsers(@PathVariable String id){
        List<User> users = usersRepository.findAll();
        ArrayList<User> getAllUsers = new ArrayList<>();
        User user= usersRepository.findBy_id(id);
        ArrayList<String> familyMembers = user.getFamilyMembers();
        for(int i=0;i<=users.size()-1;i++){
            String _id = users.get(i).get_id();
            String userId = id;
            if(!userId.equals(_id) && !familyMembers.contains(_id)){
                getAllUsers.add(users.get(i));
            }
        }
        return ResponseEntity.ok(getAllUsers);
    }



    //getting all users based on RoleType
    @GetMapping("/allUser/{RoleType}")
    public ResponseEntity<User> getUserByRole(@PathVariable Roles RoleType){
        return ResponseEntity.ok(userService.getUserByRole(RoleType));
    }

    //sending familyMember Request
    @PostMapping("/Request/{_id}")
    public ResponseEntity addMember(@PathVariable String _id, @RequestBody String member_id){
        User requestedUser = usersRepository.findBy_id(_id);
        ArrayList<String> requestedUserPendingList = requestedUser.getPendingMember();
        ArrayList<String> requestedUserFamilyList = requestedUser.getFamilyMembers();

        User responseUser = usersRepository.findBy_id(member_id);
        ArrayList<String> responseRequestList = responseUser.getRequest();
        if(requestedUserPendingList!=null && responseRequestList!=null && requestedUserFamilyList!=null){
            if(requestedUserFamilyList.contains(member_id)&& requestedUserPendingList.contains(member_id) ) return ResponseEntity.ok("request already Send");
            requestedUserPendingList.add(member_id);
            usersRepository.save(requestedUser);
            responseRequestList.add(_id);
            usersRepository.save(responseUser);
            return ResponseEntity.ok(requestedUser);
        }
        if(requestedUserPendingList==null || responseRequestList==null ){
            ArrayList<String> newRequestPendingList = new ArrayList<>();
            ArrayList<String> newResponsePendingList= new ArrayList<>();
            newRequestPendingList.add(member_id);
            newResponsePendingList.add(_id);
            requestedUser.setPendingMember(newRequestPendingList);
            responseUser.setRequest(newResponsePendingList);
            usersRepository.save(requestedUser);
            usersRepository.save(responseUser);
            return ResponseEntity.ok(requestedUser);
        }
        else if(requestedUserPendingList!=null || responseRequestList==null){
            ArrayList<String> newResponsePendingList= new ArrayList<>();
            requestedUserPendingList.add(member_id);
            usersRepository.save(requestedUser);
            newResponsePendingList.add(_id);
            responseUser.setRequest(newResponsePendingList);
            usersRepository.save(requestedUser);
            usersRepository.save(responseUser);
            return ResponseEntity.ok(requestedUser);
        }
        else{
            ArrayList<String> newRequestPendingList = new ArrayList<>();
            newRequestPendingList.add(member_id);
            requestedUser.setPendingMember(newRequestPendingList);
            responseRequestList.add(_id);
            usersRepository.save(requestedUser);
            usersRepository.save(responseUser);
            return ResponseEntity.ok(requestedUser);
        }
    }

    //confirming family Member request
    @PostMapping("/accept/{_id}")
    public ResponseEntity AcceptFamilyMember(@PathVariable String _id,@RequestBody String member_id){
        User requestedUser = usersRepository.findBy_id(_id);
        ArrayList<String> requestedUserRequestList = requestedUser.getRequest();
        ArrayList<String> requestedUserFamilyList = requestedUser.getFamilyMembers();

        User responseUser = usersRepository.findBy_id(member_id);
        ArrayList<String> responseUserPendingList = responseUser.getPendingMember();
        ArrayList<String> responseUserFamilyList = responseUser.getFamilyMembers();
        if(requestedUserFamilyList!=null && responseUserFamilyList!=null){
            requestedUserRequestList.remove(member_id);
            requestedUserFamilyList.add(member_id);
            usersRepository.save(requestedUser);
            responseUserPendingList.remove(_id);
            responseUserFamilyList.add(_id);
            usersRepository.save(responseUser);
            return  ResponseEntity.ok(requestedUser);
        }
        else if(requestedUserFamilyList==null && responseUserFamilyList!=null){
            ArrayList<String> newRequestFamilyList = new ArrayList<>();
            requestedUserRequestList.remove(member_id);
            newRequestFamilyList.add(member_id);
            requestedUser.setFamilyMembers(newRequestFamilyList);
            usersRepository.save(requestedUser);
            responseUserPendingList.remove(_id);
            responseUserFamilyList.add(_id);
            usersRepository.save(responseUser);
            return  ResponseEntity.ok(requestedUser);
        }
        else if(requestedUserFamilyList!=null && responseUserFamilyList==null){
            ArrayList<String> newResponseFamilyList = new ArrayList<>();
            responseUserPendingList.remove(member_id);
            newResponseFamilyList.add(member_id);
            responseUser.setFamilyMembers(newResponseFamilyList);
            usersRepository.save(responseUser);
            requestedUserRequestList.remove(_id);
            requestedUserFamilyList.add(_id);
            usersRepository.save(responseUser);
            return  ResponseEntity.ok(requestedUser);
        }
        else{
            ArrayList<String> newRequestFamilyList = new ArrayList<>();
            ArrayList<String> newResponseFamilyList = new ArrayList<>();
            requestedUserRequestList.remove(member_id);
            newRequestFamilyList.add(member_id);
            responseUserPendingList.remove(_id);
            newResponseFamilyList.add(_id);
            requestedUser.setFamilyMembers(newRequestFamilyList);
            usersRepository.save(requestedUser);
            responseUser.setFamilyMembers(newResponseFamilyList);
            usersRepository.save(responseUser);
            return  ResponseEntity.ok(requestedUser);
        }
    }

//getting user specified family member details
    @GetMapping("/family_member/{id}")
    public ResponseEntity<ArrayList<Object>> getFamilyMember(@PathVariable String id){
        User user =usersRepository.findBy_id(id);
        ArrayList<String> familyMembers = user.getFamilyMembers();
        ArrayList<Object> MemberDetails =new ArrayList<>();
        if(familyMembers.size()!=0){
            for(int i=0;i<=familyMembers.size()-1;i++){
                Object members = usersRepository.findBy_id(familyMembers.get(i));
                MemberDetails.add(members);
            }
            return ResponseEntity.ok(MemberDetails);
        }
        else {
            return  ResponseEntity.noContent().build();
        }
    }


    @GetMapping("/request_member/{id}")
    public ResponseEntity<ArrayList<Object>> getRequestMember(@PathVariable String id){
        User user =usersRepository.findBy_id(id);
        ArrayList<String> RequestMembers = user.getRequest();
        ArrayList<Object> RequestDetails =new ArrayList<>();
        if(RequestMembers.size()!=0){
            for(int i=0;i<=RequestMembers.size()-1;i++){
                Object members = usersRepository.findBy_id(RequestMembers.get(i));
                RequestDetails.add(members);
            }
        }
        return ResponseEntity.ok(RequestDetails);

    }


    @GetMapping("/pending_member/{id}")
    public ResponseEntity<ArrayList<Object>> getPendingMember(@PathVariable String id){
        User user =usersRepository.findBy_id(id);
        ArrayList<String> PendingMembers = user.getPendingMember();
        ArrayList<Object> PendingDetails =new ArrayList<>();
        if(PendingMembers.size()!=0){

            for (int i = 0; i <= PendingMembers.size()-1; i++) {
                Object members = usersRepository.findBy_id(PendingMembers.get(i));
                PendingDetails.add(members);
            }
        }
        return ResponseEntity.ok(PendingDetails);
    }

    //Updating the User Status
    @PutMapping("/status/{_id}/{RoleType}")
    public ResponseEntity updateUserStatus(@PathVariable String _id, @PathVariable Roles RoleType){
        userService.updateStatus(_id,RoleType);
        return ResponseEntity.ok(userService.getUserDetails(_id));
    }

    //searching user
    @GetMapping("/userSearch/{text}")
    public ResponseEntity<List<User>> getAppointmentByLastname(@PathVariable String text){
        Sort sort= Sort.by("lastName");
        TextCriteria criteria = TextCriteria.forDefaultLanguage().matching(text);
        List<User> result = usersRepository.findAllBy(criteria, sort);
        return ResponseEntity.ok(result);
    }

    //pageNations
    @GetMapping("/page")
    public Map<String,Object> getAllUsersInPage(@RequestParam (name="page",defaultValue = "0")int pageNo,@RequestParam (name="pageSize",defaultValue = "12")int pageSize,@RequestParam (name="sort",defaultValue = "BloodType")String sortBy){
        Map<String,Object> response = new HashMap<String,Object>();
        Sort sort = Sort.by(sortBy);
        Pageable page = PageRequest.of(pageNo,pageSize,sort);
        Page<User> userPage=usersRepository.findAll(page);
        response.put("data",userPage.getContent());
        response.put("Total no.of Pages",userPage.getTotalPages());
        response.put("Total no.of User",userPage.getTotalElements());
        response.put("Current Page No",userPage.getNumber());
        return response;
    }


    @PutMapping("/location/{id}")
    public ResponseEntity updateUserLocation(@RequestBody boolean bValue, @PathVariable String id){
        User user = usersRepository.findBy_id(id);
        boolean value = bValue;
        user.setLocationNotification(value);
        usersRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/familyShare/{id}")
    public ResponseEntity updateUserFamilyShare(@RequestBody boolean bValue, @PathVariable String id){
        User user = usersRepository.findBy_id(id);
        boolean value = bValue;
        user.setFamilyShare(value);
        usersRepository.save(user);
        return ResponseEntity.ok(user);
    }

}
