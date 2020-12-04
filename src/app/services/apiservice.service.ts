import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  //api_url = 'http://localhost:80/iot-vm/index.php';
  api_url = 'https://www.qitstaging.com/iot/';

  user = {};

  constructor(private http: HttpClient) { }

  setValue(customer) {
    this.user = customer;
  }

  getValue() {
     return this.user;
  }

  login(email: String, password: String) {
    return this.http.post(this.api_url + 'api/Login/login',
      {email: email, password: password}
    )
  }

  change_pass(id,email,old_pass,new_pass,confirm_new_pass){
  	return this.http.post(this.api_url + 'api/Login/change_password',
      {id: id,email: email, old_pass: old_pass, new_pass: new_pass, confirm_new_pass: confirm_new_pass}
    )
  }

  get_customer(id){
  	return this.http.post(this.api_url + 'api/Login/getCustomer',
      {id: id}
    )
  }

  update_profile(id,email,name,mobile,dob,unit_number,postal,img){
  	//alert(img);
  	return this.http.post(this.api_url + 'api/Login/updateProfile',
      {id: id,email: email, name: name, mobile: mobile, dob: dob, unit_number: unit_number, postal_code: postal, profile_image: img}
    )
  }

  register(name,password,email,mobile){
  	return this.http.post(this.api_url + 'api/Login/register',
      {email: email, name: name, mobile: mobile, password: password}
    )
  }

  fb_register(name,password,email,mobile){
  	//alert('service'+name+'-'+email);
  	return this.http.post(this.api_url + 'api/Login/fb_register',
      {email: email, name: name, mobile: mobile, password: password}
    )
  }

  verify_otp(mobile,otp,flg){
  	return this.http.post(this.api_url + 'api/Login/check_otp',
      {mobile: mobile, otp: otp, flg: flg}
    )
  }

  send_otp(mobile){
  	return this.http.post(this.api_url + 'api/Login/create_otp',
      {mobile: mobile}
    )
  }

  forgot_pass(mobile,pass){
  	return this.http.post(this.api_url + 'api/Login/forgot_password',
      {mobile: mobile,new_pass: pass}
    )
  }

  privacydata(){
  	return this.http.get(this.api_url + 'api/Settings/privacy')
  }

  termsdata(){
  	return this.http.get(this.api_url + 'api/Settings/terms')
  }

  membershiplist(){
  	return this.http.get(this.api_url + 'api/Settings/membership')
  }
}
