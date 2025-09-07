
let form = document.querySelector("#agecalculator");
let resultcontainer = document.querySelector(".result-container");

function agecalculator() {
    let currentdate = new Date();
    const birthdate = document.querySelector("#date").value;
    let arraybirthdate = birthdate.split("-");
    let birthyear = arraybirthdate[0];
    let birthmonth = arraybirthdate[1] - 1;
    let birthdates = arraybirthdate[2];
    let newbirthdate = new Date(birthyear, birthmonth, birthdates);

    if (newbirthdate > currentdate) {
        alert("Birth date cannot be in the future!");
        resultcontainer.style.display = "none";
        return; // stop execution
    }

    const ageinmillisecond = currentdate - newbirthdate;

    const ageinsecond = Math.floor(ageinmillisecond / 1000);
    const ageinmintue = Math.floor(ageinsecond / 60);
    const ageinhours = Math.floor(ageinmintue / 60);
    const ageindays = Math.floor(ageinhours / 24);
    const ageinweek = Math.floor(ageindays / 7);
    const ageinmonth = Math.floor(ageindays / 30.436875);
    const ageinyear = Math.floor(ageindays / 365.25);

    // Fix day calculation
    let day = currentdate.getDate() - newbirthdate.getDate();
    if (day < 0) {
        day += new Date(currentdate.getFullYear(), currentdate.getMonth(), 0).getDate();
    }
    //In new Date(year, month, 0), the 0 means “the day before the 1st of the month”, which is the last day of the previous month.
    //Month 8 = September 
    //Day 0 → 1 day before 1st September = 31 August

    document.querySelector("#age").innerHTML = `${ageinyear} Age ${ageinmonth % 12} Months ${day} Days`;

    let months = document.querySelector("#mouths-passed");
    months.innerHTML = ageinmonth.toLocaleString() + " " + "Months";

    let week = document.querySelector("#weeks-passed");
    week.innerHTML = ageinweek.toLocaleString() + " " + "Weeks";

    let days = document.querySelector("#days-passed");
    days.innerHTML = ageindays.toLocaleString() + " " + "Days";

    let hours = document.querySelector("#hours-passed");
    hours.innerHTML = ageinhours.toLocaleString() + " " + "Hours";

    let mintues = document.querySelector("#minutes-passed");
    mintues.innerHTML = ageinmintue.toLocaleString() + " " + "Mintues";

    let seconds = document.querySelector("#seconds-passed");
    seconds.innerHTML = ageinsecond.toLocaleString() + " " + "Seconds";
}
//toLocaleString() automatically adds commas for large numbers.
form.addEventListener("submit", function (dets) {
    dets.preventDefault(); // No refresh
    resultcontainer.style.display = "block";
    agecalculator();
});
