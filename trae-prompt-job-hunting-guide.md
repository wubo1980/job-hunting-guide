## 项目：求职生存指南站（Job Hunting Guide）

### 定位
面向2026年欧美求职者的综合指南网站。2026年科技行业裁员超过113,000人，AI取代成为第一大裁员原因，求职市场极度竞争。
你的目标用户是被裁的科技从业者、感受到AI威胁的职场人、求职焦虑的毕业生。

### 设计风格
- 黑暗专业风格（深色背景 + 绿/蓝强调色）
- 参考：https://china-sourcing-guide-murex.vercel.app/ 的整体风格
- 大胆的标题排版，字体干净
- 使用 "from-emerald-400" 风格的渐变色做强调
- 页面配背景网格纹理
- 移动端优先响应式设计

### 技术栈
- Next.js 16+ (App Router)
- TailwindCSS v4
- TypeScript
- 静态导出（output: 'export'）
- Vercel 部署

### 站点结构

#### 1. 首页（app/page.tsx）
- Hero：大标题 + 副标题 + CTA按钮
- 功能板块网格：4个主要板块入口
- 最新文章列表（带日期和阅读时间）
- 首页metadata：title + description（SEO优化）

#### 2. 板块页面（每个板块一个页面，app/[category]/page.tsx）
每个板块有 Hero 描述 + 该板块的文章列表

四大板块：
a) **AI求职策略**（slug: ai-job-search）
   - AI筛选简历破解、Ghost Jobs识别、ATS优化
b) **职业转型**（slug: career-pivot）
   - 被裁后转行、AI时代安全岗位、零经验换赛道
c) **求职心理**（slug: job-search-mindset）
   - 焦虑应对、拒绝心理建设、经济压力
d) **面试通关**（slug: interview-prep）
   - AI面试官应对、行为面试、远程面试技巧

#### 3. 文章详情页（app/articles/[slug]/page.tsx）
- 面包屑导航
- 文章标题、发布时间、阅读时长
- 标签
- 相关文章推荐
- CTA部分（Discord社区引导）

#### 4. 数据层（lib/content/）
- types.ts：定义 Article, Category 类型
- data.ts：所有文章和分类数据
- queries.ts：查询函数（获取分类、最新文章、相关文章）
- seo.ts：metadata生成函数

#### 5. 组件
- SiteHeader（导航栏，带 active 高亮）
- SiteFooter
- GuideCard（文章卡片）
- HeroSection（首页英雄区）
- ArticleContent（文章内容渲染）
- CategoryOverview（分类概览）

#### 6. SEO
- app/robots.ts（允许所有爬虫）
- app/sitemap.ts（动态生成sitemap）
- 每个页面动态metadata

### 首批文章内容（8篇，写入 data.ts）

写在 lib/content/data.ts 中，每篇文章包含：slug, category, title, description, publishedAt, readingTime, tags, sections（内容段落）, cta

注意：文章内容要实打实的有价值，不是占位符Lorem Ipsum。

文章1：首页hero引导
文章2：如何识别Ghost Jobs
  描述：2026年每4个招聘岗位中就有1个是Ghost Listing。学习如何从描述、面试流程、公司背景中识别假招聘，把时间花在真正招人的岗位上。
  
文章3：AI简历优化5步法
  描述：ATS系统比人类更快地筛选你的简历。学习关键词策略、格式优化、量化成果和AI辅助编辑，让你的简历不再石沉大海。
  
文章4：被裁后30天行动计划
  描述：被裁的前30天最混乱也最关键。从情绪管理到财务盘点，从人脉激活到技能更新，一份被裁后立刻能用的行动路线图。
  
文章5：2026年AI不会取代的10类工作
  描述：从蓝领技能到人际情感类工作，哪些岗位在AI时代反而更安全？基于Challenger报告和劳工统计局数据的深度分析。
  
文章6：当面试官是AI
  描述：越来越多的公司用AI进行初面。AI面试官在意什么？如何准备？常见陷阱和应对策略。
  
文章7：求职焦虑拆解
  描述：长期求职会让人自我怀疑。心理学家推荐的5个应对策略，包括建立日常结构、设定可完成目标、社交支持和认知重构。
  
文章8：2026科技裁员全景分析
  描述：谁在裁员？谁在招人？基于Challenger, Gray & Christmas 2026年5月报告的深度分析，113,000人被裁背后的行业真相。

### 写作风格指南
- 直接、务实，不画饼
- 数据支持的观点（引用来源）
- 可操作的步骤（bullet points 和 checklist）
- 共情但不贩卖焦虑
- 每篇文章500-800字

### 额外要求
- Google Analytics 集成（GA4）
- 使用 lucide-react 图标
- Error/404 页面
- robots.txt 和 sitemap.xml 静态生成
