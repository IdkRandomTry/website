// All data embedded for local file:// access
const portfolioData = {
  about: {
    name: "Siddhesh Umarjee",
    tagline: "CSE @ IIT Gandhinagar · Game Dev & Maths Enthusiast · Creative Coder",
    bio: ["I'm Siddhesh, a fourth-year CS student who gets genuinely excited about games, math, and making cool stuff. I love blending rigorous thinking with creative problem-solving—whether that's designing games to teach logic, building algorithms for real-world problems, or exploring wild mathematical concepts like zero-knowledge proofs.", "Currently working on cryptographic provenance, but I'm always tinkering with something new. When I'm not coding, you'll find me on the tennis court, sketching, or juggling (sometimes literally juggling!)."],
    contact: [
      { label: "Email", url: "mailto:siddhesh.umarjee@iitgn.ac.in" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/siddhesh-umarjee-a685ab280/" },
      { label: "GitHub", url: "https://github.com/IdkRandomTry" }
    ]
  },
  research: [
    { id: "provenance-2026", title: "Content Provenance for Blurred Images", institution: "University of Sydney", dateRange: "May 2026 - Present", description: "Building zero-knowledge proof systems to cryptographically prove image provenance even when sensitive data is blurred. Pretty mind-bending stuff!", tags: ["Zero Knowledge Proofs", "Cryptography", "Finite Field Algebra"], links: [{ label: "Research Notes", url: "https://idkrandomtry.github.io/summer2026/" }] },
    { id: "baghchal-2025", title: "Goats vs Tigers: The Game That Won't Stop", institution: "IIT Gandhinagar", dateRange: "Jan 2025 - Jul 2026", description: "Deep dive into Baghchal, an ancient Indian game. We discovered some genuinely cool winning strategies for grid-like boards. Got published at the Canadian Conference on Computational Geometry—pretty proud of that one!", tags: ["Graph Theory", "Combinatorial Game Theory", "Proof Writing"], links: [{ label: "Research Poster", url: "https://iitgnacin-my.sharepoint.com/:b:/g/personal/23110347_iitgn_ac_in/ES30h7gphVpFvku0PafoDYoBLl3NI_8z1ZdVIuVc7F1uQw?e=Wg2hjE" }] },
    { id: "turing-machines-2025", title: "Space vs Time: The Turing Machine Tradeoff", institution: "IIT Kanpur", dateRange: "May 2025 - Jul 2025", description: "Dove deep into Ryan Williams' paper on doing more with less—literally! Explored how to simulate Turing Machines using way less space. Made a technical report to break it down for others.", tags: ["Complexity Theory", "Algorithms"], links: [{ label: "Technical Report", url: "https://iitgnacin-my.sharepoint.com/:b:/g/personal/23110347_iitgn_ac_in/EUDxPGSqBT1Jiy_3R92cFYwBOvlVDrSU80oEuXmm3QzOLg?e=hibLeX" }] }
  ],
  projects: [
    { id: "prove-it", title: "Prove It – Learn Logic Through Play", event: "SoME #4", dateRange: "Jul 2025 - Aug 2025", status: "Ranked 7th out of 100+!", description: "Built an actual game that teaches you intuitionistic logic. You build proof trees visually and it just clicks. Ranked 7th globally in peer review—still can't believe it!", tags: ["Game Dev", "Education", "Logic"], links: [{ label: "Play Now", url: "https://voxelrifts.itch.io/proveit" }] },
    { id: "fedex-packing", title: "FedEx Packing Challenge – Make Things Fit", event: "InterIIT Tech Meet 13.0", dateRange: "Nov 2024 - Dec 2024", status: "", description: "Solved FedEx's real problem: how to squeeze packages into aircraft containers. Built a genetic algorithm that hit 71.6% efficiency. Pretty satisfying watching packages fit perfectly.", tags: ["Genetic Algorithms", "3D Bin Packing", "Optimization"], links: [{ label: "See Code", url: "https://github.com/IdkRandomTry/FedEx-PS-InterIIT-24-" }] },
    { id: "beat-my-bot", title: "Beat My Bot – Programming Battles", event: "Digis Studios", dateRange: "Dec 2025 - Apr 2026", status: "2 Editions", description: "Created a competitive programming game where people write bots to play 2-player games. Like BattleCode but ours. Built the whole game engine from scratch—super fun!", tags: ["Game Engine", "Competition", "Systems Design"], links: [{ label: "Feb Edition", url: "https://github.com/Digis-Studios/BeatMyBot-v1" }, { label: "Apr Edition", url: "https://github.com/Digis-Studios/BeatMyBot-v2" }] },
    { id: "graphit", title: "Graphit – See Functions Come Alive", event: "SoME #2", dateRange: "Jun 2022 - Aug 2022", status: "Ranked 13/92", description: "Made a game about graphing functions. Turns out people think it's cool—3000+ views and 1500+ plays! My first real game and it still feels awesome.", tags: ["Game Dev", "Education", "UI/UX"], links: [{ label: "Play Now", url: "https://voxelrifts.itch.io/graphit" }] },
    { id: "rang-geet", title: "Rang-Geet – Photos That Sing", event: "Curiosity Conference & Carnival", dateRange: "Dec 2024 - Jan 2025", status: "", description: "Turn any photo into music by mapping colors to musical notes. Weird? Yes. Cool? Absolutely. Won runners-up in the competition.", tags: ["Creative Computing", "Installation Art", "C"], links: [{ label: "See Code", url: "https://github.com/IdkRandomTry/Rang-Geet" }] },
    { id: "hypergraph", title: "Hypergraph Partitioning – Splitting Complex Networks", event: "CS328: Data Science", dateRange: "Feb 2025 - Apr 2025", status: "", description: "Extended graph partitioning to hypergraphs. Basically, how do you split a network efficiently when connections aren't just pairs? Fun exploration.", tags: ["Graph Theory", "Data Science", "Algorithms"], links: [{ label: "Slides", url: "https://iitgnacin-my.sharepoint.com/:p:/g/personal/23110347_iitgn_ac_in/EaKxciw9JGtCqNscOs_NtvAB2attA6mQTuEfX_IayUCxWA?e=DpNzSA" }] },
    { id: "puf-fpga", title: "Hardware Randomness – PUFs on FPGA", event: "ES204: Digital Systems", dateRange: "Feb 2025 - Apr 2025", status: "", description: "Built a random number generator using hardware imperfections. Sounds weird but it's actually how real cryptographic randomness works. Tested it on actual boards!", tags: ["Hardware Security", "Verilog", "FPGA"], links: [{ label: "See Code", url: "https://github.com/IdkRandomTry/PUF" }] }
  ],
  leadership: [
    { title: "Secretary, DigiS (Game Dev Club)", description: "Mentoring 20+ students in game jams and competitions. We just won silver at InterIIT for a game called Viewport!" },
    { title: "Teaching Assistant, Discrete Maths", description: "Help students untangle proofs and graph theory over doubt sessions" },
    { title: "Coordinator, Tinkerers' Lab", description: "Running workshops on laser-cutting and 3D printing. Love helping people build stuff" },
    { title: "Event Lead, BrainWiz", description: "Organized a logic puzzle competition for 150+ students. Was really fun!" },
    { title: "Social Welfare", description: "Organized events with Nyasa to help underprivileged kids during Ganesh Utsav" }
  ],
  achievements: {
    achievements: [
      { title: "College Rank 2", description: "in my first semester – Dean's List too!" },
      { title: "Published at CCCG", description: "The Baghchal research made it to a real conference" },
      { title: "SoME Rankings", description: "7th globally in SoME #4, 13th in SoME #2 (organized by 3Blue1Brown!)" },
      { title: "InterIIT Wins", description: "Silver medal for Viewport game, Runners-up in Panoply for Rang-Geet" },
      { title: "Explorers' Fellowship", description: "Traveled 15+ states across India in 42 days", link: "https://www.youtube.com/watch?v=c5idRllLfOQ" }
    ],
    extracurricular: [
      { title: "Tennis", description: "Serious about it. Represented IITGN at Inter-IIT Sports Meet. Captain of the Lawn Tennis team" },
      { title: "Doodling", description: "Sketching is my chill time. Mostly abstract stuff" },
      { title: "Juggling", description: "Yeah, the actual kind with balls. Still learning new tricks" },
      { title: "Travel", description: "Spent 42 days traveling across 15+ Indian states. Met amazing people, saw incredible places" }
    ]
  },
  skills: {
    interests: ["Game Dev & Game Theory", "Cryptography & Zero-Knowledge Proofs", "Making Maths Intuitive", "Building Fun Stuff"],
    languages: ["Python (most days)", "C / C++", "JavaScript", "Verilog (FPGA)"],
    obsessed: ["Interactive Learning Experiences", "Game Development", "Creative Computing", "Combining Art + Math + Code"]
  }
};

function renderTags(tags) { return tags.map(tag => `<span class="tag">${tag}</span>`).join(''); }
function renderLinks(links) { if (!links || links.length === 0) return ''; return '<p>' + links.map(link => `<a href="${link.url}">${link.label}</a>`).join(' | ') + '</p>'; }

function loadPortfolio() {
  const about = portfolioData.about;
  document.querySelector('header h1').textContent = about.name;
  document.querySelector('header p').textContent = about.tagline;
  document.querySelector('.contact-links').innerHTML = about.contact.map(c => `<a href="${c.url}">${c.label}</a>`).join('');
  document.querySelector('.about').innerHTML = `<h2>Hey!</h2>${about.bio.map(p => `<p>${p}</p>`).join('')}`;
  document.getElementById('research-container').innerHTML = portfolioData.research.map(item => `<div class="research-item"><h3>${item.title}</h3><div class="meta">${item.institution} · ${item.dateRange}</div><p>${item.description}</p>${renderLinks(item.links)}<div class="tags">${renderTags(item.tags)}</div></div>`).join('');
  document.getElementById('projects-container').innerHTML = portfolioData.projects.map(item => `<div class="project-item"><h3>${item.title}</h3><div class="meta">${item.event} · ${item.dateRange}${item.status ? ' · ' + item.status : ''}</div><p>${item.description}</p>${renderLinks(item.links)}<div class="tags">${renderTags(item.tags)}</div></div>`).join('');
  document.getElementById('leadership-container').innerHTML = `<ul>${portfolioData.leadership.map(item => `<li><strong>${item.title}</strong> – ${item.description}</li>`).join('')}</ul>`;
  document.getElementById('achievements-container').innerHTML = `<ul>${portfolioData.achievements.achievements.map(item => `<li><strong>${item.title}</strong>${item.description ? ' – ' + item.description : ''}${item.link ? ` <a href="${item.link}">View</a>` : ''}</li>`).join('')}</ul>`;
  document.getElementById('extracurricular-container').innerHTML = `<ul>${portfolioData.achievements.extracurricular.map(item => `<li><strong>${item.title}</strong> – ${item.description}</li>`).join('')}</ul>`;
  const skills = portfolioData.skills;
  document.getElementById('skills-container').innerHTML = `<div class="skill-group"><h3>What I Love</h3><ul>${skills.interests.map(s => `<li>${s}</li>`).join('')}</ul></div><div class="skill-group"><h3>Languages</h3><ul>${skills.languages.map(s => `<li>${s}</li>`).join('')}</ul></div><div class="skill-group"><h3>Obsessed With</h3><ul>${skills.obsessed.map(s => `<li>${s}</li>`).join('')}</ul></div>`;
}

document.addEventListener('DOMContentLoaded', loadPortfolio);
