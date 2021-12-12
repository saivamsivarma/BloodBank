package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;


//BloodBank model
@Document(collection ="BloodBank")
public class BloodBank {
    @Id
    private ObjectId _id;
    @Field(name="Org_id")
    private ObjectId Org_id;
    @Field(name="Blood")
    private ArrayList<Blood> Blood;
    public BloodBank(ObjectId _id,ObjectId Org_id,ArrayList<Blood> Blood){
        this._id=_id;
        this.Org_id=Org_id;
        this.Blood=Blood;
    }

    //setters and getters
    public String get_id() {
        return _id.toHexString();
    }

    public String getOrganization_id() {
        return Org_id.toHexString();
    }

    public ArrayList<Blood> getBlood() {
        return Blood;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setOrganization_id(ObjectId organization_id) {
        this.Org_id = organization_id;
    }

    public void setBlood(ArrayList<Blood> blood) {
        this.Blood = blood;
    }
}