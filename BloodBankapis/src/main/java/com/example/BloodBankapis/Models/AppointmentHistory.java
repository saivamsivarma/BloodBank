package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.text.SimpleDateFormat;
import java.util.Date;

@Document(collection = "AppointmentHistory")
public class AppointmentHistory {
    @Id
    private ObjectId _id;
    @Field(name = "UserId")
    private ObjectId UserId;
    @Field(name="OrganizationId")
    private ObjectId OrganizationId;
    @Field(name = "OrganizationName")
    private String OrganizationName;
    @Field(name="AppointmentId")
    private ObjectId AppointmentId;
    @Field(name = "Date")
    private Date date;
    @Field(name = "Feedback")
    private String Feedback;

    public AppointmentHistory(ObjectId _id, ObjectId UserId, ObjectId OrganizationId, String OrganizationName,ObjectId AppointmentId, String Feedback){
        this._id=_id;
        this.UserId=UserId;
        this.OrganizationId=OrganizationId;
        this.OrganizationName=OrganizationName;
        this.date=new Date();
        this.AppointmentId=AppointmentId;
        this.Feedback=Feedback;
    }

    public String getAppointmentId() {
        return AppointmentId.toHexString();
    }

    public String get_id() {
        return _id.toHexString();
    }

    public String getUserId() {
        return UserId.toHexString();
    }

    public String getOrganizationId() {
        return OrganizationId.toHexString();
    }

    public String getOrganizationName() {
        return OrganizationName;
    }

    public String getDate() {
        return new SimpleDateFormat("dd MMM yyyy").format(date);
    }

    public String getFeedback() {
        return Feedback;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setUserId(ObjectId userId) {
        this.UserId = userId;
    }

    public void setOrganizationId(ObjectId organizationId) {
        this.OrganizationId = organizationId;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setFeedback(String feedback) {
        this.Feedback = feedback;
    }

    public void setOrganizationName(String organizationName) {
        this.OrganizationName = organizationName;
    }

    public void setAppointmentId(ObjectId appointmentId) {
        this.AppointmentId = appointmentId;
    }
}
