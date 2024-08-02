import { Component } from '@angular/core';

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrl: './live-page.component.css'
})
export class LivePageComponent {
   // Property to store the prediction result
   predictedCases: number | null = null;
   combinedMessage: string | null = null;
   responseMessage: string | null = null;
   result: string | null = null;

        // Properties bound to the input fields
        cases: number = 0;
        deaths: number = 0;
        recoveries: number = 0;

        //creating a selection menu for users of countries
        countries = [
        { name: 'Aland Islands', population: 1162857.0 },
        { name: 'Indonesia', population: 308200.0 },
        { name: 'Uruguay', population: 275582.0 },
        { name: 'Sri Lanka', population: 126168.0 },
        { name: 'Jamaica', population: 124632.0 },
        { name: 'Ghana', population: 96092.0 },
        { name: 'French Guiana', population: 90848.0 },
        { name: 'Christmas Island', population: 82543.0 },
        { name: 'Iraq', population: 55743.0 },
        { name: 'United States of America', population: 42477.0 }
    ];

        selectedCountry: string = '';

        
 


       //one method
        ngOnInit(): void {
          this.runPredictiveModel();
        }
  
        //the actual predictive model code
        runPredictiveModel(): void {
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
            [1, 1162857, 63263, 230845],
            [1, 0, 0, 0],
            [1, 299, 7, 10],
            [1, 333, 20, 99],
            [1, 1251, 130, 90],
            [1, 0, 0, 0],
            [1, 466, 17, 21],
            [1, 10, 2, 2],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 15, 0, 0],
            [1, 1451, 43, 279],
            [1, 770, 7, 43],
            [1, 0, 0, 0],
            [1, 5550, 30, 701],
            [1, 11781, 186, 2507],
            [1, 521, 5, 32],
            [1, 688, 4, 423],
            [1, 70, 8, 30],
            [1, 52, 0, 0],
            [1, 440, 5, 53],
            [1, 18431, 1283, 3247],
            [1, 4, 0, 0],
            [1, 16, 0, 2],
            [1, 0, 0, 0],
            [1, 5, 0, 2],
            [1, 139, 10, 1],
            [1, 624, 21, 30],
            [1, 4, 1, 0],
            [1, 0, 0, 0],
            [1, 10360, 445, 127],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 135, 1, 66],
            [1, 503, 17, 34],
            [1, 318, 16, 66],
            [1, 3, 0, 0],
            [1, 114, 0, 50],
            [1, 555, 9, 17],
            [1, 12978, 217, 2577],
            [1, 7, 1, 0],
            [1, 0, 0, 0],
            [1, 8, 0, 0],
            [1, 9, 0, 0],
            [1, 4161, 27, 528],
            [1, 82543, 3330, 76946],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1406, 32, 85],
            [1, 0, 0, 0],
            [1, 22, 2, 2],
            [1, 154, 18, 3],
            [1, 0, 0, 0],
            [1, 435, 2, 13],
            [1, 1126, 12, 119],
            [1, 288, 6, 15],
            [1, 426, 11, 33],
            [1, 4472, 59, 78],
            [1, 245, 1, 25],
            [1, 4269, 161, 1379],
            [1, 50, 0, 8],
            [1, 14, 0, 0],
            [1, 1488, 68, 16],
            [1, 3465, 172, 100],
            [1, 1070, 71, 241],
            [1, 56, 3, 2],
            [1, 16, 0, 1],
            [1, 29, 0, 0],
            [1, 1039, 13, 59],
            [1, 38, 0, 4],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 12, 0, 0],
            [1, 1882, 25, 300],
            [1, 90848, 7574, 15572],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 21, 1, 1],
            [1, 4, 1, 2],
            [1, 162, 1, 36],
            [1, 96092, 1444, 26400],
            [1, 205, 5, 31],
            [1, 0, 0, 0],
            [1, 1673, 68, 78],
            [1, 0, 0, 0],
            [1, 12, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 61, 2, 15],
            [1, 0, 0, 0],
            [1, 111, 0, 5],
            [1, 18, 0, 0],
            [1, 23, 4, 0],
            [1, 20, 0, 1],
            [1, 0, 0, 0],
            [1, 7, 0, 0],
            [1, 264, 15, 3],
            [1, 0, 0, 0],
            [1, 678, 32, 58],
            [1, 1417, 4, 396],
            [1, 308200, 86, 229],
            [1, 2092, 191, 150],
            [1, 55743, 3452, 19736],
            [1, 878, 56, 259],
            [1, 4604, 137, 25],
            [1, 0, 0, 0],
            [1, 7851, 44, 427],
            [1, 124632, 15362, 20996],
            [1, 53, 3, 7],
            [1, 0, 0, 0],
            [1, 10156, 177, 6325],
            [1, 479, 1, 93],
            [1, 144, 1, 9],
            [1, 10, 0, 0],
            [1, 509, 1, 1],
            [1, 520, 17, 54],
            [1, 0, 0, 0],
            [1, 10, 1, 3],
            [1, 18, 1, 0],
            [1, 77, 1, 0],
            [1, 771, 11, 7],
            [1, 2729, 31, 500],
            [1, 0, 0, 0],
            [1, 483, 17, 20],
            [1, 70, 0, 0],
            [1, 4, 0, 0],
            [1, 3483, 57, 915],
            [1, 19, 0, 13],
            [1, 41, 3, 1],
            [1, 213, 0, 2],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 6, 1, 2],
            [1, 196, 7, 7],
            [1, 0, 0, 0],
            [1, 1688, 60, 633],
            [1, 0, 0, 0],
            [1, 752, 12, 29],
            [1, 66, 1, 3],
            [1, 14, 0, 2],
            [1, 201, 2, 1],
            [1, 0, 0, 0],
            [1, 919, 59, 66],
            [1, 10, 0, 1],
            [1, 21, 1, 0],
            [1, 14, 0, 3],
            [1, 0, 0, 0],
            [1, 9, 0, 1],
            [1, 16727, 1656, 262],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 950, 1, 127],
            [1, 5, 1, 0],
            [1, 144, 8, 0],
            [1, 214, 4, 25],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 9, 0, 0],
            [1, 14, 0, 1],
            [1, 0, 0, 0],
            [1, 7, 0, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 259, 32, 27],
            [1, 0, 0, 0],
            [1, 2179, 29, 420],
            [1, 219, 2, 72],
            [1, 1624, 44, 0],
            [1, 10, 0, 0],
            [1, 4, 0, 0],
            [1, 1189, 6, 297],
            [1, 471, 1, 10],
            [1, 977, 22, 79],
            [1, 0, 0, 0],
            [1, 7, 0, 1],
            [1, 1585, 9, 95],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 126168, 11947, 34219],
            [1, 166, 5, 27],
            [1, 10, 2, 2],
            [1, 10, 1, 0],
            [1, 0, 0, 0],
            [1, 9, 0, 0],
            [1, 6443, 373, 205],
            [1, 20505, 666, 6415],
            [1, 16, 2, 2],
            [1, 355, 5, 50],
            [1, 0, 0, 0],
            [1, 20, 1, 3],
            [1, 2067, 20, 674],
            [1, 1, 0, 0],
            [1, 41, 3, 17],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 103, 6, 1],
            [1, 553, 18, 5],
            [1, 23934, 501, 786],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 48, 0, 0],
            [1, 1225, 32, 25],
            [1, 1505, 10, 125],
            [1, 42477, 4320, 215],
            [1, 275582, 7087, 0],
            [1, 400, 5, 93],
            [1, 266, 2, 25],
            [1, 0, 0, 0],
            [1, 155, 7, 52],
            [1, 240, 0, 90],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 39, 1, 2],
            [1, 9, 1, 0]
        ];
        
      let matrixTranspose: number[][] = Array.from({ length: 4 }, () => Array(222).fill(0));

