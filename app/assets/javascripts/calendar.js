<SCRIPT LANGUAGE="JavaScript">
var count_year = 0;
var count_month = 0;
function calendar(){

var cal_argv = calendar.arguments;

//Variables to be used later.  Place holders right now.
var padding ="";
var totalFeb ="";
var i = 1;
var testing="";

 var current = new Date();
 var month = current.getMonth();
 var day = current.getDate();
 var year = current.getFullYear();


if (cal_argv[0] == 1) {
	count_year--;
}
if (cal_argv[0] == 2) {
	count_month--;
}
if (cal_argv[0] == 3) {
	count_month++;
}
if (cal_argv[0] == 4) {
	count_year++;
}

year += count_year;
if(month + count_month >11){
    
	if (  (((month+count_month)/12) >= 1)	) {
    	year+= Math.floor( (month+count_month)/12);   	 
	}
    
	month=((month+count_month)%12);
    

}
else if (month + count_month < 0) {
    
	if (  ( (month+count_month) < 0)	) {
    	year+= Math.floor( (month+count_month)/12);   	 
	}
    
	month=( 12-(  (Math.abs(month+count_month)) %12) )% 12;


}
 
else {
	month += count_month;

}

 //Determing if Feb has 28 or 29 days in it.  
 if (month == 1){
	if ( (year%100!=0) && (year%4==0) || (year%400==0)){
  	totalFeb = 29;
	}else{
  	totalFeb = 28;
	}
 }



//////////////////////////////////////////
// Setting up arrays for the name of 	//
// the	months, days, and the number of	//
// days in the month.        	//
//////////////////////////////////////////

 var monthNames = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov", "Dec"];
 var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
 var totalDays = ["31", ""+totalFeb+"","31","30","31","30","31","31","30","31","30","31"]

//////////////////////////////////////////
// Temp values to get the number of days//
// in current month, and previous month.//
// Also getting the day of the week.	//
//////////////////////////////////////////

 var tempMonth = month+1; //+1; //Used to match up the current month with the correct start date.
 var prevMonth = month -1;



 var tempDate = new Date(tempMonth +' 1 ,'+year);
 var tempweekday= tempDate.getDay();
 var tempweekday2 = tempweekday
 var dayAmount = totalDays[month];
// var preAmount = totalDays[prevMonth] - tempweekday + 1;    
 
//////////////////////////////////////////////////
// After getting the first day of the week for	//
// the month, padding the other days for that	//
// week with the previous months days.  IE, if	//
// the first day of the week is on a Thursday,	//
// then this fills in Sun - Wed with the last	//
// months dates, counting down from the last	//
// day on Wed, until Sunday.        	//
//////////////////////////////////////////////////

 while (tempweekday>0){
	padding += "<td class='premonth'></td>";
	//preAmount++;
 	tempweekday--;
 }
//////////////////////////////////////////////////
// Filling in the calendar with the current 	//
// month days in the correct location along.	//
//////////////////////////////////////////////////

 while (i <= dayAmount){

	//////////////////////////////////////////
	// Determining when to start a new row	//
	//////////////////////////////////////////

	if (tempweekday2 > 6){
    	tempweekday2 = 0;
    	padding += "</tr><tr>";
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////
	// checking to see if i is equal to the current day, if so then we are making the color of	//
	//that cell a different color using CSS.  Also adding a rollover effect to highlight the 	//
	//day the user rolls over. This loop creates the acutal calendar that is displayed.    	//
	//////////////////////////////////////////////////////////////////////////////////////////////////

	if (  (i == day) && (month == current.getMonth() ) && (year == current.getFullYear())  ){
    	padding +="<td height='50' class='currentday' bgcolor=\"#d9d9d9\" onMouseOver='this.style.background=\"#989898\"; this.style.color=\"#000000\"' onMouseOut='this.style.background=\"#D9D9D9\"; this.style.color=\"#000000\"' button id=\"btn"+i+"\" class=\"button_current_day\"  onclick =\"addRow("+i+")\">"+i+" <ul id=\"ul_"+i+"\"></ul></td>";
	}else{
    	padding +="<td height='50' class='currentmonth' onMouseOver='this.style.background=\"#989898\"' onMouseOut='this.style.background=\"#FFFFFF\"' button id=\"btn"+i+"\" onclick=\"addRow("+i+")\"><font color=\"gray\">"+i+"</font><ul id=\"ul_"+i+"\"></ul></td>";    

	}
    
	tempweekday2++;
	i++;
 }


 /////////////////////////////////////////
 // Ouptputing the calendar onto the	//
 // site.  Also, putting in the month	//
 // name and days of the week.    	//
 /////////////////////////////////////////

 var calendarTable = "<table class='calendar' width='995'> <tr class='currentmonth'><th button class='button_arrow' onclick='calendar(1)'> &#60&#60 </th><th button class='button_arrow' onclick='calendar(2)'> &#60 </th><th button  colspan='3' height='30'>"+monthNames[month]+" "+ year +"</th><th button class='button_arrow' onclick='calendar(3)'> &#62 </th><th button class='button_arrow' onclick='calendar(4)'> &#62&#62 </th></tr>";
 calendarTable +="<tr class='weekdays'>  <td height='30'>Sun</td>  <td>Mon</td> <td>Tues</td> <td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
 calendarTable += "<tr height='50'>";
 calendarTable += padding;
 calendarTable += "</tr></table>";
 document.getElementById("calendar").innerHTML=calendarTable;

}

$('#orderform').submit(function() {
	if($('#dt').val() == ''){
    	alert('Please fill out a description.');
    	return false;
	}
});


function addRow(list_number){
	if(!dt.value==""){
    	$("#ul_"+list_number).append("<li>"+time_t.value +" "+ dt.value+"</li>");
    	dt.value="";
    	time_t.value="00:00";
	}else{
    	alert("Missing Description Field");
	}
}
</SCRIPT>
