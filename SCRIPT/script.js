// Dashboard element ধরা


const totalJobsEl = document.getElementById("totalJobs");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");

let interviewCount = 0;
let rejectedCount = 0;

document.addEventListener("click", function (e) {
  const card = e.target.closest(".job-card");
  if (!card) return;

  // DELETE FIRST
  if (e.target.closest(".btn-delete")) {
    if (card.dataset.status === "interview") interviewCount--;
    if (card.dataset.status === "rejected") rejectedCount--;

    card.remove();
    updateDashboard();
    return;
  }

  // Interview logic
 if (e.target.closest(".btn-interview")) {
  if (card.dataset.status !== "interview") {
    if (card.dataset.status === "rejected") rejectedCount--;

    card.dataset.status = "interview";
    interviewCount++;

    const statusBtn = card.querySelector(".status-text");
    statusBtn.textContent = "Interview";
    statusBtn.classList.remove("btn-outline", "btn-error");
    statusBtn.classList.add("btn-success");
  }
}

  // Rejected logic
  if (e.target.closest(".btn-rejected")) {
  if (card.dataset.status !== "rejected") {
    if (card.dataset.status === "interview") interviewCount--;

    card.dataset.status = "rejected";
    rejectedCount++;

    const statusBtn = card.querySelector(".status-text");
    statusBtn.textContent = "Rejected";
    statusBtn.classList.remove("btn-outline", "btn-success");
    statusBtn.classList.add("btn-error");
  }
}

  updateDashboard();
});



// Dashboard update function
function updateDashboard() {
  interviewCountEl.textContent = interviewCount;
  rejectedCountEl.textContent = rejectedCount;

  const allCards = document.querySelectorAll(".job-card");
  totalJobsEl.textContent = allCards.length;

  const jobsBadge = document.getElementById("jobsBadge");
jobsBadge.textContent = `${allCards.length} Jobs`;
}


// Step -2 
// tab onojayi job card filter kora 

// Tab Button ke Dhorte hobe 
const tabAll = document.getElementById("tab-all");
const tabInterview = document.getElementById("tab-interview");
const tabRejected = document.getElementById("tab-rejected");

// Alll Tab Event Listener add 
tabAll.addEventListener("click", function () {
  filterJobs("all");
});

tabInterview.addEventListener("click", function () {
  filterJobs("interview");
});

tabRejected.addEventListener("click", function () {
  filterJobs("rejected");
});

// For off diye filter kora 
function filterJobs(status) {
  const jobCards = document.querySelectorAll(".job-card");

  for (const card of jobCards) {
    if (status === "all" || card.dataset.status === status) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }

  //  NO JOBS CHECK Kora
  let visibleCount = 0;

  for (const card of jobCards) {
    if (card.style.display !== "none") {
      visibleCount++;
    }
  }

  const noJobs = document.getElementById("noJobs");

  if (visibleCount === 0 && status !== "all") {
    noJobs.classList.remove("hidden");
  } else {
    noJobs.classList.add("hidden");
  }
}

