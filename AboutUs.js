
const currentPage = window.location.pathname.split("/").pop();


function highlightActiveLink() {

    document.getElementById("home-link").classList.remove("active");
    document.getElementById("prayer-guide-link").classList.remove("active");
    document.getElementById("about-us-link").classList.remove("active");


    if (currentPage === "Main.html") {
        document.getElementById("home-link").classList.add("active");
    } else if (currentPage === "PrayerGuide.html") {
        document.getElementById("prayer-guide-link").classList.add("active");
    } else if (currentPage === "AboutUs.html") {
        document.getElementById("about-us-link").classList.add("active");
    }
}


window.onload = highlightActiveLink;
