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
  {
    slug: "skills-based-hiring-2026-guide",
    category: "ai-job-search",
    title: "Skills-Based Hiring in 2026: Prove Your Value Without a Degree",
    description:
      "Employers are moving past degrees. Use a three-phase framework to find skills-based roles, build verifiable portfolios, and sell your abilities in 2026 interviews.",
    publishedAt: "2026-06-13",
    readingTime: "7 min read",
    featured: true,
    tags: ["Skills-Based Hiring", "Portfolio Strategy", "2026 Job Market"],
    sections: [
      {
        title: "What Skills-Based Hiring Actually Means in 2026",
        content: [
          "The phrase skills-based hiring gets thrown around a lot. In practice, it describes a shift away from proxy credentials and toward direct evidence of ability. Instead of filtering candidates by degree, years of experience, or previous title, employers ask for a portfolio, a timed assessment, a live coding session, a deliverable-based screen, or a case study. The idea is straightforward: if you can do the work, show it.",
          "That shift has real data behind it, and 2026 is when the trend crossed from aspirational to structural. Stanford Digital Economy Lab research published in 2025 found that employment for software developers aged 22 to 25 fell nearly 20 percent from its late 2022 peak, while experienced developer employment held. The junior cohort relies on generalist coding work, the exact work AI tools are best at compressing. Meanwhile, Indeed Hiring Lab data shows senior tech job postings down about 19 percent against five years earlier, with generalist mid-level titles down a steeper 34 percent. Degree-based filtering was never a strong signal of ability. It was a cheap filter for scale, and as AI and automation restructuring trim headcount, companies are finally looking for better signals.",
          "iCIMS reported in June 2026 that tech layoff headlines are masking a surge in AI-driven hiring demand. The market is not shrinking overall. It is reclassifying. Roles tied to demonstrable skill and domain depth are expanding, while roles tied to generic ability and resume signals are compressing. That reclassification is what makes skills-based hiring relevant to you right now.",
        ],
      },
      {
        title: "Phase 1: Recognize Skills-Signal Roles Before You Apply",
        content: [
          "Not every company that mentions skills-based hiring actually runs a skills-based process. Some use the phrase in employer branding copy while still filtering on degree and tenure. Your first job is to distinguish real signals from brand noise.",
          "Real skills-signal roles share four traits. First, the job description describes a specific problem to solve rather than a list of years required. Instead of 'ten years of Python experience,' you see 'build and maintain data pipelines processing 50 TB daily.' Second, the application process includes a work sample, technical screen, or deliverable. Third, the company career page emphasizes projects, portfolios, or open-source contributions over education sections. Fourth, recruiters reference your demonstrated work during conversation rather than asking whether you have done exactly this title before.",
          "Signs of skills-based hiring are visible in posting language and screening design. Companies like Stripe, Databricks, and Anthropic include portfolio reviews, project submissions, or case interviews as part of their process. If a job description asks you to submit a work sample instead of just uploading a resume, it is likely running a skills-first assessment. If a posting lists requirements without any mention of how skills are evaluated, it is still relying on resume proxy filtering, and your application strategy should reflect that.",
          "KORE1 placement data from June 2026 shows that senior cloud, security, and AI infrastructure roles close in two to four weeks at mid-market employers, while generalist mid-level postings sit open for sixty-plus days. That divergence is not a coincidence. Companies hiring for specific, verifiable skills move faster. Generalist roles with resume-based filtering take longer because the signal-to-noise ratio is worse. Your job is to position yourself on the fast side of that split.",
          "One practical check: if a posting has been open for more than thirty days and the company is not a hyperscaler, it may not be using skills-based screening. Fast-moving skills-first searches usually produce candidates quickly. A long-open generalist posting often means the filtering process itself is broken.",
        ],
      },
      {
        title: "Phase 2: Build Verifiable Proof That Replaces a Resume",
        content: [
          "If the old system filtered by resume keywords, the emerging system filters by verifiable output. That changes how you prepare, because an ATS-optimized resume does not help you in a portfolio review.",
          "Start with one anchor project that demonstrates the capability most central to your target role. If you are targeting a data engineering role, build a pipeline end to end, document decisions, push it to GitHub with a clean README, and write a short post explaining the tradeoffs. If you are targeting a product operations role, write a case study of a real workflow improvement you drove, with before and after metrics. The goal is not volume. It is signal density. One well-documented project with measurable outcomes beats a dozen half-finished repos.",
          "Second, prioritize contribution-based evidence. Open-source commits, community pull requests, published analyses, and response threads show actual work patterns. Stack Overflow 2025 data found 84 percent of developers use or plan to use AI tools, so highlighting raw code volume alone no longer signals skill. But explained architecture decisions, code review comments, performance benchmarks, and deployment patterns still carry weight because those require judgment.",
          "Third, build a portfolio landing page that groups your evidence by role type rather than chronologically. A recruiter looking for a backend engineer should see backend projects first, not your entire career history. The shift from resume chronological order to portfolio thematic order itself signals that you understand how skills-based hiring works.",
          "Fourth, add context to each piece of evidence. A GitHub link with no README is like a resume with no bullets. Write a short summary for each project explaining the problem, your approach, the tools used, and the measurable result. If the project was done as part of a team, clarify your specific contribution. Skills-based assessors are looking for ownership, not just participation.",
          "Finally, think about discovery. A portfolio on a custom domain that is optimized for search and linked from your LinkedIn profile and GitHub bio creates an asset that recruiters find before you apply. That is the ideal scenario. When a recruiter searches for 'Rust data pipeline engineer portfolio' and finds your case study before you submit an application, the power dynamic shifts. You are no longer asking for a job. You are being discovered for demonstrated ability.",
        ],
        bullets: [
          "One strong, documented project beats ten half-finished repos in a skills-based screen.",
          "Use open-source contributions and published work to show process, not just output.",
          "Organize portfolio evidence by target role type, not by timeline.",
        ],
      },
      {
        title: "Phase 3: Sell Your Skills Inside a Traditional Interview",
        content: [
          "Even at companies that advertise skills-based hiring, the actual interview often mixes old and new formats. You may get a portfolio review round followed by a standard behavioral panel. Being prepared for both is table stakes.",
          "For work-sample rounds, the rule is granularity. Do not describe what you built at the level of features. Describe what you decided, why, what alternatives you considered, what data informed the choice, and what happened after. Skills-based assessors are looking for decision quality and technical judgment, not task completion. An interviewer who sees your GitHub repo already knows the code works. They want to know whether you can reproduce good judgment under different constraints.",
          "For behavioral rounds, the STAR format still works, but it needs to front-load the evidence. Lead with the outcome or metric first. 'I reduced CI pipeline time by 40 percent, which cut deployment cycle from two weeks to four days.' Then backfill the situation, task, and action. The reversed structure signals confidence in the result and respects the hiring manager's limited time.",
          "One trap to avoid is over-explaining process at the expense of outcome. Skills-based hiring evaluates what you can deliver, not how long you thought about a problem. Keep explanations tight, lead with evidence, and let the interviewer ask for depth when they want it.",
        ],
        checklist: [
          "Lead every answer with the outcome, not the approach.",
          "For portfolio reviews, explain decisions and tradeoffs, not just implementation.",
          "Prepare two versions of each story: a 30-second evidence-first version and a 2-minute deep dive.",
          "Track skills-based interviewers who ask about projects vs. those who ask about titles.",
        ],
      },
      {
        title: "What This Means for Three Kinds of Job Seekers",
        content: [
          "Skills-based hiring does not affect everyone the same way. Your strategy depends on where you are starting from.",
          "If you are a self-taught developer with no CS degree, this shift is structurally good for you. The credential filter that kept you out of the first round is weakening. Your job is to make your projects visible and documented enough that a skills-first employer finds you credible before the application. Join open-source communities, publish clear case studies, and make your portfolio the first thing a recruiter sees.",
          "If you are a laid-off senior generalist with eight to twelve years of experience, this shift asks you to specialize. The KORE1 analysis from June 2026 puts it bluntly: the senior generalist market is glutted while AI infrastructure, security, and deep-domain roles are scarce. Your path through skills-based hiring requires you to pick an area, build a visible project in it, and reframe your resume around depth, not breadth. It is uncomfortable, but the two-job-market data is clear that breadth is currently punished.",
          "If you are a recent graduate or early-career professional with limited work history, your portfolio is more important than your resume. Companies that practice skills-based hiring are the ones most likely to assess you on work samples rather than experience length. That is an advantage if you have strong projects, even with zero FTE experience. Focus on one domain, produce visible output, and target companies whose career pages mention portfolio reviews, take-home assessments, or project submissions as part of their hiring process.",
        ],
      },
    ],
    cta: {
      heading: "Test your portfolio against real hiring signals",
      body: "Inside the Discord, members swap company screening formats, portfolio examples that worked, and which roles actually assess skills instead of resumes.",
      label: "Join The Discussion",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "iCIMS June 2026 report on AI-driven hiring demand behind layoff headlines",
        url: "https://www.prnewswire.com/news-releases/tech-layoff-headlines-are-masking-a-surge-in-ai-driven-hiring-demand-new-icims-data-reveals-302797655.html",
      },
      {
        label: "Stanford Digital Economy Lab: Canaries in the Coal Mine on AI employment effects",
        url: "https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/",
      },
      {
        label: "KORE1 2026 Senior SWE Glut and $250K AI Infra Drought analysis",
        url: "https://www.kore1.com/senior-swe-glut-ai-infra-drought-2026/",
      },
      {
        label: "Indeed Hiring Lab job posting trend data",
        url: "https://www.hiringlab.org/",
      },
      {
        label: "Stack Overflow 2025 Developer Survey AI adoption findings",
        url: "https://survey.stackoverflow.co/2025/ai/",
      },
    ],
  },
  {
    slug: "how-to-network-for-a-job-in-2026",
    category: "ai-job-search",
    title: "How to Network for a Job in 2026 (When Cold Applying Stopped Working)",
    description:
      "Cold applications are failing more than ever. Use a structured networking system to reach the right people, earn referrals, and skip the volume game in a market where inbound is cooked.",
    publishedAt: "2026-06-20",
    readingTime: "8 min read",
    tags: ["Networking", "Referrals", "2026 Job Market"],
    sections: [
      {
        title: "Why inbound stopped working in 2026",
        content: [
          "On June 1, 2026, a thread on Hacker News captured what job seekers had been quietly noticing for months. Founders who were actually posting roles used their own comments to announce that the channel is broken. Inbound applications—cold resumes uploaded through the Apply button—had become noise. The founders said the only signal they trusted anymore was a warm referral or a direct inbound from someone they already respected.",
          "The r/recruitinghell 2026 report analyzed 20,973 posts from the first half of 2026 and classified the top complaint. It is not rejection. It is how rejection is delivered. Candidates spend three hours tailoring a resume, hit submit, and then hear nothing for weeks. Meanwhile, some companies admit they never planned to fill the role. Those ghost jobs waste cognitive energy that should go toward real opportunities.",
          "This is not a temporary correction. The volume-to-signal ratio has structurally worsened. AI screening tools increased the number of initial applications companies can accept, but did not improve the signal quality. The result is a market where cold inbound has become a low-probability bet. The people who land jobs fastest are not the ones who apply to the most jobs. They are the ones who build referral pipelines before they need them.",
        ],
      },
      {
        title: "Build a tiered contact system, not a giant spreadsheet",
        content: [
          "Most networking advice tells you to reach out to everyone you have ever met. That approach creates volume without focus. A more reliable system separates your contacts into three tiers based on relationship strength and ability to help.",
          "Tier one is warm advocates. These are former managers, close colleagues, and mentors who know your work quality and would actively recommend you. They should get a specific, low-friction ask: a referral, an introduction to a hiring manager, or a recommendation on an internal system. Do not ask them to let you know if they hear of anything. That is too vague. Tell them exactly what role family you are targeting and at what companies.",
          "Tier two is informed peers. These are current and former coworkers who work in the same industry or function. They may not have hiring authority, but they know which companies are actually moving, which listings are real, and which teams are quietly expanding. Ask them market intelligence questions: What is your company hiring for? How long is the hiring cycle? Is the role real or just a posting? Informed peers are your best early warning system.",
          "Tier three is dormant contacts. Alumni networks, former classmates, and people you have met at conferences or past workplaces. These require a low-stakes reconnection message before you ask for anything. Something like: Hey, I am exploring next steps in my career and would love to hear what you are seeing in your space. Not every dormant contact responds, but the ones who do can open unexpected doors.",
        ],
        checklist: [
          "Categorize your network into warm advocates, informed peers, and dormant contacts.",
          "Give warm advocates a specific ask: referral, introduction, or internal recommendation.",
          "Ask informed peers for market intelligence, not job leads.",
          "Reconnect with dormant contacts before making any ask.",
        ],
      },
      {
        title: "The five message types that actually get responses",
        content: [
          "The content of your outreach matters as much as the contact list. Generic messages sound like spam even when sent to people who know you. A practical framework is to vary your message type based on your goal.",
          "Type one is the intelligence request. I am looking at Company X for a Y role. Do you know anyone on that team or have a sense of how the group is structured? This is low pressure and often produces useful answers because people like sharing what they know.",
          "Type two is the advice ask. I am deciding between two paths: staying in my current function vs pivoting into Z. Based on what you see, what would you weigh? Advice asks are flattering and low obligation. They rarely get ignored.",
          "Type three is the introduction request. Would you be open to introducing me to Person A on your team? I have been following their work on Project B and think there could be alignment. Always make the introduction easy by explaining why the match makes sense.",
          "Type four is the informational interview. Could I have 15 minutes to hear about what your day looks like in role X? Most employed professionals are willing to talk when the request is bounded and specific.",
          "Type five is the referral ask. This should be reserved for your warmest connections. I am applying to Role Y at your company. If you are comfortable, could you submit an internal referral or mention my name to the recruiter? Referrals increase callback rates by 3x to 10x depending on the company, but they burn social capital. Use them sparingly.",
        ],
        bullets: [
          "Intelligence requests get the best response rate because they cost nothing to answer.",
          "Advice asks build relationships without making the other person feel used.",
          "Referral asks work best when you have a specific role and can explain why you fit.",
        ],
      },
      {
        title: "Build a networking rhythm, not a networking push",
        content: [
          "The people who network well do not cram it into one panic week. They build a sustainable rhythm. A practical target is five high-quality outreach messages per week. Not fifty LinkedIn connection requests. Five messages that are specific, researched, and easy to respond to.",
          "Track every conversation, response, and follow-up date in one simple sheet. Note what worked: which message types got replies, which companies responded fastest, which introductions led to interviews. Over time, you are not just networking. You are learning which channels produce the highest probability outcomes for your specific profile.",
          "One common mistake is stopping networking after a rejection. The best time to send a follow-up to a warm contact is right after a setback, because you have regained some clarity about what you actually want. A rejection often sharpens your focus. Use it.",
        ],
      },
      {
        title: "How to network when you have no network",
        content: [
          "If you are early in your career, changing industries, or new to a geography, your network may not exist yet. That is normal. The solution is not to fake connections. It is to become discoverable.",
          "Write about what you know. A short case study, a project walkthrough, an analysis of a market trend. Publish it on LinkedIn, a personal site, or a public GitHub repo. When someone searches for your name or your topic, they should find proof of your thinking, not just a resume. This creates inbound networking: people reach out to you because they found your work.",
          "Join communities where hiring signals exist before jobs are posted. Discord servers for specific tech stacks, Slack groups for industry transitions, and curated forums for career changers all have channels where opportunities appear before they reach job boards. Presence in those spaces, without a hard sell, often leads to the warmest kind of referral: someone who already knows your work.",
        ],
      },
    ],
    cta: {
      heading: "Build your networking system with others",
      body: "Inside the Discord, members share outreach templates, referral strategies, and which companies respond to warm intros fastest.",
      label: "Join The Network",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "Hacker News Ask HN: founders on inbound breaking down",
        url: "https://news.ycombinator.com/item?id=48589357",
      },
      {
        label: "Truffle: 20,973 r/recruitinghell posts reveal hiring complaints in 2026",
        url: "https://www.hiretruffle.com/reports/recruiting-complaints-2026",
      },
      {
        label: "Refolk: 94 Reddit threads on candidate ghosting",
        url: "https://www.refolk.ai/blog/candidate-ghosting-2026-sourcing-signal-failure",
      },
      {
        label: "LinkedIn Economic Graph hiring trend data",
        url: "https://economicgraph.linkedin.com/",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-any-2026-interview-format",
    category: "interview-prep",
    title: "How to Prepare for Every Type of 2026 Interview (Behavioral, Case, Take-Home, and Portfolio Review)",
    description:
      "Employers use four distinct interview formats in 2026. Learn what each tests, how to prepare, and common traps that quietly lower your score across every format.",
    publishedAt: "2026-06-20",
    readingTime: "9 min read",
    tags: ["Interview Prep", "Behavioral Interview", "Portfolio Review", "Case Interview"],
    sections: [
      {
        title: "Why you need a format-specific strategy in 2026",
        content: [
          "Job interviews used to follow a reliable pattern: a phone screen, a behavioral round, and a hiring manager conversation. That uniformity has broken down in 2026. Companies now mix four distinct formats depending on role seniority, hiring urgency, and how much they trust skill-signaling proxies like degrees or years of experience.",
          "The shift toward skills-based hiring has accelerated format fragmentation. Employers who no longer trust resume keywords as a signal of ability need other ways to assess candidates. Some use live coding or case studies. Others use portfolio reviews or timed work samples. Many combine two or three formats in a single pipeline. The problem for candidates is that preparing for one format does not prepare you for the others.",
          "A behavioral STAR framework, for example, is almost useless in a case interview where the entire point is to watch your thinking unfold in real time. Similarly, a polished take-home assignment does not help you sell your work in a portfolio review. To clear modern hiring pipelines, you need a format-aware preparation strategy that shifts depending on what the employer is testing.",
        ],
      },
      {
        title: "Behavioral interviews: evidence density beats charisma",
        content: [
          "Behavioral interviews remain the most common format, but their weight has shifted. Interviewers in 2026 are less impressed by confident storytelling and more interested in evidence density. The question behind every question is: can you prove you did what you claim?",
          "Use the STAR format with one modification: lead with the result. Instead of starting with the situation, start with the metric or outcome. I reduced CI pipeline time by 40 percent, which cut our deployment cycle from two weeks to four days. Then backfill the context. This signals that you value outcomes over process and keeps your answer tight.",
          "Prepare five reusable stories that cover: a difficult technical or business problem, a conflict you resolved, a project with measurable impact, a failure you recovered from, and a high-pressure decision. Each story should be adaptable to different prompts. Practice delivering them in 60 seconds and in 3 minutes. The first proves you can be concise. The second proves you have depth.",
          "One trap to avoid: generic leadership language. I am a strategic thinker who collaborates across teams communicates almost nothing. Replace self-description with specific evidence. Every sentence should either describe an action you took or a result you produced. If it does neither, cut it.",
        ],
        checklist: [
          "Lead every answer with the outcome or metric.",
          "Prepare five reusable stories with specific, verifiable results.",
          "Practice delivering each story in 60 seconds and 3 minutes.",
          "Eliminate any sentence that does not describe an action or a result.",
        ],
      },
      {
        title: "Case interviews: the format tests thinking, not knowledge",
        content: [
          "Case interviews are less common in pure engineering roles but standard in product management, consulting-adjacent positions, and senior individual contributor roles where strategic judgment matters. The key insight is that case interviews do not test your domain knowledge. They test your thinking process under uncertainty.",
          "A strong case performance follows a repeatable structure. First, clarify the question. Restate the problem in your own words and confirm with the interviewer. Second, scope the problem. Identify what is in bounds and what is out of bounds. Third, build a framework. It does not need to be perfect. It needs to be organized. Fourth, do the math or analysis out loud. Fifth, state a conclusion with supporting reasoning.",
          "The most common point loss in case interviews comes from jumping to a conclusion too fast. Interviewers want to see your structure, your assumptions, and how you handle missing information. If you do not know a number, estimate and state your assumption. That signals judgment, not guessing.",
          "Practice with realistic prompts. Public case interview prep resources exist for product management and consulting roles. For engineering cases, a common format is: We need to build X. How would you approach it? Your job is to show a systematic evaluation of constraints, tradeoffs, team capacity, and timeline before proposing an approach.",
        ],
        bullets: [
          "Restate the problem to confirm scope before diving into analysis.",
          "Build a visible framework even if it is imperfect.",
          "State assumptions when data is missing instead of guessing silently.",
          "End every case with a clear conclusion and supporting reasoning.",
        ],
      },
      {
        title: "Take-home assignments: design for evaluation, not for perfection",
        content: [
          "Take-home assignments have become more common as companies shift to skills-based assessment. The trap is spending too much time on the deliverable and not enough on making it easy to evaluate. A take-home that is technically perfect but poorly documented will score worse than a solid submission with clear documentation.",
          "Start by understanding the evaluation criteria. If the prompt says build an API, confirm whether they care about code structure, test coverage, documentation, deployment, or all four. Then prioritize accordingly. A README that explains your decisions, tradeoffs, and how to run the code is often worth more than an extra test.",
          "Set a time budget before you start. Take-home assignments are not supposed to consume your week. If the prompt says it should take four hours, spend at most six. Use the remaining time to polish documentation, clean up code formatting, and write a short summary of what you built and why.",
          "One often-missed opportunity: include a short retrospective in your submission. Describe what you would improve with more time, what assumptions you made, and what edge cases you did not handle. This demonstrates professional maturity and often converts a neutral submission into a strong pass.",
        ],
      },
      {
        title: "Portfolio reviews: the format that rewards judgment over volume",
        content: [
          "Portfolio reviews are increasingly common for design, engineering, and product roles where past work is the strongest signal of future performance. The rules are different from a behavioral interview because the interviewer has already seen your output. They want to know how you arrived at it.",
          "For every project in your portfolio, be ready to explain three things: the problem, your specific role, and the key decisions you made. Do not describe features. Describe tradeoffs. We chose React over Svelte because our team had existing React expertise and the product timeline did not allow for a framework migration. That shows engineering judgment.",
          "Prepare a 30-second elevator pitch and a 5-minute deep dive for your strongest project. Most portfolio reviews start with an open-ended prompt: Walk me through something you built. Your ability to tightly summarize before diving deep signals communication skill and self-awareness.",
          "One common trap: presenting everything as a success. Interviewers value candidates who can analyze their own failures. If a project had technical debt, missed deadlines, or design flaws, acknowledge them honestly and explain what you learned. A portfolio that only shows wins is less credible than one that shows learning.",
        ],
        checklist: [
          "For each project, prepare: the problem, your role, key decisions, and tradeoffs.",
          "Have a 30-second summary and a 5-minute deep dive ready.",
          "Include at least one failure or learning experience.",
          "Organize portfolio by role type, not chronologically.",
        ],
      },
    ],
    cta: {
      heading: "Practice interviews with people in similar pipelines",
      body: "Inside the Discord, members share company-specific interview formats, take-home assignment tips, and portfolio review feedback from real hiring loops.",
      label: "Find Interview Partners",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "Jobscan: ATS and interview prep guidance",
        url: "https://www.jobscan.co/blog/",
      },
      {
        label: "HireVue candidate preparation resources",
        url: "https://www.hirevue.com/resources",
      },
      {
        label: "SHRM recruiting technology and interview format research",
        url: "https://www.shrm.org/topics-tools/topics/technology",
      },
      {
        label: "Harvard Business Review on interview design",
        url: "https://hbr.org/search?term=interview%20design",
      },
    ],
  },
  {
    slug: "how-to-recover-from-job-search-burnout",
    category: "job-search-mindset",
    title: "How to Recover From Job Search Burnout (Without Stopping Your Search)",
    description:
      "Extended job searching causes mental exhaustion that compounds over time. Use five evidence-based strategies to recover decision quality, restore confidence, and keep moving without collapsing.",
    publishedAt: "2026-06-20",
    readingTime: "7 min read",
    tags: ["Burnout", "Job Search", "Mental Health", "Recovery"],
    sections: [
      {
        title: "Why job search burnout is worse than normal burnout",
        content: [
          "Burnout from a regular job comes with a known recovery cycle: vacation, reduced hours, or change in scope. Job search burnout is different because it carries a performance evaluation with no end date. Every rejection, every silence, and every application that goes nowhere is data your brain processes as failure. After enough repetitions, the system learns to expect failure before it even tries.",
          "This is not a personality flaw. It is a natural response to a high-effort, low-reward environment. Research on learned helplessness shows that repeated exposure to uncontrollable negative outcomes produces passivity, reduced initiative, and emotional exhaustion. In a market where 66 percent of CEOs report freezing or reducing hiring, as seen in LayoffReady reporting on the 2026 silent layoff phenomenon, the objective conditions for burnout are structurally present.",
          "The danger is that burnout and job search performance create a reinforcing loop. You apply less because you feel depleted. Fewer applications mean fewer responses. Fewer responses confirm your depletion was justified. That self-reinforcing cycle is why standard advice like just take a break rarely works. A break treats the symptom without changing the feedback loop.",
        ],
      },
      {
        title: "Strategy 1: Compress your search into bounded effort blocks",
        content: [
          "The most common burnout pattern is open-ended searching. You wake up, check email, browse job boards, tweak your resume, send a few applications, and repeat. The day has no structure, which means your brain never gets a signal that effort is complete. This creates chronic low-grade stress.",
          "Compress your job search into bounded time blocks. Set a start time and an end time for search work each day. Outside those blocks, do not open job boards, email, or LinkedIn. This creates psychological closure. Your brain gets a clear signal: search work is done for today.",
          "A practical structure is morning blocks for high-cognitive work (applications, networking messages, interview prep) and afternoon blocks for low-cognitive work (research, reading job descriptions, organizing notes). No job search work after 6 PM. The rule is not optional. It is how you protect your cognitive recovery window.",
        ],
        checklist: [
          "Set fixed start and end times for job search work.",
          "Do high-cognitive work in the morning and low-cognitive work in the afternoon.",
          "No job search activity after 6 PM.",
          "Use the evening to do something unrelated to job searching.",
        ],
      },
      {
        title: "Strategy 2: Switch from outcome goals to process goals",
        content: [
          "Outcome goals in a job search are things you cannot control. Get a job in six weeks. Land an interview with Company X. Every time you fail to meet an outcome goal, your brain registers a loss, even if you did everything right.",
          "Process goals are things you can control. Send five tailored applications this week. Follow up with three warm contacts. Practice one interview answer every day. Process goals produce daily evidence of progress, which counters the helplessness loop. Even on weeks with no interview invitations, you can still complete your process goals and feel a sense of accomplishment.",
          "The shift from outcome to process is not semantic. It is neurochemical. Completing a planned task releases dopamine. Doing it consistently creates a reward cycle that sustains effort. Outcome goals do not provide that because the reward is delayed and uncertain.",
        ],
        bullets: [
          "Outcome goals: Get a job or Get an interview at Google. These are not fully controllable.",
          "Process goals: Send 5 applications or Do 1 networking outreach. These are fully controllable.",
          "Process goals produce evidence of progress on days when outcomes are absent.",
        ],
      },
      {
        title: "Strategy 3: Build an evidence log to counter negativity bias",
        content: [
          "Your brain has a negativity bias. It remembers rejection more vividly than progress. After several weeks of searching, your internal narrative can become entirely negative even if measurable progress exists.",
          "Build a simple evidence log. Every day, write down one thing that went well: a response from a recruiter, a positive interview moment, a warm networking reply, a skill you improved. The log does not need to be long. It just needs to exist. When you feel defeated, read the last two weeks of entries. The evidence usually contradicts the feeling.",
          "This is not toxic positivity. It is cognitive correction. Your brain will naturally weight negative events higher than positive ones. The log is a calibration tool, not a denial of difficulty.",
        ],
      },
      {
        title: "Strategy 4: Maintain one identity anchor outside the search",
        content: [
          "When job searching consumes your identity, every rejection feels like a judgment on your worth as a person. That is unsustainable. Having one identity anchor outside the search creates psychological insulation.",
          "An identity anchor can be a creative project, a physical practice, a volunteer role, or a learning pursuit unrelated to your career. The specific anchor matters less than the rule: it is something you invest in consistently and that produces its own feedback loop of progress and satisfaction, independent of hiring outcomes.",
          "People with a strong identity anchor recover from interview rejection faster because their sense of self does not entirely depend on the job search result. The anchor provides a separate source of self-worth that the search cannot touch.",
        ],
      },
      {
        title: "Strategy 5: Know when burnout needs more than self-management",
        content: [
          "If sleep is collapsing, concentration is severely impaired, you are unable to perform basic daily tasks, or you have been avoiding the search entirely for more than two weeks, this is no longer just motivation fatigue. It may be clinical depression or an anxiety disorder exacerbated by the search.",
          "Professional support is not a failure. Therapy, medical advice, and career counseling services can all help in different ways. Many regions offer free or low-cost employment counseling that includes mental health support specifically for job seekers. The point is not to feel perfectly calm. The point is to stay functional enough to make good decisions while the market is hard.",
          "A stable searcher with a slow strategy usually outperforms an intense, burned-out searcher over time. Protecting your mind is not separate from getting hired. It is part of how you keep going long enough to reach the right opportunity.",
        ],
      },
    ],
    cta: {
      heading: "Search with people who understand the mental load",
      body: "Join the Discord for weekly accountability, grounded support, and fewer panic-fueled takes about the job market.",
      label: "Find Support",
      href: siteConfig.discordUrl,
    },
    sources: [
      {
        label: "American Psychological Association stress and burnout resources",
        url: "https://www.apa.org/topics/stress",
      },
      {
        label: "NHS guidance on anxiety and self-help strategies",
        url: "https://www.nhs.uk/mental-health/conditions/anxiety-disorders/",
      },
      {
        label: "LayoffReady: the silent layoff and hiring freeze in 2026",
        url: "https://layoffready.co/blog/ai-hiring-freeze-2026-why-job-applications-arent-getting-responses",
      },
      {
        label: "Mind workplace and mental health resources",
        url: "https://www.mind.org.uk/",
      },
    ],
  }

];
