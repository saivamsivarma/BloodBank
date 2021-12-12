package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

//Admin Model
@Document(collection = "Admin")
public class Admin {
    @Id
    private ObjectId _id;
    @Field(name = "Name")
    private String Name;
    @Field (name="UserName")
    private String UserName;
    @Field(name = "Email")
    @Indexed(unique = true)
    private String Email;
    @Field(name = "Password")
    private String Password;

    public Admin(ObjectId _id,String Name,String UserName,String Email,String Password){
        this._id=_id;
        this.Name=Name;
        this.UserName= UserName;
        this.Email=Email;
        this.Password = Password;
    }

    //setters and getter for Admin
    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public void setUserName(String UserName) {
        this.UserName = UserName;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }

    public String get_id(){
        return _id.toHexString();
    }
    public String Name(){
        return Name;
    }
    public String getUserName(){
        return UserName;
    }
    public String getEmail() {
        return Email;
    }
    public String getPassword(){
        return Password;
    }

}
