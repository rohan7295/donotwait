import { Component } from '@angular/core';


interface Bank {
  name: string;
  waitingTime: string;
}

interface BanksByCity {
  [city: string]: Bank[]; // Use an index signature to allow dynamic keys
}
@Component({
  selector: 'app-sbi',
  templateUrl: './sbi.component.html',
  styleUrls: ['./sbi.component.css']
})
export class SbiComponent  {

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

  // Comprehensive banks object including all cities in Maharashtra
  banks: BanksByCity = {
    Mumbai: [
      { name: 'SBI Bandra', waitingTime: '10 mins' },
      { name: 'SBI Andheri', waitingTime: '15 mins' },
      { name: 'SBI Marine Lines', waitingTime: '8 mins' },
      { name: 'SBI Colaba', waitingTime: '12 mins' },
      { name: 'SBI Dadar', waitingTime: '14 mins' },
      { name: 'SBI Gramin Mumbai 1', waitingTime: '20 mins' }, // Gramin Branch
      { name: 'SBI Gramin Mumbai Sub 1', waitingTime: '15 mins' }, // Sub Branch
    ],
    Pune: [
      { name: 'SBI Koregaon Park', waitingTime: '7 mins' },
      { name: 'SBI Camp', waitingTime: '12 mins' },
      { name: 'SBI Hinjawadi', waitingTime: '20 mins' },
      { name: 'SBI Shivaji Nagar', waitingTime: '5 mins' },
      { name: 'SBI Chinchwad', waitingTime: '15 mins' },
      { name: 'SBI Kharadi', waitingTime: '10 mins' },
      { name: 'SBI Aundh', waitingTime: '8 mins' },
      { name: 'SBI Gramin Pune 1', waitingTime: '18 mins' }, // Gramin Branch
      { name: 'SBI Gramin Pune 2', waitingTime: '20 mins' }, // Gramin Branch
      { name: 'SBI Gramin Pune Sub 1', waitingTime: '12 mins' }, // Sub Branch
    ],
    Nagpur: [
      { name: 'SBI Sitabuldi', waitingTime: '11 mins' },
      { name: 'SBI Nandanvan', waitingTime: '12 mins' },
      { name: 'SBI Gandhibagh', waitingTime: '10 mins' },
      { name: 'SBI Gramin Nagpur 1', waitingTime: '16 mins' }, // Gramin Branch
      { name: 'SBI Gramin Nagpur Sub 1', waitingTime: '14 mins' }, // Sub Branch
    ],
    Nashik: [
      { name: 'SBI Nashik Road', waitingTime: '13 mins' },
      { name: 'SBI Panchavati', waitingTime: '9 mins' },
      { name: 'SBI Gangapur', waitingTime: '15 mins' },
      { name: 'SBI Gramin Nashik 1', waitingTime: '18 mins' }, // Gramin Branch
      { name: 'SBI Gramin Nashik Sub 1', waitingTime: '10 mins' }, // Sub Branch
    ],
    Aurangabad: [
      { name: 'SBI Aurangabad', waitingTime: '8 mins' },
      { name: 'SBI CIDCO', waitingTime: '12 mins' },
      { name: 'SBI Jalna Road', waitingTime: '10 mins' },
      { name: 'SBI Gramin Aurangabad 1', waitingTime: '17 mins' }, // Gramin Branch
      { name: 'SBI Gramin Aurangabad Sub 1', waitingTime: '15 mins' }, // Sub Branch
    ],
    Kolhapur: [
      { name: 'SBI Kolhapur City', waitingTime: '15 mins' },
      { name: 'SBI Shivaji Chowk', waitingTime: '20 mins' },
      { name: 'SBI Gramin Kolhapur 1', waitingTime: '10 mins' }, // Gramin Branch
      { name: 'SBI Gramin Kolhapur Sub 1', waitingTime: '12 mins' }, // Sub Branch
    ],
    Thane: [
      { name: 'SBI Thane West', waitingTime: '10 mins' },
      { name: 'SBI Thane East', waitingTime: '14 mins' },
      { name: 'SBI Gramin Thane 1', waitingTime: '8 mins' }, // Gramin Branch
      { name: 'SBI Gramin Thane Sub 1', waitingTime: '9 mins' }, // Sub Branch
    ],
    Solapur: [
      { name: 'SBI Solapur City', waitingTime: '8 mins' },
      { name: 'SBI Mangalwar Peth', waitingTime: '15 mins' },
      { name: 'SBI Vijapur Road', waitingTime: '10 mins' },
      { name: 'SBI Aashta', waitingTime: '9 mins' },
      { name: 'SBI Gramin Solapur 1', waitingTime: '17 mins' }, // Gramin Branch
      { name: 'SBI Gramin Solapur Sub 1', waitingTime: '15 mins' }, // Sub Branch
    ],
    Ahmednagar: [
      { name: 'SBI Ahmednagar', waitingTime: '12 mins' },
      { name: 'SBI Newasa', waitingTime: '15 mins' },
      { name: 'SBI Sangamner', waitingTime: '10 mins' },
      { name: 'SBI Gramin Ahmednagar 1', waitingTime: '14 mins' }, // Gramin Branch
      { name: 'SBI Gramin Ahmednagar Sub 1', waitingTime: '16 mins' }, // Sub Branch
    ],
    Akola: [
      { name: 'SBI Akola', waitingTime: '8 mins' },
      { name: 'SBI Murtizapur', waitingTime: '11 mins' },
      { name: 'SBI Baranjala', waitingTime: '10 mins' },
      { name: 'SBI Gramin Akola 1', waitingTime: '12 mins' }, // Gramin Branch
      { name: 'SBI Gramin Akola Sub 1', waitingTime: '13 mins' }, // Sub Branch
    ],
    Amravati: [
      { name: 'SBI Amravati', waitingTime: '15 mins' },
      { name: 'SBI Morshi', waitingTime: '10 mins' },
      { name: 'SBI Dhamangaon', waitingTime: '12 mins' },
      { name: 'SBI Gramin Amravati 1', waitingTime: '14 mins' }, // Gramin Branch
      { name: 'SBI Gramin Amravati Sub 1', waitingTime: '13 mins' }, // Sub Branch
    ],
    Bhandara: [
      { name: 'SBI Bhandara', waitingTime: '9 mins' },
      { name: 'SBI Sakoli', waitingTime: '15 mins' },
      { name: 'SBI Gramin Bhandara 1', waitingTime: '11 mins' }, // Gramin Branch
      { name: 'SBI Gramin Bhandara Sub 1', waitingTime: '12 mins' }, // Sub Branch
    ],
    Beed: [
      { name: 'SBI Beed', waitingTime: '10 mins' },
      { name: 'SBI Majalgaon', waitingTime: '14 mins' },
      { name: 'SBI Gramin Beed 1', waitingTime: '13 mins' }, // Gramin Branch
      { name: 'SBI Gramin Beed Sub 1', waitingTime: '15 mins' }, // Sub Branch
    ],
    Buldhana: [
      { name: 'SBI Buldhana', waitingTime: '11 mins' },
      { name: 'SBI Mehkar', waitingTime: '12 mins' },
      { name: 'SBI Gramin Buldhana 1', waitingTime: '14 mins' }, // Gramin Branch
      { name: 'SBI Gramin Buldhana Sub 1', waitingTime: '10 mins' }, // Sub Branch
    ],
    Chandrapur: [
      { name: 'SBI Chandrapur', waitingTime: '15 mins' },
      { name: 'SBI Warora', waitingTime: '10 mins' },
      { name: 'SBI Gramin Chandrapur 1', waitingTime: '12 mins' }, // Gramin Branch
      { name: 'SBI Gramin Chandrapur Sub 1', waitingTime: '9 mins' }, // Sub Branch
    ],
    Dhule: [
      { name: 'SBI Dhule', waitingTime: '10 mins' },
      { name: 'SBI Shirpur', waitingTime: '8 mins' },
      { name: 'SBI Gramin Dhule 1', waitingTime: '14 mins' }, // Gramin Branch
      { name: 'SBI Gramin Dhule Sub 1', waitingTime: '15 mins' }, // Sub Branch
    ],
    Gadchiroli: [
      { name: 'SBI Gadchiroli', waitingTime: '11 mins' },
      { name: 'SBI Kurkheda', waitingTime: '9 mins' },
      { name: 'SBI Gramin Gadchiroli 1', waitingTime: '12 mins' }, // Gramin Branch
      { name: 'SBI Gramin Gadchiroli Sub 1', waitingTime: '10 mins' }, // Sub Branch
    ],
    Gondia: [
      { name: 'SBI Gondia', waitingTime: '10 mins' },
      { name: 'SBI Goregaon', waitingTime: '14 mins' },
      { name: 'SBI Gramin Gondia 1', waitingTime: '8 mins' }, // Gramin Branch
      { name: 'SBI Gramin Gondia Sub 1', waitingTime: '12 mins' }, // Sub Branch
    ],
    Jalna: [
      { name: 'SBI Jalna', waitingTime: '11 mins' },
      { name: 'SBI Badnapur', waitingTime: '10 mins' },
      { name: 'SBI Gramin Jalna 1', waitingTime: '12 mins' }, // Gramin Branch
      { name: 'SBI Gramin Jalna Sub 1', waitingTime: '15 mins' }, // Sub Branch
    ],
    Jalgaon: [
      { name: 'SBI Jalgaon', waitingTime: '10 mins' },
      { name: 'SBI Chopda', waitingTime: '8 mins' },
      { name: 'SBI Gramin Jalgaon 1', waitingTime: '14 mins' }, // Gramin Branch
      { name: 'SBI Gramin Jalgaon Sub 1', waitingTime: '12 mins' }, // Sub Branch
    ],
    Latur: [
      { name: 'SBI Latur', waitingTime: '9 mins' },
      { name: 'SBI Renapur', waitingTime: '15 mins' },
      { name: 'SBI Gramin Latur 1', waitingTime: '14 mins' }, // Gramin Branch
      { name: 'SBI Gramin Latur Sub 1', waitingTime: '10 mins' }, // Sub Branch
    ],
    MumbaiSuburban: [
      { name: 'SBI Malad', waitingTime: '10 mins' },
      { name: 'SBI Borivali', waitingTime: '8 mins' },
      { name: 'SBI Gramin MumbaiSuburban 1', waitingTime: '12 mins' }, // Gramin Branch
      { name: 'SBI Gramin MumbaiSuburban Sub 1', waitingTime: '14 mins' }, // Sub Branch
    ],
    Osmanabad: [
      { name: 'SBI Osmanabad', waitingTime: '11 mins' },
      { name: 'SBI Tuljapur', waitingTime: '15 mins' },
      { name: 'SBI Gramin Osmanabad 1', waitingTime: '12 mins' }, // Gramin Branch
      { name: 'SBI Gramin Osmanabad Sub 1', waitingTime: '10 mins' }, // Sub Branch
    ],
    Parbhani: [
      { name: 'SBI Parbhani', waitingTime: '10 mins' },
      { name: 'SBI Jintur', waitingTime: '15 mins' },
      { name: 'SBI Gramin Parbhani 1', waitingTime: '12 mins' }, // Gramin Branch
      { name: 'SBI Gramin Parbhani Sub 1', waitingTime: '10 mins' }, // Sub Branch
    ],
    Panchgani: [
      { name: 'SBI Panchgani', waitingTime: '8 mins' },
      { name: 'SBI Mahabaleshwar', waitingTime: '10 mins' },
      { name: 'SBI Gramin Panchgani 1', waitingTime: '11 mins' }, // Gramin Branch
      { name: 'SBI Gramin Panchgani Sub 1', waitingTime: '15 mins' }, // Sub Branch
    ],
    Ratnagiri: [
      { name: 'SBI Ratnagiri', waitingTime: '10 mins' },
      { name: 'SBI Dapoli', waitingTime: '12 mins' },
      { name: 'SBI Gramin Ratnagiri 1', waitingTime: '14 mins' }, // Gramin Branch
      { name: 'SBI Gramin Ratnagiri Sub 1', waitingTime: '10 mins' }, // Sub Branch
    ],
    Sindhudurg: [
      { name: 'SBI Sindhudurg', waitingTime: '15 mins' },
      { name: 'SBI Malvan', waitingTime: '12 mins' },
      { name: 'SBI Gramin Sindhudurg 1', waitingTime: '10 mins' }, // Gramin Branch
      { name: 'SBI Gramin Sindhudurg Sub 1', waitingTime: '14 mins' }, // Sub Branch
    ],
    Wardha: [
      { name: 'SBI Wardha', waitingTime: '10 mins' },
      { name: 'SBI Hinganghat', waitingTime: '8 mins' },
      { name: 'SBI Gramin Wardha 1', waitingTime: '12 mins' }, // Gramin Branch
      { name: 'SBI Gramin Wardha Sub 1', waitingTime: '14 mins' }, // Sub Branch
    ],
    Washim: [
      { name: 'SBI Washim', waitingTime: '10 mins' },
      { name: 'SBI Karanja', waitingTime: '12 mins' },
      { name: 'SBI Gramin Washim 1', waitingTime: '11 mins' }, // Gramin Branch
      { name: 'SBI Gramin Washim Sub 1', waitingTime: '10 mins' }, // Sub Branch
    ],
    Yavatmal: [
      { name: 'SBI Yavatmal', waitingTime: '12 mins' },
      { name: 'SBI Pusad', waitingTime: '10 mins' },
      { name: 'SBI Gramin Yavatmal 1', waitingTime: '14 mins' }, // Gramin Branch
      { name: 'SBI Gramin Yavatmal Sub 1', waitingTime: '15 mins' }, // Sub Branch
    ],
  };

  selectedCity: string = '';
  selectedBank: string = '';
  bankList: Bank[] = [];
  waitingTime: string = '';

  onCityChange() {
    // Update the bank list based on the selected city
    this.bankList = this.banks[this.selectedCity] || [];
    this.selectedBank = '';
    this.waitingTime = '';
  }

  onBankSelect(bankName: string) {
    const bank = this.bankList.find(b => b.name === bankName);
    this.waitingTime = bank ? bank.waitingTime : '';
  }
}
