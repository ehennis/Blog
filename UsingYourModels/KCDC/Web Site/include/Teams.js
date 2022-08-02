var conf = ['Select Conference','America East','American Athletic Conference','Atlantic 10','Atlantic Coast','Atlantic Sun','Big 12','Big East','Big Sky','Big South','Big Ten','Big West','Colonial Athletic','Conference USA','Horizon','Ivy League','Metro Atlantic Athletic','Mid-American','Mid-Eastern','Missouri Valley','Mountain West','Northeast','Ohio Valley','Pac-12','Patriot League','Southeastern','Southern','Southland','Southwestern Athletic','Summit League','Sun Belt','West Coast','Western Athletic'];
//Teams teamDictionary
var teamDict = new Object();
teamDict['Vermont'] = 'America East';
teamDict['Stony Brook'] = 'America East';
teamDict['UMBC'] = 'America East';
teamDict['Hartford'] = 'America East';
teamDict['Albany'] = 'America East';
teamDict['Massachusetts-Lowell'] = 'America East';
teamDict['Binghamton'] = 'America East';
teamDict['New Hampshire'] = 'America East';
teamDict['Maine'] = 'America East';
teamDict['Houston'] = 'American Athletic Conference';
teamDict['Cincinnati'] = 'American Athletic Conference';
teamDict['UCF'] = 'American Athletic Conference';
teamDict['Temple'] = 'American Athletic Conference';
teamDict['Memphis'] = 'American Athletic Conference';
teamDict['Wichita State'] = 'American Athletic Conference';
teamDict['South Florida'] = 'American Athletic Conference';
teamDict['Tulsa'] = 'American Athletic Conference';
teamDict['Connecticut'] = 'American Athletic Conference';
teamDict['SMU'] = 'American Athletic Conference';
teamDict['East Carolina'] = 'American Athletic Conference';
teamDict['Tulane'] = 'American Athletic Conference';
teamDict['Virginia Commonwealth'] = 'Atlantic 10';
teamDict['Davidson'] = 'Atlantic 10';
teamDict['Dayton'] = 'Atlantic 10';
teamDict['St Bonaventure'] = 'Atlantic 10';
teamDict['George Mason'] = 'Atlantic 10';
teamDict['Saint Louis'] = 'Atlantic 10';
teamDict['Duquesne'] = 'Atlantic 10';
teamDict['Rhode Island'] = 'Atlantic 10';
teamDict['La Salle'] = 'Atlantic 10';
teamDict['Richmond'] = 'Atlantic 10';
teamDict['Saint Joseph\'s (PA)'] = 'Atlantic 10';
teamDict['Massachusetts'] = 'Atlantic 10';
teamDict['George Washington'] = 'Atlantic 10';
teamDict['Fordham'] = 'Atlantic 10';
teamDict['North Carolina'] = 'Atlantic Coast';
teamDict['Virginia'] = 'Atlantic Coast';
teamDict['Duke'] = 'Atlantic Coast';
teamDict['Florida State'] = 'Atlantic Coast';
teamDict['Virginia Tech'] = 'Atlantic Coast';
teamDict['Louisville'] = 'Atlantic Coast';
teamDict['Syracuse'] = 'Atlantic Coast';
teamDict['Clemson'] = 'Atlantic Coast';
teamDict['North Carolina State'] = 'Atlantic Coast';
teamDict['Georgia Tech'] = 'Atlantic Coast';
teamDict['Boston College'] = 'Atlantic Coast';
teamDict['Miami (FL)'] = 'Atlantic Coast';
teamDict['Wake Forest'] = 'Atlantic Coast';
teamDict['Notre Dame'] = 'Atlantic Coast';
teamDict['Pittsburgh'] = 'Atlantic Coast';
teamDict['Liberty'] = 'Atlantic Sun';
teamDict['Lipscomb'] = 'Atlantic Sun';
teamDict['Florida Gulf Coast'] = 'Atlantic Sun';
teamDict['North Florida'] = 'Atlantic Sun';
teamDict['NJIT'] = 'Atlantic Sun';
teamDict['North Alabama'] = 'Atlantic Sun';
teamDict['Jacksonville'] = 'Atlantic Sun';
teamDict['Stetson'] = 'Atlantic Sun';
teamDict['Kennesaw State'] = 'Atlantic Sun';
teamDict['Texas Tech'] = 'Big 12';
teamDict['Kansas State'] = 'Big 12';
teamDict['Kansas'] = 'Big 12';
teamDict['Baylor'] = 'Big 12';
teamDict['Iowa State'] = 'Big 12';
teamDict['Texas'] = 'Big 12';
teamDict['Oklahoma'] = 'Big 12';
teamDict['TCU'] = 'Big 12';
teamDict['West Virginia'] = 'Big 12';
teamDict['Oklahoma State'] = 'Big 12';
teamDict['Villanova'] = 'Big East';
teamDict['Marquette'] = 'Big East';
teamDict['St John\'s'] = 'Big East';
teamDict['Xavier'] = 'Big East';
teamDict['Creighton'] = 'Big East';
teamDict['Seton Hall'] = 'Big East';
teamDict['Georgetown'] = 'Big East';
teamDict['Butler'] = 'Big East';
teamDict['DePaul'] = 'Big East';
teamDict['Providence'] = 'Big East';
teamDict['Northern Colorado'] = 'Big Sky';
teamDict['Montana'] = 'Big Sky';
teamDict['Montana State'] = 'Big Sky';
teamDict['Weber State'] = 'Big Sky';
teamDict['Eastern Washington'] = 'Big Sky';
teamDict['Portland State'] = 'Big Sky';
teamDict['Southern Utah'] = 'Big Sky';
teamDict['Sacramento State'] = 'Big Sky';
teamDict['Northern Arizona'] = 'Big Sky';
teamDict['Idaho State'] = 'Big Sky';
teamDict['Idaho'] = 'Big Sky';
teamDict['Campbell'] = 'Big South';
teamDict['Radford'] = 'Big South';
teamDict['Winthrop'] = 'Big South';
teamDict['Gardner-Webb'] = 'Big South';
teamDict['Hampton'] = 'Big South';
teamDict['Charleston Southern'] = 'Big South';
teamDict['Presbyterian'] = 'Big South';
teamDict['High Point'] = 'Big South';
teamDict['Longwood'] = 'Big South';
teamDict['UNC Asheville'] = 'Big South';
teamDict['USC Upstate'] = 'Big South';
teamDict['Michigan'] = 'Big Ten';
teamDict['Purdue'] = 'Big Ten';
teamDict['Michigan State'] = 'Big Ten';
teamDict['Wisconsin'] = 'Big Ten';
teamDict['Maryland'] = 'Big Ten';
teamDict['Iowa'] = 'Big Ten';
teamDict['Minnesota'] = 'Big Ten';
teamDict['Ohio State'] = 'Big Ten';
teamDict['Indiana'] = 'Big Ten';
teamDict['Rutgers'] = 'Big Ten';
teamDict['Illinois'] = 'Big Ten';
teamDict['Penn State'] = 'Big Ten';
teamDict['Nebraska'] = 'Big Ten';
teamDict['Northwestern'] = 'Big Ten';
teamDict['UC Irvine'] = 'Big West';
teamDict['Cal State Fullerton'] = 'Big West';
teamDict['UC Santa Barbara'] = 'Big West';
teamDict['Hawaii'] = 'Big West';
teamDict['Long Beach State'] = 'Big West';
teamDict['Cal State Northridge'] = 'Big West';
teamDict['UC Davis'] = 'Big West';
teamDict['UC Riverside'] = 'Big West';
teamDict['Cal Poly'] = 'Big West';
teamDict['Hofstra'] = 'Colonial Athletic';
teamDict['Northeastern'] = 'Colonial Athletic';
teamDict['Charleston'] = 'Colonial Athletic';
teamDict['William & Mary'] = 'Colonial Athletic';
teamDict['Delaware'] = 'Colonial Athletic';
teamDict['Drexel'] = 'Colonial Athletic';
teamDict['Elon'] = 'Colonial Athletic';
teamDict['James Madison'] = 'Colonial Athletic';
teamDict['Towson'] = 'Colonial Athletic';
teamDict['North Carolina-Wilmington'] = 'Colonial Athletic';
teamDict['Old Dominion'] = 'Conference USA';
teamDict['UTSA'] = 'Conference USA';
teamDict['Western Kentucky'] = 'Conference USA';
teamDict['Southern Miss'] = 'Conference USA';
teamDict['Marshall'] = 'Conference USA';
teamDict['Florida International'] = 'Conference USA';
teamDict['UAB'] = 'Conference USA';
teamDict['Louisiana Tech'] = 'Conference USA';
teamDict['Florida Atlantic'] = 'Conference USA';
teamDict['Rice'] = 'Conference USA';
teamDict['North Texas'] = 'Conference USA';
teamDict['Middle Tennessee'] = 'Conference USA';
teamDict['Charlotte'] = 'Conference USA';
teamDict['UTEP'] = 'Conference USA';
teamDict['Wright State'] = 'Horizon';
teamDict['Northern Kentucky'] = 'Horizon';
teamDict['Oakland'] = 'Horizon';
teamDict['Illinois-Chicago'] = 'Horizon';
teamDict['Green Bay'] = 'Horizon';
teamDict['IUPUI'] = 'Horizon';
teamDict['Youngstown State'] = 'Horizon';
teamDict['Detroit Mercy'] = 'Horizon';
teamDict['Cleveland State'] = 'Horizon';
teamDict['Milwaukee'] = 'Horizon';
teamDict['Yale'] = 'Ivy League';
teamDict['Harvard'] = 'Ivy League';
teamDict['Princeton'] = 'Ivy League';
teamDict['Brown'] = 'Ivy League';
teamDict['Pennsylvania'] = 'Ivy League';
teamDict['Cornell'] = 'Ivy League';
teamDict['Columbia'] = 'Ivy League';
teamDict['Dartmouth'] = 'Ivy League';
teamDict['Iona'] = 'Metro Atlantic Athletic';
teamDict['Quinnipiac'] = 'Metro Atlantic Athletic';
teamDict['Siena'] = 'Metro Atlantic Athletic';
teamDict['Rider'] = 'Metro Atlantic Athletic';
teamDict['Canisius'] = 'Metro Atlantic Athletic';
teamDict['Monmouth'] = 'Metro Atlantic Athletic';
teamDict['Manhattan'] = 'Metro Atlantic Athletic';
teamDict['Marist'] = 'Metro Atlantic Athletic';
teamDict['Niagara'] = 'Metro Atlantic Athletic';
teamDict['Fairfield'] = 'Metro Atlantic Athletic';
teamDict['St Peter\'s'] = 'Metro Atlantic Athletic';
teamDict['Buffalo'] = 'Mid-American';
teamDict['Toledo'] = 'Mid-American';
teamDict['Bowling Green'] = 'Mid-American';
teamDict['Kent State'] = 'Mid-American';
teamDict['Central Michigan'] = 'Mid-American';
teamDict['Eastern Michigan'] = 'Mid-American';
teamDict['Northern Illinois'] = 'Mid-American';
teamDict['Akron'] = 'Mid-American';
teamDict['Miami (OH)'] = 'Mid-American';
teamDict['Ohio'] = 'Mid-American';
teamDict['Ball State'] = 'Mid-American';
teamDict['Western Michigan'] = 'Mid-American';
teamDict['Norfolk State'] = 'Mid-Eastern';
teamDict['North Carolina A&T'] = 'Mid-Eastern';
teamDict['North Carolina Central'] = 'Mid-Eastern';
teamDict['Howard'] = 'Mid-Eastern';
teamDict['Florida A&M'] = 'Mid-Eastern';
teamDict['Bethune-Cookman'] = 'Mid-Eastern';
teamDict['Savannah State'] = 'Mid-Eastern';
teamDict['Coppin State'] = 'Mid-Eastern';
teamDict['South Carolina State'] = 'Mid-Eastern';
teamDict['Maryland-Eastern Shore'] = 'Mid-Eastern';
teamDict['Morgan State'] = 'Mid-Eastern';
teamDict['Delaware State'] = 'Mid-Eastern';
teamDict['Drake'] = 'Missouri Valley';
teamDict['Loyola (IL)'] = 'Missouri Valley';
teamDict['Missouri State'] = 'Missouri Valley';
teamDict['Southern Illinois'] = 'Missouri Valley';
teamDict['Illinois State'] = 'Missouri Valley';
teamDict['Northern Iowa'] = 'Missouri Valley';
teamDict['Bradley'] = 'Missouri Valley';
teamDict['Indiana State'] = 'Missouri Valley';
teamDict['Valparaiso'] = 'Missouri Valley';
teamDict['Evansville'] = 'Missouri Valley';
teamDict['Utah State'] = 'Mountain West';
teamDict['Nevada'] = 'Mountain West';
teamDict['Fresno State'] = 'Mountain West';
teamDict['San Diego State'] = 'Mountain West';
teamDict['UNLV'] = 'Mountain West';
teamDict['Air Force'] = 'Mountain West';
teamDict['New Mexico'] = 'Mountain West';
teamDict['Colorado State'] = 'Mountain West';
teamDict['Boise State'] = 'Mountain West';
teamDict['Wyoming'] = 'Mountain West';
teamDict['San Jose State'] = 'Mountain West';
teamDict['Fairleigh Dickinson'] = 'Northeast';
teamDict['St Francis (PA)'] = 'Northeast';
teamDict['Robert Morris'] = 'Northeast';
teamDict['Sacred Heart'] = 'Northeast';
teamDict['LIU Brooklyn'] = 'Northeast';
teamDict['St Francis (BKN)'] = 'Northeast';
teamDict['Wagner'] = 'Northeast';
teamDict['Bryant University'] = 'Northeast';
teamDict['Mount St Mary\'s'] = 'Northeast';
teamDict['Central Connecticut State'] = 'Northeast';
teamDict['Murray State'] = 'Ohio Valley';
teamDict['Belmont'] = 'Ohio Valley';
teamDict['Jacksonville State'] = 'Ohio Valley';
teamDict['Austin Peay'] = 'Ohio Valley';
teamDict['Morehead State'] = 'Ohio Valley';
teamDict['Eastern Illinois'] = 'Ohio Valley';
teamDict['Tennessee-Martin'] = 'Ohio Valley';
teamDict['SIU-Edwardsville'] = 'Ohio Valley';
teamDict['Eastern Kentucky'] = 'Ohio Valley';
teamDict['Tennessee State'] = 'Ohio Valley';
teamDict['Southeast Missouri State'] = 'Ohio Valley';
teamDict['Tennessee Tech'] = 'Ohio Valley';
teamDict['Washington'] = 'Pac-12';
teamDict['Arizona State'] = 'Pac-12';
teamDict['Utah'] = 'Pac-12';
teamDict['Colorado'] = 'Pac-12';
teamDict['Oregon State'] = 'Pac-12';
teamDict['UCLA'] = 'Pac-12';
teamDict['Oregon'] = 'Pac-12';
teamDict['USC'] = 'Pac-12';
teamDict['Arizona'] = 'Pac-12';
teamDict['Stanford'] = 'Pac-12';
teamDict['Washington State'] = 'Pac-12';
teamDict['California'] = 'Pac-12';
teamDict['Bucknell'] = 'Patriot League';
teamDict['Colgate'] = 'Patriot League';
teamDict['Lehigh'] = 'Patriot League';
teamDict['American University'] = 'Patriot League';
teamDict['Navy'] = 'Patriot League';
teamDict['Army'] = 'Patriot League';
teamDict['Lafayette'] = 'Patriot League';
teamDict['Loyola (MD)'] = 'Patriot League';
teamDict['Boston University'] = 'Patriot League';
teamDict['Holy Cross'] = 'Patriot League';
teamDict['LSU'] = 'Southeastern';
teamDict['Tennessee'] = 'Southeastern';
teamDict['Kentucky'] = 'Southeastern';
teamDict['South Carolina'] = 'Southeastern';
teamDict['Auburn'] = 'Southeastern';
teamDict['Florida'] = 'Southeastern';
teamDict['Ole Miss'] = 'Southeastern';
teamDict['Mississippi State'] = 'Southeastern';
teamDict['Alabama'] = 'Southeastern';
teamDict['Arkansas'] = 'Southeastern';
teamDict['Texas A&M'] = 'Southeastern';
teamDict['Missouri'] = 'Southeastern';
teamDict['Georgia'] = 'Southeastern';
teamDict['Vanderbilt'] = 'Southeastern';
teamDict['Wofford'] = 'Southern';
teamDict['UNC Greensboro'] = 'Southern';
teamDict['Furman'] = 'Southern';
teamDict['East Tennessee State'] = 'Southern';
teamDict['Chattanooga'] = 'Southern';
teamDict['Samford'] = 'Southern';
teamDict['Mercer'] = 'Southern';
teamDict['Virginia Military'] = 'Southern';
teamDict['Western Carolina'] = 'Southern';
teamDict['Citadel'] = 'Southern';
teamDict['Sam Houston State'] = 'Southland';
teamDict['Abilene Christian'] = 'Southland';
teamDict['Southeastern Louisiana'] = 'Southland';
teamDict['New Orleans'] = 'Southland';
teamDict['Lamar'] = 'Southland';
teamDict['Houston Baptist'] = 'Southland';
teamDict['Texas A&M-CC'] = 'Southland';
teamDict['Stephen F Austin'] = 'Southland';
teamDict['Central Arkansas'] = 'Southland';
teamDict['Northwestern State'] = 'Southland';
teamDict['Nicholls State'] = 'Southland';
teamDict['McNeese State'] = 'Southland';
teamDict['Incarnate Word'] = 'Southland';
teamDict['Prairie View A&M'] = 'Southwestern Athletic';
teamDict['Texas Southern'] = 'Southwestern Athletic';
teamDict['Alabama State'] = 'Southwestern Athletic';
teamDict['Jackson State'] = 'Southwestern Athletic';
teamDict['Grambling State'] = 'Southwestern Athletic';
teamDict['Arkansas-Pine Bluff'] = 'Southwestern Athletic';
teamDict['Alcorn State'] = 'Southwestern Athletic';
teamDict['Southern University'] = 'Southwestern Athletic';
teamDict['Alabama A&M'] = 'Southwestern Athletic';
teamDict['Mississippi Valley State'] = 'Southwestern Athletic';
teamDict['South Dakota State'] = 'Summit League';
teamDict['Nebraska-Omaha'] = 'Summit League';
teamDict['North Dakota State'] = 'Summit League';
teamDict['Purdue Fort Wayne'] = 'Summit League';
teamDict['Oral Roberts'] = 'Summit League';
teamDict['South Dakota'] = 'Summit League';
teamDict['North Dakota'] = 'Summit League';
teamDict['Western Illinois'] = 'Summit League';
teamDict['Denver'] = 'Summit League';
teamDict['Texas State'] = 'Sun Belt';
teamDict['Georgia Southern'] = 'Sun Belt';
teamDict['Georgia State'] = 'Sun Belt';
teamDict['Texas-Arlington'] = 'Sun Belt';
teamDict['Coastal Carolina'] = 'Sun Belt';
teamDict['Louisiana-Lafayette'] = 'Sun Belt';
teamDict['Louisiana-Monroe'] = 'Sun Belt';
teamDict['South Alabama'] = 'Sun Belt';
teamDict['Arkansas State'] = 'Sun Belt';
teamDict['Appalachian State'] = 'Sun Belt';
teamDict['Arkansas-Little Rock'] = 'Sun Belt';
teamDict['Troy'] = 'Sun Belt';
teamDict['Gonzaga'] = 'West Coast';
teamDict['Saint Mary\'s'] = 'West Coast';
teamDict['BYU'] = 'West Coast';
teamDict['San Francisco'] = 'West Coast';
teamDict['Loyola Marymount'] = 'West Coast';
teamDict['Santa Clara'] = 'West Coast';
teamDict['San Diego'] = 'West Coast';
teamDict['Pepperdine'] = 'West Coast';
teamDict['Pacific'] = 'West Coast';
teamDict['Portland'] = 'West Coast';
teamDict['New Mexico State'] = 'Western Athletic';
teamDict['Utah Valley'] = 'Western Athletic';
teamDict['Grand Canyon'] = 'Western Athletic';
teamDict['Texas Rio Grande Valley'] = 'Western Athletic';
teamDict['California Baptist'] = 'Western Athletic';
teamDict['Cal State Bakersfield'] = 'Western Athletic';
teamDict['Seattle'] = 'Western Athletic';
teamDict['UMKC'] = 'Western Athletic';
teamDict['Chicago State'] = 'Western Athletic';
var current_stats = [
[ 'Vermont',75.72222222222223,59.5,71.73333333333333,66.4 ],
[ 'Stony Brook',72.9375,66.375,70.41176470588233,66.23529411764707 ],
[ 'UMBC',71.22222222222223,61.611111111111114,63.375,66.75 ],
[ 'Hartford',75.4375,68.0,74.70588235294117,77.58823529411767 ],
[ 'Albany',67.73333333333333,69.06666666666666,66.70588235294117,69.41176470588235 ],
[ 'Massachusetts-Lowell',80.35714285714286,72.92857142857143,73.94444444444444,77.72222222222223 ],
[ 'Binghamton',69.625,73.0625,61.058823529411775,71.0 ],
[ 'New Hampshire',63.214285714285715,64.42857142857143,57.13333333333333,72.53333333333333 ],
[ 'Maine',64.81818181818181,71.27272727272727,58.85,72.2 ],
[ 'Houston',75.26086956521739,60.69565217391305,76.36363636363636,62.36363636363637 ],
[ 'Cincinnati',76.04761904761905,62.523809523809526,64.69230769230771,61.69230769230769 ],
[ 'UCF',75.36842105263158,65.3157894736842,67.0,62.66666666666666 ],
[ 'Temple',76.94117647058823,71.23529411764707,72.46666666666667,71.06666666666666 ],
[ 'Memphis',83.0,72.04545454545455,75.42857142857143,78.21428571428571 ],
[ 'Wichita State',73.84210526315789,68.42105263157895,67.06666666666666,70.2 ],
[ 'South Florida',72.09523809523809,65.52380952380952,71.36363636363636,72.0909090909091 ],
[ 'Tulsa',73.85,69.25,68.25,73.83333333333333 ],
[ 'Connecticut',77.65,66.95,67.92307692307692,78.07692307692308 ],
[ 'SMU',72.3,65.45,71.41666666666667,78.33333333333333 ],
[ 'East Carolina',70.16666666666667,70.83333333333333,63.46153846153846,78.76923076923076 ],
[ 'Tulane',68.0,75.44444444444444,66.0,80.38461538461539 ],
[ 'Virginia Commonwealth',74.95,63.2,65.58333333333333,58.91666666666666 ],
[ 'Davidson',73.3,64.6,67.35714285714286,66.92857142857143 ],
[ 'Dayton',73.84210526315789,64.89473684210526,71.64285714285714,67.85714285714286 ],
[ 'St Bonaventure',70.6111111111111,61.27777777777778,61.1875,65.125 ],
[ 'George Mason',70.27777777777777,66.6111111111111,69.93333333333334,72.66666666666667 ],
[ 'Saint Louis',70.22222222222223,61.555555555555564,63.70588235294117,66.05882352941177 ],
[ 'Duquesne',75.95,71.25,67.81818181818181,72.45454545454545 ],
[ 'Rhode Island',71.93333333333334,65.66666666666667,67.44444444444444,69.66666666666667 ],
[ 'La Salle',71.75,71.5,62.86666666666667,73.26666666666667 ],
[ 'Richmond',69.21052631578948,66.42105263157895,71.35714285714286,76.5 ],
[ 'Saint Joseph\'s (PA)',0,0,0,0 ],
[ 'Massachusetts',73.1111111111111,71.1111111111111,67.64285714285714,76.71428571428571 ],
[ 'George Washington',66.3,70.9,59.30769230769231,72.15384615384616 ],
[ 'Fordham',67.26315789473685,65.52631578947367,63.846153846153854,68.92307692307692 ],
[ 'North Carolina',86.66666666666669,74.95238095238095,85.0,69.41666666666667 ],
[ 'Virginia',73.42105263157895,53.631578947368425,69.53846153846153,57.153846153846146 ],
[ 'Duke',84.38095238095238,64.66666666666667,82.07692307692308,72.23076923076924 ],
[ 'Florida State',77.71428571428571,67.14285714285714,70.38461538461539,67.07692307692308 ],
[ 'Virginia Tech',78.83333333333333,59.611111111111114,67.78571428571429,65.28571428571429 ],
[ 'Louisville',76.05263157894737,65.52631578947367,72.5,70.92857142857143 ],
[ 'Syracuse',68.7,60.7,71.30769230769229,73.38461538461539 ],
[ 'Clemson',72.35,64.3,64.38461538461539,63.46153846153846 ],
[ 'North Carolina State',81.0909090909091,65.72727272727273,77.25,79.25 ],
[ 'Georgia Tech',68.35,65.45,60.33333333333334,68.41666666666667 ],
[ 'Boston College',72.80952380952381,72.09523809523809,66.7,74.2 ],
[ 'Miami (FL)',75.21052631578948,66.84210526315789,66.76923076923077,77.30769230769229 ],
[ 'Wake Forest',70.17647058823529,74.58823529411767,66.14285714285714,76.85714285714286 ],
[ 'Notre Dame',72.47619047619048,69.14285714285714,62.0,68.66666666666667 ],
[ 'Pittsburgh',73.35,65.6,64.53846153846153,73.46153846153847 ],
[ 'Liberty',75.72222222222223,56.0,72.0625,66.125 ],
[ 'Lipscomb',88.29411764705883,70.41176470588233,78.625,68.3125 ],
[ 'Florida Gulf Coast',73.5,69.83333333333333,68.33333333333333,76.83333333333333 ],
[ 'North Florida',80.53846153846153,71.46153846153847,71.9,80.1 ],
[ 'NJIT',72.0,66.33333333333333,69.57894736842105,69.6842105263158 ],
[ 'North Alabama',68.1111111111111,69.33333333333333,64.5,77.45 ],
[ 'Jacksonville',76.92857142857143,72.71428571428571,72.66666666666667,76.8888888888889 ],
[ 'Stetson',73.86666666666666,75.13333333333334,65.1875,81.375 ],
[ 'Kennesaw State',62.46666666666667,72.06666666666666,62.6875,81.375 ],
[ 'Texas Tech',76.4,56.75,67.58333333333333,63.5 ],
[ 'Kansas State',67.57142857142857,58.47619047619048,62.75,60.58333333333334 ],
[ 'Kansas',78.82608695652173,67.78260869565217,68.18181818181819,74.9090909090909 ],
[ 'Baylor',72.5,64.75,70.25,71.25 ],
[ 'Iowa State',79.16666666666667,64.22222222222223,75.5,72.9375 ],
[ 'Texas',71.71428571428571,65.28571428571429,69.75,70.5 ],
[ 'Oklahoma',72.22222222222223,67.3888888888889,69.78571428571429,69.28571428571429 ],
[ 'TCU',75.4090909090909,67.86363636363636,72.33333333333333,74.41666666666667 ],
[ 'West Virginia',76.36363636363636,73.63636363636364,68.0,81.30769230769229 ],
[ 'Oklahoma State',66.8125,68.3125,69.3125,74.6875 ],
[ 'Villanova',74.84210526315789,64.57894736842105,74.0,70.26666666666667 ],
[ 'Marquette',78.13636363636364,65.0909090909091,76.9090909090909,77.0909090909091 ],
[ 'St John\'s',0,0,0,0 ],
[ 'Xavier',75.0,69.35,67.85714285714286,71.92857142857143 ],
[ 'Creighton',83.23809523809524,72.76190476190476,70.84615384615384,74.0 ],
[ 'Seton Hall',76.29411764705883,69.0,71.4375,74.125 ],
[ 'Georgetown',83.45,77.5,73.53846153846153,78.92307692307692 ],
[ 'Butler',76.52631578947368,68.89473684210526,65.71428571428571,73.42857142857143 ],
[ 'DePaul',79.52631578947368,72.36842105263158,74.63636363636364,80.18181818181819 ],
[ 'Providence',71.5909090909091,67.63636363636364,71.08333333333333,73.83333333333333 ],
[ 'Northern Colorado',80.6,69.66666666666667,73.0,69.64705882352939 ],
[ 'Montana',78.05263157894737,65.36842105263158,75.13333333333334,72.06666666666666 ],
[ 'Montana State',83.0,78.64285714285714,74.44444444444444,80.6111111111111 ],
[ 'Weber State',85.17647058823529,71.6470588235294,73.0625,77.25 ],
[ 'Eastern Washington',77.875,71.75,67.44444444444444,76.6111111111111 ],
[ 'Portland State',81.75,74.1875,69.6,78.46666666666667 ],
[ 'Southern Utah',80.66666666666667,72.33333333333333,72.0,78.3888888888889 ],
[ 'Sacramento State',74.42857142857143,69.71428571428571,66.625,71.1875 ],
[ 'Northern Arizona',73.38461538461539,76.46153846153847,72.66666666666667,78.22222222222223 ],
[ 'Idaho State',73.53846153846153,74.84615384615384,73.05882352941177,82.11764705882355 ],
[ 'Idaho',71.58823529411767,74.47058823529412,63.8,79.6 ],
[ 'Campbell',79.36842105263158,68.0,70.5,74.0 ],
[ 'Radford',78.625,68.4375,69.52941176470588,67.76470588235293 ],
[ 'Winthrop',86.6,75.66666666666667,80.0,81.53333333333333 ],
[ 'Gardner-Webb',81.25,63.4375,75.66666666666667,76.77777777777777 ],
[ 'Hampton',84.5,72.0,78.05555555555556,81.16666666666667 ],
[ 'Charleston Southern',80.05882352941177,63.529411764705884,71.625,76.0 ],
[ 'Presbyterian',85.85714285714286,70.0,71.73684210526315,74.73684210526315 ],
[ 'High Point',71.8,65.13333333333334,64.875,70.5 ],
[ 'Longwood',76.1875,69.75,64.64705882352939,70.29411764705883 ],
[ 'UNC Asheville',65.92307692307692,70.92307692307692,55.555555555555564,77.27777777777777 ],
[ 'USC Upstate',72.85714285714286,72.42857142857143,63.83333333333334,76.72222222222223 ],
[ 'Michigan',72.0,56.1,68.07142857142857,62.07142857142857 ],
[ 'Purdue',79.47058823529412,62.88235294117647,72.46666666666667,71.26666666666667 ],
[ 'Michigan State',81.94736842105263,62.368421052631575,74.86666666666666,69.53333333333333 ],
[ 'Wisconsin',70.22222222222223,59.22222222222222,67.66666666666667,64.06666666666666 ],
[ 'Maryland',74.09523809523809,65.76190476190476,66.0909090909091,63.72727272727273 ],
[ 'Iowa',81.57142857142857,71.42857142857143,72.58333333333333,77.5 ],
[ 'Minnesota',77.36842105263158,69.42105263157895,62.46666666666667,68.86666666666666 ],
[ 'Ohio State',75.47368421052632,66.21052631578948,61.714285714285715,66.21428571428571 ],
[ 'Indiana',74.0,63.10526315789475,69.42857142857143,74.42857142857143 ],
[ 'Rutgers',68.1111111111111,64.3888888888889,67.61538461538461,74.84615384615384 ],
[ 'Illinois',76.85714285714286,75.95238095238095,65.33333333333333,74.0 ],
[ 'Penn State',73.70588235294117,69.11764705882354,65.06666666666666,68.06666666666666 ],
[ 'Nebraska',73.90476190476191,60.952380952380956,68.71428571428571,75.21428571428571 ],
[ 'Northwestern',68.57894736842105,61.68421052631579,61.92307692307693,70.0 ],
[ 'UC Irvine',74.57894736842105,63.05263157894736,70.875,63.625 ],
[ 'Cal State Fullerton',71.4375,65.5,71.8888888888889,75.8888888888889 ],
[ 'UC Santa Barbara',73.77777777777777,60.88888888888889,73.0,72.71428571428571 ],
[ 'Hawaii',72.09523809523809,66.0,72.7,74.5 ],
[ 'Long Beach State',79.73333333333333,73.26666666666667,71.0,78.15789473684211 ],
[ 'Cal State Northridge',78.76470588235293,78.52941176470588,74.23529411764707,80.3529411764706 ],
[ 'UC Davis',67.21428571428571,65.85714285714286,64.52941176470588,70.94117647058823 ],
[ 'UC Riverside',68.53333333333333,66.46666666666667,62.5,71.22222222222223 ],
[ 'Cal Poly',69.14285714285714,75.42857142857143,64.13333333333334,75.13333333333334 ],
[ 'Hofstra',87.2105263157895,72.84210526315789,78.875,73.0625 ],
[ 'Northeastern',75.70588235294117,67.47058823529412,76.5,73.25 ],
[ 'Charleston',75.82352941176471,66.58823529411765,72.75,70.8125 ],
[ 'William & Mary',0,0,0,0 ],
[ 'Delaware',72.6875,71.125,69.94117647058823,73.05882352941177 ],
[ 'Drexel',77.625,72.625,73.9375,82.0625 ],
[ 'Elon',73.77777777777777,78.3888888888889,67.0,73.85714285714286 ],
[ 'James Madison',73.8125,71.0625,67.11764705882354,74.82352941176471 ],
[ 'Towson',70.9375,71.9375,64.6875,71.4375 ],
[ 'North Carolina-Wilmington',81.8125,81.6875,70.94117647058823,80.17647058823529 ],
[ 'Old Dominion',67.6,59.4,64.28571428571429,62.78571428571429 ],
[ 'UTSA',77.8,70.33333333333333,73.93333333333334,80.06666666666666 ],
[ 'Western Kentucky',75.66666666666667,70.3888888888889,66.6875,68.0 ],
[ 'Southern Miss',77.0,62.86666666666667,66.23529411764707,67.70588235294117 ],
[ 'Marshall',86.29411764705883,77.6470588235294,74.0,85.0 ],
[ 'Florida International',83.29411764705883,76.41176470588233,79.28571428571429,86.35714285714286 ],
[ 'UAB',71.2,64.95,69.73333333333333,71.4 ],
[ 'Louisiana Tech',76.0,65.11764705882354,68.375,70.5 ],
[ 'Florida Atlantic',73.46666666666667,64.73333333333333,67.77777777777777,70.66666666666667 ],
[ 'Rice',78.4375,76.125,69.5,78.9375 ],
[ 'North Texas',71.88235294117645,60.58823529411765,67.5,65.4375 ],
[ 'Middle Tennessee',70.86666666666666,68.33333333333333,63.411764705882355,75.76470588235293 ],
[ 'Charlotte',61.8125,65.375,60.53846153846154,72.76923076923076 ],
[ 'UTEP',65.5,63.0625,62.384615384615394,76.30769230769229 ],
[ 'Wright State',76.6842105263158,63.73684210526316,69.0,72.125 ],
[ 'Northern Kentucky',80.3157894736842,64.57894736842105,77.6,74.06666666666666 ],
[ 'Oakland',80.8125,75.0625,73.0,77.29411764705883 ],
[ 'Illinois-Chicago',74.6875,67.0625,74.75,82.0 ],
[ 'Green Bay',83.35714285714286,78.35714285714286,75.8888888888889,85.0 ],
[ 'IUPUI',80.52941176470588,70.76470588235293,71.125,76.625 ],
[ 'Youngstown State',81.57142857142857,81.0,70.72222222222223,77.33333333333333 ],
[ 'Detroit Mercy',79.30769230769229,74.53846153846153,69.33333333333333,83.05555555555556 ],
[ 'Cleveland State',76.3529411764706,74.88235294117645,71.57142857142857,83.14285714285714 ],
[ 'Milwaukee',71.71428571428571,76.42857142857143,65.9375,73.8125 ],
[ 'Yale',83.61538461538461,71.23076923076924,79.125,74.8125 ],
[ 'Harvard',71.46153846153847,65.69230769230771,71.52941176470588,73.05882352941177 ],
[ 'Princeton',72.66666666666667,70.25,66.06666666666666,70.46666666666667 ],
[ 'Brown',80.875,70.1875,66.53333333333333,66.66666666666667 ],
[ 'Pennsylvania',77.0,68.86666666666666,68.4375,67.75 ],
[ 'Cornell',68.41666666666667,66.25,69.0,76.22222222222223 ],
[ 'Columbia',75.53333333333333,70.93333333333334,71.23076923076924,76.0 ],
[ 'Dartmouth',78.26666666666667,66.53333333333333,65.73333333333333,74.53333333333333 ],
[ 'Iona',77.73333333333333,70.86666666666666,76.05882352941177,79.82352941176471 ],
[ 'Quinnipiac',75.625,73.5625,72.26666666666667,71.86666666666666 ],
[ 'Siena',67.06666666666666,65.6,62.5,66.33333333333333 ],
[ 'Rider',76.07692307692308,69.53846153846153,77.33333333333333,79.3888888888889 ],
[ 'Canisius',71.125,75.75,69.5,72.75 ],
[ 'Monmouth',64.93333333333334,66.26666666666667,65.6,74.8 ],
[ 'Manhattan',58.93333333333333,60.53333333333333,55.82352941176471,64.88235294117646 ],
[ 'Marist',69.76923076923077,68.84615384615384,65.35294117647061,69.47058823529412 ],
[ 'Niagara',74.75,74.6875,70.125,77.3125 ],
[ 'Fairfield',71.30769230769229,69.30769230769229,63.611111111111114,70.33333333333333 ],
[ 'St Peter\'s',0,0,0,0 ],
[ 'Buffalo',87.33333333333331,66.27777777777777,82.25,75.3125 ],
[ 'Toledo',77.83333333333333,62.83333333333334,75.73333333333333,75.0 ],
[ 'Bowling Green',81.3157894736842,69.57894736842105,74.86666666666666,78.26666666666667 ],
[ 'Kent State',77.58823529411767,71.76470588235293,71.46666666666667,75.2 ],
[ 'Central Michigan',87.3888888888889,75.83333333333333,77.82352941176471,77.94117647058823 ],
[ 'Eastern Michigan',71.77777777777777,65.94444444444444,65.07142857142857,73.28571428571429 ],
[ 'Northern Illinois',76.58823529411767,68.76470588235293,70.82352941176471,73.17647058823529 ],
[ 'Akron',71.6111111111111,58.611111111111114,65.46666666666667,70.13333333333334 ],
[ 'Miami (OH)',75.0,69.05882352941177,64.35714285714286,72.64285714285714 ],
[ 'Ohio',76.4375,71.5625,63.4,76.2 ],
[ 'Ball State',77.92857142857143,68.71428571428571,73.0,73.6842105263158 ],
[ 'Western Michigan',75.26666666666667,75.2,65.70588235294117,77.11764705882355 ],
[ 'Norfolk State',77.5,66.4375,69.72222222222223,72.6111111111111 ],
[ 'North Carolina A&T',0,0,0,0 ],
[ 'North Carolina Central',77.5,60.42857142857143,64.44444444444444,71.72222222222223 ],
[ 'Howard',82.66666666666667,80.6,74.22222222222223,77.83333333333333 ],
[ 'Florida A&M',0,0,0,0 ],
[ 'Bethune-Cookman',80.0,67.23076923076923,70.23529411764707,76.88235294117645 ],
[ 'Savannah State',81.66666666666667,81.16666666666667,72.63157894736842,90.52631578947368 ],
[ 'Coppin State',70.36363636363636,72.81818181818181,60.23809523809525,77.33333333333333 ],
[ 'South Carolina State',78.0909090909091,74.9090909090909,66.47826086956522,76.91304347826087 ],
[ 'Maryland-Eastern Shore',61.384615384615394,65.0,54.47368421052632,76.10526315789474 ],
[ 'Morgan State',74.07692307692308,71.61538461538461,70.35294117647061,80.76470588235293 ],
[ 'Delaware State',66.0909090909091,73.36363636363636,60.47368421052632,79.84210526315789 ],
[ 'Drake',79.47368421052632,70.3157894736842,70.2,70.06666666666666 ],
[ 'Loyola (IL)',71.26315789473685,59.68421052631579,57.28571428571429,63.214285714285715 ],
[ 'Missouri State',72.0,64.17647058823529,65.46666666666667,71.06666666666666 ],
[ 'Southern Illinois',67.875,65.1875,69.25,68.8125 ],
[ 'Illinois State',69.9,67.1,66.07692307692308,74.76923076923076 ],
[ 'Northern Iowa',66.125,63.5625,64.27777777777777,67.3888888888889 ],
[ 'Bradley',68.05555555555556,63.611111111111114,64.9375,66.5 ],
[ 'Indiana State',68.0,65.26666666666667,70.375,77.4375 ],
[ 'Valparaiso',63.714285714285715,64.35714285714286,64.41176470588235,68.23529411764707 ],
[ 'Evansville',73.375,69.8125,66.25,75.0 ],
[ 'Utah State',81.14285714285714,64.0952380952381,76.0,71.15384615384616 ],
[ 'Nevada',83.36842105263158,64.47368421052633,77.0,69.64285714285714 ],
[ 'Fresno State',78.9,66.55,72.5,69.25 ],
[ 'San Diego State',77.55,65.25,63.28571428571429,70.42857142857143 ],
[ 'UNLV',74.1111111111111,69.66666666666667,72.46153846153847,76.0 ],
[ 'Air Force',73.29411764705883,70.52941176470588,62.2,73.0 ],
[ 'New Mexico',78.47058823529412,72.41176470588233,73.93333333333334,81.53333333333333 ],
[ 'Colorado State',77.72222222222223,74.55555555555556,71.0,76.0 ],
[ 'Boise State',72.88235294117645,63.70588235294117,70.3125,73.75 ],
[ 'Wyoming',68.35294117647061,72.3529411764706,62.86666666666667,78.73333333333333 ],
[ 'San Jose State',68.77777777777777,76.33333333333333,61.846153846153854,89.23076923076924 ],
[ 'Fairleigh Dickinson',0,0,0,0 ],
[ 'St Francis (PA)',79.93333333333334,70.8,73.05882352941177,80.05882352941177 ],
[ 'Robert Morris',74.75,63.125,65.88235294117646,73.52941176470588 ],
[ 'Sacred Heart',82.66666666666667,73.06666666666666,77.52941176470588,83.11764705882355 ],
[ 'LIU Brooklyn',76.25,71.91666666666667,71.0,73.57894736842105 ],
[ 'St Francis (BKN)',0,0,0,0 ],
[ 'Wagner',65.75,69.66666666666667,62.714285714285715,66.78571428571429 ],
[ 'Bryant University',71.76923076923076,76.0,67.125,79.25 ],
[ 'Mount St Mary\'s',0,0,0,0 ],
[ 'Central Connecticut State',71.18181818181819,74.27272727272727,71.3888888888889,79.0 ],
[ 'Murray State',86.58823529411767,67.64705882352939,79.28571428571429,67.92857142857143 ],
[ 'Belmont',87.8125,72.0,87.0,75.86666666666666 ],
[ 'Jacksonville State',83.73333333333333,67.73333333333333,73.22222222222223,70.3888888888889 ],
[ 'Austin Peay',88.7142857142857,71.92857142857143,75.22222222222223,76.27777777777777 ],
[ 'Morehead State',74.0,76.92857142857143,71.77777777777777,78.66666666666667 ],
[ 'Eastern Illinois',76.46666666666667,77.66666666666667,67.76470588235293,76.0 ],
[ 'Tennessee-Martin',80.78571428571429,76.14285714285714,72.05882352941177,83.52941176470588 ],
[ 'SIU-Edwardsville',77.05882352941177,79.52941176470588,68.21428571428571,83.42857142857143 ],
[ 'Eastern Kentucky',85.73333333333333,81.6,77.93333333333334,86.73333333333332 ],
[ 'Tennessee State',76.07692307692308,69.84615384615384,70.17647058823529,83.76470588235293 ],
[ 'Southeast Missouri State',72.13333333333334,72.2,70.875,80.9375 ],
[ 'Tennessee Tech',73.33333333333333,72.46666666666667,62.75,78.9375 ],
[ 'Washington',70.0,61.90909090909091,69.5,68.91666666666667 ],
[ 'Arizona State',79.6,71.5,74.83333333333333,75.66666666666667 ],
[ 'Utah',75.7,73.55,75.36363636363636,76.36363636363636 ],
[ 'Colorado',78.8888888888889,67.55555555555556,68.5625,67.8125 ],
[ 'Oregon State',74.94117647058823,69.82352941176471,71.5,69.85714285714286 ],
[ 'UCLA',80.95238095238095,74.38095238095238,73.33333333333333,83.75 ],
[ 'Oregon',76.15789473684211,61.26315789473684,63.75,64.9375 ],
[ 'USC',75.57894736842105,67.0,77.28571428571429,81.21428571428571 ],
[ 'Arizona',70.94444444444444,62.611111111111114,70.85714285714286,77.0 ],
[ 'Stanford',79.2,68.4,66.6875,75.0625 ],
[ 'Washington State',79.95,77.7,66.16666666666667,80.25 ],
[ 'California',71.15789473684211,77.0,64.08333333333333,77.0 ],
[ 'Bucknell',79.41176470588233,70.6470588235294,74.0,76.0625 ],
[ 'Colgate',79.5625,67.9375,72.5,71.8888888888889 ],
[ 'Lehigh',81.21428571428571,73.85714285714286,78.94117647058823,81.11764705882355 ],
[ 'American University',72.93333333333334,67.93333333333334,71.13333333333334,70.06666666666666 ],
[ 'Navy',68.21428571428571,69.14285714285714,65.05882352941177,75.41176470588233 ],
[ 'Army',73.21428571428571,65.5,69.05555555555556,77.1111111111111 ],
[ 'Lafayette',73.86666666666666,75.4,73.4,81.2 ],
[ 'Loyola (MD)',76.53846153846153,71.84615384615384,70.36842105263158,81.21052631578948 ],
[ 'Boston University',74.2,71.26666666666667,70.66666666666667,73.22222222222223 ],
[ 'Holy Cross',68.93333333333334,67.8,65.66666666666667,71.05555555555556 ],
[ 'LSU',81.9,71.15,80.5,76.16666666666667 ],
[ 'Tennessee',80.95238095238095,62.952380952380956,83.15384615384616,77.84615384615384 ],
[ 'Kentucky',78.81818181818181,65.68181818181819,72.54545454545455,64.9090909090909 ],
[ 'South Carolina',74.66666666666667,70.6111111111111,70.15384615384616,76.23076923076924 ],
[ 'Auburn',84.05263157894737,64.3157894736842,74.25,72.625 ],
[ 'Florida',70.8,63.0,64.64285714285714,64.57142857142857 ],
[ 'Ole Miss',76.55,69.35,73.5,72.08333333333333 ],
[ 'Mississippi State',80.52631578947368,68.6842105263158,70.83333333333333,72.83333333333333 ],
[ 'Alabama',75.83333333333333,70.94444444444444,67.6875,72.25 ],
[ 'Arkansas',77.15789473684211,70.52631578947368,73.78571428571429,75.35714285714286 ],
[ 'Texas A&M',0,0,0,0 ],
[ 'Missouri',70.1111111111111,66.8888888888889,63.42857142857143,68.85714285714286 ],
[ 'Georgia',74.5,71.55555555555556,66.64285714285714,76.85714285714286 ],
[ 'Vanderbilt',74.72222222222223,72.94444444444444,60.230769230769226,71.76923076923076 ],
[ 'Wofford',87.68421052631581,65.26315789473685,76.64285714285714,66.07142857142857 ],
[ 'UNC Greensboro',78.26315789473685,64.3157894736842,73.875,70.9375 ],
[ 'Furman',83.6470588235294,67.23529411764707,71.25,64.9375 ],
[ 'East Tennessee State',84.5,68.27777777777777,74.125,71.375 ],
[ 'Chattanooga',74.14285714285714,73.57142857142857,67.70588235294117,76.52941176470588 ],
[ 'Samford',82.0,75.16666666666667,73.8,75.6 ],
[ 'Mercer',74.1875,68.375,70.73333333333333,76.8 ],
[ 'Virginia Military',80.875,74.875,71.1875,88.6875 ],
[ 'Western Carolina',70.76923076923076,72.61538461538461,72.84210526315789,85.21052631578948 ],
[ 'Citadel',92.8,84.2,77.4,88.06666666666666 ],
[ 'Sam Houston State',81.0,68.25,69.41176470588235,71.47058823529412 ],
[ 'Abilene Christian',80.83333333333333,62.22222222222222,66.86666666666666,64.13333333333334 ],
[ 'Southeastern Louisiana',73.73333333333333,65.53333333333333,62.111111111111114,69.16666666666667 ],
[ 'New Orleans',78.125,68.1875,64.8125,73.8125 ],
[ 'Lamar',85.5625,65.625,72.23529411764707,74.82352941176471 ],
[ 'Houston Baptist',89.30769230769229,77.38461538461539,76.70588235294117,86.94117647058823 ],
[ 'Texas A&M-CC',0,0,0,0 ],
[ 'Stephen F Austin',72.625,66.875,67.30769230769229,78.76923076923076 ],
[ 'Central Arkansas',75.84615384615384,68.69230769230771,69.85,80.25 ],
[ 'Northwestern State',0,0,0,0 ],
[ 'Nicholls State',75.84615384615384,69.07692307692308,69.76470588235293,78.88235294117645 ],
[ 'McNeese State',74.23076923076924,70.0,65.1875,78.8125 ],
[ 'Incarnate Word',67.73333333333333,70.4,63.73333333333333,81.66666666666667 ],
[ 'Prairie View A&M',0,0,0,0 ],
[ 'Texas Southern',87.23076923076924,74.69230769230771,76.36363636363636,80.13636363636364 ],
[ 'Alabama State',74.6,61.5,63.55,76.2 ],
[ 'Jackson State',65.91666666666667,61.75,59.05263157894736,68.89473684210526 ],
[ 'Grambling State',79.35714285714286,63.35714285714285,65.75,72.45 ],
[ 'Arkansas-Pine Bluff',73.45454545454545,65.9090909090909,61.904761904761905,73.52380952380952 ],
[ 'Alcorn State',74.69230769230771,62.384615384615394,55.53333333333333,76.26666666666667 ],
[ 'Southern University',66.54545454545455,64.27272727272727,64.04761904761905,78.71428571428571 ],
[ 'Alabama A&M',0,0,0,0 ],
[ 'Mississippi Valley State',71.41666666666667,70.66666666666667,60.05,82.5 ],
[ 'South Dakota State',86.55,70.85,81.38461538461539,77.53846153846153 ],
[ 'Nebraska-Omaha',80.33333333333333,72.53333333333333,77.52941176470588,80.3529411764706 ],
[ 'North Dakota State',78.47058823529412,67.88235294117646,67.625,76.75 ],
[ 'Purdue Fort Wayne',87.52941176470587,71.76470588235293,77.5,83.5 ],
[ 'Oral Roberts',77.92307692307692,74.23076923076924,67.8888888888889,80.8888888888889 ],
[ 'South Dakota',72.66666666666667,67.93333333333334,67.85714285714286,76.07142857142857 ],
[ 'North Dakota',80.42857142857143,69.0,68.375,76.875 ],
[ 'Western Illinois',76.53846153846153,68.61538461538461,66.83333333333333,76.66666666666667 ],
[ 'Denver',73.21428571428571,70.85714285714286,66.3125,82.9375 ],
[ 'Texas State',77.0625,62.5625,68.0,65.64705882352939 ],
[ 'Georgia Southern',84.29411764705883,70.52941176470588,80.8125,80.625 ],
[ 'Georgia State',80.3888888888889,69.16666666666667,73.06666666666666,77.46666666666667 ],
[ 'Texas-Arlington',72.73333333333333,68.4,66.27777777777777,70.94444444444444 ],
[ 'Coastal Carolina',77.0,68.05882352941177,75.73333333333333,78.66666666666667 ],
[ 'Louisiana-Lafayette',83.3125,80.375,77.2,80.6 ],
[ 'Louisiana-Monroe',85.0625,74.5625,72.77777777777777,74.22222222222223 ],
[ 'South Alabama',75.94736842105263,68.57894736842105,69.0,77.46666666666667 ],
[ 'Arkansas State',76.42857142857143,75.28571428571429,70.58823529411767,80.41176470588233 ],
[ 'Appalachian State',84.46666666666667,78.2,74.9375,81.375 ],
[ 'Arkansas-Little Rock',74.6875,70.25,73.73333333333333,81.93333333333334 ],
[ 'Troy',74.5,72.9375,70.5,76.78571428571429 ],
[ 'Gonzaga',91.66666666666669,62.61904761904761,89.1,71.7 ],
[ 'Saint Mary\'s',0,0,0,0 ],
[ 'BYU',77.88235294117645,69.05882352941177,80.2,84.13333333333334 ],
[ 'San Francisco',79.52631578947368,67.0,70.58333333333333,69.0 ],
[ 'Loyola Marymount',70.6470588235294,63.529411764705884,62.42857142857143,63.07142857142857 ],
[ 'Santa Clara',67.6842105263158,68.0,69.08333333333333,73.33333333333333 ],
[ 'San Diego',72.52941176470588,64.05882352941177,71.47368421052632,71.89473684210526 ],
[ 'Pepperdine',79.46666666666667,72.0,72.63157894736842,76.26315789473685 ],
[ 'Pacific',69.0625,67.4375,64.5625,72.625 ],
[ 'Portland',65.23529411764707,72.41176470588233,64.6,77.2 ],
[ 'New Mexico State',79.04761904761905,61.80952380952381,76.69230769230771,67.92307692307692 ],
[ 'Utah Valley',83.94117647058823,71.05882352941177,71.3529411764706,70.58823529411767 ],
[ 'Grand Canyon',78.55555555555556,64.05555555555556,71.625,75.0 ],
[ 'Texas Rio Grande Valley',72.4,68.25,68.8125,72.75 ],
[ 'California Baptist',77.5,67.66666666666667,74.0,77.8125 ],
[ 'Cal State Bakersfield',76.0,68.35714285714286,67.3888888888889,72.66666666666667 ],
[ 'Seattle',78.05,68.45,66.07692307692308,70.30769230769229 ],
[ 'UMKC',76.28571428571429,69.92857142857143,64.0,75.66666666666667 ],
[ 'Chicago State',68.41666666666667,78.58333333333333,57.45,88.35 ],
];