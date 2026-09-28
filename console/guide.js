/* 阅读指南，手工策展（本文件不被构建覆盖）。
 * paths：六条递进阅读路线——每步给出「读到什么 / 读后能回答」，按序读即完成从入门到深潜的课程。
 * tour：全台通读序列——「从头看到尾」的单一动线，配合顶部通读条逐站推进。 */
DB.guide = {
  intro: '本台 75 个页面不是平铺的目录，而是三层结构：**课程（路线）→ 参考（知识库/名录/术语）→ 工具（评分/模拟/决策）**。按路线读书、按参考查证、按工具产判断——这就是从头到尾深度了解 AI 行业的路径。',
  paths: [
    { key: 'p1', name: 'P1 快速入门', en: 'Starter', goal: '半天建立行业坐标系，能听懂行业讨论、知道地图全貌。', steps: [
      { href: '#/overview/panorama', page: '总览 · 全景', what: '四格 KPI 与十八组导览：先知道「这个行业有什么可看」。', ask: '五层产业链、50 条线索、3512 条档案分别是什么量级？' },
      { href: '#/chain/map', page: '产业链 · 全景', what: '五层价值流的骨架：从算力到应用再到商业生态。', ask: '一次模型发布，价值沿着哪五层传递？' },
      { href: '#/chain/L2', page: '产业链 · 数据与模型层', what: '精读一层：前沿模型、开源权重、推理优化如何构成智能供给。', ask: '开源与闭源的竞争到底改变了什么？' },
      { href: '#/sectors/matrix', page: '赛道矩阵', what: '17 个赛道的追踪密度与当期热度。', ask: '当前最热的三个赛道是哪几个？本库哪里跟踪不足？' },
      { href: '#/clues/list', page: '线索库 · 列表', what: '产业叙事的原子：50 条时间线文档。挑「GPT系列」读一遍时间线。', ask: '一条线索的「概述-时间线-分析」三层各回答什么问题？' },
      { href: '#/chronicle/flow', page: '大事记 · 流水', what: '行业年鉴：138 条经核验的重点事件，按类型可切。', ask: '最近三个月的资本/监管/安全线各发生了什么？' },
      { href: '#/glossary/dict', page: '术语词典', what: '53 个核心术语的准确定义。', ask: 'MoE、RLHF、KV Cache 各自解决什么问题？' },
      { href: '#/overview/unknowns', page: '未知清单', what: '第一课就要学的一课：这个研究台「不知道什么」。', ask: '哪些结论现在不能下？为什么？' }
    ]},
    { key: 'p2', name: 'P2 行业结构', en: 'Structure', goal: '一至两天吃透结构层：谁在产业链哪一层、谁值多少钱、赛道怎么排序。', steps: [
      { href: '#/chain/L1', page: '产业链 · 算力与硬件层', what: 'GPU/HBM/数据中心/能源：成本曲线的物理约束。', ask: '为什么说电力正在取代芯片成为终极约束？' },
      { href: '#/chain/L3', page: '产业链 · 平台与工具层', what: '谁离开发者最近，谁捕获分发。', ask: 'MCP 协议改变了平台的什么力量结构？' },
      { href: '#/chain/L4', page: '产业链 · 行业应用层', what: '智能变成收入的地方，12 个应用方向。', ask: '哪几个应用已跑通变现，哪几个还在烧钱？' },
      { href: '#/chain/L5', page: '产业链 · 商业与生态层', what: '利润分配与规则制定：融资、并购、监管、联盟。', ask: '2026 年最大的三笔整合是什么、改变了什么？' },
      { href: '#/players/table', page: '玩家总表', what: '20 个有追踪数据的核心玩家与 join 统计。', ask: '哪些玩家的线索数与大事数不匹配（追踪欠债）？' },
      { href: '#/directory/companies', page: '公司名录', what: '32 家公司的定位速查，提及量级一看便知。', ask: '哪些公司你听说过但本库几乎没有覆盖？' },
      { href: '#/models/table', page: '模型总表', what: '12 个前沿模型的规格登记，字段留空=待回填。', ask: '当前旗舰与开源的实际差距体现在哪些字段？' },
      { href: '#/scores/rank', page: '赛道评分卡', what: '五维评分下的研究优先级排序。', ask: '在你自己的权重下，前三名是谁？与默认排序差在哪？' },
      { href: '#/scores/weights', page: '权重与假设', what: '拖动滑杆重排：机会派与风控派看到的世界不同。', ask: '你的判断偏好更接近哪个预设？' },
      { href: '#/directory/univ', page: '高校与实验室', what: '人才与论文的源头，判断行业未来的先行指标。', ask: '哪些实验室的工作已经体现在产品里？' }
    ]},
    { key: 'p3', name: 'P3 事实与信源', en: 'Evidence', goal: '建立证据链意识：每条结论都能追到条目、来源与日期。', steps: [
      { href: '#/archive/search', page: '全文检索', what: '3512 条精选档案的标题级检索：某话题历史上都报过什么。', ask: '「Hugging Face」的报道在收购前后密度如何变化？' },
      { href: '#/archive/sources', page: '来源分布', what: '348 个信源的分布：信息茧房自查表。', ask: '本库对官方一手源的依赖度有多高？' },
      { href: '#/archive/cats', page: '分类分布', what: '模型/行业/论文/技巧的档案结构。', ask: '哪类信源在增长、哪类在萎缩？' },
      { href: '#/archive/years', page: '年度节奏', what: '2017→2026 的档案年轮。', ask: '档案密度上升是行业加速还是镜像起点所致？' },
      { href: '#/chronicle/monthly', page: '大事记 · 月度统计', what: '月度条数与类型分布：行业节奏的定量刻画。', ask: '哪个月是 2026 的密度峰值？由什么事件贡献？' },
      { href: '#/chronicle/hubs', page: '枢纽事件', what: '同时沉淀到两条以上线索的格局级事件。', ask: '最近三个月有哪些事件是「多线共振」的？' },
      { href: '#/daily/day', page: '日报 · 单日回看', what: '任意一天的全量精选，恢复「当天的现场感」。', ask: '模型发布日的信源结构与平日有何不同？' },
      { href: '#/daily/rhythm', page: '近7日节奏', what: '条数骤降是同步缺口而非行业安静——数据卫生课。', ask: '如何区分「没发生」和「没记录」？' }
    ]},
    { key: 'p4', name: 'P4 核验纪律', en: 'Discipline', goal: '学会像本库一样怀疑：什么别信、什么先存疑、错的怎么改。', steps: [
      { href: '#/verify/queue', page: '核验队列', what: '26 条关押中的存疑事件，四态标记的现场。', ask: '哪些传闻从未通过核验？为什么它们容易传播？' },
      { href: '#/verify/byclue', page: '关联线索', what: '按线索聚合的核验债：欠账最多的线索在哪。', ask: '哪条线索的核验债务最重？' },
      { href: '#/method/standards', page: '收录标准', what: '「官方一手源 + ≥2 家媒体交叉印证」的门槛原文。', ask: '什么规模的事件会被排除在外？' },
      { href: '#/method/methodology', page: '核验方法论', what: '⚠️❓🔍 三级标记的含义与处置流程。', ask: '高度可疑与单源的处置差异是什么？' },
      { href: '#/method/redlines', page: '研究红线', what: '十条铁律：单源不采信、金额带口径、观点可回溯。', ask: '哪三条最能防住幻觉？' },
      { href: '#/method/corrections', page: '修正记录', what: '错过的怎么改：修正留痕机制。', ask: '一次合格的事实修正要写清哪四个字段？' },
      { href: '#/overview/unknowns', page: '未知清单', what: '32 条研究议程：公开承认的认知边界。', ask: '哪条未知最阻碍你现在的判断？' }
    ]},
    { key: 'p5', name: 'P5 商业与资本', en: 'Business', goal: '看懂钱怎么流：token 经济、资本事件、成本结构。', steps: [
      { href: '#/kb/biz', page: '知识库 · 商业模式', what: '十种变现模式的适配条件与坑。', ask: '广告变现为什么是信任税最高的模式？' },
      { href: '#/capital/flow', page: '资本动向', what: '20 条资本事件流水，金额自动抽取（量级参考）。', ask: '收购/融资/IPO 三条线的节奏各是什么？' },
      { href: '#/capital/rank', page: '金额榜', what: '1.25 万亿的 SpaceX-xAI 与其余事件差了几个量级。', ask: '金额 Top 5 里有几笔直接改变了竞争格局？' },
      { href: '#/models/pricing', page: '定价对比', what: '模型价格战的数据面：能对比的只有可证价格。', ask: '降价 75% 与 1/40 定价分别意味着什么？' },
      { href: '#/sim/sim', page: '推理账单', what: '亲手算一次月成本：负载三滑杆 + 账单舱。', ask: '你的产品形态在哪个模型上成本最可行？' },
      { href: '#/sim/table', page: '全模型对比', what: '同负载下全模型的成本排序。', ask: '成本差与能力差之间如何权衡？' },
      { href: '#/kb/method', page: '知识库 · 方法论', what: '数据飞轮与苦涩教训：结构层的判断框架。', ask: '为什么产品护城河要看飞轮而不是 DAU？' },
      { href: '#/kb/career', page: '知识库 · 职业路径', what: '十条职业模式的路径与风险。', ask: '哪条路径与你的现状最接近？缺口是什么？' }
    ]},
    { key: 'p6', name: 'P6 深度研究员', en: 'Deep Research', goal: '进入本台的运用层：把事实、观点、判断、行动串成自己的工作流。', steps: [
      { href: '#/clues/analysis', page: '观点库', what: '120 条结构化判断：事实与观点分离后的观点侧总账。', ask: '哪条判断与你的直觉冲突？去找它的支持证据。' },
      { href: '#/chain/L1/gpu', page: '产业链节点示例（GPU）', what: '节点页如何把全库语料聚到一个坐标上（13 线索/100 档案）。', ask: '换一个节点（如你在意的赛道），聚合暴露了什么缺口？' },
      { href: '#/directory/labs', page: '研究机构', what: '12 个研究机构的定位与覆盖。', ask: '哪些机构的工作尚在你的雷达之外？' },
      { href: '#/theses/ledger', page: '议题账本', what: '把判断写成可结算的账：论点/证据/证伪条件。', ask: '你现在最想写下的一个判断是什么？它的证伪条件呢？' },
      { href: '#/decisions/board', page: '决策台', what: '研究运营的 A/B/C 待决清单。', ask: '三项 A 类决策里，哪项先拍板？' },
      { href: '#/kb/eng', page: '知识库 · 工程方式', what: 'Harness/Eval/Context 工程：AI 产品的工程底座。', ask: '你的项目在哪一层工程上最薄弱？' },
      { href: '#/kb/roles', page: '知识库 · 岗位', what: '14 个岗位的技能与入口。', ask: '团队缺的角色是哪一个？' },
      { href: '#/digest/current', page: '周报 · 本期', what: '近 7 天增量汇编：对外输出的底稿形态。', ask: '本周该向谁说明哪三件事？' },
      { href: '#/actions/open', page: '行动项', what: '把研究变成待办：勾选、截止、双链回线索。', ask: '读完这六条路线后你的第一条行动项是什么？' },
      { href: '#/library/files', page: '文档中心', what: '本库自身的治理文档：产品、路线、架构。', ask: '如果要为这个库贡献内容，规则是什么？' }
    ]},
    { key: 'p7', name: 'P7 操盘闭环', en: 'Ops Loop', goal: '从研究走到行动再回来：机会评分、实验验证、红蓝对抗、风险护栏与系统自身的反馈闭环。', steps: [
      { href: '#/opp/board', page: '机会台 · 评分板', what: '四维评分 + 红旗过滤 + 48h 行动关联：研究必须落为可执行的下一步。', ask: '你手上最像机会的那个想法，四维各打几分？它的 48h 行动是什么？' },
      { href: '#/exp/ledger', page: '实验登记簿', what: '假设、可证伪判据、成本、截止、结果——把结论当假设跑实验。', ask: '你的下一个判断，能用哪个 200 元以内、两周以内的实验证伪？' },
      { href: '#/red/board', page: '影子董事会', what: '五位立场极端的角色轮询拷问：CFO 算算术、做空分析师全力论证你会失败。', ask: '把这个想法交给做空分析师，最强的反面证据会是什么？' },
      { href: '#/risk/cash', page: '护栏台 · 压力测试', what: '悲观假设下的现金跑道与盈亏平衡：市场规模最后都要落到这张表。', ask: '获客成本翻倍时，你的现金能撑几个月？' },
      { href: '#/meta/signals', page: '系统台 · 信号回流', what: '实验结果回写为数据源置信度，连败降权：系统的反馈闭环。', ask: '哪个信源最近连续骗了你？它的权重该降吗？' }
    ]}
  ],
  tour: [
    { href: '#/guide/paths', label: '阅读指南', note: '先看课程表：六条路线对应六种深度' },
    { href: '#/overview/panorama', label: '总览 · 全景', note: '全台家底的第一次点名' },
    { href: '#/chain/map', label: '产业链 · 全景', note: '五层价值流：行业骨架' },
    { href: '#/chain/L1', label: 'L1 算力与硬件', note: '成本曲线的物理约束' },
    { href: '#/chain/L2', label: 'L2 数据与模型', note: '智能的供给形成' },
    { href: '#/chain/L3', label: 'L3 平台与工具', note: '离开发者最近的一层' },
    { href: '#/chain/L4', label: 'L4 行业应用', note: '智能变成收入' },
    { href: '#/chain/L5', label: 'L5 商业与生态', note: '利润与规则的分配' },
    { href: '#/sectors/matrix', label: '赛道矩阵', note: '17 赛道的热与冷' },
    { href: '#/scores/rank', label: '赛道评分卡', note: '五维评分下的优先级' },
    { href: '#/players/table', label: '玩家总表', note: '谁在场，追踪欠债在哪' },
    { href: '#/directory/companies', label: '公司名录', note: '32 家速查与覆盖缺口' },
    { href: '#/models/table', label: '模型总表', note: '旗舰与开源的字段差距' },
    { href: '#/models/pricing', label: '定价对比', note: '价格战的数据面' },
    { href: '#/sim/sim', label: '推理账单', note: '亲手算一次成本' },
    { href: '#/capital/flow', label: '资本动向', note: '钱的流向流水' },
    { href: '#/capital/rank', label: '金额榜', note: '万亿级与十亿级的分层' },
    { href: '#/topics/table', label: '主题总表', note: '17 主题的追踪分布' },
    { href: '#/clues/list', label: '线索库', note: '产业叙事的原子' },
    { href: '#/clues/analysis', label: '观点库', note: '120 条判断的观点侧' },
    { href: '#/clues/hot', label: '线索热榜', note: '追踪强度排行' },
    { href: '#/chronicle/flow', label: '大事记 · 流水', note: '行业年鉴' },
    { href: '#/chronicle/hubs', label: '枢纽事件', note: '多线共振的格局事件' },
    { href: '#/archive/search', label: '全文检索', note: '历史现场检索' },
    { href: '#/archive/sources', label: '来源分布', note: '信源结构自查' },
    { href: '#/daily/day', label: '日报 · 单日', note: '回到某一天的现场' },
    { href: '#/verify/queue', label: '核验队列', note: '什么别信，为什么' },
    { href: '#/method/redlines', label: '研究红线', note: '十条铁律' },
    { href: '#/overview/unknowns', label: '未知清单', note: '公开承认的认知边界' },
    { href: '#/directory/labs', label: '研究机构', note: '行业未来的源头' },
    { href: '#/glossary/dict', label: '术语词典', note: '公共词汇表' },
    { href: '#/kb/eng', label: '知识库 · 工程方式', note: 'Harness/Eval/Context' },
    { href: '#/kb/roles', label: '知识库 · 岗位', note: '14 个岗位地图' },
    { href: '#/kb/career', label: '知识库 · 职业路径', note: '十条职业模式' },
    { href: '#/theses/ledger', label: '议题账本', note: '把判断写成可结算的账' },
    { href: '#/digest/current', label: '周报 · 本期', note: '输出物的底稿' },
    { href: '#/actions/open', label: '行动项', note: '研究变行动' },
    { href: '#/library/files', label: '文档中心', note: '本库的治理文档' }
  ]
};
