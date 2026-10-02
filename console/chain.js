/* AI 产业链五层拆解，手工策展（本文件不被构建覆盖）。
 * 每个节点 = 产业链上的一页：def 一句话定义，keywords 用于对全库语料（线索/大事/档案/玩家/模型）
 * 做运行时聚合；upstream/downstream 为节点 id，构成价值流关系。
 * 某节点聚合数为 0 不是错误，是采集缺口的信号——与「研究缺口」同一哲学。 */
DB.chain = {
  layers: [
    {
      key: 'L1', name: '算力与硬件层', en: 'Compute & Hardware',
      desc: '价值流的物理底座：芯片、集群、能源与网络。此层决定训练与推理的成本曲线，也是地缘博弈的主战场。',
      nodes: [
        { id: 'gpu', name: 'GPU 与 AI 加速卡', def: '通用 AI 算力的主要供给形态，英伟达居垄断位，AMD 追赶。', keywords: ['nvidia', '英伟达', 'gpu', 'amd', '加速卡', 'blackwell', 'b200', 'h100', '算力芯片'], upstream: ['fab', 'memory'], downstream: ['datacenter', 'cloud'] },
        { id: 'asic', name: '自研 ASIC 与 TPU', def: '云厂商与头部 lab 为特定 workload 自研的专用芯片，追求性价比与供应自主。', keywords: ['tpu', 'asic', '自研芯片', 'trainium', 'mtia', '定制芯片'], upstream: ['fab'], downstream: ['datacenter'] },
        { id: 'fab', name: '先进制程与代工', def: '芯片制造的物理上限：先进制程产能与先进封装是算力供给的硬约束。', keywords: ['台积电', '代工', '制程', '3nm', '2nm', '先进封装', 'cowos'], upstream: [], downstream: ['gpu', 'asic', 'memory'] },
        { id: 'memory', name: 'HBM 与存储', def: '高带宽内存是 AI 芯片的搭配刚需，产能分配直接影响 GPU 供给。', keywords: ['hbm', '存储', '内存', '海力士', '美光', 'dram'], upstream: ['fab'], downstream: ['gpu'] },
        { id: 'datacenter', name: '数据中心与集群', def: '万卡集群与智算中心是把芯片变成可用算力的系统集成层。', keywords: ['数据中心', '算力集群', '超算', '万卡', '智算中心', 'cluster'], upstream: ['gpu', 'asic', 'network', 'energy'], downstream: ['cloud'] },
        { id: 'energy', name: '能源与电力', def: 'AI 的终极约束正从芯片转向电力：兆瓦级供电成为选址第一变量。', keywords: ['电力', '能源', '核电', '供电', '耗电', '兆瓦', '电力供应'], upstream: [], downstream: ['datacenter'] },
        { id: 'network', name: '网络与光互连', def: '集群规模上到万卡后，互连带宽与光模块成为新的瓶颈与生意。', keywords: ['光模块', '互连', 'infiniband', '以太网', '交换机', '组网'], upstream: [], downstream: ['datacenter'] },
        { id: 'cloud', name: '算力租赁与云', def: '把算力按 token 或按卡时卖出去的层，价格即模型创业的成本线。', keywords: ['算力租赁', 'coreweave', 'aws', 'azure', 'gcp', '云厂商', '算力价格', '租赁'], upstream: ['datacenter'], downstream: ['maas', 'training'] },
        { id: 'edge', name: '边缘与端侧算力', def: '手机、PC 与终端设备上的本地推理，隐私与延迟驱动的新战场。', keywords: ['端侧', '边缘', 'npu', '手机芯片', '本地推理', '终端算力'], upstream: ['gpu', 'asic'], downstream: ['device', 'assistant'] },
        { id: 'robothw', name: '机器人本体与执行器', def: '具身智能的物理载体：电机、减速器、灵巧手与传感器，中国供应链占优。', keywords: ['机器人', '执行器', '减速器', '电机', '灵巧手', '传感器', '宇树', '本体'], upstream: [], downstream: ['embodiedapp'] },
        { id: 'supply', name: '供应链与出口管制', def: '地缘政治直接改写算力供给曲线：禁售、替代与转口是常态变量。', keywords: ['出口管制', '禁售', '供应链', '制裁', '地缘', 'h20', '管制'], upstream: [], downstream: ['gpu', 'datacenter'] }
      ]
    },
    {
      key: 'L2', name: '数据与模型层', en: 'Data & Models',
      desc: '把数据变成智能的层：预训练语料、前沿模型、开源权重、训练方法与推理优化。智能本身的供给在这里形成。',
      nodes: [
        { id: 'pretrain', name: '预训练数据', def: '高质量语料的存量与版权是预训练的第一性约束，数据墙叙事的源头。', keywords: ['预训练', '训练数据', '语料', '数据集', '版权数据', '数据墙'], upstream: [], downstream: ['frontier', 'openweight'] },
        { id: 'synth', name: '合成数据与标注', def: '用模型生成训练数据缓解数据墙，标注产业随之转型。', keywords: ['合成数据', '标注', '数据工厂', '人类反馈', '数据合成'], upstream: ['frontier'], downstream: ['training'] },
        { id: 'frontier', name: '前沿闭源模型', def: 'GPT/Claude/Gemini/Grok 的旗舰竞赛：能力上限的定义者，也是 API 经济的卖方。', keywords: ['gpt', 'claude', 'gemini', 'grok', '前沿模型', '旗舰模型', 'astra', 'fable', 'mythos'], upstream: ['pretrain', 'synth', 'cloud'], downstream: ['maas', 'agentfw', 'coding'] },
        { id: 'openweight', name: '开源权重生态', def: 'Qwen/DeepSeek/GLM/Llama 等开放权重阵营：把模型变成公共品，改写定价权；Hugging Face 被收购后社区治理进入巨头时代。', keywords: ['开源', '权重', 'apache', 'mit 许可', 'llama', 'qwen', 'deepseek', 'glm', '开源模型', 'hugging face', 'huggingface'], upstream: ['pretrain'], downstream: ['maas', 'economics'] },
        { id: 'training', name: '训练方法与对齐', def: '预训练之上的后训练：RLHF、蒸馏、强化学习决定模型的可用性与性格。', keywords: ['rlhf', '对齐', '后训练', '蒸馏', '微调', '强化学习', '训练方法'], upstream: ['synth'], downstream: ['frontier', 'guardrail'] },
        { id: 'inference', name: '推理优化与引擎', def: 'vLLM/量化/KV cache 等系统工程，决定单位算力能服务多少用户。', keywords: ['推理', 'vllm', 'sglang', '量化', 'kv cache', '吞吐', '推理引擎', '推理优化'], upstream: ['frontier', 'openweight'], downstream: ['maas', 'deploy'] },
        { id: 'bench', name: '评测与基准', def: 'Benchmark 是行业的度量衡：榜单名次直接影响商业信任与叙事。', keywords: ['基准', 'benchmark', 'sota', '评测', 'arc-agi', 'lmarena', '榜单', '刷榜'], upstream: [], downstream: ['frontier', 'openweight'] },
        { id: 'multimodal', name: '多模态与视频生成', def: '视觉/音频/视频的统一建模，视频生成是当前竞争最激烈的细分。', keywords: ['多模态', '视频生成', '图像生成', 'sora', 'veo', 'seedance', '可灵', '视频模型'], upstream: ['frontier'], downstream: ['creative'] },
        { id: 'speech', name: '语音与音频模型', def: 'TTS、实时语音与音乐生成的模型层， voice 是下一个交互入口。', keywords: ['语音', '音频', 'tts', '音乐生成', 'suno', '实时语音', '全双工'], upstream: ['frontier'], downstream: ['audio'] },
        { id: 'worldmodel', name: '世界模型', def: '让模型理解物理世界的尝试：视频生成作世界模拟器，通往具身智能。', keywords: ['世界模型', '物理仿真', '世界模拟', 'genie'], upstream: ['multimodal'], downstream: ['embodiedapp'] },
        { id: 'token', name: '模型定价与 token 经济', def: '每百万 token 的定价体系是智能的价格发现机制，降价即行业信号。', keywords: ['定价', '降价', 'token', '价格战', '每百万', '价格'], upstream: ['frontier', 'openweight', 'inference'], downstream: ['bizmodel', 'economics'] }
      ]
    },
    {
      key: 'L3', name: '平台与工具层', en: 'Platform & Tools',
      desc: '把模型能力变成开发者可用的产品基础设施：框架、API、搜索、护栏与协议。谁离开发者最近，谁捕获分发。',
      nodes: [
        { id: 'agentfw', name: '智能体框架与编排', def: 'Agent 的开发框架与多智能体编排层，应用复杂度的承载者。', keywords: ['智能体', 'agent 框架', '编排', '多智能体', 'langgraph', 'autogen', 'crewai', 'agent'], upstream: ['frontier', 'maas'], downstream: ['enterprise', 'office'] },
        { id: 'coding', name: 'Agentic 编码', def: 'AI 编码是模型变现最快、竞争最白热的场景：IDE、终端与云端智能体三条路线。', keywords: ['编码', 'cursor', 'claude code', 'copilot', 'ide', 'devin', 'codex', '代码'], upstream: ['frontier', 'maas'], downstream: ['devtools', 'devhost'] },
        { id: 'devhost', name: '代码托管与 CI', def: '仓库与流水线是 agent 时代的新基座：自建托管（Origin 类）正在挑战 GitHub 的中心地位。', keywords: ['代码托管', 'github', 'gitlab', '仓库', 'ci', '版本控制', 'origin'], upstream: ['coding'], downstream: ['devtools'] },
        { id: 'maas', name: 'MaaS 与模型 API', def: '把模型按调用卖的开发者入口，价格战与生态锁定的主阵地。', keywords: ['api', 'maas', '开放平台', '模型服务', '推理服务', '接口'], upstream: ['frontier', 'openweight', 'inference', 'cloud'], downstream: ['agentfw', 'coding', 'rag'] },
        { id: 'search', name: 'AI 搜索与答案引擎', def: '用生成式答案重构信息获取，直接动摇传统搜索的分发权。', keywords: ['ai 搜索', '答案引擎', 'perplexity', '搜索引擎', '信息获取', 'ai 浏览器'], upstream: ['frontier', 'rag'], downstream: ['assistant'] },
        { id: 'rag', name: 'RAG 与知识库', def: '企业把私有知识接进模型的标准化路径，落地项目的第一站。', keywords: ['rag', '向量', '知识库', '检索增强', 'embedding', '企业知识'], upstream: ['maas'], downstream: ['enterprise', 'legal'] },
        { id: 'devtools', name: '开发者工具链', def: 'SDK、CLI 与调试工作流：开发体验即生态护城河。', keywords: ['开发者工具', 'sdk', 'cli', '调试', '工作流', '开发者'], upstream: ['coding'], downstream: ['office'] },
        { id: 'guardrail', name: '安全护栏与评测服务', def: '红队、护栏与安全评估的产业化：前沿能力 commercialize 的前提。', keywords: ['护栏', '安全评估', '红队', 'preparedness', 'aisi', '安全评测'], upstream: ['training'], downstream: ['regulation'] },
        { id: 'deploy', name: '部署与可观测', def: '模型的灰度、监控与成本治理：生产环境与 demo 的分界线。', keywords: ['部署', '可观测', '监控', '灰度', '运维', '交付', 'fde', '部署工程', '实施', '伙伴认证', '专业服务'], upstream: ['inference'], downstream: ['enterprise'] },
        { id: 'computeruse', name: '浏览器与计算机使用', def: '让模型直接操作电脑与浏览器：通用 agent 的最后一公里。', keywords: ['computer use', '浏览器', '桌面自动化', '操作电脑', 'computer'], upstream: ['agentfw'], downstream: ['office', 'enterprise'] },
        { id: 'mcp', name: '协议与互操作', def: 'MCP 等协议把工具调用标准化：agent 生态的 USB 接口。', keywords: ['mcp', '协议', '互操作', 'function calling', '标准化'], upstream: ['agentfw'], downstream: ['devtools', 'enterprise'] }
      ]
    },
    {
      key: 'L4', name: '行业应用层', en: 'Applications',
      desc: '智能变成收入的地方：消费助手、企业服务、垂直行业与创作工具。应用层的成败决定整条链的商业闭环。',
      nodes: [
        { id: 'assistant', name: '消费级 AI 助手', def: '面向大众的超级入口：ChatGPT/豆包/Kimi 的用户数竞赛与广告变现。', keywords: ['chatgpt', '助手', '豆包', 'kimi', '月之暗面', '消费级', '用户数'], upstream: ['maas', 'search', 'edge'], downstream: ['bizmodel', 'distribution'] },
        { id: 'enterprise', name: '企业服务与客服', def: '企业级落地最宽的跑道：客服、营销、销售与内部效率。', keywords: ['企业', '客服', '营销', 'crm', '销售', 'b 端', 'to b'], upstream: ['agentfw', 'rag'], downstream: ['bizmodel'] },
        { id: 'health', name: '医疗 AI', def: '诊断、药物研发与临床流程：监管最严、周期最长、价值最深的垂直。', keywords: ['医疗', '诊断', '药物', '临床', '健康', '医院'], upstream: ['rag', 'multimodal'], downstream: ['bizmodel'] },
        { id: 'finance', name: '金融 AI', def: '投研、量化与风控：数据密集与合规敏感的行业。', keywords: ['金融', '投研', '量化', '风控', '银行', '证券', '保险', 'claude for excel', 'chatgpt for excel', 'grok for excel', '盈透', 'interactive brokers', '普华永道', '欧洲央行'], upstream: ['rag'], downstream: ['bizmodel'] },
        { id: 'legal', name: '法律与合规 AI', def: '合同、检索与合规自动化：文本密集型行业的天然适配。', keywords: ['法律', '律师', '合规', '合同', '司法', '法务', 'harvey', 'legora', 'legal-kb'], upstream: ['rag'], downstream: ['bizmodel'] },
        { id: 'edu', name: '教育 AI', def: '辅导、测评与个性化学习：政策敏感但需求刚性。', keywords: ['教育', '学习成本', '学习新方式', '学习方法论', '学习体验', '辅导', '课程', '学校', '教学', 'chatgpt for teens', 'guided learning', 'learnvector', 'k-12', '教师', '教育部'], upstream: ['assistant'], downstream: ['bizmodel'] },
        { id: 'creative', name: '图像与视频创作', def: '生成式创作工具：从玩具到生产力的临界点正在发生。', keywords: ['创作', '视频', '图像', 'midjourney', '剪辑', '设计', '生成'], upstream: ['multimodal'], downstream: ['distribution'] },
        { id: 'audio', name: '音乐与语音产品', def: '音乐生成、播客与有声内容：版权与创作伦理的焦点区。', keywords: ['音乐', '播客', '配音', '有声', '语音产品'], upstream: ['speech'], downstream: ['distribution'] },
        { id: 'device', name: 'AI 硬件终端', def: '把模型装进眼镜、耳机与专用硬件：入口焦虑的产物。', keywords: ['ai 硬件', '眼镜', '耳机', '终端设备', '硬件产品'], upstream: ['edge', 'assistant'], downstream: ['distribution'] },
        { id: 'embodiedapp', name: '具身智能应用', def: '人形机器人进入工厂与家庭：整机、场景与数据闭环的竞赛。', keywords: ['具身', '人形机器人', 'figure', 'optimus', '工厂', '仓储', '运动会'], upstream: ['robothw', 'worldmodel'], downstream: ['bizmodel'] },
        { id: 'game', name: '游戏与娱乐', def: 'NPC、内容生成与互动叙事：游戏是最宽容的试验场。', keywords: ['游戏', 'npc', '互动', '娱乐', '叙事'], upstream: ['agentfw', 'multimodal'], downstream: ['distribution'] },
        { id: 'office', name: '办公与协同', def: '文档、PPT、会议与邮件的 AI 化：存量软件的重新洗牌。', keywords: ['办公', '协同', '文档', 'ppt', '会议', '邮件', '效率', 'workbuddy', 'qwenwork', '千问办公', 'trae', '钉钉', '飞书', 'copilot', 'workspace'], upstream: ['agentfw', 'computeruse'], downstream: ['distribution'] }
      ]
    },
    {
      key: 'L5', name: '商业与生态层', en: 'Business & Ecosystem',
      desc: '决定谁活下来谁定规则的层：商业模式、资本、人才、监管与联盟。产业链的利润分配在这里完成。',
      nodes: [
        { id: 'bizmodel', name: '商业模式与变现', def: '订阅、API、广告与按效果付费：智能的收费方式仍在发明中。', keywords: ['商业模式', '变现', 'arr', '收入', '订阅', '广告', '付费'], upstream: ['assistant', 'enterprise', 'token'], downstream: ['economics'] },
        { id: 'funding', name: '融资与估值', def: '万亿级的资本开支与融资竞赛：一级市场的信念定价。', keywords: ['融资', '估值', '领投', '风投', '筹款', '融资轮'], upstream: [], downstream: ['economics'] },
        { id: 'mna', name: '并购与整合', def: '巨头用并购补能力拼图：SpaceX-xAI、NVIDIA-HF 式的重构。', keywords: ['收购', '并购', '合并', '整合', '交割', '全资'], upstream: [], downstream: ['competition'] },
        { id: 'talent', name: '人才流动', def: '联创离职、研究员创业与人才战：智力的再分配即未来的分配。', keywords: ['离职', '人才', '联创', '跳槽', '招聘', '研究员'], upstream: [], downstream: ['competition'] },
        { id: 'delivery', name: '交付与实施（FDE）', def: '把模型接进客户现场：FDE 人力、服务伙伴认证与交付毛利，AI 应用的乙方层。', keywords: ['fde', '交付', '部署工程', '前沿部署', '实施', '服务伙伴', '专业服务', '伙伴认证', 'adp 认证', '返点', '保证金', '交付成本'], upstream: ['talent'], downstream: ['enterprise'] },
        { id: 'regulation', name: '监管与地缘', def: '欧盟 AI Act、美国出口管制与各国立法：合规成本成为产品变量。', keywords: ['监管', '法案', '欧盟', '立法', '合规要求', '执法', '管制'], upstream: [], downstream: ['supply', 'bizmodel'] },
        { id: 'opensource', name: '开源治理与许可', def: 'Apache/MIT 与开源定义之争：许可即商业策略。', keywords: ['开源许可', 'apache', 'mit 许可', '许可证', '开源治理'], upstream: ['openweight'], downstream: ['economics'] },
        { id: 'economics', name: '成本与单位经济', def: '训练成本、推理毛利与烧钱速度：智能生意的会计学。', keywords: ['成本', '毛利', '单位经济', '烧钱', '盈利', '亏损', '现金流'], upstream: ['bizmodel', 'funding', 'token'], downstream: [] },
        { id: 'distribution', name: '分发与渠道', def: '用户数、DAU 与入口占位：应用层的胜负手。', keywords: ['分发', '渠道', '用户数', 'dau', '增长', '获客', '留存'], upstream: ['assistant', 'creative', 'device'], downstream: ['competition'] },
        { id: 'competition', name: '竞争格局与阵营', def: 'OpenAI 系、Anthropic 系、开源阵营与巨头生态的合纵连横。', keywords: ['竞争', '阵营', '对抗', '格局', '抢占', '对手'], upstream: ['mna', 'talent', 'distribution'], downstream: [] },
        { id: 'alliance', name: '标准与联盟', def: '算力联盟、模型合作与标准协议：生态位的中长期锁定。', keywords: ['联盟', '标准', '合作', '签署', '伙伴', '共同'], upstream: [], downstream: ['competition'] }
      ]
    }
  ]
};
