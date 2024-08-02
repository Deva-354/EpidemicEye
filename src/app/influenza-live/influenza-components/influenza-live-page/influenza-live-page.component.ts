import { Component } from '@angular/core';

@Component({
  selector: 'app-influenza-live-page',
  templateUrl: './influenza-live-page.component.html',
  styleUrl: './influenza-live-page.component.css'
})
export class InfluenzaLivePageComponent {
  predictedCases: number | null = null;
  combinedMessage: string | null = null;
  responseMessage: string | null = null;
  message: string | null = null;
  result: string | null = null;
  public showMessage: boolean = false;

       // Properties bound to the input fields
       cases: number = 0;
       deaths: number = 0;
       recoveries: number = 0;

       //creating a selection menu for users of countries
       countries = [
       { name: 'Argentina', population: 41162857.0 },
       { name: 'Combodia', population: 3308200.0 },
       { name: 'Romani', population: 2755282.0 },
       { name: 'Vietnam', population: 1262168.0 },
       { name: 'Peru', population: 12464232.0 },
       { name: 'Swedan', population: 34234234.0 },
       { name: 'Turkey', population: 65756735.0 },
       { name: 'Slovakia', population: 465567658.0 },
       { name: 'Saudia Arabia', population: 5737567.0 },
       { name: 'South Korea', population: 23423.0 }
   ];

       selectedCountry: string = '';

       


  ngOnInit(): void {
    this.runModel();
  }

