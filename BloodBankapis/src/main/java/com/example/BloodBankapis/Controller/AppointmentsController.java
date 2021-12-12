package com.example.BloodBankapis.Controller;

import com.example.BloodBankapis.Models.*;
import com.example.BloodBankapis.Repository.AppointmentHistoryRepository;
import com.example.BloodBankapis.Repository.AppointmentRepository;
import com.example.BloodBankapis.Repository.DonationRepository;
import com.example.BloodBankapis.Repository.UsersRepository;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/appointments")
public class AppointmentsController {
    private final AppointmentRepository appointmentRepository;
    private final UsersRepository usersRepository;
    private final AppointmentHistoryRepository appointmentHistoryRepository;
    private final DonationRepository donationRepository;

    public AppointmentsController(AppointmentRepository appointmentRepository, UsersRepository usersRepository, AppointmentHistoryRepository appointmentHistoryRepository, DonationRepository donationRepository) {
        this.appointmentRepository = appointmentRepository;
        this.usersRepository = usersRepository;
        this.appointmentHistoryRepository = appointmentHistoryRepository;
        this.donationRepository = donationRepository;
    }

    //creating Appointment
    @PostMapping
    public ResponseEntity createAnAppointment(@RequestBody Appointments appointment){
        appointmentRepository.insert(appointment);
        return ResponseEntity.ok(appointment);
    }

    //getting user Appointment
    @GetMapping("/userAppointments/{id}")
    public ResponseEntity<List<Appointments>> getUserAppointments(@PathVariable ObjectId id){
        return ResponseEntity.ok(appointmentRepository.findByUser_id(id));
    }

    //getting organization Appointment
    @GetMapping("/Organization/{id}")
    public ResponseEntity<List<Appointments>> getOrganizationAppointments(@PathVariable ObjectId id){
        return ResponseEntity.ok(appointmentRepository.findByOrganizationId(id));
    }

    //appointment Search
    @GetMapping("/search/{text}")
    public ResponseEntity<List<Appointments>> getAppointmentByLastname(@PathVariable String text){
        Sort sort= Sort.by("Time");
        TextCriteria criteria = TextCriteria.forDefaultLanguage().matching(text);
        List<Appointments> result = appointmentRepository.findAllBy(criteria, sort);
        return ResponseEntity.ok(result);
    }

    //delete Appointment
    @DeleteMapping("/{id}")
    public ResponseEntity deleteAppointment(@PathVariable String id){
        appointmentRepository.deleteBy_id(id);
        return ResponseEntity.noContent().build();
    }

    //updating user Role
    @PutMapping("/updateUser/{role}")
    public ResponseEntity updateUserAndAppointment( @RequestBody AppointmentHistory history, @PathVariable String role){
        User user = usersRepository.findBy_id(history.getUserId());
        if(role.equals("Donor")){
            user.setRoleType(Roles.Donor);
        }
        else {
            user.setRoleType(Roles.Member);
        }
        usersRepository.save(user);
        appointmentHistoryRepository.save(history);
        appointmentRepository.deleteBy_id(history.getAppointmentId());
        return ResponseEntity.ok(history);
    }

    //insert donation history
    @PostMapping("/updateDonor")
    public ResponseEntity updateDonorAndAppointment( @RequestBody Donation history){
        donationRepository.insert(history);
        appointmentRepository.deleteBy_id(history.getAppointmentId());
        return ResponseEntity.ok(history);
    }

    //update the appointment
    @PutMapping("/updateAppointment")
    public ResponseEntity updateAppointment(@RequestBody Appointments app){
        Appointments appointment = appointmentRepository.findBy_id(app.get_id());
        appointment.setAppointment_Status(app.getAppointment_Status());
        appointmentRepository.save(appointment);
        return ResponseEntity.ok(appointment);
    }



    @GetMapping("/userAppointmentHistory/{id}")
    public ResponseEntity<List<AppointmentHistory>> getAllUserHistory(@PathVariable ObjectId id){
        return ResponseEntity.ok(appointmentHistoryRepository.findByUser_id(id));
    }


    @GetMapping("/familyShare/{id}")
    public ResponseEntity<ArrayList<Map<String,Object>>> familyShare(@PathVariable String id){
        User user =usersRepository.findBy_id(id);
        ArrayList<String> familyMembers = user.getFamilyMembers();
        ArrayList<Map<String,Object>> MemberDetails =new ArrayList<>();
        Map<String,Object> objectMap = new HashMap<>();
        if(familyMembers.size()!=0){
            for(int i=0;i<=familyMembers.size()-1;i++){
                User members = usersRepository.findBy_id(familyMembers.get(i));
                boolean familyShare = members.isFamilyShare();
                if(familyShare){
                    List<Appointments> appointments = appointmentRepository.findByUser_id(members.getId());
                    List<Donation> donations = donationRepository.findByUserId(members.getId());
                    List<AppointmentHistory> appointmentHistories = appointmentHistoryRepository.findByUser_id(members.getId());
                    objectMap.put("Member",members);
                    objectMap.put("Appointments",appointments);
                    objectMap.put("Donations",donations);
                    objectMap.put("AppointmentHistory",appointmentHistories);
                }
                MemberDetails.add(objectMap);
            }
            return ResponseEntity.ok(MemberDetails);
        }
        else {
            return  ResponseEntity.noContent().build();
        }
    }

}