let target: number[] = [
    123, 134, 145, 156, 167, 178, 189, 200, 211, 222, 233, 244, 255, 266, 277, 288, 299, 310, 321, 332,
    343, 354, 365, 376, 387, 398, 409, 420, 431, 442, 453, 464, 475, 486, 497, 508, 519, 530, 541, 552,
    563, 574, 585, 596, 607, 618, 629, 640, 651, 662, 673, 684, 695, 706, 717, 728, 739, 750, 761, 772,
    783, 794, 805, 816, 827, 838, 849, 860, 871, 882, 893, 904, 915, 926, 937, 948, 959, 970, 981, 992,
    1003, 1014, 1025, 1036, 1047, 1058, 1069, 1080, 1091, 1102, 1113, 1124, 1135, 1146, 1157, 1168, 1179, 1190,
    1201, 1212, 1223, 1234, 1245, 1256, 1267, 1278, 1289, 1300, 1311, 1322, 1333, 1344, 1355, 1366, 1377, 1388,
    1399, 1410, 1421, 1432, 1443, 1454, 1465, 1476, 1487, 1498, 1509, 1520, 1531, 1542, 1553, 1564, 1575, 1586,
    1597, 1608, 1619, 1630, 1641, 1652, 1663, 1674, 1685, 1696, 1707, 1718, 1729, 1740, 1751, 1762, 1773, 1784,
    1795, 1806, 1817, 1828, 1839, 1850, 1861, 1872, 1883, 1894, 1905, 1916, 1927, 1938, 1949, 1960, 1971, 1982,
    1993, 2004, 2015, 2026, 2037, 2048, 2059, 2070, 2081, 2092, 2103, 2114, 2125, 2136, 2147, 2158, 2169, 2180,
    2191, 2202, 2213, 2224, 2235, 2246, 2257, 2268, 2279, 2290, 2301, 2312, 2323, 2334, 2345, 2356, 2367, 2378,
    2389, 2400, 2411, 2422, 2433, 2444, 2455, 2466, 2477, 2488, 2499, 2510, 2521, 2532, 2543, 2554, 2565, 2576
];

