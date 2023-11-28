document.getElementById("closeDiv").addEventListener("click", function () {
    document.getElementById("subscription").style.display = "none";
    document.getElementById("mainSection").style.marginTop = "102px";
});

document.getElementById("arrowDiv").addEventListener("click", function () {
    let x = document.getElementById("toggledContents");
    let arrowUp = document.getElementById("arrowUp");

    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        document.getElementById("firstDiv").style.border = "none";
        arrowUp.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "none";
        document.getElementById("firstDiv").style.border = "2px solid #DBDBDB";
        arrowUp.style.transform = "rotate(180deg)";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const headingDivs = document.querySelectorAll(".heading-div");

    headingDivs.forEach(function (headingDiv, index) {
        headingDiv.addEventListener("click", function () {
            const allContents = document.querySelectorAll(".description-section");
            const allImages = document.querySelectorAll(".description-image-div");
            const allSections = document.querySelectorAll(".customize-section");

            allContents.forEach(function (content) {
                content.style.display = "none";
            });

            allImages.forEach(function (image) {
                image.style.display = "none";
            });

            allSections.forEach(function (section) {
                section.classList.remove("active");
                // Set cursor to pointer for inactive sections
                section.style.cursor = "pointer";
            });

            headingDiv.parentNode.classList.add("active");

            // Show the clicked descriptionDivContents and imageDiv
            const content = headingDiv.querySelector(".description-section");
            const image = headingDiv.nextElementSibling;

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                image.style.display = "block";
                // Set cursor to default when content is displayed
                headingDiv.parentNode.style.cursor = "default";
            } else {
                content.style.display = "none";
                image.style.display = "none";
                // Set cursor to pointer when content is hidden
                headingDiv.parentNode.style.cursor = "pointer";
            }
        });

        // Set default background color for the first customize-section
        if (index === 0) {
            headingDiv.parentNode.classList.add("active");
            // Show description-section content for the first section by default
            const content = headingDiv.querySelector(".description-section");
            const image = headingDiv.nextElementSibling;
            content.style.display = "block";
            image.style.display = "block";
            // Set cursor to default for the default section
            headingDiv.parentNode.style.cursor = "default";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const tickContainers = document.querySelectorAll(".loading");
    const totalItems = tickContainers.length;
    let clickedItems = 0;

    const updateProgressBar = () => {
        const progress = (clickedItems / totalItems) * 100;
        document.getElementById("myBar").style.width = `${progress}%`;
        document.getElementById("signalPara").textContent = `${clickedItems} / ${totalItems} completed`;
    };

    tickContainers.forEach(function (tickContainer, index) {
        const defaultSVG = tickContainer.innerHTML;
        const hoverSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
              stroke="#8a8a8a"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>`;
        const clickSVG = `<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#303030"></circle>
            <path
              d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
              fill="#8a8a8a"
            ></path>
          </svg>`;

        tickContainer.innerHTML = defaultSVG;

        tickContainer.addEventListener("click", function () {
            const isClicked = tickContainer.dataset.clicked === "true";
            tickContainer.innerHTML = isClicked ? defaultSVG : clickSVG;
            tickContainer.dataset.clicked = isClicked ? "false" : "true";

            if (!isClicked) {
                clickedItems = clickedItems + 1;
            } else {
                clickedItems = clickedItems - 1;
            }

            updateProgressBar();
        });

        tickContainer.addEventListener("mouseenter", function () {
            if (tickContainer.dataset.clicked !== "true") {
                tickContainer.innerHTML = hoverSVG;
                tickContainer.style.cursor = "pointer";
            }
        });

        tickContainer.addEventListener("mouseleave", function () {
            if (tickContainer.dataset.clicked !== "true") {
                tickContainer.innerHTML = defaultSVG;
                tickContainer.style.cursor = "default";
            }
        });
    });
});


// Notification toggle

const notificationWrapper = document.getElementById("notificationWrapper");
const notificationDropdownWrapper = document.getElementById("notificationDropdownWrapper");

notificationWrapper.addEventListener("click", function () {
    const isExpanded = notificationWrapper.getAttribute("aria-expanded") === "true";

    notificationWrapper.setAttribute("aria-expanded", isExpanded ? "false" : "true");


    const profileDropdownWrapper = document.getElementById("profileDropdownWrapper");
    if (getComputedStyle(profileDropdownWrapper).display === "block") {
        profileDropdownWrapper.style.display = "none";
    }

    // Toggle display of notification dropdown
    notificationDropdownWrapper.style.display = (getComputedStyle(notificationDropdownWrapper).display === "block") ? "none" : "block";
});


// Profile Toggle
const profileWrapper = document.getElementById("profileWrapper");
const profileDropdownWrapper = document.getElementById("profileDropdownWrapper");

profileWrapper.addEventListener("click", function (event) {
    const isExpanded = profileWrapper.getAttribute("aria-expanded") === "true";


    profileWrapper.setAttribute("aria-expanded", isExpanded ? "false" : "true");


    const notificationWrapper = document.getElementById("notificationWrapper");
    const notificationDropdownWrapper = document.getElementById("notificationDropdownWrapper");

    if (getComputedStyle(notificationDropdownWrapper).display === "block") {
        notificationDropdownWrapper.style.display = "none";
        notificationWrapper.setAttribute("aria-expanded", "false");
    }

    // Toggle display of profile dropdown
    profileDropdownWrapper.style.display = (getComputedStyle(profileDropdownWrapper).display === "block") ? "none" : "block";

    // Set focus to the first item in the dropdown if it is expanded
    if (!isExpanded) {
        const firstItem = profileDropdownWrapper.querySelector("li:first-child");
        if (firstItem) {
            firstItem.focus();
        }
    }

    event.preventDefault();
});

profileDropdownWrapper.addEventListener("click", function (event) {

    profileDropdownWrapper.style.display = "none";

    event.stopPropagation();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        profileDropdownWrapper.style.display = "none";
        profileWrapper.setAttribute("aria-expanded", "false");
    }
});


