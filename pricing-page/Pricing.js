function date() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var Day = document.getElementsByClassName("Weekday").innerHTML = days[d.getDay()];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var Month = document.getElementsByClassName("Month").innerHTML = months[d.getMonth() + 1];

    var DayNumber = document.getElementsByClassName("Day").innerHTML = months[d.getMonth() + 1];

    var Year = document.getElementsByClassName("Year").innerHTML =d.getFillYear();
    /* Future code for putting today's date */
}