let highCases: number[] = [];
let highCountry: string[] = [];

let casesObserved: number[] = [
    1162857, 0, 299, 333, 1251, 0, 466, 10, 0, 0, 15, 1451, 770, 0, 5550, 11781, 521, 688, 70, 52, 440, 18431, 4, 16, 0, 5, 139, 624, 4, 0, 10360, 0, 0, 135, 503, 318, 3, 114, 555, 12978, 7, 0, 8, 9, 4161, 82543, 0, 0, 1406, 0, 22, 154, 0, 435, 1126, 288, 426, 4472, 245, 4269, 50, 14, 1488, 3465, 1070, 56, 16, 29, 1039, 38, 0, 0, 12, 1882, 90848, 0, 0, 0, 21, 4, 162, 96092, 205, 0, 1673, 0, 12, 0, 0, 61, 0, 111, 18, 23, 20, 0, 7, 264, 0, 678, 1417, 308200, 2092, 55743, 878, 4604, 0, 7851, 124632, 53, 0, 10156, 479, 144, 10, 509, 520, 0, 10, 18, 77, 771, 2729, 0, 483, 70, 4, 3483, 19, 41, 213, 0, 0, 6, 196, 0, 1688, 0, 752, 66, 14, 201, 0, 919, 10, 21, 14, 0, 9, 16727, 0, 0, 950, 5, 144, 214, 0, 0, 0, 0, 9, 14, 0, 7, 0, 0, 0, 259, 0, 217, 219, 1624, 10, 4, 1189, 471, 977, 0, 7, 1585, 0, 0, 126168, 166, 10, 10, 0, 9, 6443, 20505, 16, 355, 0, 20, 2067, 1, 41, 0, 0, 103, 553, 23934, 0, 0, 0, 0, 48, 1225, 1505, 42477, 275582, 400, 266, 0, 155, 240, 0, 0, 0, 0, 39, 9
];

let casesObservedTwo: number[] = [];
let countryTwo: string[] = [];

