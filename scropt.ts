function clock () {
    let days:string[] = [
        "Sundat", 
        "Monday",
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"];

        let months:string[] = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

    let hrs:any = document.getElementById("hours");
    let min:any = document.getElementById("minuts");
    let sec:any = document.getElementById("seconds");
    let period:any = document.getElementById("ampm");
    let date:any = document.getElementById("ddmmyy");
    let day:any = document.getElementById("dd");

    let time = new Date();

    let h:number | string = time.getHours();
    let m:number | string = time.getMinutes();
    let s:number | string = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();


    if(h> 12) {
        h = h-12
    }
    if(h == 0) {
        h = 12;
    }

    let ampm = h<=12 ? "AM" : "PM";

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : h;
    s = s < 10 ? "0" + s : h;

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
    day.innerHTML = days [d];
    date.innerHTML = months [mm] + " " + dd + ", " + yy;
}

setInterval(clock,1000);
