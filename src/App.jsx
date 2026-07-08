import { useState } from "react";

// EN Auckland City logo — embed base64 here when available
const EN_LOGO_SRC = null; // Set to base64 string when logo is provided

const BRAND = {
  // EN Auckland primary palette
  navy: "#005EB9",        // EN blue — header, primary buttons, key UI (replaces old navy)
  blue: "#1AADAD",        // EN teal — accents, active states, highlights
  green: "#1AADAD",       // Stage 1 accent (teal)
  darkGreen: "#0A4A8C",   // Stage 5 deep blue
  darkGreenLight: "#E6EFF9",
  navyLight: "#E6EFF9",   // Light blue backgrounds
  blueLight: "#E6F7F7",   // Light teal backgrounds
  greenLight: "#E6F7F7",  // Stage 1 light
  navyMid: "#2A7AB5",     // Stage 4 mid blue
  white: "#FFFFFF",
  offWhite: "#F5F5F5",
  gray: "#6B7280",
  lightBorder: "#D6E4F0",
  enBlueDark: "#1A3A5C",  // Stage 3 dark navy
};

const stages = [
  {
    id: 1,
    key: "connect-groups",
    label: "Stage 1",
    title: "Healthy Connect Groups",
    subtitle: "Discipleship & Leadership",
    icon: "◎",
    color: "#1AADAD",
    lightColor: "#E6F7F7",
    tagline: "Establish disciple-making small groups",
    description: "Connect Groups are the foundational environment where people encounter Jesus, discipleship occurs, leaders are developed, and future church planters emerge. The long-term health of church plants depends on the depth of discipleship that exists before a church launches.",
    characteristics: [
      "Christ-centered & Scripture-based",
      "Relationally connected & Missional",
      "Multiplying disciples, leaders & groups",
    ],
    discipleshipMarkers: {
      "Spiritual Habits": [
        "Daily Scripture engagement that leads to transformation and obedience",
        "Abide through prayer, silence & reflection",
        "Worship and obedience",
      ],
      "Community Life": [
        "Authentic relationships with confession & accountability",
        "Using gifts to serve one another",
      ],
      "Mission": [
        "Intentionally engaging friends who are seeking to know more about faith or are far from God",
        "Build trust with your unchurched friends and neighbors by including them, and consistently investing in them",
        "Ask them if they would be open to you sharing your faith journey",
        "Discern and invite — invite them to a church event or Service",
      ],
    },
    markers: [
      "Daily Scripture engagement leading to transformation",
      "Authentic relationships with confession & accountability",
      "Investing in & inviting unchurched friends",
      "Sharing personal testimony & engaging in outreach",
    ],
    leaderFocus: [
      "Shepherd members & facilitate discussion",
      "Develop 2 apprentice leaders (triads)",
      "Encourage outreach & identify emerging leaders",
      "Reproduce a new group every 12–18 months",
    ],
    leaderMultiplication: "Every Connect Group should aim to develop 2 Apprentice Leaders who help lead discussions, follow up with members, begin mentoring others, and prepare to launch a new group.",
    milestone: "Each CG reproduces a new group every 12–18 months",
    timeline: "Year 1: 3–5 Connect Groups",
    qualifications: null,
    tools: [
      {
        category: "Discipleship",
        items: [
          { name: "F.A.I.T.H Assessment", description: "Evaluate disciple readiness across five dimensions: Faith, Accountability, Influence, Training, and Humility.", url: null },
          { name: "Triad Guide", description: "Three-person accountability and growth structure for emerging leaders.", url: null },
          { name: "Connect Group Health Check", description: "Self-assessment tool for CG leaders to evaluate group health and identify next steps.", url: null },
        ],
      },
      {
        category: "Leadership Development",
        items: [
          { name: "Apprentice Leader Pathway", description: "Step-by-step guide for identifying and developing apprentice leaders within your group.", url: null },
          { name: "Group Multiplication Planner", description: "Timeline and checklist for reproducing a new Connect Group.", url: null },
        ],
      },
      {
        category: "Reference Material",
        isReference: true,
        items: [
          { name: "Personal Growth Assessment Tool", description: "A 10-area self-assessment tool mapping the journey from 'Exploring' to 'Maturing' across worship, prayer, mission, discipleship, generosity and more. Useful for helping CG members identify where they are and where to grow.", url: "https://drive.google.com/file/d/1hV55eV3gpDfZreKTyX8kx1juOuP-dOY6/view" },
          { name: "Biblical Foundations of Discipleship", description: "A foundational reading on why disciple-making is God's primary work — covering the Great Commission, transformation, and the difference between church growth and genuine multiplication.", url: "https://drive.google.com/file/d/124CF0f5qPlDttcfvD7lkFrw7Qs7wzDiq/view" },
          { name: "Consumer Christianity vs. Disciple-Making", description: "Key readings contrasting attractional church models with genuine disciple-making culture. Helpful framing for CG leaders who want to move people from attendance to transformation.", url: "https://drive.google.com/file/d/1o-abWUjP5LDm8icCoDmWdMa3SMBRTkLg/view" },
        ],
      },
    ],
  },
  {
    id: 2,
    key: "cluster",
    label: "Stage 2",
    title: "Regional Cluster",
    subtitle: "Regional Mission",
    icon: "❋",
    color: "#005EB9",
    lightColor: "#E6EFF9",
    tagline: "Multiple groups working together regionally",
    description: "When 3–6 Connect Groups exist in the same region, they form a Cluster — the first expression of a missional church community in a region. Clusters represent the early stage of a missional church presence in a region.",
    characteristics: [
      "3–6 Connect Groups in the same region",
      "Coordinated by a Cluster Leader who coaches group leaders & identifies future planting leaders",
      "First expression of missional church community",
    ],
    markers: [
      "Consistent group multiplication",
      "New believers baptized & entering discipleship",
      "New disciple-making leaders identified, equipped & empowered",
      "Increasing community engagement",
    ],
    leaderFocus: [
      "Coach group leaders & encourage outreach",
      "Identify future church planting leaders using F.A.I.T.H criteria",
      "Organise regional prayer gatherings (quarterly → monthly)",
      "Host outreach events: BBQs, service projects, Alpha courses, sports & family events",
    ],
    activities: [
      { name: "Regional Prayer Gatherings", detail: "Intercession for the region, prayer for the lost & CG growth, spiritual renewal & worship" },
      { name: "Outreach Events", detail: "Neighborhood BBQs, service projects, Alpha/evangelism courses, college & youth gatherings" },
      { name: "Core Development", detail: "Quarterly leader gatherings on disciple-making, spiritual formation, mission, and identifying new leaders" },
    ],
    milestone: "Healthy cluster: consistent multiplication + new believers",
    timeline: "Year 2: 5–10 Connect Groups",
    qualifications: null,
    tools: [
      {
        category: "Cluster Leadership",
        items: [
          { name: "Cluster Leader Coaching Guide", description: "Framework for coaching CG leaders, running huddles, and monitoring group health across the cluster.", url: null },
          { name: "Regional Prayer Gathering Toolkit", description: "Order of service, intercession prompts, and logistics guide for hosting quarterly cluster prayer gatherings.", url: null },
          { name: "Outreach Event Planning Template", description: "Step-by-step planning guide for neighbourhood BBQs, service projects, Alpha courses, and sports events.", url: null },
        ],
      },
      {
        category: "Mission & Growth",
        items: [
          { name: "F.A.I.T.H Leader Identification Checklist", description: "Criteria and questions for identifying potential church planting leaders within the cluster.", url: null },
          { name: "Cluster Health Dashboard", description: "Tracking tool for group multiplication, new believers, baptisms, and community engagement.", url: null },
        ],
      },
      {
        category: "Reference Material",
        isReference: true,
        items: [
          { name: "National Study on Disciple-Making in US Churches", description: "Research by Discipleship.org & Exponential covering why fewer than 5% of churches have a reproducing disciple-making culture — and what Level 4 & 5 churches do differently. Excellent framework for a Cluster Leader assessing health.", url: "https://drive.google.com/file/d/1csyEOqztyJEFW8pOHJXCIZDxaX3DsHts/view" },
          { name: "5 Levels of Disciple-Making (Visual Guide)", description: "A 10-minute visual summary of the national study, mapping churches from Level 1 (subtracting) to Level 5 (multiplying). Useful for assessing where your cluster sits and what the next level looks like.", url: "https://drive.google.com/file/d/1EExJHIzMtLTmjmd1D6T7Zs7UX76XfYZ5/view" },
          { name: "Building Your Core Team", description: "Cohort reading on gathering people, identifying your core from the crowd, and investing in them intentionally. Includes frameworks for team discipleship and spiritual multiplication.", url: "https://drive.google.com/file/d/1lxDYRVZdJntilf6FBPkO67wBNVlwyDVb/view" },
        ],
      },
    ],
  },
  {
    id: 3,
    key: "core-team",
    label: "Stage 3",
    title: "Expansion",
    subtitle: "Leadership Development",
    icon: "✦",
    color: "#1A3A5C",
    lightColor: "#E6EFF9",
    tagline: "Develop a committed team for launch",
    description: "When a cluster reaches 30–50 committed people, a Core Team forms. The Core Team is a group (4–8) of committed Christ followers who are supporters of the Local Leaders and active carriers of the vision and values of the church. This team consists of CG leaders, apprentices, highly committed disciples, and emerging ministry leaders.",
    stageFocuses: [
      { number: 1, title: "Expanding the CORE", detail: "Doubling the core group from about 25 to 50+ people" },
      { number: 2, title: "Developing a leadership CORE team", detail: "Building a dedicated leadership core team of 5 to 7 people" },
    ],
    characteristics: [
      "30–50 committed people; Core Team of 4–8 F.A.I.T.H qualified members",
      "Functioning like a 'church in formation' with monthly training gatherings",
      "Storytelling & testimony sharing to build faith and culture",
    ],
    markers: [
      "Prayer for the church plant & new disciples",
      "Actively & intentionally making disciples",
      "Serving on launch teams & leading gatherings",
      "Financial generosity & participation in training",
    ],
    leaderFocus: [
      "Monthly training gatherings: mission, vision & disciple-making",
      "Storytelling & testimony sharing at every gathering",
      "Match gifting & personality to position",
      "Develop systems for group multiplication",
    ],
    milestone: "Core team of 4–8 qualified, committed members formed",
    timeline: "Year 3: 8+ Connect Groups",
    qualifications: {
      maturity: [
        "A genuine love for and a growing relationship with God",
        "Growing godly character and Biblical moral standards",
        "Reputation as a F.A.I.T.H person (Faithful, Available, Involved, Teachable & Hungry)",
        "Actively participating and volunteering in the church",
        "In an active discipleship relationship — both receiving and leading",
        "Completed the One 2 One and Purple Book",
        "Attended a Freedom Weekend (Auckland) or Victory Weekend",
        "Water baptised and inducted into the church family",
        "Lifestyle of generosity (giving tithes and offerings)",
        "Endorsement from CGL, CCL, or senior local leader",
      ],
      mission: [
        "Completed the Disciplemakers workshop",
        "A fruit-bearing disciple maker committed to multiplying disciples",
        "Engaging people who don't know Jesus to lead them into a relationship with God",
        "Actively engaged in leadership development through ENAC Lead Pipeline",
      ],
    },
    tools: [
      {
        category: "Core Team Formation",
        items: [
          { name: "Core Team Covenant", description: "A shared commitment document covering expectations, spiritual disciplines, mission involvement, and financial generosity.", url: "https://docs.google.com/document/d/1F58c-fYBMefQsYXHwJqdhT1VLyjCr-vNkVBrm6p6sTU/edit" },
          { name: "F.A.I.T.H Assessment Tool", description: "Structured assessment to evaluate potential core team members across Faithfulness, Availability, Involvement, Teachability, and Hunger.", url: null },
          { name: "Core Team Training Curriculum", description: "Monthly training framework covering mission, vision, disciple-making, and systems development.", url: null },
        ],
      },
      {
        category: "Systems & Structure",
        items: [
          { name: "Ministry Team Development Guide", description: "Framework for identifying, recruiting, and developing key ministry teams: worship, children, hospitality, and outreach.", url: "https://drive.google.com/file/d/1LNF44E-Rsrhllb9mIwKHYhhfidaBqRV4/view" },
          { name: "Church Plant Vision Document Template", description: "Template for articulating the vision, values, and strategy of the new church plant.", url: null },
        ],
      },
      {
        category: "Reference Material",
        isReference: true,
        items: [
          { name: "Core Team and Launch", description: "A practical overview of the CORE → Committed → Crowd model, the FAITH framework for identifying leaders, culture creation principles, and pre-launch service planning. Core reading for anyone forming or leading a Core Team.", url: "https://drive.google.com/file/d/1nKU_i7mTIIEz8d4EUo0dm_MH9bUqnco8/view" },
          { name: "Discipleship Culture Foundation", description: "Defines what a disciple-making culture looks like in practice — the beliefs, habits, and language that must be established in your Core Team before the church launches. Includes the Define → Align → Drive → Sustain framework.", url: "https://drive.google.com/file/d/1CjWno5AcA9wa6aCb-W1SSNcC3vwfacG7/view" },
          { name: "Leadership Pipeline — Levels 1–4", description: "A framework for identifying and developing leaders from Servant (Level 1) through to Department Leader (Level 4). Essential for building the leadership structure of your Core Team.", url: "https://drive.google.com/file/d/19e0e7JZd56DcKLMz6hcVX_vEq_UNd2g5/view" },
        ],
      },
    ],
  },
  {
    id: 4,
    key: "pre-launch",
    label: "Stage 4",
    title: "Pre-Church Plant Formation",
    subtitle: "Preview Services",
    icon: "◈",
    color: "#2A7AB5",
    lightColor: "#E6EFF9",
    tagline: "Prepare the region for new church launch",
    description: "The Core Team begins hosting monthly Preview Services 6–9 months before launch, building community awareness and developing ministry teams. Preview services allow the team to invite people they have been praying for, create a corporate moment for prayer and exhortation, and develop ministry teams.",
    characteristics: [
      "Preview services 6–9 months before launch",
      "Worship, Preaching, Hospitality & Children's ministry (light)",
      "Increasing outreach: service projects, prayer walks, campus & neighbourhood engagement",
    ],
    markers: [
      "Inviting people they've been praying for & reaching",
      "Developing ministry teams & sharing leadership",
      "Building community awareness & visibility",
      "Follow-up systems established",
    ],
    leaderFocus: [
      "Host monthly preview services with worship, preaching & response",
      "Service projects & prayer walks",
      "Campus & neighbourhood engagement",
      "Prepare all systems for public launch",
    ],
    milestone: "Monthly preview services running with growing attendance",
    timeline: "6–9 months before launch",
    qualifications: null,
    tools: [
      {
        category: "Launch Preparation",
        items: [
          { name: "Launch Readiness Checklist", description: "Comprehensive checklist covering team, systems, facilities, communication, and community engagement before public launch.", url: "https://drive.google.com/file/d/1kZ6C9KmZJiu6GhmxI6w6tMae0oUNSzUv/view" },
          { name: "Preview Service Planning Guide", description: "Template and checklist for planning and running monthly preview services leading up to launch.", url: "https://drive.google.com/file/d/1bCs8yrjsOBcy7TzHnudR-Gk7r24sNv2E/view" },
          { name: "Systems Setup Guide", description: "Step-by-step guide for establishing children's ministry, pastoral care, giving, and communications systems.", url: null },
        ],
      },
      {
        category: "Community & Communication",
        items: [
          { name: "Church Communication Plan", description: "Template for website, social media, and community outreach leading up to and through launch.", url: null },
          { name: "Campus Engagement Strategy", description: "Framework for intentional engagement with local schools, universities, and neighbourhoods.", url: null },
        ],
      },
      {
        category: "Reference Material",
        isReference: true,
        items: [
          { name: "Leading Yourself & Your Team (Session 6A)", description: "Covers mission, vision & values clarity, how to craft team values, and what it means to be the chief vision caster as a church plant leader. Includes the module overview for leading yourself and supporting structures.", url: "https://drive.google.com/file/d/1r7lQlf8NsbACMLQdP2LuxHnJq2TO26Au/view" },
          { name: "Healthy Leadership Practices (Session 6B)", description: "Practical tools for leading your team well — the 5 questions every good leader asks in a 1-on-1, and the Clarify → Include → Coach → Empower development cycle.", url: "https://drive.google.com/file/d/1dnwTClgKLRXlC-JFMykN0N3VncWasPrr/view" },
          { name: "The Inner Life of a Leader", description: "A spiritually grounded session on how a leader's inner world shapes how they lead and pastor others. Covers healthy leadership rhythms, emotional health, and leading from a place of wholeness in Christ.", url: "https://drive.google.com/file/d/1R06qHDqmTBp5XZ-76J8pU7WzVmft6HKN/view" },
        ],
      },
    ],
  },
  {
    id: 5,
    key: "church-plant",
    label: "Stage 5",
    title: "New Church Plant",
    subtitle: "Church Launch",
    icon: "✟",
    color: "#0A4A8C",
    lightColor: "#E6EFF9",
    tagline: "A missional community launched",
    description: "A new church launches with weekly services and outreach, governed by local leadership under ENAC oversight — a spiritual family multiplying disciples into the next generation. The structure includes a Local Church Plant Leader with Core Team, Eldership Board, Finance Board, and Senior Pastor (in ENAC). An MOU with ENAC senior leadership governs the relationship.",
    characteristics: [
      "Weekly services & outreach with local leadership under ENAC oversight",
      "Governed structure: Local Church Plant Leader, Eldership Board, Finance Board",
      "Reproducible: CG → Cluster → CP pipeline begins again",
    ],
    metrics: [
      "Disciples being formed consistently",
      "Leaders being developed & groups multiplying",
      "People coming to Christ — baptism & added to community",
      "Measurable community impact",
    ],
    markers: [
      "Disciples being formed consistently",
      "Leaders being developed & groups multiplying",
      "People coming to Christ (baptism & added to community)",
      "Measurable community impact",
    ],
    leaderFocus: [
      "Reproduce the CG → Cluster → CP pipeline",
      "Attend 'Unleash' twice a year",
      "Maintain MOU with ENAC senior leadership",
      "Begin identifying the next church plant",
    ],
    milestone: "New church publicly launched with sustainable structure",
    timeline: "Year 3+ — and the cycle begins again",
    qualifications: null,
    tools: [
      {
        category: "Church Governance",
        items: [
          { name: "Church Constitution Template", description: "Draft framework covering governance, membership, leadership, and financial accountability.", url: null },
          { name: "Elder & Deacon Handbook", description: "Roles, responsibilities, and expectations for church leadership teams.", url: null },
          { name: "Pastoral Care Framework", description: "Structured approach to member care, follow-up, and crisis response.", url: null },
        ],
      },
      {
        category: "Sustainability & Reproduction",
        items: [
          { name: "Church Health Assessment", description: "Annual review tool covering discipleship, leadership, mission, generosity, and reproduction.", url: null },
          { name: "Next Church Plant Pathway", description: "Guide for identifying, developing, and releasing the next generation of church planters from within your congregation.", url: "https://drive.google.com/file/d/1k8cSkCEOlVidyA9k5QASxj4Oz6_0TgrS/view" },
        ],
      },
      {
        category: "Reference Material",
        isReference: true,
        items: [
          { name: "Leadership Pipeline — Advanced Levels", description: "Continues the leadership pipeline framework into Level 3 (Leader of Leaders / Internship) and Level 4 (Department Leader) — covering character development, internship program design, mentoring structures, and how to develop leaders before giving them full responsibility.", url: "https://drive.google.com/file/d/1hs6tT_tfz4dY4jbSVlXfeegljIRhQR3x/view" },
          { name: "100 Years From Now — Sustaining a Movement", description: "Steve Murrell's vision for passing the baton across generations within Every Nation. A call to build disciple-making movements that outlast any individual leader — directly relevant to reproducing the CG → CP pipeline from within a new church.", url: "https://drive.google.com/file/d/189C6Fs7_Rz7SobFM_0FFkdmr_eQWynsb/view" },
          { name: "Healthy Leadership Rhythms", description: "Covers the daily, weekly, monthly, quarterly and annual rhythms that sustain a church planting leader over the long haul — solitude, community, and mission as the three disciplines that create space for God.", url: "https://drive.google.com/file/d/1ZDkrCEfq6EL5AHHqQ5SCmOqWVFywYGZg/view" },
        ],
      },
    ],
  },
];