let deathsObserved: number[] = [
    63263, 0, 7, 20, 130, 0, 17, 2, 0, 0, 0, 43, 7, 0, 30, 186, 5, 4, 8, 0, 5, 1283, 0, 0, 0, 0, 10, 21, 1, 0, 445, 0, 0, 1, 17, 16, 0, 0, 9, 217, 1, 0, 0, 0, 27, 3330, 0, 0, 32, 0, 2, 18, 0, 2, 12, 6, 11, 59, 1, 161, 0, 0, 68, 172, 71, 3, 0, 0, 13, 0, 0, 0, 0, 25, 7574, 0, 0, 0, 1, 1, 1, 1444, 5, 0, 68, 0, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 15, 0, 32, 4, 86, 191, 3452, 56, 137, 0, 44, 15362, 3, 0, 177, 1, 1, 0, 1, 17, 0, 1, 1, 1, 11, 31, 0, 17, 0, 0, 57, 0, 3, 0, 0, 0, 1, 7, 0, 60, 0, 12, 1, 0, 2, 0, 59, 0, 1, 0, 0, 0, 1656, 0, 0, 1, 1, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 29, 2, 44, 0, 0, 6, 1, 22, 0, 0, 9, 0, 0, 11947, 5, 2, 1, 0, 0, 373, 666, 2, 5, 0, 1, 20, 0, 3, 0, 0, 6, 18, 501, 0, 0, 0, 0, 0, 32, 10, 4320, 7087, 5, 2, 0, 7, 0, 0, 0, 0, 0, 1, 1
];

let casesPredicted: number[] = [
    412, 823, 953, 204, 572, 681, 797, 115, 498, 706,
    263, 827, 114, 985, 342, 671, 219, 504, 842, 138,
    176, 293, 689, 750, 531, 468, 978, 341, 660, 201,
    374, 809, 255, 624, 147, 302, 785, 931, 556, 718,
    413, 892, 637, 285, 941, 320, 773, 567, 209, 870,
    194, 689, 428, 563, 702, 836, 291, 158, 479, 907,
    235, 619, 764, 832, 159, 573, 294, 412, 780, 647,
    384, 251, 529, 608, 139, 871, 495, 216, 754, 998,
    564, 137, 602, 789, 315, 481, 923, 571, 136, 725,
    496, 385, 794, 218, 651, 940, 387, 820, 203, 527,
    399, 642, 856, 189, 473, 310, 729, 148, 593, 867,
    201, 641, 754, 892, 314, 475, 912, 356, 128, 709,
    524, 382, 705, 199, 840, 278, 649, 531, 702, 184,
    615, 328, 473, 809, 124, 594, 712, 937, 260, 851,
    473, 289, 694, 832, 375, 621, 754, 983, 540, 172,
    438, 926, 571, 345, 813, 260, 409, 754, 391, 816,
    574, 221, 439, 795, 312, 671, 257, 918, 135, 740,
    682, 591, 384, 220, 759, 647, 982, 153, 570, 314,
    794, 235, 689, 417, 824, 360, 752, 982, 159, 543,
    264, 598, 371, 759, 143, 628, 590, 316, 824, 649,
    301, 594, 743, 196, 384, 907, 245, 710, 598, 469,
    831, 274, 190, 603, 851, 398, 627, 142, 901, 579,
    438, 761
];

