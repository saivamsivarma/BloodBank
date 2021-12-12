package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigInteger;
import java.util.ArrayList;

/*User table Model*/
@Document(collection = "User")
public class User {
    @Id
    private ObjectId _id;
    @Field(name="FirstName")
    @TextIndexed
    private String FirstName;
    @Field(name="LastName")
    @TextIndexed
    private String LastName;
    @Field(name = "Email")
    private String Email;
    @Field(name = "Password")
    private String Password;
    @Field (name="Phone_number")
    @TextIndexed
    private BigInteger Phone_number;
    @Field (name="Gender")
    private String Gender;
    @Field(name = "RoleType")
    private Roles RoleType;
    @Field(name="BloodType")
    @TextIndexed
    private String BloodType;
    @Field(name = "Age")
    private int Age;
    @Field (name="FamilyMembers")
    private ArrayList<String> FamilyMembers;
    @Field(name="PendingMember")
    private ArrayList<String> PendingMembers;
    @Field(name="Request")
    private ArrayList<String> Request;
    @Field(name = "City")
    private String City;
    @Field(name="State")
    private String State;
    @Field(name="Zipcode")
    private int Zipcode;
    @Field(name="LocationNotification")
    private boolean LocationNotification;
    @Field(name="FamilyShare")
    private boolean FamilyShare;

    public User(ObjectId _id, String FirstName, String LastName, String Email, String Password, BigInteger Phone_number, String Gender, Roles RoleType, String BloodType, int Age, ArrayList<String> FamilyMembers, ArrayList<String> PendingMembers,ArrayList<String> Request, String City, String State, int Zipcode, boolean LocationNotification,boolean FamilyShare){
        this._id =_id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
        this.Phone_number = Phone_number;
        this.Gender =Gender;
        this.RoleType = RoleType;
        this.BloodType= BloodType;
        this.Age = Age;
        this.FamilyMembers = FamilyMembers;
        this.PendingMembers = PendingMembers;
        this.Request=Request;
        this.City = City;
        this.State = State;
        this.Zipcode=Zipcode;
        this.LocationNotification = LocationNotification;
        this.FamilyShare=FamilyShare;
    }


    /*Setters and getters for user*/
    public void setRequest(ArrayList<String> request) {
        this.Request = request;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setFirstName(String FirstName) {
        this.FirstName = FirstName;
    }

    public void setLastName(String LastName) {
        this.LastName = LastName;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }

    public void setRoleType(Roles RoleType) {
        this.RoleType = RoleType;
    }

    public void setAge(int age) {
        this.Age = age;
    }

    public void setBloodType(String bloodType) {
        this.BloodType = bloodType;
    }

    public void setFamilyMembers(ArrayList<String> familyMembers) {
        this.FamilyMembers = familyMembers;
    }

    public void setGender(String gender) {
        this.Gender = gender;
    }

    public void setPhone_number(BigInteger phone_number) {
        this.Phone_number = phone_number;
    }

    public void setZipcode(int zipcode) {
        this.Zipcode = zipcode;
    }

    public void setPendingMember(ArrayList<String> pendingMember) {
        this.PendingMembers = pendingMember;
    }

    public void setCity(String city) {
        this.City = city;
    }

    public void setState(String state) {
        this.State = state;
    }

    public void setLocationNotification(boolean locationNotification) {
        this.LocationNotification = locationNotification;
    }

    public void setFamilyShare(boolean familyShare) {
        this.FamilyShare = familyShare;
    }

    public ObjectId getId(){return  _id;}
    public String get_id() {
        return _id.toHexString();
    }

    public String getFirstName() {
        return FirstName;
    }

    public String getLastName() {
        return LastName;
    }

    public String getEmail() {
        return Email;
    }

    public String getPassword() {
        return Password;
    }

    public BigInteger getPhone_number() {
        return Phone_number;
    }

    public double getZipcode() {
        return Zipcode;
    }

    public String getGender() {
        return Gender;
    }

    public Roles getRoleType() {
        return RoleType;
    }

    public String getBloodType(){
        return BloodType;
    }

    public ArrayList<String> getFamilyMembers(){
        return FamilyMembers;
    }

    public int getAge() {
        return Age;
    }

    public String getState() {
        return State;
    }

    public String getCity() {
        return City;
    }

    public ArrayList<String> getPendingMember() {
        return PendingMembers;
    }

    public ArrayList<String> getRequest() {
        return Request;
    }

    public boolean isLocationNotification() {
        return LocationNotification;
    }

    public boolean isFamilyShare() {
        return FamilyShare;
    }
}