const pipeline = [
  { step: 1, title: "New Believer", desc: "Encounters Jesus through community" },
  { step: 2, title: "Growing Disciple", desc: "Scripture, prayer, accountability" },
  { step: 3, title: "Serving Member", desc: "Using gifts to serve others" },
  { step: 4, title: "Apprentice Leader", desc: "Being mentored in a triad" },
  { step: 5, title: "Connect Group Leader", desc: "Shepherding & multiplying" },
  { step: 6, title: "Cluster Leader", desc: "Coaching regional groups" },
  { step: 7, title: "Church Plant Team Member", desc: "Core team committed" },
  { step: 8, title: "Church Planter / Ministry Leader", desc: "Leading a new church" },
];

const values = [
  { icon: "🙏", title: "Prayer", desc: "Prayer fuels every stage of the process." },
  { icon: "📖", title: "Disciple-Making", desc: "We are disciples who make disciples." },
  { icon: "📣", title: "Storytelling", desc: "Celebrating life change builds faith and momentum." },
  { icon: "×2", title: "Multiplication", desc: "Disciples. Leaders. Groups. Churches." },
  { icon: "🌍", title: "Mission", desc: "Every group exists for people who are not yet there." },
];

const keyDefs = [
  { term: "Disciple", def: "Someone who is fully following Jesus, being changed and transformed by Jesus, and has joined the mission of Jesus (making disciples)." },
  { term: "Disciple Maker", def: "A disciple of Jesus who enters into relationships with people to intentionally help them follow Jesus, be changed by Jesus, and join the mission of Jesus." },
  { term: "Disciple-Making", def: "An intentional process of lasting life transformation that occurs over time within a small group of people who have prayerfully committed to becoming more like Jesus Christ." },
  { term: "F.A.I.T.H", def: "Key leadership character traits: Faithful, Available, Involved, Teachable, Humble. Character before competence." },
  { term: "Triad", def: "A group of 3 where a leader develops 2 apprentices — the core unit of leadership multiplication at every stage." },
];

