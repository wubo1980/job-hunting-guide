import { siteConfig } from "@/lib/site-config";
import type { Article, Category, HomeHeroContent } from "@/lib/content/types";

/** Defines the four editorial categories available across the site. */
export const categories: Category[] = [
  {
    slug: "ai-job-search",
    name: "AI Job Search",
    shortDescription:
      "Beat ATS filters, identify ghost listings, and adapt your search to AI-heavy hiring funnels.",
    heroTitle: "Compete Smarter In An AI-Filtered Job Market",
    heroDescription:
      "Use practical tactics to survive automated screening, fake listings, and low-signal hiring pipelines without wasting your best hours.",
    accent: "from-emerald-400 to-cyan-400",
    icon: "cpu",
  },
  {
    slug: "career-pivot",
    name: "Career Pivot",
    shortDescription:
      "Plan a realistic transition after layoffs, skill shifts, or AI disruption.",
    heroTitle: "Build A Career Pivot That Pays Bills, Not Just Hope",
    heroDescription:
      "Translate your experience into safer roles, shorter transition paths, and clearer positioning for a market that no longer rewards generic resumes.",
    accent: "from-cyan-400 to-sky-400",
    icon: "refreshCcw",
  },
  {
    slug: "job-search-mindset",
    name: "Job Search Mindset",
    shortDescription:
      "Stay functional under rejection, uncertainty, and financial pressure.",
    heroTitle: "Protect Your Judgment While The Search Gets Personal",
    heroDescription:
      "Use evidence-based routines and emotional safeguards to stop job search stress from destroying momentum, confidence, and decision quality.",
    accent: "from-emerald-400 to-teal-400",
    icon: "brain",
  },
  {
    slug: "interview-prep",
    name: "Interview Prep",
    shortDescription:
      "Prepare for AI interviewers, behavioral rounds, and remote hiring loops.",
    heroTitle: "Train For Interviews That Feel Less Human Than Ever",
    heroDescription:
      "Handle AI screens, remote panels, and behavior-heavy interviews with structured preparation that works under pressure.",
    accent: "from-blue-400 to-emerald-400",
    icon: "briefcaseBusiness",
  },
];

/** Defines the homepage hero copy without turning it into a routed article. */
export const homeHeroContent: HomeHeroContent = {
  eyebrow: "2026 survival guide for job seekers in tech",
  title: "The job market got colder. Your strategy has to get sharper.",
  description:
    "More than 113,000 tech layoffs in 2026. More AI screening. More ghost listings. This guide helps laid-off workers, anxious professionals, and new graduates focus on what still works.",
  primaryCta: {
    label: "Read The Latest Guides",
    href: "#latest-articles",
  },
  secondaryCta: {
    label: "Join The Discord",
    href: siteConfig.discordUrl,
  },
};

