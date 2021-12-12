package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

/*Drives Model*/
@Document(collection = "Drives")
public class Drives {
    @Id
    private ObjectId _id;
    @Field(name="Drive_Name")
    private String Drive_Name;
    @Field(name = "Organized_id")
    private ObjectId Organized_id;
    @Field(name="Organization_Name")
    private String Organization_Name;
    @Field(name="Address")
    private String Address;
    @Field(name="City")
    private String City;
    @Field(name="State")
    private String State;
    @Field(name="Zipcode")
    private int Zipcode;
    @Field(name="Drive_Date")
    private Date Drive_Date;
    @Field(name="Drive_Status")
    private String Drive_Status;
    @Field(name="registeredUser")
    private ArrayList<String> UserId;

    public Drives(ObjectId _id,String Drive_Name,ObjectId Organized_id,String Organization_Name,String Address,String City,String State,int Zipcode, Date Drive_Date, String Drive_Status,ArrayList<String> UserId){
        this._id=_id;
        this.Drive_Name=Drive_Name;
        this.Organized_id=Organized_id;
        this.Organization_Name=Organization_Name;
        this.Address=Address;
        this.State=State;
        this.City=City;
        this.Zipcode=Zipcode;
        this.Drive_Date=Drive_Date;
        this.Drive_Status=Drive_Status;
        this.UserId = UserId;
    }

    //setters and getters for Drives


    public void setOrganization_Name(String organization_Name) {
        this.Organization_Name = organization_Name;
    }

    public void setUserId(ArrayList<String> userId) {
        this.UserId = userId;
    }

    public void setState(String state) {
        this.State = state;
    }

    public void setDrive_Status(String drive_Status) {
        this.Drive_Status = drive_Status;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setDrive_Name(String drive_Name) {
        this.Drive_Name = drive_Name;
    }

    public void setOrganized_id(ObjectId organized_id) {
        this.Organized_id = organized_id;
    }


    public void setAddress(String address) {
        this.Address = address;
    }

    public void setCity(String city) {
        this.City = city;
    }


    public void setZipcode(int zipcode) {
        this.Zipcode = zipcode;
    }

    public void setDrive_Date(Date drive_Date) {
        this.Drive_Date = drive_Date;
    }

    public String getDrive_Status() {
        return Drive_Status;
    }

    public ArrayList<String> getUserId() {
        return UserId;
    }

    public String getOrganization_Name() {
        return Organization_Name;
    }

    public String get_id() {
        return _id.toHexString();
    }

    public String getDrive_Name() {
        return Drive_Name;
    }

    public String getOrganized_id() {
        return Organized_id.toString();
    }

    public String getAddress() {
        return Address;
    }

    public String getCity() {
        return City;
    }

    public int getZipcode() {
        return Zipcode;
    }

    public String getDrive_Date() {
        return new SimpleDateFormat("dd MMM yyyy").format(Drive_Date);
    }

    public String getState() {
        return State;
    }
}