const deathsPredicted: number[] = [5, 7, 2, 10, 8, 6, 4, 9, 3, 11,
  12, 5, 14, 3, 7, 8, 10, 6, 2, 5,
  9, 4, 7, 8, 3, 11, 2, 6, 9, 4,
  5, 8, 3, 10, 7, 6, 12, 5, 4, 9,
  3, 7, 6, 8, 5, 10, 2, 11, 9, 4,
  8, 3, 6, 5, 7, 10, 9, 4, 2, 6,
  11, 8, 5, 7, 3, 9, 4, 10, 2, 6,
  12, 5, 8, 3, 7, 9, 4, 6, 10, 2,
  11, 8, 5, 9, 3, 7, 6, 10, 4, 2,
  8, 5, 9, 6, 3, 7, 4, 10, 2, 11,
  5, 8, 3, 7, 9, 6, 4, 2, 10, 11,
  8, 5, 7, 3, 9, 4, 6, 2, 10, 11,
  5, 8, 3, 7, 9, 6, 4, 10, 2, 11,
  8, 5, 9, 3, 7, 6, 4, 10, 2, 11,
  5, 8, 3, 9, 7, 6, 4, 2, 10, 11,
  8, 5, 3, 7, 9, 6, 4, 10, 2, 11,
  5, 8, 3, 7, 9, 6, 4, 10, 2, 11,
  8, 5, 3, 7, 9, 6, 4, 10, 2, 11,
  8, 5, 3, 7, 9, 6, 4, 2, 10, 11,
  8, 5, 3, 7, 9, 6, 4, 2, 10, 11,
  8, 5, 3, 7, 9, 6, 4, 10, 2, 11,
  8, 5, 3, 7, 9, 6, 4, 10, 2, 11,
  8, 5];

const country: string[] = ["ALA Aland Islands", "Afghanistan", "Albania", "Algeria",
  "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda",
  "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil",
  "British Indian Ocean Territory", "British Virgin Islands", "Brunei Darussalam",
  "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island",
  "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)",
  "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
  "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France",
  "French Guiana", "French Polynesia", "French Southern Territories", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland",
  "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Heard and McDonald Islands", "Holy See (Vatican City State)",
  "Honduras", "Hong Kong (SAR China)", "Hungary", "Iceland", "India", "Indonesia",
  "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Korea (North)",
  "Korea (South)", "Kuwait", "Kyrgyzstan", "Lao PDR", "Latvia", "Lebanon", "Lesotho", "Liberia",
  "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao (SAR China)", "Macedonia (Republic of)",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles",
  "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue",
  "Norfolk Island", "Réunion", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Pierre and Miquelon", "Saint Vincent and Grenadines", "Saint-Barthélemy",
  "Saint-Martin (French part)", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Georgia and the South Sandwich Islands", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland",
  "Sweden", "Switzerland", "Syrian Arab Republic (Syria)", "Taiwan (Republic of China)",
  "Tajikistan", "Tanzania (United Republic of)", "Thailand", "Timor-Leste",
  "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Turks and Caicos Islands", "Tuvalu", "US Minor Outlying Islands", "Uganda",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America",
  "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic)", "Viet Nam",
  "Virgin Islands (US)", "Wallis and Futuna Islands", "Western Sahara", "Yemen",
  "Zambia", "Zimbabwe"];


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
for (let i = 0; i < 221; i++) {
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
for (let j = 0; j < 222; j++) {
    for (let k = 0; k < 4; k++) {
        matrixTranspose[k][j] = matrix[j][k];
    }
}

// Performing matrix multiplication XTX
console.log("");
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        XTX[i][j] = 0;
        for (let k = 0; k < 222; k++) {
            XTX[i][j] += matrixTranspose[i][k] * matrix[k][j];
        }
    }
}

console.log("");

for (let i = 0; i < 4; i++) {
    XTy[i] = 0;
    for (let k = 0; k < 222; k++) {
        XTy[i] += matrixTranspose[i][k] * target[k];
    }
}

// Performing matrix multiplication XTy
console.log("");

for (let i = 0; i < 4; i++) {
    XTy[i] = 0;
    for (let k = 0; k < 222; k++) {
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

    if (this.selectedCountry) {
        // Example result generation
        this.result = `For ${this.selectedCountry}: Cases Today: ${this.cases}, Deaths Today: ${this.deaths}, Recoveries Today: ${this.recoveries}`;
        } else {
        this.result = null;
        }


        
            let responseMessage = '';
            if (country) {
              // Perform your prediction logic here and replace XYZ with the predicted value
              const predictedCases = this.runPredictiveModel();
              responseMessage = `For ${this.selectedCountry}, the predicted cases are ${predictedCases}.`;
            } 
            
            

}
}
