import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HamepageService } from 'src/app/shared/hamepage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productlist',
  templateUrl: 'productlist.page.html',
  styleUrls: ['productlist.page.scss']
})
export class productlistPage {

  home_data: any;
  products: any;

  id:any;

  serverUrl = environment.baseUrl;

  private subscription: Subscription;


  constructor(
    private homepageService: HamepageService,
    private route: ActivatedRoute,
  ) 
  {

    this.id = this.route.snapshot.paramMap.get("id");

    // console.log(this.id)
  }

  ngOnInit() 
  {
      this.subscription = this.homepageService.get_subcat_product(this.id).subscribe((data) => {

        if(data.status == 1)
        {
          
            this.home_data = data.result;

            this.products = this.home_data.products
            
            // console.log(data);
            // console.log(this.home_data);
            // console.log(this.products);
        }
        else
        {
          this.products = false;
        }

        console.log(this.products);
          
      });
  }
  
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }



}
