package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigInteger;

/*Organization Members*/
@Document(collection = "Organization_members")
public class Organization_members {
    @Id
    private ObjectId _id;
    @Field(name="Member_Name")
    private String Member_Name;
    @Field(name="Contact")
    private BigInteger Contact;
    @Field(name="Role")
    private String Role;
    @Field(name="Email")
    private String Email;
    @Field(name="Password")
    private String Password;
    @Field(name="Organization_id")
    private ObjectId Organization_id;

    public Organization_members(ObjectId _id,String Member_Name,BigInteger Contact,String Role,String Email,String Password,ObjectId Organization_id){
        this._id=_id;
        this.Member_Name=Member_Name;
        this.Contact=Contact;
        this.Role=Role;
        this.Email=Email;
        this.Password=Password;
        this.Organization_id =Organization_id;
    }

    /*Setters and getter*/
    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setMember_Name(String member_Name) {
        this.Member_Name = member_Name;
    }

    public void setContact(BigInteger contact) {
        this.Contact = contact;
    }

    public void setRole(String role) {
        this.Role = role;
    }
    public void setEmail(String email){
        this.Email=email;
    }

    public void setPassword(String password) {
        this.Password = password;
    }

    public void setOrganization_id(ObjectId organization_id) {
        this.Organization_id = organization_id;
    }

    public String get_id() {
        return _id.toHexString();
    }

    public BigInteger getContact() {
        return Contact;
    }

    public String getMember_Name() {
        return Member_Name;
    }

    public String getRole() {
        return Role;
    }

    public String getPassword() {
        return Password;
    }

    public String getEmail() {
        return Email;
    }
    public String getOrganization_id(){return Organization_id.toHexString();}
}
