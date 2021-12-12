package com.example.BloodBankapis.Models;

public class Blood {
    private String name;
    private int value;
    public Blood(String name,int value){
        this.name=name;
        this.value = value;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public String getName() {
        return name;
    }
}
