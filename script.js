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
    const todayMidnight = new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate());
    let day = currentdate.getDate() - newbirthdate.getDate();

    if (newbirthdate > currentdate) {
        alert("Birth date cannot be in the future!");
        resultcontainer.style.display = "none";
    }

    const ageinmillisecond = todayMidnight - newbirthdate;

    const ageinsecond = Math.floor(ageinmillisecond / 1000);
    const ageinmintue = Math.floor(ageinsecond / 60);
    const ageinhours = Math.floor(ageinmintue / 60);
    const ageindays = Math.floor(ageinhours / 24);
    const ageinweek = Math.floor(ageindays / 7);
    const ageinmonth = Math.floor(ageindays / 30.436875);
    const ageinyear = Math.floor(ageindays / 365.25);

    document.querySelector("#age").innerHTML = `${ageinyear} Age ${ageinmonth % 12} Months ${day} Days`;

    let months = document.querySelector("#mouths-passed");
    months.innerHTML = ageinmonth + " " + "Months";

    let week = document.querySelector("#weeks-passed");
    week.innerHTML = ageinweek + " " + "Weeks";

    let days = document.querySelector("#days-passed");
    days.innerHTML = ageindays + " " + "Days";

    let hours = document.querySelector("#hours-passed");
    hours.innerHTML = ageinhours + " " + "Hours";

    let mintues = document.querySelector("#minutes-passed");
    mintues.innerHTML = ageinmintue + " " + "Mintues";

    let seconds = document.querySelector("#seconds-passed");
    seconds.innerHTML = ageinsecond + " " + "Seconds";
}

form.addEventListener("submit", function (dets) {
    dets.preventDefault(); // No refresh
    resultcontainer.style.display = "block";
    agecalculator();
})

