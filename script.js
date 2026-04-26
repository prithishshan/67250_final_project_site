// ── IMPACT CARDS — click to expand ───────────────────────────
function expandCard(card) {
  var full = card.querySelector(".ip-card-full");
  var hint = card.querySelector(".ip-card-hint");
  var preview = card.querySelector(".ip-card-preview");

  if (full.style.display === "block") {
    full.style.display = "none";
    hint.innerHTML = "+ Read more";
    preview.style.display = "block";
  } else {
    full.style.display = "block";
    hint.innerHTML = "− Read less";
    preview.style.display = "none";
  }
}

// ── RISK ACCORDION ────────────────────────────────────────────
function toggleRisk(btn) {
  var content = btn.nextElementSibling;
  var arrow = btn.querySelector(".ip-arrow");

  var isOpen = content.style.display === "block";

  // close all first
  var allContents = document.querySelectorAll(".ip-risk-content");
  var allArrows = document.querySelectorAll(".ip-arrow");
  allContents.forEach(function(c) { c.style.display = "none"; });
  allArrows.forEach(function(a) { a.classList.remove("open"); });

  // open clicked one if it was closed
  if (!isOpen) {
    content.style.display = "block";
    arrow.classList.add("open");
  }
}

// ── TEAM BIO PANEL ────────────────────────────────────────────
var bios = {
  pritish: {
    name: "Pritish Shan",
    role: "Lead System Architect",
    icon: "⚙️",
    items: [
      "Defined the Skill-Graph logic and technical matching framework.",
      "Developed high-fidelity mobile wireframes to demonstrate user flow.",
      "Managed the GitHub repository for the site's front-end implementation."
    ]
  },
  daniel: {
    name: "Daniel Chen",
    role: "Strategic Analyst",
    icon: "📊",
    items: [
      "Conducted market research to define the NGO value chain and competitive positioning.",
      "Led the development of the business model and scalability strategy.",
      "Facilitated community outreach to validate NGO \"Resource Gaps.\""
    ]
  },
  jacqueline: {
    name: "Jacqueline Zang",
    role: "Impact & Social Theory Lead",
    icon: "🧠",
    items: [
      "Applied the Technology Acceptance Model (TAM) and Sociotechnical Systems Theory to the platform's conceptual design.",
      "Identified and mitigated ethical risks through the \"Lived Experience\" weighting framework.",
      "Managed the Team Collaboration narrative and final poster/site documentation."
    ]
  }
};

function showBio(person) {
  var bio = bios[person];
  var items = bio.items.map(function(i) {
    return "<li>" + i + "</li>";
  }).join("");

  document.getElementById("ip-bio-content").innerHTML =
    "<h3>" + bio.icon + " " + bio.name + "</h3>" +
    "<span class='ip-team-role'>" + bio.role + "</span>" +
    "<ul>" + items + "</ul>";

  var panel = document.getElementById("ip-bio");
  panel.style.display = "block";
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeBio() {
  document.getElementById("ip-bio").style.display = "none";
}