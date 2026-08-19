const cases={
  rodeo:{title:"新加坡政府机关内容传播支持",meta:"罗德传播集团（上海） · 品牌公关运营实习生 · 2024.11—2025.02",role:"协助 G to B 业务内容运营，参与热点追踪、双语 Draft 撰写、公众号排版和数据报告。",action:"围绕中新合作动态，参与完成推文及小绿书内容生产；通过 Excel 分析月度、年度数据，产出月报 3 份、年报 1 份，并为策略调整提供依据。",result:"参与完成 53 篇推文与小绿书，总阅读量 4W+；多篇推文阅读量超 1500，推文平均阅读完成率提升约 7.5%。"},
  vibing:{title:"Vibing 城市活动增长与转化",meta:"托可蒂芙（上海）文化艺术交流有限公司 · 运营实习生 · 2025.03—2025.06",role:"参与小红书、社群、视频号及线下活动的一体化运营，负责营销节点推进和跨方协同。",action:"围绕上海多元城市活动维持小红书日更，运营社群与视频号；结合活动目标制定营销日历，并复盘报名、到场、销售等数据。",result:"小红书在岗涨粉 1000+，累计发布约 100 篇图文及视频内容；管理约 40 个社群，协助转化约 4 万活动交易额。"},
  hicustom:{title:"跨境平台内容矩阵与 SEO 运营",meta:"厦门指纹科技有限公司 · 内容运营实习生 · 2025.07—2025.10",role:"负责多个内容平台的内容生产与分发，参与 SEO 数据整理、周度复盘和投流支持。",action:"覆盖百家号、公众号、小红书、知乎等账号，使用 AI 辅助完成软文撰写、排版编辑和素材制作；每周追踪渠道数据及百度收录情况。",result:"新闻源累计发布 700+ 篇、收录 670+ 篇；公众号发布 90 篇推文，累计增长 350+ 用户；小红书更新 60+ 篇。"},
  events:{title:"从方案到现场的活动落地",meta:"Vibing / 校园实践 · 活动策划",role:"参与活动提案与策划，独立负责部分活动的全流程管理，并承担多方沟通、节点推进与现场支持。",action:"独立负责上海宾果游戏社交、国际调香工坊两场活动，通过节点化推进保障流程；另参与高考奉茶公益活动的品牌赞助和现场组织。",result:"两场独立管理活动累计参与约 80 人，交易额超 8k；高考奉茶活动为两校区考点组织超 350 杯饮品赞助。"}
};
const skills={
 content:{num:"01",title:"内容与社媒运营",desc:"从选题、生产到分发，持续校准内容与受众的连接。具备公众号、小红书、知乎、百家号、视频号等平台的内容生产与运营实践，能结合传播目标完成选题、文案、排版、封面及数据复盘。",tags:["公众号","小红书","知乎","百家号","选题策划","文案写作"]},
 community:{num:"02",title:"社群与活动运营",desc:"围绕具体活动目标安排营销节点、社群内容和现场支持。熟悉社群维护、跨方协调、活动复盘及用户沟通，在城市活动与校园实践中积累了执行经验。",tags:["社群运营","活动策划","营销日历","跨方协同","危机沟通","现场执行"]},
 data:{num:"03",title:"数据分析与复盘",desc:"将传播与运营数据整理为可追踪的反馈。熟练使用 Excel 完成月报、年报、周报及可视化呈现；可使用 SPSS 进行基础数据分析。",tags:["Excel","月报分析","年报分析","数据可视化","SPSS","SEO 复盘"]},
 creative:{num:"04",title:"视觉与视频内容",desc:"能完成传播所需的基础视觉物料与短视频处理，并理解内容平台的封面、排版与阅读体验。",tags:["Photoshop","Canva","秀米","剪映","Premiere","After Effects"]}
};
const root=document.documentElement,theme=document.querySelector('.theme-toggle');
const stored=localStorage.getItem('lyc-theme');
if(stored==='dark'||(!stored&&matchMedia('(prefers-color-scheme: dark)').matches)) root.dataset.theme='dark';
function renderTheme(){const dark=root.dataset.theme==='dark';theme.setAttribute('aria-pressed',String(dark));theme.setAttribute('aria-label',dark?'切换浅色模式':'切换深色模式');theme.querySelector('span').textContent=dark?'☼':'◐'}renderTheme();
theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('lyc-theme',root.dataset.theme);renderTheme()});
document.querySelector('#year').textContent=new Date().getFullYear();
const caseDialog=document.querySelector('#case-dialog'),caseContent=document.querySelector('#dialog-content');
document.querySelectorAll('.case-open').forEach(btn=>btn.addEventListener('click',()=>{const c=cases[btn.dataset.case];caseContent.innerHTML=`<div class="dialog-copy"><p class="eyebrow">案例详情</p><h2 id="dialog-title">${c.title}</h2><p>${c.meta}</p><div class="detail-grid"><b>我的职责</b><p>${c.role}</p><b>关键动作</b><p>${c.action}</p><b>阶段结果</b><p>${c.result}</p></div></div>`;caseDialog.showModal()}));
const contactDialog=document.querySelector('#contact-dialog');document.querySelector('[data-contact]').addEventListener('click',()=>contactDialog.showModal());
document.querySelectorAll('.dialog-close').forEach(btn=>btn.addEventListener('click',()=>btn.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()}));
const filterStatus=document.querySelector('#filter-status');document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');const f=btn.dataset.filter;let count=0;document.querySelectorAll('.case').forEach(card=>{const show=f==='all'||card.dataset.category.includes(f);card.classList.toggle('is-hidden',!show);if(show)count++});filterStatus.textContent=f==='all'?'显示全部 4 个案例':`显示 ${count} 个「${btn.textContent}」案例`}));
const detail=document.querySelector('#skill-detail');document.querySelectorAll('.skill').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.skill').forEach(b=>b.classList.remove('is-selected'));btn.classList.add('is-selected');const s=skills[btn.dataset.skill];detail.innerHTML=`<p class="eyebrow">${s.num} / ${s.title}</p><h3>${s.desc.split('。')[0]}。</h3><p>${s.desc.split('。').slice(1).join('。')}</p><div class="tags">${s.tags.map(t=>`<span>${t}</span>`).join('')}</div>`}));
const counters=document.querySelectorAll('[data-count]');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.count),suffix=el.dataset.suffix||'',duration=850,start=performance.now();function tick(now){const p=Math.min((now-start)/duration,1);el.textContent=Math.floor(target*(1-Math.pow(1-p,3))).toLocaleString()+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);observer.unobserve(el)}),{threshold:.5});counters.forEach(c=>observer.observe(c));