/** Defines the full editorial article dataset used by the static site. */
export const articles: Article[] = [
  {
    slug: "how-to-spot-ghost-jobs",
    category: "ai-job-search",
    title: "How To Spot Ghost Jobs Before They Waste Your Week",
    description:
      "One in four listings may not represent an active hire. Learn how to read the signals from job descriptions, hiring flow, and company behavior before you invest time.",
    publishedAt: "2026-05-14",
    readingTime: "7 min read",
    featured: true,
    tags: ["Ghost Jobs", "Hiring Signals", "Job Search"],
    sections: [
      {
        title: "Why ghost jobs are such a drain in 2026",
        content: [
          "A ghost job is a listing that looks open but is not attached to a real, current hiring need. Sometimes the role was already filled internally. Sometimes the team lost budget but never removed the post. In other cases, the company wants to look like it is growing, collect resumes for later, or benchmark salary expectations without committing to a hire.",
          "That matters because the cost is not just time spent clicking apply. Every ghost listing also steals emotional energy, interview prep time, and the limited attention you should reserve for companies that are actually moving. In a weak market, protecting your attention is part of your strategy.",
          "Labor market researchers and recruiting operators have repeatedly pointed to stale postings and low-intent hiring behavior as a structural problem. Public reporting in 2025 and 2026 also shows candidates staying in funnel longer before hearing a real decision. That delay alone is a warning sign when seen at scale.",
        ],
        bullets: [
          "A role stays online for more than 30-45 days with no visible updates.",
          "The company posts the same title across multiple months but never reports hires.",
          "Recruiters encourage you to apply but cannot explain team urgency or interview timing.",
        ],
      },
      {
        title: "Read the job description like a budget document",
        content: [
          "Weak listings often reveal themselves in the text. Real hiring teams usually know what problem they need solved in the next quarter. Ghost listings often read like a wishlist assembled from older postings: too many responsibilities, contradictory seniority, or broad language like 'we are always looking for top talent.'",
          "Look for specificity around team context, near-term deliverables, reporting line, and what success looks like in the first 90 days. A serious hiring manager can usually define those details because headcount is tied to a problem. A fake or stale listing often hides behind culture copy and generic requirements.",
          "Another useful signal is compensation transparency. In markets where salary disclosure is common, vague or missing pay information does not prove the role is fake, but it can signal low process maturity. Combined with stale posting dates and repeated reposts, it becomes a stronger warning.",
        ],
        checklist: [
          "Check whether the description names the team, manager, or business unit.",
          "Check whether the posting explains why the role exists now, not in theory.",
          "Check whether core responsibilities align with one realistic level of seniority.",
          "Check whether compensation, location, and hiring timeline are concrete enough to act on.",
        ],
      },
      {
        title: "Audit the company behavior before you apply",
        content: [
          "Use the company careers page, LinkedIn, and employee activity to see whether hiring signals line up. If a company claims to be expanding aggressively but recent posts show layoffs, team freeze comments, or no actual onboarding signals, be cautious. Search for the title in quotes and see how long it has been circulating.",
          "If you do get an initial response, ask polite but specific questions. Good ones include: What business priority does this role support? Is this a backfill or net-new hire? What stage is the search currently in? Teams with real urgency usually answer cleanly. Teams running a resume collection exercise often get vague fast.",
          "You do not need perfect certainty. The goal is to build a filtering habit. If a role shows three or more warning signs, downgrade it. Apply only if the cost is low or the upside is exceptional. Your best outcomes often come from fewer, better-targeted applications rather than more volume.",
        ],
      },
    ],
    cta: {
      heading: "Trade notes with other job seekers",
      body: "Join the Discord to compare company signals, interview timelines, and which listings are actually moving.",
      label: "Join The Discord",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "Clarify Capital hiring managers survey on ghost job postings",
        url: "https://clarifycapital.com/job-seekers-beware-of-ghost-jobs-survey/",
      },
      {
        label: "Greenhouse employer branding and hiring workflow resources",
        url: "https://www.greenhouse.com/resources",
      },
      {
        label: "LinkedIn economic graph and labor market insights",
        url: "https://economicgraph.linkedin.com/",
      },
    ],
  },
  {
    slug: "ai-resume-optimization-5-step-framework",
    category: "ai-job-search",
    title: "AI Resume Optimization: A 5-Step Framework That Survives ATS Filters",
    description:
      "ATS systems decide which resumes a recruiter sees first. Use a five-step framework to improve keyword match, readability, quantified impact, and AI-assisted editing.",
    publishedAt: "2026-05-18",
    readingTime: "8 min read",
    featured: true,
    tags: ["ATS", "Resume", "AI Tools"],
    sections: [
      {
        title: "Step 1: Build a target-role resume, not a universal resume",
        content: [
          "Most rejected resumes fail before quality becomes the issue. They fail because the document does not match the language of the role closely enough. ATS tools score titles, skills, tools, certifications, and phrase patterns. A generic 'software leader' resume may look strong to a human but still lose to a more aligned document.",
          "Start by choosing one role family at a time. For example: backend engineer, data analyst, product operations manager. Then collect 15-20 recent job descriptions and mark repeated nouns and verb phrases. These repeated terms are your vocabulary map. You are not gaming the system with nonsense keywords. You are describing your experience in the language buyers use.",
          "The output of this step is a role-specific master resume. It should be broad enough to reuse, but narrow enough that each application only needs light tailoring rather than a rewrite from zero.",
        ],
      },
      {
        title: "Step 2: Fix formatting before you chase wording",
        content: [
          "ATS systems vary, but many still parse plain structures best. Keep the layout simple: one column, standard section headers, and no information hidden in text boxes or decorative tables. Human readers also benefit. A clean document signals credibility faster than a heavily designed one.",
          "Use standard headings such as Summary, Experience, Skills, Education, and Certifications. Put dates and titles in consistent order. Avoid icons, unusual bullet symbols, headers packed with side-by-side columns, and dense blocks of jargon. If a recruiter has ten seconds, visual clarity is part of performance.",
          "This is also where many people miss an easy win: include the exact job title you are targeting near the top if it matches your background honestly. Recruiters often scan for title alignment before they read accomplishments.",
        ],
        checklist: [
          "Use one-column layout and standard headings.",
          "Keep contact details and LinkedIn in normal text, not graphics.",
          "Limit the resume to the strongest, role-relevant experience.",
          "Export a clean PDF only if the employer accepts it; otherwise use DOCX when requested.",
        ],
      },
      {
        title: "Steps 3 to 5: Quantify, tailor, then let AI edit the last 10 percent",
        content: [
          "Step three is impact language. Every bullet should answer one of these questions: what changed, how much, and why it mattered. 'Owned onboarding workflow' is weak. 'Cut onboarding time from 14 days to 9 by rebuilding account provisioning and handoff rules' is stronger because it gives evidence, mechanism, and business value.",
          "Step four is targeted tailoring. Before each application, adjust your summary, top skills, and the first few bullets under recent roles to reflect the employer's core needs. Do not mirror every keyword blindly. Prioritize the terms that appear in responsibilities, not fluff from brand copy.",
          "Step five is AI-assisted editing. Use AI to check clarity, consistency, and missing evidence, not to fabricate experience. Good prompts ask the model to compare your resume against a job description, flag weak bullets, and suggest clearer phrasing while preserving truth. Always verify outputs manually. The best use of AI is compression and sharpening, not invention.",
        ],
        bullets: [
          "Quantify outcomes with time, revenue, cost, scale, reliability, or adoption metrics.",
          "Tailor only the parts that change ranking and first-glance credibility.",
          "Use AI to improve wording and match, but never outsource factual judgment.",
        ],
      },
    ],
    cta: {
      heading: "Benchmark your resume against real examples",
      body: "Inside the Discord, members compare resume wording, ATS feedback, and role-specific positioning without the usual fluff.",
      label: "Compare Resume Tactics",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "Jobscan ATS resume guidance and match rate research",
        url: "https://www.jobscan.co/blog/",
      },
      {
        label: "LinkedIn hiring and recruiting insights",
        url: "https://www.linkedin.com/business/talent/blog",
      },
      {
        label: "Indeed resume and applicant tracking system guidance",
        url: "https://www.indeed.com/career-advice/resumes-cover-letters",
      },
    ],
  },
  {
    slug: "30-day-post-layoff-action-plan",
    category: "career-pivot",
    title: "A 30-Day Post-Layoff Action Plan For Regaining Stability",
    description:
      "The first month after a layoff is chaotic and high-leverage. Use a four-week action plan to stabilize cash, routines, messaging, and search momentum.",
    publishedAt: "2026-05-22",
    readingTime: "8 min read",
    tags: ["Layoffs", "Recovery Plan", "Career Pivot"],
    sections: [
      {
        title: "Days 1 to 7: Stabilize your runway before you optimize your story",
        content: [
          "The first week is not the time to perform confidence. It is the time to reduce uncertainty. Start with money, healthcare, and access. Confirm severance terms, unused PTO payout, benefits end date, laptop return rules, and any non-compete or non-solicit language that affects your next move. If you are in the US, document unemployment steps immediately because administrative delays can cost you.",
          "At the same time, write a one-paragraph layoff explanation you can reuse. Keep it factual and clean: what happened, what you owned, and what you are targeting next. This reduces panic every time someone asks. You do not need a polished public post yet. You need a usable script.",
          "Emotionally, assume your judgment is temporarily noisy. Sleep, food, movement, and contact with trusted people are not side tasks. They are operational requirements. A dysregulated week creates bad decisions that feel urgent but are just fear speaking.",
        ],
        checklist: [
          "Audit cash runway, fixed expenses, and insurance deadlines.",
          "Save achievements, metrics, work samples, and performance notes while memory is fresh.",
          "Write a short, neutral layoff narrative for networking and interviews.",
          "Create a minimum daily routine before opening ten job boards.",
        ],
      },
      {
        title: "Days 8 to 21: Reactivate your network with precision",
        content: [
          "Week two and three are about signal. Many people send vague 'let me know if you hear of anything' messages and call that networking. Stronger outreach is specific. Tell contacts what role family you are targeting, what problems you solve, and what kinds of companies are a fit. Make it easy for someone to place you.",
          "Separate your list into three groups: warm advocates, informed peers, and dormant contacts. Warm advocates get a direct ask for referrals or introductions. Informed peers get market intelligence questions. Dormant contacts get a simple reconnect note with context, not a heavy request.",
          "This is also the right time to update your resume, LinkedIn headline, and portfolio evidence around one target path. If you are considering a pivot, do not hide that uncertainty from yourself. Run small tests: informational calls, resume variants, and role-specific applications. Let the market teach you where your background still has pricing power.",
        ],
        bullets: [
          "Aim for five to ten high-quality outreach messages per week, not mass blasts.",
          "Track every conversation, response, and follow-up date in one sheet.",
          "Use calls to validate role demand and hiring speed, not just ask for openings.",
        ],
      },
      {
        title: "Days 22 to 30: Turn activity into a repeatable operating rhythm",
        content: [
          "The last third of the month is where you stop improvising. Review what generated responses: referrals, direct applications, recruiter outreach, community channels, or portfolio sharing. Then double down on the channels with proof. A disciplined but smaller funnel beats a huge funnel with no learning loop.",
          "Use weekly blocks for application work, networking, interview prep, and skill maintenance. This matters because layoffs create identity shock. A visible weekly structure helps you separate self-worth from daily outcomes. One bad week of responses should not force a full strategy reset.",
          "Finally, define the conditions that would justify a pivot. Examples: after 40 well-targeted applications with weak conversion, after repeated feedback about domain mismatch, or after compensation data shows your old path has structurally worsened. A pivot is not failure. It is a resource allocation decision.",
        ],
      },
    ],
    cta: {
      heading: "Need structure after the layoff?",
      body: "The Discord community shares weekly search systems, outreach templates, and post-layoff routines that are actually sustainable.",
      label: "Get The Weekly System",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "US Department of Labor unemployment insurance guidance",
        url: "https://www.dol.gov/general/topic/unemployment-insurance",
      },
      {
        label: "Harvard Business Review on layoffs, recovery, and career transitions",
        url: "https://hbr.org/topic/career-transitions",
      },
      {
        label: "LinkedIn workforce confidence and job seeker insights",
        url: "https://economicgraph.linkedin.com/",
      },
    ],
  },
  {
    slug: "jobs-ai-wont-replace-in-2026",
    category: "career-pivot",
    title: "10 Job Categories AI Still Struggles To Replace In 2026",
    description:
      "AI removes task bundles, not every full role. Focus on job categories where physical presence, trust, judgment, or relationship labor remain hard to automate.",
    publishedAt: "2026-05-25",
    readingTime: "7 min read",
    tags: ["Career Safety", "AI Disruption", "Labor Market"],
    sections: [
      {
        title: "Stop asking which jobs are safe forever",
        content: [
          "The better question is not whether a job can be replaced in theory. The better question is whether employers can replace it cheaply, reliably, and at scale in the next few years. AI can eliminate reporting work, drafting work, scheduling work, and some analysis work without fully replacing the surrounding role.",
          "That is why the most durable categories tend to combine at least two of these traits: physical execution, safety risk, context-heavy judgment, trust, persuasion, emotional regulation, or multi-party coordination. When a job mixes those layers, full automation becomes much slower than task automation.",
          "Reports from Challenger, Gray & Christmas, the Bureau of Labor Statistics, and employer surveys show the market splitting. Some digital work is under pricing pressure, while many frontline, skilled-trade, care, and field-service roles remain supply constrained.",
        ],
      },
      {
        title: "The ten categories worth studying",
        content: [
          "1) Skilled trades such as electricians, HVAC technicians, and plumbers. 2) Nursing and specialized care roles. 3) Therapists, counselors, and other trust-based care positions. 4) Field sales and client relationship roles with complex buying cycles. 5) Project and operations jobs requiring cross-functional judgment. 6) Cybersecurity roles involving active defense and incident handling. 7) Compliance and risk roles where accountability matters. 8) Advanced manufacturing and maintenance roles. 9) Education and training roles with live adaptation. 10) Leadership roles where judgment, conflict handling, and organizational trust cannot be reduced to output generation alone.",
          "These are not 'immune' roles. Most will absorb AI. What changes is the work design. Documentation, reporting, and first-draft tasks will compress. But the core value remains human because the cost of wrong action is high or because the setting changes too fast for clean automation.",
          "For job seekers, this list is useful because it helps you look for adjacency. A laid-off program manager may not become a nurse, but they may pivot into healthcare operations, compliance, or enablement. A support leader may move into customer education, implementation, or trust and safety. Durability often comes from reframing your existing strengths into a more defensible environment.",
        ],
        bullets: [
          "Look for roles with accountability, physical constraints, or relationship complexity.",
          "Prefer domains where AI is a copilot, not the full worker.",
          "Evaluate training cost versus earning durability before pivoting.",
        ],
      },
      {
        title: "How to use this list without falling for new hype",
        content: [
          "Do not pivot because a role is trending on social media. Check local demand, training path, wages after entry, and how long it takes to become credible. The safest-looking role on paper can still be a bad move if the ramp is too long for your runway.",
          "Run a three-part check. First, market demand: how many openings exist in your target geography or remote market? Second, adjacency: what pieces of your current background transfer directly? Third, timeline: how fast can you become interview-ready? The best pivot is often the one with the shortest path to paid credibility, not the one with the strongest narrative online.",
          "AI will keep reshaping the market. But people who understand work design rather than hype cycles will adapt faster. Your edge comes from picking roles where human judgment remains expensive to replace and then packaging your past experience to match that reality.",
        ],
      },
    ],
    cta: {
      heading: "Map your next safer move",
      body: "Use the Discord to compare pivot paths, adjacent titles, and realistic transition timelines with people doing the same work.",
      label: "Explore Safer Paths",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "Challenger, Gray & Christmas layoff reports",
        url: "https://www.challengergray.com/",
      },
      {
        label: "US Bureau of Labor Statistics Occupational Outlook Handbook",
        url: "https://www.bls.gov/ooh/",
      },
      {
        label: "World Economic Forum future of jobs reporting",
        url: "https://www.weforum.org/reports/",
      },
    ],
  },
  {
    slug: "how-to-pass-an-ai-interview",
    category: "interview-prep",
    title: "When The First Interviewer Is AI: How To Prepare Without Sounding Robotic",
    description:
      "AI screening interviews are becoming normal. Learn what these tools actually measure, how to structure answers, and where candidates usually fail.",
    publishedAt: "2026-05-27",
    readingTime: "7 min read",
    featured: true,
    tags: ["AI Interview", "Behavioral Interview", "Preparation"],
    sections: [
      {
        title: "What AI interview screens usually care about",
        content: [
          "Despite the branding, most AI interview platforms are not reading your soul. They are looking for consistency, relevance, clarity, and evidence density. That means your answer needs a visible structure, enough role-specific language to show match, and concrete examples instead of vague confidence.",
          "Many candidates lose points because they answer like they are on a networking call: too broad, too long, and too narrative-heavy before getting to the result. AI tools are often better than rushed humans at spotting whether you actually answered the prompt. If the question asks about conflict, and your answer becomes a general career story, your score can suffer.",
          "Treat the tool like a strict but literal first screen. It rewards concise structure. It often punishes rambling, weak audio, poor lighting, and long pauses that signal low preparation rather than thoughtful judgment.",
        ],
      },
      {
        title: "Use a repeatable answer framework",
        content: [
          "A practical format is STAR with compression: Situation, Task, Action, Result, then one short line on what changed because of your action. Keep each answer to the problem, your role, and a measurable outcome. If the role is technical, mention tools only when they clarify the result.",
          "Prepare five reusable stories in advance: a difficult problem, a conflict, a project with measurable impact, a failure with learning, and a high-pressure decision. Those five stories can cover a surprising share of prompts. Then tailor the language so each story surfaces the skills the role demands.",
          "Also practice speaking to a camera. The goal is not charisma theater. The goal is stable delivery. Record yourself answering three prompts and check whether you front-load the answer, whether your microphone is clean, and whether your examples actually contain proof.",
        ],
        checklist: [
          "Prepare five role-relevant stories with results and metrics.",
          "Answer the prompt in the first sentence before adding context.",
          "Keep most responses under two minutes unless the platform instructs otherwise.",
          "Test camera, framing, lighting, and audio before the session starts.",
        ],
      },
      {
        title: "Common traps that quietly lower your score",
        content: [
          "The biggest trap is generic language. 'I am passionate, adaptable, and collaborative' communicates almost nothing. Replace self-description with evidence. Another trap is reading from a script. A heavily memorized answer sounds flat and can drift off prompt when you panic. Use bullet anchors, not full paragraphs.",
          "Be careful with filler and unfinished sentences. AI systems may tolerate some natural speech, but high filler density can reduce clarity. More importantly, it makes you sound underprepared. Slow down instead of filling silence.",
          "Finally, remember that the AI round is not the whole process. Its purpose is often to reduce volume before a human conversation. Your job is not to impress with brilliance. Your job is to get through the gate cleanly, clearly, and credibly.",
        ],
      },
    ],
    cta: {
      heading: "Practice with sharper feedback",
      body: "Inside the Discord, members swap mock questions, answer frameworks, and real AI screen experiences from current hiring loops.",
      label: "Practice With Others",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "Harvard Business Review on AI hiring and interviews",
        url: "https://hbr.org/search?term=AI%20hiring",
      },
      {
        label: "Society for Human Resource Management recruiting technology resources",
        url: "https://www.shrm.org/topics-tools/topics/technology",
      },
      {
        label: "HireVue candidate preparation resources",
        url: "https://www.hirevue.com/resources",
      },
    ],
  },
  {
    slug: "breaking-down-job-search-anxiety",
    category: "job-search-mindset",
    title: "Breaking Down Job Search Anxiety Before It Becomes Self-Sabotage",
    description:
      "Extended job searching creates fear, avoidance, and identity strain. Use five practical tools to restore structure, reduce spirals, and keep momentum.",
    publishedAt: "2026-05-29",
    readingTime: "7 min read",
    tags: ["Anxiety", "Routine", "Mental Health"],
    sections: [
      {
        title: "Why job search anxiety gets worse over time",
        content: [
          "Job search anxiety is not only fear of rejection. It is also a breakdown in control. You can do good work and still get no reply. You can interview well and still lose to budget changes or internal candidates. That uncertainty teaches your brain that effort may not produce reward, which is why many people become either obsessive or avoidant.",
          "The problem is that both reactions damage outcomes. Obsession creates exhaustion and low-quality applications. Avoidance creates shame and lost momentum. Psychologists often recommend returning to controllable behaviors first because emotional stability usually follows structure better than motivational speeches.",
          "This is especially important for people whose identity was heavily tied to professional competence. The search can feel like a referendum on your value. It is not. But if you do not actively separate the two, your nervous system will keep treating every silence as proof.",
        ],
      },
      {
        title: "Five tools that reduce anxiety without killing momentum",
        content: [
          "Tool one is a fixed weekly structure. Set blocks for applications, networking, interview prep, admin, and recovery. Tool two is bounded goals. Instead of 'get a job soon,' use goals like 'send three tailored applications' or 'follow up with two warm contacts.' Tool three is evidence logging. Keep a visible list of actions completed, interviews earned, and positive feedback received. This counters the brain's tendency to remember only loss.",
          "Tool four is social support with standards. Choose a few people or communities that help you think clearly rather than amplify panic. Tool five is cognitive reframing. When you get a rejection, write a neutral interpretation before your catastrophic one takes over. For example: 'I did not advance in this process' is accurate. 'I am unemployable' is a story, not a fact.",
          "These tools work because they reduce ambiguity and help you conserve decision quality. They do not remove pain, but they stop pain from controlling the operating system.",
        ],
        checklist: [
          "Time-block job search work instead of leaving it emotionally open-ended.",
          "Set process goals you can complete in one day or one week.",
          "Track wins, even if the win is only response quality improving.",
          "Use one trusted person or group to reality-check spiral thoughts.",
        ],
      },
      {
        title: "Know when anxiety needs more than self-management",
        content: [
          "If sleep is collapsing, concentration is severely impaired, or you are unable to perform basic daily tasks, this is no longer just a productivity problem. It is a health problem. Professional support may be appropriate, especially if the search is triggering financial trauma, burnout history, or depression.",
          "You do not need to wait until you feel broken to ask for help. Practical support, therapy, medical advice, and local employment services can all reduce pressure in different ways. The point is not to become perfectly calm. The point is to stay functional enough to make good decisions while the market is hard.",
          "A stable searcher usually outperforms an intense searcher over time. Protecting your mind is not separate from getting hired. It is part of how you keep going long enough to reach the right opportunity.",
        ],
      },
    ],
    cta: {
      heading: "Do the search with people who understand it",
      body: "Join the Discord for weekly accountability, grounded support, and fewer panic-fueled takes about the market.",
      label: "Find Grounded Support",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "American Psychological Association stress resources",
        url: "https://www.apa.org/topics/stress",
      },
      {
        label: "NHS guidance on anxiety and self-help strategies",
        url: "https://www.nhs.uk/mental-health/conditions/anxiety-disorders/",
      },
      {
        label: "Mind workplace and mental health resources",
        url: "https://www.mind.org.uk/",
      },
    ],
  },
  {
    slug: "2026-tech-layoffs-landscape-analysis",
    category: "job-search-mindset",
    title: "2026 Tech Layoffs: What 113,000 Cuts Actually Tell Job Seekers",
    description:
      "The layoff headline matters less than where cuts cluster and where hiring remains active. Use the 2026 data to decide how to position, pivot, and prioritize.",
    publishedAt: "2026-05-31",
    readingTime: "8 min read",
    tags: ["Layoff Analysis", "Market Trends", "2026"],
    sections: [
      {
        title: "The headline number is only the starting point",
        content: [
          "More than 113,000 tech layoffs in 2026 is a useful signal, but it does not tell you how to search. The better question is where cuts are concentrated. Are they hitting recruiting, internal tooling, middle management, entry-level software roles, or speculative AI-adjacent bets that failed to monetize? Those distinctions matter because they shape how crowded each applicant pool becomes.",
          "Challenger, Gray & Christmas reporting has repeatedly shown that AI is now being cited directly as a reason for some workforce reductions. That does not mean AI replaced every affected worker one-for-one. It means leaders are using AI adoption, efficiency pressure, and investor expectations to justify smaller teams and tighter hiring.",
          "For job seekers, the implication is practical: if you stay in a role family where employers think AI already lowered headcount needs, your positioning must be sharper. General competence is no longer enough when companies believe software can absorb part of the workload.",
        ],
      },
      {
        title: "Where opportunities still exist",
        content: [
          "Even in a weak market, hiring does not stop everywhere. Roles linked to revenue, security, compliance, customer retention, and high-accountability operations often hold up better because the cost of failure is visible. The same is true for roles where AI increases workload supervision rather than removing the need for humans.",
          "This is why job seekers should track not just layoffs but organizational priorities. A company cutting broad product teams may still hire for infrastructure reliability, enterprise sales engineering, implementation, trust and safety, or governance. The macro story is down, but the micro story is uneven.",
          "That unevenness creates an opening for candidates who can reposition. If your old title is saturated, do not cling to it purely for identity reasons. Translate your background into the problem areas companies still fund.",
        ],
        bullets: [
          "Map your past work to revenue protection, cost control, risk reduction, or customer retention.",
          "Study job titles one layer adjacent to your old role instead of only exact matches.",
          "Use layoff data to avoid crowded pools, not just to confirm your fear.",
        ],
      },
      {
        title: "What job seekers should do with the data this month",
        content: [
          "First, stop treating the market as a single mood. Break it into segments: geography, industry, company stage, and function. Second, update your resume and LinkedIn around business outcomes that survive austerity. Third, prioritize channels that bypass volume, especially referrals and informed outreach.",
          "The people who adapt fastest in a contraction are rarely the ones who know the most headlines. They are the ones who convert headlines into a narrower search strategy. If AI is compressing some parts of the market, your answer is not despair. It is better targeting, better positioning, and faster feedback loops.",
          "Data should reduce confusion, not increase doom. Use it to decide where not to spend your next twenty hours.",
        ],
      },
    ],
    cta: {
      heading: "Make sense of the market with other candidates",
      body: "The Discord community tracks hiring pockets, layoff patterns, and role shifts so you can adapt faster than generic job-board advice allows.",
      label: "Track The Market Together",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "Challenger, Gray & Christmas monthly job cuts reports",
        url: "https://www.challengergray.com/blog/",
      },
      {
        label: "CompTIA state of the tech workforce resources",
        url: "https://www.comptia.org/content/research",
      },
      {
        label: "LinkedIn workforce and hiring trend data",
        url: "https://economicgraph.linkedin.com/",
      },
    ],
  },
];
