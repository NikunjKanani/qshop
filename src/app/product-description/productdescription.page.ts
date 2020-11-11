import { Component } from '@angular/core';

@Component({
  selector: 'app-productdescription',
  templateUrl: 'productdescription.page.html',
  styleUrls: ['productdescription.page.scss']
})
export class productdescriptionPage {
  productOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    scrollbar: true,
  };
  status: boolean = false;
  value: boolean = false;
  productClick(){
      this.status = !this.status;
  }
  faqClick(){
    this.value = !this.value;
  }
  constructor() {}
}
