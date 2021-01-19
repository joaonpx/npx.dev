function changeMode() {
    if (document.getElementById("mode-icon").src == "https://cdn.glitch.com/489ae440-1e02-481f-a75b-c62aad2a6f00%2Fsun.svg?1611096791357") 
    {
        document.getElementById("mode-icon").src = "https://cdn.glitch.com/489ae440-1e02-481f-a75b-c62aad2a6f00%2Fmoon.svg?1611096843012";
    }
    else 
    {
        document.getElementById("mode-icon").src = "https://cdn.glitch.com/489ae440-1e02-481f-a75b-c62aad2a6f00%2Fsun.svg?1611096791357";
    }
    var body = document.body;
    var aboutSection = document.querySelector(".about");
    var projectsSection = document.querySelector(".projects");
    var budgetSection = document.querySelector(".budget");
    var contactSection = document.querySelector(".contact");
    var boldTitle = document.querySelector(".destaque");
    var boldTitle2 = document.querySelector(".destaque2");
    var boldTitle3 = document.querySelector(".destaque3");
    var boldTitle4 = document.querySelector(".destaque4");
    var boldTitle5 = document.querySelector(".destaque5");
    var boldTitle6 = document.querySelector(".destaque6");
    var boldTitle7 = document.querySelector(".destaque7");
    body.classList.toggle("body-dark-mode");
    aboutSection.classList.toggle("section-dark-mode");
    projectsSection.classList.toggle("section-dark-mode");
    budgetSection.classList.toggle("section-dark-mode");
    contactSection.classList.toggle("section-dark-mode");
    boldTitle.classList.toggle("destaque-dark-mode");
    boldTitle2.classList.toggle("destaque-dark-mode");
    boldTitle3.classList.toggle("destaque-dark-mode");
    boldTitle4.classList.toggle("destaque-dark-mode");
    boldTitle5.classList.toggle("destaque-dark-mode");
    boldTitle6.classList.toggle("destaque-dark-mode");
    boldTitle7.classList.toggle("destaque-dark-mode");
    
}
