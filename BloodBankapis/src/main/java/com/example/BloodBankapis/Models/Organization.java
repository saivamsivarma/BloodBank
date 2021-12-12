package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigInteger;


/*Organization model*/
@Document(collection = "Organization")
public class Organization {
    @Id
    private ObjectId _id;
    @Field(name="Organization_Name")
    private String Organization_Name;
    @Field(name="Contact Number")
    private BigInteger ContactNumber;
    @Field(name = "Email")
    private String Email;
    @Field(name="Address")
    private String Address;
    @Field(name="City")
    private String City;
    @Field(name="Zipcode")
    private int Zipcode;
    @Field(name = "State")
    private String State;
    @Field(name = "Status")
    private String Status;


    public Organization(ObjectId _id,String Organization_Name,BigInteger ContactNumber,String Email,String Address,String City,int Zipcode, String State,String Status){
        this._id=_id;
        this.Organization_Name=Organization_Name;
        this.ContactNumber=ContactNumber;
        this.Email=Email;
        this.Address=Address;
        this.City=City;
        this.Zipcode=Zipcode;
        this.State=State;
        this.Status=Status;
    }

    /*setters and getters for organization*/
    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setOrganization_Name(String organization_Name) {
        this.Organization_Name = organization_Name;
    }

    public void setContactNumber(BigInteger contactNumber) {
        this.ContactNumber = contactNumber;
    }

    public void setAddress(String address) {
        this.Address = address;
    }

    public void setZipcode(int zipcode) {
        this.Zipcode = zipcode;
    }

    public void setCity(String city) {
        this.City = city;
    }

    public void setState(String state) {
        this.State = state;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public void setStatus(String status) {
        this.Status = status;
    }


    public String get_id() {
        return _id.toHexString();
    }

    public String getOrganization_Name() {
        return Organization_Name;
    }

    public String getCity(){
        return City;
    }
    public String getState(){
        return State;
    }

    public String getAddress() {
        return Address;
    }

    public BigInteger getContactNumber() {
        return ContactNumber;
    }

    public int getZipcode() {
        return Zipcode;
    }

    public String getStatus() {
        return Status;
    }

    public String getEmail() {
        return Email;
    }

}
