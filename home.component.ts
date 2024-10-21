import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  goToShop(shop: string) {
    console.log('Navigating to:', shop);
    // Add your routing or logic here
  }

}