  runModel(): void {
    let MSE: number = 0;
    let mean: number = 0;
    let dummy: number = 0;
    let totalSquared: number = 0;
    let total: number = 0;
    let value: number = 0;
    let countryName: string = "";
    let x: number = 0;
    let y: number = 0;
    let length: number = 0;

    let XTX: number[][] = Array.from({ length: 4 }, () => Array(4).fill(0));
    let XTy: number[] = new Array(4).fill(0);

    

    const matrix: number[][] = [
      [1,783077,376852,232703],
      [1,13209,6348,3892],
      [1,4856,2087,1379],
      [1,1490,546,296],
      [1,6498,2904,1879],
      [1,513,91,87],
      [1,51012,25111,14862],
      [1,722,143,118],
      [1,823,177,129],
      [1,12145,5891,3659],
      [1,8721,3984,2531],
      [1,61322,32587,14823],
      [1,21345,10487,6123],
      [1,2637,1120,709],
      [1,4051,1715,1126],
      [1,3702,1578,1027],
      [1,34456,17098,10387],
      [1,2856,1223,783],
      [1,36542,18315,11209],
      [1,2429,1023,638],
      [1,75543,40678,18832],
      [1,15423,7425,4368],
      [1,3389,1451,943],
      [1,29146,14457,8812],
      [1,41027,21056,11580],
      [1,935,215,145],
      [1,10345,4916,3102],
      [1,610,112,101],
      [1,39264,19987,12945],
      [1,1048,278,160],
      [1,1256,409,210],
      [1,7123,3210,2085],
      [1,1904,771,448],
      [1,1367,477,251],
      [1,11234,5402,3361],
      [1,9512,4425,2789],
      [1,19876,9894,5690],
      [1,3105,1339,861],
      [1,2237,936,570],
      [1,45989,24023,13276],
      [1,14267,6830,4121],
      [1,1756,693,394],
      [1,2061,852,507],
      [1,25478,12856,7865],
      [1,23567,11894,7304],
      [1,27453,13677,8441],
      [1,5890,2613,1692],
      [1,5332,2331,1522],
      [1,18854,9374,5342],
      [1,16384,7910,4623],
      [1,17592,8650,4921],
      [1,31758,15984,9872],
      [1,87923,43023,22045],
      [1,7854,3547,2308],
      [1,300,300,300]

  ];
  
let matrixTranspose: number[][] = Array.from({ length: 4 }, () => Array(55).fill(0));

let target: number[] = [
123, 134, 145, 156, 167, 178, 189, 200, 211, 222, 233, 244, 255, 266, 277, 288, 299, 310, 321, 332,
343, 354, 365, 376, 387, 398, 409, 420, 431, 442, 453, 464, 475, 486, 497, 508, 519, 530, 541, 552,
563, 574, 585, 596, 607, 618, 629, 640, 651, 662,345, 34534,345,365,564
];

let highCases: number[] = [];
let highCountry: string[] = [];

let casesObserved: number[] = [
1162857, 0, 299, 333, 1251, 0, 466, 10, 0, 0, 15, 1451, 770, 0, 5550, 11781, 521, 688, 70, 52, 440, 18431, 4, 16, 0, 5, 139, 624, 4, 0, 10360, 0, 0, 135, 503, 318, 3, 114, 555, 12978, 7, 0, 8, 9, 4161, 82543, 0, 0, 1406, 0, 22, 154, 0, 435, 1126];


let casesObservedTwo: number[] = [];
let countryTwo: string[] = [];

let deathsObserved: number[] = [
63263, 0, 7, 20, 130, 0, 17, 2, 0, 0, 0, 43, 7, 0, 30, 186, 5, 4, 8, 0, 5, 1283, 0, 0, 0, 0, 10, 21, 1, 0, 445, 0, 0, 1, 17, 16, 0, 0, 9, 217, 1, 0, 0, 0, 27, 3330, 0, 0, 32, 0, 2, 18, 0, 2, 12];

let casesPredicted: number[] = [
412, 823, 953, 204, 572, 681, 797, 115, 498, 706,
263, 827, 114, 985, 342, 671, 219, 504, 842, 138,
176, 293, 689, 750, 531, 468, 978, 341, 660, 201,
374, 809, 255, 624, 147, 302, 785, 931, 556, 718,
413, 892, 637, 285, 941, 320, 773, 567, 209, 870,
194, 689, 428, 563, 702
];

const deathsPredicted: number[] = [5, 7, 2, 10, 8, 6, 4, 9, 3, 11,
12, 5, 14, 3, 7, 8, 10, 6, 2, 5,
9, 4, 7, 8, 3, 11, 2, 6, 9, 4,
5, 8, 3, 10, 7, 6, 12, 5, 4, 9,
3, 7, 6, 8, 5, 10, 2, 11, 9, 4,
8, 3, 6, 5, 7];

const country: string[] = ["Global",
    "Argentina",
    "Australia",
    "Austria",
    "Bangladesh",
    "Belgium",
    "Bhutan",
    "Brazil",
    "Brunei",
    "Cambodia",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Czech Republic",
    "Denmark",
    "Finland",
    "France",
    "Greece",
    "Germany",
    "Hungary",
    "India",
    "Iran",
    "Ireland",
    "Italy",
    "Japan",
    "Laos",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Myanmar",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Pakistan",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "Singapore",
    "Slovakia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "United States of America",
    "Vietnam"];


// Calculating sum of squared differences of predicted and observed data
for (let i = 0; i < casesObserved.length; i++) {
dummy = (casesObserved[i] - casesPredicted[i]) * (casesObserved[i] - casesPredicted[i]);
totalSquared += dummy;
}

// Calculating the total number of cases for the mean
for (let i = 0; i < casesObserved.length; i++) {
total += casesObserved[i];
}


// Calculating the MSE and mean of the baseline model
mean = total / casesObserved.length;
MSE = totalSquared / casesObserved.length;

// Determining whether the MSE accurately predicts or not
if (MSE < mean) {
console.log(`The mean squared error of COVID-19 cases are ${MSE}. Based on the observed data, this model makes accurate predictions based on mean of data.`);
} else if (MSE > mean) {
console.log(`The mean squared error of COVID-19 cases are ${MSE}. Based on the observed data, this model's predictions may not be reliable.`);
}

// Initializing arrays with country names and their cases
for (let i = 0; i < 54; i++) {
casesObservedTwo.push(casesObserved[i]);
countryTwo.push(country[i]);
}

// Finding the top ten countries with the highest cases and reusing the same arrays by updating them
for (let m = 0; m < 10; m++) {
for (let i = 0; i < casesObservedTwo.length; i++) {
  if (value < casesObservedTwo[i]) {
      value = casesObservedTwo[i];
      countryName = countryTwo[i];
      y = i;
  }
}
casesObservedTwo.splice(y, 1);
countryTwo.splice(y, 1);

highCases.push(value);
highCountry.push(countryName);

value = 0;
countryName = "";
x++;
}

// Initializing arrays with the top ten countries that have the highest number of COVID-19 cases and printing it to user
for (let k = 0; k < highCases.length; k++) {
console.log(`${highCountry[k]} - ${highCases[k]}`);
}

// Solving transpose of COVID data matrix
for (let j = 0; j < 55; j++) {
for (let k = 0; k < 4; k++) {
  matrixTranspose[k][j] = matrix[j][k];
}
}

// Performing matrix multiplication XTX
console.log("");
for (let i = 0; i < 4; i++) {
for (let j = 0; j < 4; j++) {
  XTX[i][j] = 0;
  for (let k = 0; k < 55; k++) {
      XTX[i][j] += matrixTranspose[i][k] * matrix[k][j];
  }
}
}

console.log("");

for (let i = 0; i < 4; i++) {
XTy[i] = 0;
for (let k = 0; k < 55; k++) {
  XTy[i] += matrixTranspose[i][k] * target[k];
}
}

// Performing matrix multiplication XTy
console.log("");

for (let i = 0; i < 4; i++) {
XTy[i] = 0;
for (let k = 0; k < 55; k++) {
  XTy[i] += matrixTranspose[i][k] * target[k];
}
}

const n = XTX.length;
const augmented: number[][] = Array.from({ length: n }, () => Array(2 * n).fill(0));

// Create augmented matrix [A | I]
for (let i = 0; i < n; i++) {
for (let j = 0; j < n; j++) {
  augmented[i][j] = XTX[i][j];
  augmented[i][j + n] = (i === j) ? 1 : 0;
}
}

// Apply Gaussian elimination
for (let i = 0; i < n; i++) {
// Find the pivot
let pivot = augmented[i][i];
if (pivot === 0) {
  // Handle zero pivot if necessary
}

// Normalize the pivot row
for (let j = 0; j < 2 * n; j++) {
  augmented[i][j] /= pivot;
}

// Eliminate the column entries
for (let k = 0; k < n; k++) {
  if (k === i) continue;
  let factor = augmented[k][i];
  for (let j = 0; j < 2 * n; j++) {
      augmented[k][j] -= factor * augmented[i][j];
  }
}
}

// Extract the inverse matrix from the augmented matrix
const inverse: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
for (let i = 0; i < n; i++) {
for (let j = 0; j < n; j++) {
  inverse[i][j] = augmented[i][j + n];
}
}

// Matrix multiplication of XTX-1 and XTy
const beta: number[] = Array(4).fill(0);
for (let i = 0; i < 4; i++) {
beta[i] = 0;
for (let k = 0; k < 4; k++) {
  beta[i] += inverse[i][k] * XTy[k];
}
}

// Printing beta (coefficient) vectors
for (let i = 0; i < beta.length; i++) {
console.log(beta[i]);
}
this.predictedCases = beta[0] + (beta[1] * this.cases) + (beta[2] * this.deaths) + (beta[3] * this.recoveries);
this.predictedCases = Math.round(this.predictedCases);


  this.message = "The mean squared error of COVID-19 cases are " + Math.round(MSE)+". Based on the observed data with mean of " + Math.round(mean)+" cases globally, this model's predictions may not be reliable.";
     


  }
}

