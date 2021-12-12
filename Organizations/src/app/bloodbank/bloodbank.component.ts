import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { BloodType } from './bloodTypeModel';

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent implements OnInit {

  initState = 'containsBlood';

  APOS_Boolean = false;
  BPOS_Boolean = false;
  ANEG_Boolean = false;
  BNEG_Boolean = false;
  OPOS_Boolean = false;
  ONEG_Boolean = false;
  ABPOS_Boolean = false;
  ABNEG_Boolean = false;

  APOS: any;
  BPOS: any;
  ANEG: any;
  BNEG: any;
  OPOS: any;
  ONEG: any;
  ABPOS: any;
  ABNEG: any;

  BloodType: Array<BloodType> = [];
  APOSObj: any;
  BPOSObj: any;
  ANEGObj: any;
  BNEGObj: any;
  OPOSObj: any;
  ONEGObj: any;
  ABPOSObj: any;
  ABNEGObj: any;

  constructor(public api: ApisService) { }

  changeState(State: any) {
    this.initState = State
  }

  ngOnInit(): void {
    this.api.OrganizationDetails();
  }

  async Submit() {
    this.api.BloodBank={};
    this.APOSObj = {};
    this.BPOSObj = {};
    this.ANEGObj = {};
    this.BNEGObj = {};
    this.OPOSObj = {};
    this.ONEGObj = {};
    this.ABPOSObj = {};
    this.ABNEGObj = {};
    if (this.APOS != null) {
      this.APOSObj.name="A+";
      this.APOSObj.value=this.APOS;
      this.BloodType.push(this.APOSObj)
    }
    if (this.BPOS != null) {
      this.BPOSObj.name="B+";
      this.BPOSObj.value=this.BPOS;
      this.BloodType.push(this.BPOSObj);
    }
    if (this.ANEG != null) {
      this.ANEGObj.name="A-";
      this.ANEGObj.value=this.ANEG;
      this.BloodType.push(this.ANEGObj)
    }
    if (this.BNEG != null) {
      this.BNEGObj.name="B-";
      this.BNEGObj.value=this.BNEG;
      this.BloodType.push(this.BNEGObj);
    }

    if (this.OPOS != null) {
      this.OPOSObj.name="O+";
      this.OPOSObj.value=this.OPOS;
      this.BloodType.push(this.OPOSObj)
    }
    if (this.ONEG != null) {
      this.ONEGObj.name="O-";
      this.ONEGObj.value=this.ONEG;
      this.BloodType.push(this.ONEGObj)
    }
    if (this.ABPOS != null) {
      this.ABPOSObj.name="AB+";
      this.ABPOSObj.value=this.ABPOS;
      this.BloodType.push(this.ABPOSObj);
    }
    if (this.ABNEG != null) {
      this.ABNEGObj.name="AB-";
      this.ABNEGObj.value=this.ABNEG;
      this.BloodType.push(this.ABNEGObj);
    }
    this.api.BloodBank.Blood=this.BloodType;
    this.api.createBloodBank();
  }

}