export default function App() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [question, setQuestion] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [practicesOpen, setPracticesOpen] = useState(false);
  const [defsOpen, setDefsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stage = stages[activeStage];

  // Determine available tabs for current stage
  const getTabs = () => {
    const base = ["overview", "markers", "leadership", "pipeline"];
    if (stage.qualifications) base.splice(3, 0, "qualifications");
    base.push("tools");
    base.push("ask");
    return base;
  };
  const tabs = getTabs();

  const askQuestion = async () => {
    if (!question.trim()) return;
    const userQ = question.trim();
    setQuestion("");
    setAiLoading(true);
    const newHistory = [...chatHistory, { role: "user", content: userQ }];
    setChatHistory(newHistory);

    try {
      const systemPrompt = `You are a knowledgeable guide for ENAC (Every Nation Church Auckland)'s church planting framework. You help church planters, Connect Group leaders, and cluster leaders navigate the 5-stage process from Connect Groups to Church Plant.

The framework: Connect Groups (Multiplication) → Regional Cluster → Church Plant Core Team → Pre-Church Plant Formation → New Church Plant.

STAGE 1 — Healthy Connect Groups: Foundational disciple-making small groups. Discipleship markers across Spiritual Habits (daily Scripture, prayer, worship), Community Life (accountability, serving), and Mission (outreach, testimony). Each CG develops 2 apprentice leaders (triads). Goal: reproduce a new group every 12–18 months.

STAGE 2 — Regional Cluster: 3–6 CGs in one region. Cluster Leader coaches groups, identifies future planters. Activities: regional prayer gatherings, outreach events (BBQs, Alpha, service projects), core development gatherings. Health indicators: consistent multiplication, new believers, increasing community engagement.

STAGE 3 — Church Plant Core Team: 4–8 F.A.I.T.H qualified members from 30–50 committed people. Qualifications include: completed One 2 One & Purple Book, water baptised, active disciple-maker, completed Disciplemakers workshop, ENAC Lead Pipeline engaged, endorsed by CGL/CCL or senior leader. Functions like a "church in formation" with monthly training gatherings.

STAGE 4 — Pre-Launch: Monthly preview services 6–9 months before launch. Includes worship, preaching, hospitality, light children's ministry. Increased outreach: service projects, prayer walks, campus & neighbourhood engagement.

STAGE 5 — New Church Plant: Weekly services under ENAC oversight. Structure: Local Church Plant Leader + Core Team + Eldership Board + Finance Board + Senior Pastor (ENAC). MOU governs relationship. Goal: reproduce the pipeline again.

Key values: Disciple-making is central. Prayer fuels everything. Leaders multiply leaders. Groups reproduce groups. Character (F.A.I.T.H) before competence.

Leadership pipeline: New Believer → Growing Disciple → Serving Member → Apprentice Leader → CG Leader → Cluster Leader → CP Team Member → Church Planter.

Metrics that matter (not just attendance): disciples being formed, leaders being developed, groups multiplying, people coming to Christ, community impact.

Timeline: Year 1 (3-5 CGs), Year 2 (5-10 CGs, form cluster), Year 3 (8+ CGs, form core team, launch preview services).

Be warm, practical, and spiritually grounded. Keep responses concise but rich — 2-4 paragraphs max. Reference scripture where appropriate.`;

      const messages = newHistory.map(m => ({ role: m.role, content: m.content }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: systemPrompt,
          messages,
        }),
      });

      const data = await response.json();
      const answer = data.content?.[0]?.text || "Sorry, I couldn't generate a response.";
      setChatHistory([...newHistory, { role: "assistant", content: answer }]);
    } catch (e) {
      setChatHistory([...newHistory, { role: "assistant", content: "Something went wrong. Please try again." }]);
    }
    setAiLoading(false);
  };

  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", background: BRAND.offWhite, minHeight: "100vh", color: BRAND.navy }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .stage-btn { transition: all 0.18s ease; cursor: pointer; border: none; text-align: left; }
        .stage-btn:hover { transform: translateX(4px); }
        .tab-btn { cursor: pointer; border: none; background: none; transition: all 0.18s ease; white-space: nowrap; }
        .send-btn { cursor: pointer; border: none; transition: all 0.18s ease; }
        .send-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
        .pipeline-item { transition: all 0.18s ease; }
        .pipeline-item:hover { transform: scale(1.015); }
        textarea:focus { outline: 2px solid #1AADAD; outline-offset: 2px; border-color: #1AADAD !important; }
        textarea { resize: none; }
        .suggest-btn:hover { background: #E6EFF9 !important; }
        .def-row:hover { background: #E6EFF9; }
        .tab-bar { display: flex; gap: 3px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .tab-bar::-webkit-scrollbar { display: none; }
        .layout-row { display: flex; gap: 24px; }
        .sidebar { width: 236px; flex-shrink: 0; }
        .main-content { flex: 1; min-width: 0; }
        @media (max-width: 768px) {
          .layout-row { flex-direction: column; }
          .sidebar { width: 100%; }
          .sidebar-stages { display: flex; flex-direction: row; overflow-x: auto; gap: 6px; padding-bottom: 6px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .sidebar-stages::-webkit-scrollbar { display: none; }
          .sidebar-stage-btn { flex-shrink: 0; min-width: 120px; }
        }
        @media (max-width: 480px) {
          .header-vision { display: none; }
        }
      `}</style>

      {/* Header */}
      <div style={{ background: "#005EB9", color: "white", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "3px solid #1AADAD", minHeight: "68px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {EN_LOGO_SRC ? (
            <img src={EN_LOGO_SRC} alt="Every Nation Auckland City" style={{ height: "44px", width: "auto" }} />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", color: "white", textTransform: "uppercase" }}>Every Nation</span>
              <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", color: "#1AADAD", textTransform: "uppercase" }}>Auckland City</span>
            </div>
          )}
          <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.25)" }} />
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.2px", color: "white" }}>Church Planting Framework</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)", marginTop: "2px", fontWeight: 400 }}>ENAC — CG to Church Plant Guide</div>
          </div>
        </div>
        <div className="header-vision" style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", textAlign: "right", lineHeight: "1.7" }}>
          <span style={{ color: "#1AADAD", fontWeight: 600 }}>The Vision</span><br />
          Disciples who make disciples.<br />Leaders who multiply leaders.
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ background: BRAND.lightBorder, height: "5px", display: "flex" }}>
        {stages.map((s, i) => (
          <div key={i} style={{ flex: 1, background: i <= activeStage ? (i % 2 === 0 ? "#1AADAD" : "#005EB9") : "transparent", transition: "background 0.3s" }} />
        ))}
      </div>

      <div className="layout-row" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 16px", gap: "24px" }}>

        {/* Sidebar */}
        <div className="sidebar">
          <div style={{ fontSize: "10px", fontWeight: 700, color: BRAND.gray, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" }}>The 5 Stages</div>
          <div className="sidebar-stages">
          {stages.map((s, i) => (
            <button key={i} className="stage-btn sidebar-stage-btn" onClick={() => { setActiveStage(i); setActiveTab("overview"); setSidebarOpen(false); }} style={{ display: "block", width: "100%", padding: "10px 12px", marginBottom: "4px", background: activeStage === i ? BRAND.white : "transparent", borderRadius: "8px", borderLeft: activeStage === i ? `4px solid ${s.color}` : `4px solid transparent`, boxShadow: activeStage === i ? "0 1px 4px rgba(0,94,185,0.10)" : "none" }}>
              <div style={{ fontSize: "10px", fontWeight: 600, color: activeStage === i ? s.color : BRAND.gray, textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: activeStage === i ? BRAND.navy : "#4B5563", marginTop: "2px" }}>{s.title}</div>
              <div style={{ fontSize: "11px", color: BRAND.gray, marginTop: "1px" }}>{s.subtitle}</div>
            </button>
          ))}
          </div>

          <div style={{ marginTop: "24px", background: BRAND.navy, borderRadius: "10px", overflow: "hidden" }}>
            <button onClick={() => setPracticesOpen(!practicesOpen)} style={{ width: "100%", padding: "14px 16px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: BRAND.blue, textTransform: "uppercase", letterSpacing: "1.5px" }}>Core Practices</div>
              <span style={{ color: BRAND.blue, fontSize: "12px", fontWeight: 700, transition: "transform 0.2s", transform: practicesOpen ? "rotate(180deg)" : "rotate(0deg)", display: "inline-block" }}>▾</span>
            </button>
            {practicesOpen && (
              <div style={{ padding: "0 16px 14px" }}>
                {values.map((v, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "13px" }}>{v.icon}</span>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{v.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Key Definitions */}
          <div style={{ marginTop: "16px", background: BRAND.white, borderRadius: "10px", border: `1px solid ${BRAND.lightBorder}`, overflow: "hidden" }}>
            <button onClick={() => setDefsOpen(!defsOpen)} style={{ width: "100%", padding: "14px 16px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: BRAND.navy, textTransform: "uppercase", letterSpacing: "1.5px" }}>Key Definitions</div>
              <span style={{ color: BRAND.gray, fontSize: "12px", fontWeight: 700, transition: "transform 0.2s", transform: defsOpen ? "rotate(180deg)" : "rotate(0deg)", display: "inline-block" }}>▾</span>
            </button>
            {defsOpen && (
              <div style={{ padding: "0 16px 14px" }}>
                {keyDefs.map((d, i) => (
                  <div key={i} className="def-row" style={{ padding: "6px 8px", borderRadius: "6px", marginBottom: "4px", transition: "background 0.15s" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: BRAND.navy }}>{d.term}</div>
                    <div style={{ fontSize: "11px", color: BRAND.gray, lineHeight: "1.5", marginTop: "2px" }}>{d.def}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="main-content">

          {/* Stage header card */}
          <div style={{ background: stage.color, color: "white", borderRadius: "12px", padding: "20px 22px", marginBottom: "16px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: "-16px", top: "-16px", fontSize: "110px", opacity: 0.08, lineHeight: 1 }}>{stage.icon}</div>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", opacity: 0.75 }}>{stage.label} of 5</div>
            <div style={{ fontSize: "24px", fontWeight: 800, marginTop: "4px", marginBottom: "4px", letterSpacing: "-0.3px" }}>{stage.title}</div>
            <div style={{ fontSize: "15px", opacity: 0.85, fontStyle: "italic", fontWeight: 400 }}>"{stage.tagline}"</div>
            <div style={{ marginTop: "18px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(255,255,255,0.18)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 500 }}>📅 {stage.timeline}</span>
              <span style={{ background: "rgba(255,255,255,0.18)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 500 }}>🎯 {stage.subtitle}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="tab-bar" style={{ marginBottom: "16px", background: BRAND.white, padding: "4px", borderRadius: "10px", border: `1px solid ${BRAND.lightBorder}` }}>
            {tabs.map((tab) => (
              <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)} style={{ flex: "0 0 auto", padding: "8px 12px", borderRadius: "7px", background: activeTab === tab ? stage.color : "transparent", color: activeTab === tab ? "white" : BRAND.gray, fontSize: "12px", fontWeight: activeTab === tab ? 600 : 500 }}>
                {tab === "ask" ? "Ask AI" : tab === "pipeline" ? "Pipeline" : tab === "qualifications" ? "Quals" : tab === "tools" ? "Resources & Tools" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div>
              <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "12px" }}>About This Stage</div>
                <p style={{ fontSize: "15px", lineHeight: "1.75", color: "#374151" }}>{stage.description}</p>
              </div>
              {stage.stageFocuses && (
                <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "16px" }}>Two Main Focuses</div>
                  {stage.stageFocuses.map((focus, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "14px", paddingBottom: "14px", borderBottom: i < stage.stageFocuses.length - 1 ? `1px solid ${BRAND.lightBorder}` : "none" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: stage.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, flexShrink: 0 }}>{focus.number}</div>
                      <div>
                        <div style={{ fontSize: "15px", fontWeight: 700, color: stage.color, marginBottom: "4px" }}>{focus.title}</div>
                        <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>{focus.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "16px" }}>Key Characteristics</div>
                {stage.characteristics.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: stage.color, marginTop: "6px", flexShrink: 0 }} />
                    <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>{c}</div>
                  </div>
                ))}
              </div>
              {/* Stage 2 activities */}
              {stage.activities && (
                <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "16px" }}>Cluster Activities</div>
                  {stage.activities.map((a, i) => (
                    <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "14px", paddingBottom: "14px", borderBottom: i < stage.activities.length - 1 ? `1px solid ${BRAND.lightBorder}` : "none" }}>
                      <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: stage.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>{i+1}</div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 600, color: BRAND.navy }}>{a.name}</div>
                        <div style={{ fontSize: "13px", color: BRAND.gray, marginTop: "3px", lineHeight: "1.5" }}>{a.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ background: stage.lightColor, borderRadius: "10px", padding: "20px 24px", border: `1.5px solid ${stage.color}30` }}>
                <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: stage.color, marginBottom: "8px" }}>Stage Milestone</div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: stage.color, fontStyle: "italic" }}>"{stage.milestone}"</div>
              </div>
            </div>
          )}

          {/* MARKERS */}
          {activeTab === "markers" && (
            <div>
              {stage.discipleshipMarkers ? (
                <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "6px" }}>Discipleship Markers</div>
                  <p style={{ fontSize: "13px", color: BRAND.gray, marginBottom: "20px", fontStyle: "italic" }}>Fostered through relationships developed in Connect Groups and Discipleship Groups.</p>
                  {Object.entries(stage.discipleshipMarkers).map(([category, items]) => (
                    <div key={category} style={{ marginBottom: "20px" }}>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: stage.color, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{category}</div>
                      {items.map((m, i) => (
                        <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 12px", marginBottom: "6px", background: BRAND.offWhite, borderRadius: "8px", border: `1px solid ${BRAND.lightBorder}` }}>
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: stage.color, marginTop: "7px", flexShrink: 0 }} />
                          <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>{m}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "6px" }}>Health Markers</div>
                  <p style={{ fontSize: "13px", color: BRAND.gray, marginBottom: "20px", fontStyle: "italic" }}>These markers help assess whether this stage is truly healthy and ready to progress.</p>
                  {stage.markers.map((m, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "16px", marginBottom: "10px", background: i % 2 === 0 ? stage.lightColor : BRAND.white, borderRadius: "8px", border: `1px solid ${BRAND.lightBorder}` }}>
                      <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: stage.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                      <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.65", paddingTop: "4px" }}>{m}</div>
                    </div>
                  ))}
                </div>
              )}
              {stage.metrics && (
                <div style={{ background: stage.lightColor, borderRadius: "10px", padding: "20px 24px", border: `1.5px solid ${stage.color}30` }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: stage.color, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Metrics That Matter</div>
                  <p style={{ fontSize: "13px", color: BRAND.gray, marginBottom: "12px", fontStyle: "italic" }}>Rather than measuring attendance alone, focus on:</p>
                  {stage.metrics.map((m, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ color: stage.color, fontWeight: 700 }}>✓</span>
                      <span style={{ fontSize: "14px", color: "#374151" }}>{m}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* LEADERSHIP */}
          {activeTab === "leadership" && (
            <div>
              <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "18px" }}>Leader Focus & Responsibilities</div>
                {stage.leaderFocus.map((l, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "14px", paddingBottom: "14px", borderBottom: i < stage.leaderFocus.length - 1 ? `1px solid ${BRAND.lightBorder}` : "none" }}>
                    <div style={{ color: stage.color, fontSize: "17px", flexShrink: 0, marginTop: "-1px", fontWeight: 700 }}>→</div>
                    <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.65" }}>{l}</div>
                  </div>
                ))}
                {stage.leaderMultiplication && (
                  <div style={{ marginTop: "8px", padding: "14px 16px", background: stage.lightColor, borderRadius: "8px", fontSize: "14px", color: "#374151", lineHeight: "1.65", borderLeft: `4px solid ${stage.color}` }}>
                    <strong style={{ color: stage.color }}>Leader Multiplication:</strong> {stage.leaderMultiplication}
                  </div>
                )}
              </div>
              <div style={{ background: BRAND.navy, borderRadius: "10px", padding: "24px", color: "white" }}>
                <div style={{ fontSize: "15px", fontWeight: 700, color: BRAND.blue, marginBottom: "14px" }}>F.A.I.T.H Leadership Character</div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {["Faithful", "Available", "Involved", "Teachable", "Humble"].map((f, i) => (
                    <div key={i} style={{ background: "rgba(106,184,220,0.18)", border: `1px solid ${BRAND.blue}`, padding: "8px 16px", borderRadius: "6px", fontSize: "13px", color: "#E5F4FB", fontWeight: 500 }}>
                      <span style={{ color: BRAND.blue, fontWeight: 700 }}>{f[0]}</span>{f.slice(1)}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "16px", fontSize: "13px", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
                  "Character before competence. Every leader asks: Who am I developing to replace me?"
                </div>
              </div>
            </div>
          )}

          {/* QUALIFICATIONS (Stage 3 only) */}
          {activeTab === "qualifications" && stage.qualifications && (
            <div>
              <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "6px" }}>Core Team Qualifications</div>
                <p style={{ fontSize: "13px", color: BRAND.gray, marginBottom: "20px", fontStyle: "italic" }}>
                  An important building block for any healthy and functional team is communication and clarity. Below are the qualifications and expectations of Core Team members.
                </p>
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <div style={{ background: BRAND.navy, color: "white", width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>M</div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: BRAND.navy }}>Maturity</div>
                  </div>
                  {stage.qualifications.maturity.map((q, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 12px", marginBottom: "6px", background: i % 2 === 0 ? BRAND.navyLight : BRAND.white, borderRadius: "8px", border: `1px solid ${BRAND.lightBorder}` }}>
                      <span style={{ color: BRAND.navy, fontWeight: 700, flexShrink: 0 }}>○</span>
                      <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>{q}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <div style={{ background: "#005EB9", color: "white", width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>M</div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: BRAND.navy }}>Mission</div>
                  </div>
                  {stage.qualifications.mission.map((q, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 12px", marginBottom: "6px", background: i % 2 === 0 ? "#E6EFF9" : BRAND.white, borderRadius: "8px", border: `1px solid ${BRAND.lightBorder}` }}>
                      <span style={{ color: "#005EB9", fontWeight: 700, flexShrink: 0 }}>○</span>
                      <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>{q}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: BRAND.navy, borderRadius: "10px", padding: "20px 24px", color: "white" }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: BRAND.blue, marginBottom: "8px" }}>Core Team Expectations</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7" }}>
                  Agreement with the church plant type and strategy · Attitude of humility and the heart of a servant · Maintaining unity of the Spirit within the team · Attend "Unleash" twice a year · High expectation of presence at key team gatherings
                </div>
              </div>
            </div>
          )}

          {/* PIPELINE */}
          {activeTab === "pipeline" && (
            <div>
              <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: BRAND.navy, marginBottom: "6px" }}>Discipleship → Leadership Pipeline</div>
                <p style={{ fontSize: "13px", color: BRAND.gray, marginBottom: "20px", fontStyle: "italic" }}>Every person in the journey — from new believer to church planter. Each stage includes spiritual growth seen in fruit, internal transformation, leadership responsibility, and missional engagement.</p>
                {pipeline.map((p, i) => {
                  const isRelated = (activeStage === 0 && i <= 1) || (activeStage === 1 && i >= 2 && i <= 3) || (activeStage === 2 && i >= 4 && i <= 5) || (activeStage === 3 && i === 6) || (activeStage === 4 && i === 7);
                  return (
                    <div key={i} className="pipeline-item" style={{ display: "flex", gap: "14px", alignItems: "center", padding: "13px 15px", marginBottom: "6px", background: isRelated ? stage.lightColor : BRAND.offWhite, borderRadius: "8px", border: isRelated ? `1.5px solid ${stage.color}50` : `1px solid ${BRAND.lightBorder}` }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: isRelated ? stage.color : "#D1D5DB", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>{p.step}</div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 600, color: isRelated ? stage.color : BRAND.navy }}>{p.title}</div>
                        <div style={{ fontSize: "12px", color: BRAND.gray, marginTop: "1px" }}>{p.desc}</div>
                      </div>
                      {isRelated && (
                        <div style={{ marginLeft: "auto", background: stage.color, color: "white", fontSize: "10px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px", whiteSpace: "nowrap" }}>Stage {activeStage + 1}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TOOLS */}
          {activeTab === "tools" && (
            <div>
              <div style={{ background: BRAND.white, borderRadius: "10px", padding: "20px 24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: stage.color, marginBottom: "4px" }}>Stage Tools & Resources</div>
                <div style={{ fontSize: "13px", color: BRAND.gray }}>Practical tools and reference reading to support this stage of the church planting journey.</div>
              </div>
              {stage.tools && stage.tools.map((section, si) => {
                const isRef = section.isReference;
                return (
                  <div key={si} style={{ background: isRef ? "#FAFBFC" : BRAND.white, borderRadius: "10px", padding: "20px 24px", border: isRef ? `1px dashed ${BRAND.lightBorder}` : `1px solid ${BRAND.lightBorder}`, marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", paddingBottom: "10px", borderBottom: `2px solid ${isRef ? BRAND.lightBorder : stage.lightColor}` }}>
                      {isRef && <span style={{ fontSize: "14px" }}>📚</span>}
                      <div style={{ fontSize: "13px", fontWeight: 700, color: isRef ? BRAND.gray : BRAND.navy, textTransform: "uppercase", letterSpacing: "0.06em" }}>{section.category}</div>
                      {isRef && <div style={{ marginLeft: "auto", fontSize: "10px", fontWeight: 600, color: BRAND.gray, background: BRAND.lightBorder, padding: "2px 8px", borderRadius: "10px", letterSpacing: "0.5px" }}>COHORT READING</div>}
                    </div>
                    {section.items.map((tool, ti) => (
                      <div key={ti} style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "12px 0", borderBottom: ti < section.items.length - 1 ? `1px solid ${BRAND.lightBorder}` : "none" }}>
                        <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: isRef ? BRAND.lightBorder : stage.lightColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "16px" }}>{isRef ? "📖" : "📋"}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "14px", fontWeight: 600, color: BRAND.navy, marginBottom: "3px" }}>{tool.name}</div>
                          <div style={{ fontSize: "13px", color: BRAND.gray, lineHeight: "1.5" }}>{tool.description}</div>
                        </div>
                        {tool.url ? (
                          <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ padding: "5px 14px", borderRadius: "20px", background: isRef ? BRAND.gray : stage.color, color: "white", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0, textDecoration: "none", display: "inline-block" }}>Read →</a>
                        ) : (
                          <div style={{ padding: "5px 12px", borderRadius: "20px", background: stage.lightColor, color: stage.color, fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0, cursor: "default" }}>Coming Soon</div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          )}

          {/* ASK AI */}
          {activeTab === "ask" && (
            <div>
              <div style={{ background: BRAND.white, borderRadius: "10px", padding: "24px", border: `1px solid ${BRAND.lightBorder}`, marginBottom: "14px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: stage.color, marginBottom: "4px" }}>Ask About This Stage</div>
                <p style={{ fontSize: "13px", color: BRAND.gray, marginBottom: "20px" }}>Get guidance grounded in the ENAC framework and disciple-making principles.</p>
                {chatHistory.length > 0 && (
                  <div style={{ maxHeight: "340px", overflowY: "auto", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {chatHistory.map((msg, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                        <div style={{ maxWidth: "80%", padding: "12px 16px", borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", background: msg.role === "user" ? stage.color : BRAND.offWhite, color: msg.role === "user" ? "white" : BRAND.navy, fontSize: "14px", lineHeight: "1.65" }}>{msg.content}</div>
                      </div>
                    ))}
                    {aiLoading && (
                      <div style={{ display: "flex", justifyContent: "flex-start" }}>
                        <div style={{ padding: "12px 16px", background: BRAND.offWhite, borderRadius: "12px 12px 12px 2px", fontSize: "14px", color: BRAND.gray, fontStyle: "italic" }}>Thinking...</div>
                      </div>
                    )}
                  </div>
                )}
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
                  <textarea value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); askQuestion(); } }} placeholder={`Ask about ${stage.title}...`} rows={3} style={{ flex: 1, padding: "12px 16px", border: `1.5px solid ${BRAND.lightBorder}`, borderRadius: "8px", fontSize: "14px", color: BRAND.navy, background: BRAND.offWhite, fontFamily: "inherit" }} />
                  <button className="send-btn" onClick={askQuestion} disabled={aiLoading || !question.trim()} style={{ background: stage.color, color: "white", padding: "12px 22px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, fontFamily: "inherit", opacity: aiLoading || !question.trim() ? 0.5 : 1, cursor: aiLoading || !question.trim() ? "not-allowed" : "pointer" }}>Ask →</button>
                </div>
                <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "8px" }}>Press Enter to send · Shift+Enter for new line</div>
              </div>
              <div style={{ background: stage.lightColor, borderRadius: "10px", padding: "16px 20px", border: `1.5px solid ${stage.color}25` }}>
                <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: stage.color, marginBottom: "10px" }}>Suggested Questions</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    "How do I know when my group is ready for the next stage?",
                    "What does a healthy apprentice relationship look like?",
                    "How do I identify emerging leaders in my group?",
                    "What are signs a cluster is ready to form a core team?",
                    "What qualifications does a Core Team member need?",
                  ].slice(0, 4).map((q, i) => (
                    <button key={i} className="suggest-btn" onClick={() => setQuestion(q)} style={{ background: BRAND.white, border: `1.5px solid ${stage.color}50`, color: stage.color, padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>{q}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer nav */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <button onClick={() => { if (activeStage > 0) { setActiveStage(activeStage - 1); setActiveTab("overview"); } }} disabled={activeStage === 0} style={{ background: BRAND.white, border: `1.5px solid ${BRAND.lightBorder}`, padding: "10px 22px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, color: activeStage === 0 ? "#D1D5DB" : BRAND.navy, cursor: activeStage === 0 ? "not-allowed" : "pointer", fontFamily: "inherit" }}>← Previous Stage</button>
        <div style={{ fontSize: "12px", color: BRAND.gray, fontWeight: 500 }}>Stage {activeStage + 1} of {stages.length}</div>
        <button onClick={() => { if (activeStage < stages.length - 1) { setActiveStage(activeStage + 1); setActiveTab("overview"); } }} disabled={activeStage === stages.length - 1} style={{ background: stage.color, border: "none", padding: "10px 22px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, color: "white", fontFamily: "inherit", cursor: activeStage === stages.length - 1 ? "not-allowed" : "pointer", opacity: activeStage === stages.length - 1 ? 0.45 : 1 }}>Next Stage →</button>
      </div>
      {/* Footer credit */}
      <div style={{ textAlign: "center", padding: "12px 24px 28px", fontSize: "11px", color: "#9CA3AF" }}>
        Designed by <span style={{ fontWeight: 600 }}>HUBB Group</span>
      </div>
    </div>
  );
}
