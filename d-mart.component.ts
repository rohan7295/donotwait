import { Component } from '@angular/core';

interface Shop {
  name: string;
  waitingTime: string;
}

interface dmartbycity {
  [city: string]: Shop[]; // Use an index signature to allow dynamic keys
}
@Component({
  selector: 'app-d-mart',
  templateUrl: './d-mart.component.html',
  styleUrls: ['./d-mart.component.css']
})
export class DMartComponent  {

  cities = [
    'Mumbai',
    'Pune',
    'Nagpur',
    'Nashik',
    'Aurangabad',
    'Kolhapur',
    'Thane',
    'Solapur',
    'Ahmednagar',
    'Akola',
    'Amravati',
    'Bhandara',
    'Beed',
    'Buldhana',
    'Chandrapur',
    'Dhule',
    'Gadchiroli',
    'Gondia',
    'Jalna',
    'Jalgaon',
    'Latur',
    'Mumbai Suburban',
    'Osmanabad',
    'Parbhani',
    'Panchgani',
    'Ratnagiri',
    'Sindhudurg',
    'Wardha',
    'Washim',
    'Yavatmal'
  ];

  DMartShops :dmartbycity = {
    Mumbai: [
      { name: 'DMart Borivali', waitingTime: '20 mins' },
      { name: 'DMart Malad', waitingTime: '25 mins' },
      { name: 'DMart Andheri', waitingTime: '18 mins' },
      { name: 'DMart Powai', waitingTime: '22 mins' },
      { name: 'DMart Lower Parel', waitingTime: '15 mins' },
    ],
    Pune: [
      { name: 'DMart Aundh', waitingTime: '15 mins' },
      { name: 'DMart Baner', waitingTime: '20 mins' },
      { name: 'DMart Kothrud', waitingTime: '18 mins' },
      { name: 'DMart Hadapsar', waitingTime: '17 mins' },
      { name: 'DMart Hinjawadi', waitingTime: '22 mins' },
    ],
    Nagpur: [
      { name: 'DMart Dharampeth', waitingTime: '12 mins' },
      { name: 'DMart Manish Nagar', waitingTime: '15 mins' },
      { name: 'DMart Wardha Road', waitingTime: '20 mins' },
    ],
    Nashik: [
      { name: 'DMart Gangapur Road', waitingTime: '18 mins' },
      { name: 'DMart College Road', waitingTime: '12 mins' },
      { name: 'DMart Panchavati', waitingTime: '20 mins' },
    ],
    Aurangabad: [
      { name: 'DMart Jalna Road', waitingTime: '15 mins' },
      { name: 'DMart CIDCO', waitingTime: '12 mins' },
    ],
    Kolhapur: [
      { name: 'DMart Tarabai Park', waitingTime: '20 mins' },
      { name: 'DMart Rajarampuri', waitingTime: '15 mins' },
    ],
    Thane: [
      { name: 'DMart Thane West', waitingTime: '22 mins' },
      { name: 'DMart Ghodbunder Road', waitingTime: '18 mins' },
    ],
    Solapur: [
      { name: 'DMart Solapur Main', waitingTime: '16 mins' },
      { name: 'DMart Vijapur Road', waitingTime: '20 mins' },
    ],
    Ahmednagar: [
      { name: 'DMart Ahmednagar', waitingTime: '15 mins' },
      { name: 'DMart Savedi', waitingTime: '18 mins' },
    ],
    Akola: [
      { name: 'DMart Akola City', waitingTime: '17 mins' },
      { name: 'DMart Balapur', waitingTime: '12 mins' },
    ],
    Amravati: [
      { name: 'DMart Amravati', waitingTime: '20 mins' },
      { name: 'DMart Badnera Road', waitingTime: '14 mins' },
    ],
    Bhandara: [
      { name: 'DMart Bhandara', waitingTime: '18 mins' },
    ],
    Beed: [
      { name: 'DMart Beed City', waitingTime: '20 mins' },
      { name: 'DMart Ashti', waitingTime: '16 mins' },
    ],
    Buldhana: [
      { name: 'DMart Buldhana', waitingTime: '19 mins' },
      { name: 'DMart Chikhli', waitingTime: '14 mins' },
    ],
    Chandrapur: [
      { name: 'DMart Chandrapur', waitingTime: '20 mins' },
      { name: 'DMart Warora', waitingTime: '16 mins' },
    ],
    Dhule: [
      { name: 'DMart Dhule City', waitingTime: '15 mins' },
      { name: 'DMart Shirpur', waitingTime: '18 mins' },
    ],
    Gadchiroli: [
      { name: 'DMart Gadchiroli', waitingTime: '22 mins' },
    ],
    Gondia: [
      { name: 'DMart Gondia', waitingTime: '20 mins' },
    ],
    Hingoli: [
      { name: 'DMart Hingoli City', waitingTime: '18 mins' },
    ],
    Jalgaon: [
      { name: 'DMart Jalgaon', waitingTime: '15 mins' },
      { name: 'DMart Amalner', waitingTime: '17 mins' },
    ],
    Jalna: [
      { name: 'DMart Jalna City', waitingTime: '14 mins' },
      { name: 'DMart Partur', waitingTime: '18 mins' },
    ],
    Latur: [
      { name: 'DMart Latur', waitingTime: '19 mins' },
      { name: 'DMart Udgir', waitingTime: '16 mins' },
    ],
    Nanded: [
      { name: 'DMart Nanded', waitingTime: '17 mins' },
      { name: 'DMart Mukhed', waitingTime: '20 mins' },
    ],
    Nandurbar: [
      { name: 'DMart Nandurbar', waitingTime: '18 mins' },
    ],
    Osmanabad: [
      { name: 'DMart Osmanabad', waitingTime: '20 mins' },
      { name: 'DMart Tuljapur', waitingTime: '15 mins' },
    ],
    Palghar: [
      { name: 'DMart Palghar', waitingTime: '16 mins' },
      { name: 'DMart Dahanu', waitingTime: '20 mins' },
    ],
    Parbhani: [
      { name: 'DMart Parbhani', waitingTime: '18 mins' },
    ],
    Ratnagiri: [
      { name: 'DMart Ratnagiri', waitingTime: '22 mins' },
      { name: 'DMart Chiplun', waitingTime: '20 mins' },
    ],
    Sangli: [
      { name: 'DMart Sangli', waitingTime: '15 mins' },
      { name: 'DMart Miraj', waitingTime: '17 mins' },
    ],
    Satara: [
      { name: 'DMart Satara', waitingTime: '12 mins' },
      { name: 'DMart Wai', waitingTime: '18 mins' },
    ],
    Sindhudurg: [
      { name: 'DMart Kankavli', waitingTime: '19 mins' },
    ],
    Wardha: [
      { name: 'DMart Wardha', waitingTime: '17 mins' },
    ],
    Washim: [
      { name: 'DMart Washim', waitingTime: '20 mins' },
    ],
    Yavatmal: [
      { name: 'DMart Yavatmal', waitingTime: '15 mins' },
      { name: 'DMart Pusad', waitingTime: '18 mins' },
    ],
  };
  selectedCity: string = '';
  selectedShop: string = '';
  shopList: any[] = [];
  waitingTime: string = '';
Object: any;

get cityList() {
  return Object.keys(this.DMartShops);
}
  onCityChange() {
    // Update the bank list based on the selected city
    this.shopList = this.DMartShops[this.selectedCity] || [];
    this.selectedShop = '';
    this.waitingTime = '';
  }

  onShopSelect(shopName: string) {
    const shop = this.shopList.find(s => s.name === shopName);
    this.waitingTime = shop ? shop.waitingTime : '';
  }
}



