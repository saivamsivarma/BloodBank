package com.example.BloodBankapis.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.text.SimpleDateFormat;
import java.util.Date;

@Document(collection = "BloodRequest")
public class BloodRequest {
    @Id
    private ObjectId _id;
    @Field(name="RequestId")
    private String RequestId;
    @Field(name = "Response_id")
    private String Response_id;
    @Field(name="Status")
    private String Status;
    @Field(name="Date")
    private Date date;

    public BloodRequest(ObjectId _id,String RequestId,String Response_id,String Status){
        this._id=_id;
        this.RequestId =RequestId;
        this.Response_id=Response_id;
        this.Status=Status;
        this.date=new Date();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setRequestId(String requestId) {
        this.RequestId = requestId;
    }

    public void setResponse_id(String response_id) {
        this.Response_id = response_id;
    }

    public void setStatus(String status) {
        this.Status = status;
    }

    public String getRequestId() {
        return RequestId;
    }

    public String getResponse_id() {
        return Response_id;
    }

    public String getStatus() {
        return Status;
    }

    public String get_id() {
        return _id.toHexString();
    }

    public String getDate() {
        return new SimpleDateFormat("dd MMM yyyy").format(date);
    }
}
