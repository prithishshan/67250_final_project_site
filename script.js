// Impact cards — click to expand
function expandCard(card) {
  var full = card.querySelector(".card-full");
  var hint = card.querySelector(".read-more-hint");
  if (full.style.display === "block") {
    full.style.display = "none";
    hint.style.display = "inline";
  } else {
    full.style.display = "block";
    hint.style.display = "none";
  }
}

// Risk accordion
function toggleRisk(btn) {
  var content = btn.nextElementSibling;
  var arrow = btn.querySelector(".arrow");
  if (content.style.display === "block") {
    content.style.display = "none";
    arrow.innerHTML = "▼";
  } else {
    content.style.display = "block";
    arrow.innerHTML = "▲";
  }
}

// Team bio popup
var bios = {
  pritish: "<h3>⚙️ Pritish Shan</h3><p><strong>Lead System Architect</strong></p><p>Defined the Skill-Graph logic and technical matching framework. Built the mobile wireframes and managed the GitHub repo for the site's front-end implementation.</p>",
  daniel: "<h3>📊 Daniel Chen</h3><p><strong>Strategic Analyst</strong></p><p>Conducted market research on the NGO value chain and led the business model and scalability strategy. Facilitated community outreach to validate NGO Resource Gaps.</p>",
  jacqueline: "<h3>🧠 Jacqueline Zang</h3><p><strong>Impact & Social Theory Lead</strong></p><p>Applied TAM and Sociotechnical Systems Theory to the platform's design. Identified ethical risks and managed the collaboration narrative and site documentation.</p>"
}

function showBio(person) {
  document.getElementById("bio-content").innerHTML = bios[person];
  document.getElementById("bio-box").style.display = "block";
  document.getElementById("bio-box").scrollIntoView({behavior: "smooth"});
}

function closeBio() {
  document.getElementById("bio-box").style.display = "none";
}