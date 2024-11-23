let menu = document.querySelector(".toggle");
let links = document.querySelector(".links");
let topel = document.querySelector(".top");
let lengthelement = document.querySelectorAll(" .slider .box")
let section = document.querySelector(".slider ");
let left_icon = document.querySelector(".left");
let right_icon = document.querySelector(".right");
let index = 1;
let time;
let index_two = 1;
let time_two;
let section_two = document.querySelector(".team-slider");
let allbox = document.querySelectorAll(".team-slider .box");
let left_icon_two = document.querySelector(".left_two");
let right_icon_two = document.querySelector(".right_two");
let upelement = document.querySelector(".up");


menu.onclick = function() {
    links.classList.toggle("active");
    if (links.classList.contains("active")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-x");
    } else {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-x");
    }
};


right_icon.onclick = function() {
    index++;
    clearInterval(time);
    update();
};

left_icon.onclick = function() {
    index--;
    clearInterval(time);
    update();
};

function update() {
    if (index < 1) {
        index = lengthelement.length;
    } else if (index > lengthelement.length) {
        index = 1;
    }

    section.style.transform = `translateX(-${(index - 1) * 100}%)`;

    // Clear the previous timeout before setting a new one
    clearInterval(time);
    time = setTimeout(() => {
        index++;
        update();
    }, 1000);
}

update();
// ----------------------------------------------------
right_icon_two.onclick = function() {
    index_two++;
    clearInterval(time_two);
    two_update();
};

left_icon_two.onclick = function() {
    index_two--;
    clearInterval(time_two);
    two_update();
};

function two_update() {
    if (index_two < 1) {
        index_two = allbox.length;
    } else if (index_two > allbox.length) {
        index_two = 1;
    }

    section_two.style.transform = `translateX(-${(index_two - 1) * 100}%)`;

    clearInterval(time_two);
    time_two = setTimeout(() => {
        index_two++;
        two_update();
    }, 1000);
}

two_update();
// up buttton
window.onscroll = function() {
    if (this.scrollY >= 300) {
        upelement.classList.add("active");

    } else {
        upelement.classList.remove("active");

    }
    if (this.scrollY >= 200) {
        topel.classList.add("active")
    } else {
        topel.classList.remove("active")
    }
}
upelement.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    // start scrollreveal
const move = ScrollReveal({
        distance: "60px",
        duration: 2500,
        delay: 400,
        reset: true
    })
    // move.reveal(".landing", { delay: 100, origin: "left" })
move.reveal(".services", { delay: 100, origin: "left" })
move.reveal(".newst", { delay: 100, origin: "left" })
move.reveal(".fetures", { delay: 100, origin: "left" })
move.reveal(".team", { delay: 100, origin: "left" })
move.reveal(".logoo", { delay: 100, origin: "left" })
move.reveal(".footer ", { delay: 100, origin: "left" })
document.addEventListener("scroll", function() {
    let allsections = document.querySelectorAll(".arrive");
    let alllinks = document.querySelectorAll(".same");
    allsections.forEach(function(section, index) {
        let size = section.getBoundingClientRect();
        if (size.top <= window.innerHeight / 2 && size.bottom >= window.innerHeight / 2) {
            alllinks.forEach(function(link) {
                link.classList.remove("active");
            });
            alllinks[index].classList.add("active");
        }
    });
});