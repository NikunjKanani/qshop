import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { Storage } from '@ionic/storage';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class loginPage {
  constructor(
    private alertService: AlertService,
    private apiService: ApiserviceService,
    private navCtrl: NavController
    //public storage: Storage
    ) {}
  login(form: NgForm){
  	this.apiService.login(form.value.email, form.value.password).subscribe(
      data => {
      		if(data['status']=="success"){
      			console.log(data['data']);
      			//this.storage.set('user',data['data']);
      			this.alertService.presentToast(data['msg'],'success');
      			//console.log('user-'+this.storage.get('user'));
        		this.navCtrl.navigateRoot('/dashboard');
        	}else{
        		this.alertService.presentToast(data['msg'],'danger');
        	}
      },
      error => {
        console.log(error);
      }
    );
  }

}
