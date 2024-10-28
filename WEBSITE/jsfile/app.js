// Get the dashboard and analytics elements
// const dashboardElement = document.querySelector("#dashboard");
const analyticsContent = document.querySelector(".analytics");
const dashboardContent = document.querySelector(".dashboard");
const reportsContent = document.querySelector(".reports");
const coreoperationContent = document.querySelector(".coreoperation");
const drivermanagementContent = document.querySelector(".drivermanagement");
const fleetmanagementContent = document.querySelector(".fleetmanagement");
// Function to show the selected page
function showPage(page) {
  if (page === "dashboard") {
    dashboardContent.classList.remove("hidden");
    analyticsContent.classList.add("hidden");
    reportsContent.classList.add("hidden");
    coreoperationContent.classList.add("hidden");
    drivermanagementContent.classList.add("hidden");
    fleetmanagementContent.classList.add("hidden");
  } else if (page === "analytics") {
    analyticsContent.classList.remove("hidden");
    dashboardContent.classList.add("hidden");
    reportsContent.classList.add("hidden");
    coreoperationContent.classList.add("hidden");
    drivermanagementContent.classList.add("hidden");
    fleetmanagementContent.classList.add("hidden");
  } else if (page === "reports") {
    reportsContent.classList.remove("hidden");
    analyticsContent.classList.add("hidden");
    dashboardContent.classList.add("hidden");
    coreoperationContent.classList.add("hidden");
    drivermanagementContent.classList.add("hidden");
    fleetmanagementContent.classList.add("hidden");
  } else if (page === "coreoperation") {
    coreoperationContent.classList.remove("hidden");
    reportsContent.classList.add("hidden");
    analyticsContent.classList.add("hidden");
    dashboardContent.classList.add("hidden");
    drivermanagementContent.classList.add("hidden");
    fleetmanagementContent.classList.add("hidden");
  } else if (page === "drivermanagement") {
    drivermanagementContent.classList.remove("hidden");
    coreoperationContent.classList.add("hidden");
    reportsContent.classList.add("hidden");
    analyticsContent.classList.add("hidden");
    dashboardContent.classList.add("hidden");
    fleetmanagementContent.classList.add("hidden");
  } else if (page === "fleetmanagement") {
    drivermanagementContent.classList.add("hidden");
    coreoperationContent.classList.add("hidden");
    reportsContent.classList.add("hidden");
    analyticsContent.classList.add("hidden");
    dashboardContent.classList.add("hidden");
    fleetmanagementContent.classList.remove("hidden");
  }
}

// Add event listener to the dashboard element
dashboardElement.addEventListener("click", (e) => {
  // Prevent default anchor click behavior
  e.preventDefault();
  // Call showPage with 'dashboard'
  showPage("dashboard");
});

// Add event listener to the analytics element
analyticsElement.addEventListener("click", (e) => {
  e.preventDefault();
  showPage("analytics");
});

reportsContent.addEventListener("click", (e) => {
  e.preventDefault();
  showPage("reports");
});

coreoperationContent.addEventListener("click", (e) => {
  e.preventDefault();
  showPage("coreoperation");
});

drivermanagementContent.addEventListener("click", (e) => {
  e.preventDefault();
  showPage("drivermanagement");
});

fleetmanagementContent.addEventListener("click", (e) => {
  e.preventDefault();
  showPage("fleetmanagement");
});
