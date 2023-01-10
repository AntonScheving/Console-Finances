/*
The finances variable holds the date and number records in an a 2D array.
*/
let finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];

/* 
I start by declaring and initialize all the variables.  0 is the value being assigned to the variables to initialize them to zero. By initializing the variables to 0, I ensure that it starts at a known value and can be correctly incremented as they loop through the records. If I didn't initialize the variable to 0, they would start with an undefined value and for example the total number of months would not be calculated correctly.
The numberOfMonths variable is used to keep track of the total number of months included in the array.
*/
let numberOfMonths = 0;

/* 
The netTotal variable is used to keep track of the net total of the Profit/Losses over the entire period.
*/
let netTotal = 0;

/*
The totalChange variable is used to keep track of the total change in Profit/Loss over the entire period.
*/
let totalChange = 0;

/* 
The averageChange variable is used to keep track of the average change in Profit/Loss over the entire period.
*/
let averageChange = 0;

/* 
The greatestIncrease variable initializes it to the finances variable that holds an array with two elements (2D): a string and a number. The string will be used to keep track of the date of the greatest increase in profits, and the number will be used to keep track of the amount of the greatest increase.
*/
let greatestIncrease = ['', 0];

/* 
The greatestDecrease variable initializes it to an array with two elements: a string and a number. The string is used to keep track of the date of the greatest decrease in losses, and the number will be used to keep track of the amount of the greatest decrease. The value of Number.MAX_VALUE is a predefined constant representing the maximum possible number. It is used here to initialize the number element of the array to a very large value, so that any decrease in losses will be smaller than this value.
*/
let greatestDecrease = ['', Number.MAX_VALUE];

/*
The profitLosses variable is used to keep track of the profit/loss between each month.
*/
let profitLosses = 0;

/*
The result from the profit/loss calculation below is stored in the profitLossChange variable.
*/
let profitLossChange = 0;

/*
This is a for Loop.
This starts a loop that will iterate over each element in the finances array. The loop variable i is declared with let and is initialized to 0. The loop will continue as long as i is less than the length of the finances array. The loop variable i will be incremented by 1 at the end of each iteration.
the numberOfMonths variable increments the total number of months by 1.
This will be done for each iteration of the loop, so at the end of the loop, numberOfMonths will contain the total number of months included in the dataset.
*/
for (let i = 0; i < finances.length; i++) {
    numberOfMonths++;

/* 
This line of code gets the current Profit/Loss from the finances array using the for loop variable i. The finances array is an array of arrays, with each inner array containing a date string and the number representing the Profit or Loss for that month.
*/
profitLosses = finances[i][1];

// These variables add the profit/loss to the net total.
netTotal += profitLosses;

/* This if statement is to ensure that the calculation of the profitLossChange variable for the first month is skipped because there is no change comparison for the first month. The continue keyword is used to immediately stop the current iteration of the loop and move on to the next iteration. The continue statement is executed if the value of i is equal to 0.
*/
if (i === 0) continue;

/*
The below line calculates the change in profit/loss between the current month and the previous month. The variable profitLosses is the profit/loss for the current month, which is obtained from the value at index 1 in the finances array. Subtracting the previous month's profit/loss from the current month's profit/loss gives the change in profit/loss. 
*/
profitLossChange = profitLosses - finances[i - 1][1];

/*
This line adds the change in profit/loss for the current month to the totalChange variable, which is used to calculate the average change in profit/loss. The += operator is used to add the value of the profitLossChange variable to the existing value of the totalChange variable.
*/
totalChange += profitLossChange;

/*
This line is an if statement that checks if the current month's change in profit/loss is greater than the greatest increase in profit/loss recorded. The greatestIncrease[1] variable is used to keep track of the greatest increase in profit/loss and is being compared against the current month's change in profit/loss.*/
if (profitLossChange > greatestIncrease[1]) {

/*
If the current month's change in profit/loss is greater than the greatest increase in profit/loss recorded so far, this line updates the greatestIncrease[0] variable with the date of the month where the greatest increase in profit/loss occurred.
*/
greatestIncrease[0] = finances[i][0];

/*
If the current month's change in profit/loss is greater than the greatest increase in profit/loss recorded so far, this line updates the greatestIncrease[1] variable with the current month's change in profit/loss.
*/
greatestIncrease[1] = profitLossChange;
}

/*
This line is an if statement that checks if the current month's change in profit/loss is less than the greatest decrease in profit/loss recorded so far. The greatestDecrease[1] variable is used to keep track of the greatest decrease in profit/loss and is being compared against the current month's change in profit/loss.
*/
if (profitLossChange < greatestDecrease[1]) {

/*
If the current month's change in profit/loss is less than the greatest decrease in profit/loss recorded, this line updates the greatestDecrease[0] variable with the date of the month where the greatest decrease in profit/loss occurred.
*/
greatestDecrease[0] = finances[i][0];

/*
If the current month's change in profit/loss is less than the greatest decrease in profit/loss recorded, this line updates the greatestDecrease[1] variable with the current month's change in profit/loss.
*/
greatestDecrease[1] = profitLossChange;
}
}

averageChange = totalChange / (numberOfMonths - 1);

// This line rounds the average change up to two decimal places.
averageChange = averageChange.toFixed(2);

// This line converts the average change to a number.
averageChange = parseFloat(averageChange);

// These lines display the results in the console.
console.log('Total number of months:', numberOfMonths);
console.log('Net total: $' + netTotal);
console.log('Average change: $' + averageChange);
console.log('Greatest increase:', greatestIncrease[0], '($' + greatestIncrease[1] + ')');
console.log('Greatest decrease:', greatestDecrease[0], '($' + greatestDecrease[1] + ')');