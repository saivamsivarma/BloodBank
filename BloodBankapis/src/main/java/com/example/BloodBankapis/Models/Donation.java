package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.text.SimpleDateFormat;
import java.util.Date;

//Donation model
@Document(collection = "Donation")
public class Donation {
    @Id
    private ObjectId _id;
    @Field(name="UserId")
    private ObjectId UserId;
    @Field(name="OrganizationName")
    private String OrganizationName;
    @Field(name="AppointmentId")
    private ObjectId AppointmentId;
    @Field(name="Status")
    private String Status;
    @Field(name="date")
    private Date date;
    @Field(name="Units")
    private int Units;

    public Donation(ObjectId _id,ObjectId UserId,String OrganizationName,ObjectId AppointmentId,String Status,int Units){
        this._id=_id;
        this.UserId=UserId;
        this.OrganizationName=OrganizationName;
        this.AppointmentId=AppointmentId;
        this.Status=Status;
        this.date=new Date();
        this.Units=Units;
    }

    //setters and getters for donations
    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setUserId(ObjectId userId) {
        this.UserId = userId;
    }

    public void setAppointmentId(ObjectId appointmentId) {
        this.AppointmentId = appointmentId;
    }

    public void setOrganizationName(String organizationName) {
        this.OrganizationName = organizationName;
    }

    public void setStatus(String status) {
        this.Status = status;
    }

    public void setUnits(int units) {
        this.Units = units;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String get_id() {
        return _id.toHexString();
    }

    public String getUserId() {
        return UserId.toHexString();
    }

    public String getOrganizationName() {
        return OrganizationName;
    }

    public String getAppointmentId() {
        return AppointmentId.toHexString();
    }

    public int getUnits() {
        return Units;
    }

    public String getStatus() {
        return Status;
    }

    public String getDate() {
        return new SimpleDateFormat("dd MMM yyyy").format(date);
    }

    public Date getDateInDate(){
        return date;
    }
}