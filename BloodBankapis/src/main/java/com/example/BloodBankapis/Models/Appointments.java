package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.text.SimpleDateFormat;
import java.util.Date;

//Appointments models
@Document(collection = "Appointments")
public class Appointments {
    @Id
    private ObjectId _id;
    @Field(name="UserId")
    private ObjectId UserId;
    @Field(name="User_details")
    private User User_details;
    @Field(name="OrganizationId")
    private ObjectId OrganizationId;
    @Field(name="Organization_details")
    private Organization Organization_details;
    @Field(name="Appointment_date")
    @TextIndexed
    private Date Appointment_date;
    @Field(name="Time")
    @TextIndexed
    private String Time;
    @Field(name="Appointment_Status")
    @TextIndexed
    private String Appointment_Status;
    @Field(name="Appointment_reason")
    private String Appointment_reason;

    public Appointments(ObjectId _id,ObjectId UserId,User User_details,ObjectId OrganizationId,Organization Organization_details,Date Appointment_date,String Time,String Appointment_Status,String Appointment_reason){
        this._id = _id;
        this.UserId =UserId;
        this.User_details=User_details;
        this.OrganizationId=OrganizationId;
        this.Organization_details=Organization_details;
        this.Appointment_date=Appointment_date;
        this.Time=Time;
        this.Appointment_Status=Appointment_Status;
        this.Appointment_reason=Appointment_reason;
    }
    //setters and getters for appointment
    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setUserId(ObjectId userId) {
        this.UserId = userId;
    }

    public void setOrganizationId(ObjectId organizationId) {
        OrganizationId = organizationId;
    }

    public void setOrganization_details(Organization organization_details) {
        this.Organization_details = organization_details;
    }

    public void setUser_details(User user_details) {
        this.User_details = user_details;
    }

    public void setAppointment_date(Date appointment_date) {
        this.Appointment_date = appointment_date;
    }

    public void setAppointment_Status(String appointment_Status) {
        this.Appointment_Status = appointment_Status;
    }

    public void setTime(String time) {
        this.Time = time;
    }

    public void setAppointment_reason(String appointment_reason) {
        this.Appointment_reason = appointment_reason;
    }

    public String get_id() {
        return _id.toHexString();
    }

    public User getUser_details() {
        return User_details;
    }

    public String getUserId() {
        return UserId.toHexString();
    }

    public String getOrganizationId() {
        return OrganizationId.toHexString();
    }

    public Organization getOrganization_details() {
        return Organization_details;
    }

    public String getAppointment_date() {
        return new SimpleDateFormat("dd MMM yyyy").format(Appointment_date);
    }

    public String getTime(){
        return Time;
    }

    public String getAppointment_Status() {
        return Appointment_Status;
    }

    public String getAppointment_reason() {
        return Appointment_reason;
    }
}
