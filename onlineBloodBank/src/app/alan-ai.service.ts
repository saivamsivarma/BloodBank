import { Injectable } from '@angular/core';
import alanBtn from "@alan-ai/alan-sdk-web";
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AlanService {
  alanKey = '20f9dec17f4d0476533bae90c540e9d42e956eca572e1d8b807a3e2338fdd0dc/stage';

  constructor(public router: Router, public api: ApiService) {
    let alanBtnInstance = alanBtn({
      key: this.alanKey,
      onConnectionStatus: function (status) {
        if (status === 'authorized') {
          //alanBtnInstance.activate();
          if (api.userDetailsObj.roleType === "newUser") {
            alanBtnInstance.playText(`(Hello,${api.userDetailsObj.firstName}, I am Alan your personal voice assistant.)`);
          }
          else if (api.userDetailsObj.roleType === "Member") {
            alanBtnInstance.playText(`(Hello,${api.userDetailsObj.firstName}, I am Alan your personal voice assistant.  | Hello ${api.userDetailsObj.firstName}, how can I Help you today)`);
          }
          else {
            alanBtnInstance.playText(`(Welcome back ,${api.userDetailsObj.firstName}. | Hello ${api.userDetailsObj.firstName}, how can I Help you today.)`);
          }
        }
      },
      onCommand: function (commandData: any) {
        if (commandData.command === 'appointments') {
          api.getAppointments();
          console.log(api.getAppointmentsObj);
          if (api.getAppointmentsObj.length === 0) {
            alanBtnInstance.playText("You have no upcoming Appointments");
          } else {
            alanBtnInstance.playText("You have" + api.getAppointmentsObj.length + " upcoming appointments")
            for (let i = 0; i < api.getAppointmentsObj.length; i++) {
              alanBtnInstance.playText("You have " + api.getAppointmentsObj[i].appointment_reason + " at " + api.getAppointmentsObj[i].organization_details.organization_Name + " on " + api.getAppointmentsObj[i].appointment_date);
            }
          }
          router.navigate([`${commandData.route}`]);
        }
        else if (commandData.command === 'onFamilyShare') {
          if (api.userDetailsObj.familyShare) {
            alanBtnInstance.playText("Family Share is already On.");
          }
          else {
            api.updatefamilyShare();
            alanBtnInstance.playText("Turning on Family Share");
          }
        }
        else if (commandData.command === 'offFamilyShare') {
          if (!api.userDetailsObj.familyShare) {
            alanBtnInstance.playText("Family Share is already Off.");
          }
          else {
            api.updatefamilyShare();
            alanBtnInstance.playText("Turning off Family Share");
          }
        }
        else if (commandData.command === 'onMyCity') {
          if (api.userDetailsObj.familyShare) {
            alanBtnInstance.playText("My City is already On.");
          }
          else {
            api.updatefamilyShare();
            alanBtnInstance.playText("Turning on My City");
          }
        }
        else if (commandData.command === 'offMyCity') {
          if (!api.userDetailsObj.familyShare) {
            alanBtnInstance.playText("My City is already Off.");
          }
          else {
            api.updatefamilyShare();
            alanBtnInstance.playText("Turning off My City");
          }
        }
        else if(commandData.command === 'createAppointment'){
          router.navigate([`${commandData.route}`]);
          alanBtnInstance.playText("Select one of the organization to make ana Appointment");
        }
      }
    })
  }
}

