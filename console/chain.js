/* AI 产业链五层拆解，手工策展（本文件不被构建覆盖）。
 * 每个节点 = 产业链上的一页：def 一句话定义，keywords 用于对全库语料（线索/大事/档案/玩家/模型）
 * 做运行时聚合；upstream/downstream 为节点 id，构成价值流关系。
 * 某节点聚合数为 0 不是错误，是采集缺口的信号——与「研究缺口」同一哲学。
 *
 * 拆解卡（Anatomy Card，2026-10-22 起）——每个节点带结构化判断字段，字段来源与口径：
 *   maturity 阶段：六阶段（萌芽/过热/挤泡沫/爬坡/成熟/重构），S 曲线 + Gartner 炒作曲线的改造版，
 *             刻画「该节点的行业位置」，是分析判断不是事实；
 *   why       价值来源：这层为什么存在、钱从哪来（波特价值链口径）；
 *   moat      护城河：当前最有效的壁垒形态（一句话）；
 *   bottleneck 瓶颈：当前卡住规模化的第一约束；
 *   signals   领先指标：先于收入/共识变化的观测点（卖方研究 catalyst 模型口径）；
 *   sub       二级细分：关键节点再往下拆一层（MECE 口径），细分不单设路由、渲染在节点页。
 * 以上全部是观点层：与 def 一样可被证据修正，修正走 git 留痕。 */
DB.chain = {
  layers: [
    {
      key: 'L1', name: '算力与硬件层', en: 'Compute & Hardware',
      desc: '价值流的物理底座：芯片、集群、能源与网络。此层决定训练与推理的成本曲线，也是地缘博弈的主战场。',
      nodes: [
        { id: 'gpu', name: 'GPU 与 AI 加速卡', def: '通用 AI 算力的主要供给形态，英伟达居垄断位，AMD 追赶。', keywords: ['nvidia', '英伟达', 'gpu', 'amd', '加速卡', 'blackwell', 'b200', 'h100', '算力芯片'], upstream: ['fab', 'memory'], downstream: ['datacenter', 'cloud'], maturity: '爬坡期', why: '一切智能供给的物理入口，训练与推理需求叠加放量。', moat: 'CUDA 软件生态 + 互连全栈（NVLink/InfiniBand）双重锁定。', bottleneck: '先进制程与 CoWoS 封装产能、HBM 配给。', signals: ['数据中心 GPU 出货量与交期', '云厂商资本开支指引'], sub: [
          { id: 'train', name: '训练旗舰卡', def: 'B/H 系旗舰与整机柜形态，服务前沿训练与大规模后训练。' },
          { id: 'infer', name: '推理与性价比卡', def: '低精度、高吞吐路线（Ultrafast 类），推理成本曲线的硬件端。' },
          { id: 'rack', name: '机柜与互连方案', def: 'NVLink 机柜、整机柜交付：卖点从单卡转向系统级吞吐。' }
        ] },
        { id: 'asic', name: '自研 ASIC 与 TPU', def: '云厂商与头部 lab 为特定 workload 自研的专用芯片，追求性价比与供应自主。', keywords: ['tpu', 'asic', '自研芯片', 'trainium', 'mtia', '定制芯片'], upstream: ['fab'], downstream: ['datacenter'], maturity: '爬坡期', why: '云厂商把推理成本曲线握回自己手里、对冲 GPU 供给风险的手段。', moat: '与自家 workload 和采购规模深度耦合，外部难以复制。', bottleneck: '软件生态（CUDA 迁移成本）与代工产能分配。', signals: ['TPU/Trainium 对外开放比例', '自研芯片对内部负载的替代率'], sub: [
          { id: 'cloudasic', name: '云自研（TPU/Trainium/MTIA）', def: '头部云厂商的定制路线，成本优势随规模放大。' },
          { id: 'cnasic', name: '国产替代（昇腾等）', def: '供给自主驱动的第二条供给曲线，生态成熟度是差距所在。' }
        ] },
        { id: 'fab', name: '先进制程与代工', def: '芯片制造的物理上限：先进制程产能与先进封装是算力供给的硬约束。', keywords: ['台积电', '代工', '制程', '3nm', '2nm', '先进封装', 'cowos'], upstream: [], downstream: ['gpu', 'asic', 'memory'], maturity: '成熟期', why: '算力供给的物理上限：制程与封装产能决定全行业出货天花板。', moat: '十年量级的工艺积累与千亿级资本门槛。', bottleneck: '3nm/2nm 产能与 CoWoS 先进封装扩产节奏。', signals: ['台积电 AI 相关营收占比', '先进封装扩产与交期'] },
        { id: 'memory', name: 'HBM 与存储', def: '高带宽内存是 AI 芯片的搭配刚需，产能分配直接影响 GPU 供给。', keywords: ['hbm', '存储', '内存', '海力士', '美光', 'dram'], upstream: ['fab'], downstream: ['gpu'], maturity: '爬坡期', why: 'HBM 是 AI 芯片的标配刚需，堆叠容量决定单卡能力上限。', moat: '三家寡头格局与 DRAM 工艺深度耦合，新进入者周期以年计。', bottleneck: 'HBM 产能分配（大客户优先）与堆叠良率。', signals: ['HBM 合约价与预订量', '单卡 HBM 容量趋势'] },
        { id: 'datacenter', name: '数据中心与集群', def: '万卡集群与智算中心是把芯片变成可用算力的系统集成层。', keywords: ['数据中心', '算力集群', '超算', '万卡', '智算中心', 'cluster'], upstream: ['gpu', 'asic', 'network', 'energy'], downstream: ['cloud'], maturity: '爬坡期', why: '把芯片变成可用算力的系统集成层，交付周期本身就是供给约束。', moat: '选址、电力接入与运维经验的本地化壁垒。', bottleneck: '电力接入与关键设备交期（以季度计）。', signals: ['智算中心开工与上架率', 'GPU 利用率/空转率'] },
        { id: 'energy', name: '能源与电力', def: 'AI 的终极约束正从芯片转向电力：兆瓦级供电成为选址第一变量。', keywords: ['电力', '能源', '核电', '供电', '耗电', '兆瓦', '电力供应'], upstream: [], downstream: ['datacenter'], maturity: '过热期', why: 'AI 的终极约束正从芯片转向兆瓦：电力即产能。', moat: '电网接入权与长协核电等稀缺资源位。', bottleneck: '并网周期与电网容量（以年计），跑不赢负载增长。', signals: ['核电与长期购电协议签约量', '数据中心用电审批节奏'], sub: [
          { id: 'nuclear', name: '核电与长期购电', def: '基荷供电的主流解：核电新建、重启与多年期 PPA。' },
          { id: 'gas', name: '燃气轮机与备用电源', def: '并网慢的过渡解：现场燃气轮机与储能。' },
          { id: 'grid', name: '电网与选址', def: '并网队列与电价结构决定选址，主权算力布局的一环。' }
        ] },
        { id: 'network', name: '网络与光互连', def: '集群规模上到万卡后，互连带宽与光模块成为新的瓶颈与生意。', keywords: ['光模块', '互连', 'infiniband', '以太网', '交换机', '组网'], upstream: [], downstream: ['datacenter'], maturity: '爬坡期', why: '万卡集群的规模上限由互连带宽决定，光模块量价齐升。', moat: '光器件工艺良率与客户认证周期。', bottleneck: '1.6T 光模块产能与交换芯片供给。', signals: ['光模块龙头月度营收', '以太网 RDMA 对 IB 的份额侵蚀'] },
        { id: 'cloud', name: '算力租赁与云', def: '把算力按 token 或按卡时卖出去的层，价格即模型创业的成本线。', keywords: ['算力租赁', 'coreweave', 'aws', 'azure', 'gcp', '云厂商', '算力价格', '租赁'], upstream: ['datacenter'], downstream: ['maas', 'training'], maturity: '成熟期', why: '算力的分销层：按卡时/token 卖出，价格即下游创业成本线。', moat: '企业合同、混合云粘性与合规资质。', bottleneck: 'GPU 供给分配与价格战对毛利的挤压。', signals: ['算力租赁价格指数', '云厂商 AI 收入占比'] },
        { id: 'edge', name: '边缘与端侧算力', def: '手机、PC 与终端设备上的本地推理，隐私与延迟驱动的新战场。', keywords: ['端侧', '边缘', 'npu', '手机芯片', '本地推理', '终端算力'], upstream: ['gpu', 'asic'], downstream: ['device', 'assistant'], maturity: '萌芽期', why: '隐私与延迟驱动的本地推理，端侧是下一个分发入口的物化。', moat: 'SoC 集成能力与终端出货量。', bottleneck: '端侧模型能力不足与 NPU 生态碎片化。', signals: ['旗舰机 NPU 算力配置', '端侧模型跑分与实际调用量'] },
        { id: 'robothw', name: '机器人本体与执行器', def: '具身智能的物理载体：电机、减速器、灵巧手与传感器，中国供应链占优。', keywords: ['机器人', '执行器', '减速器', '电机', '灵巧手', '传感器', '宇树', '本体'], upstream: [], downstream: ['embodiedapp'], maturity: '过热期', why: '具身智能的物理载体，中国供应链在执行器/减速器环节占优。', moat: '精密制造的规模成本与快速迭代。', bottleneck: '灵巧手与传感器仍是短板，整机未过经济性关。', signals: ['人形机器人出货量与成本曲线', '核心部件国产化率'] },
        { id: 'supply', name: '供应链与出口管制', def: '地缘政治直接改写算力供给曲线：禁售、替代与转口是常态变量。', keywords: ['出口管制', '禁售', '供应链', '制裁', '地缘', 'h20', '管制'], upstream: [], downstream: ['gpu', 'datacenter'], maturity: '成熟期', why: '地缘变量直接改写供给曲线与成本结构，常态化的政策风险。', moat: '合规体系与多元化产能布局。', bottleneck: '管制规则的不确定性本身（无法对冲，只能冗余）。', signals: ['出口管制清单更新', '转口与替代链份额变化'] }
      ]
    },
    {
      key: 'L2', name: '数据与模型层', en: 'Data & Models',
      desc: '把数据变成智能的层：预训练语料、前沿模型、开源权重、训练方法与推理优化。智能本身的供给在这里形成。',
      nodes: [
        { id: 'pretrain', name: '预训练数据', def: '高质量语料的存量与版权是预训练的第一性约束，数据墙叙事的源头。', keywords: ['预训练', '训练数据', '语料', '数据集', '版权数据', '数据墙'], upstream: [], downstream: ['frontier', 'openweight'], maturity: '爬坡期', why: '语料存量与版权是智能的第一性约束，数据墙叙事的源头。', moat: '独家授权与私有数据壁垒。', bottleneck: '高质量人类文本见底，清洗与版权成本陡增。', signals: ['版权授权成交额', '数据中心容量（GW 口径）'] },
        { id: 'synth', name: '合成数据与标注', def: '用模型生成训练数据缓解数据墙，标注产业随之转型。', keywords: ['合成数据', '标注', '数据工厂', '人类反馈', '数据合成'], upstream: ['frontier'], downstream: ['training'], maturity: '爬坡期', why: '用生成缓解数据墙：质量闸门决定它是补药还是毒药。', moat: '过滤漏斗与验证闭环的工程资产。', bottleneck: '模式坍缩与分布多样性损失。', signals: ['前沿模型训练中合成占比披露', '合成数据工具与论文热度'] },
        { id: 'frontier', name: '前沿闭源模型', def: 'GPT/Claude/Gemini/Grok 的旗舰竞赛：能力上限的定义者，也是 API 经济的卖方。', keywords: ['gpt', 'claude', 'gemini', 'grok', '前沿模型', '旗舰模型', 'astra', 'fable', 'mythos'], upstream: ['pretrain', 'synth', 'cloud'], downstream: ['maas', 'agentfw', 'coding'], maturity: '爬坡期', why: '能力上限的定义者，API 经济的卖方龙头。', moat: '算力获取 + 后训练 know-how + 安全合规资质。', bottleneck: '训练成本与能源约束；旗舰差异化正在收窄。', signals: ['旗舰迭代间隔与幅度', 'API 价格与毛利结构'], sub: [
          { id: 'flagship', name: '旗舰档', def: 'Astra/Gemini 旗舰/Opus 级：能力天花板与品牌锚。' },
          { id: 'fast', name: '快速档', def: 'Flash/Turbo/Sol 类：成本敏感场景的主力出货位。' },
          { id: 'cyber', name: '安全特化档', def: 'Cyber/Argon 类：受控开放的网络防御特化路线。' }
        ] },
        { id: 'openweight', name: '开源权重生态', def: 'Qwen/DeepSeek/GLM/Llama 等开放权重阵营：把模型变成公共品，改写定价权；Hugging Face 被收购后社区治理进入巨头时代。', keywords: ['开源', '权重', 'apache', 'mit 许可', 'llama', 'qwen', 'deepseek', 'glm', '开源模型', 'hugging face', 'huggingface'], upstream: ['pretrain'], downstream: ['maas', 'economics'], maturity: '爬坡期', why: '把模型变成公共品，改写定价权与地缘供给格局。', moat: '社区生态、迭代速度与多语种覆盖。', bottleneck: '推理成本与商业化闭环——谁为开源买单尚未定型。', signals: ['开源与闭源的智能指数差距', '权重下载量与衍生模型数'] },
        { id: 'training', name: '训练方法与对齐', def: '预训练之上的后训练：RLHF、蒸馏、强化学习决定模型的可用性与性格。', keywords: ['rlhf', '对齐', '后训练', '蒸馏', '微调', '强化学习', '训练方法'], upstream: ['synth'], downstream: ['frontier', 'guardrail'], maturity: '成熟期', why: '决定模型可用性与「性格」的环节，能力竞赛的暗线。', moat: '后训练 know-how 与偏好数据资产。', bottleneck: '可验证领域之外的奖励设计（开放域收益有限）。', signals: ['新模型行为差异的对比分析', 'RLVR 与验证器相关披露'] },
        { id: 'inference', name: '推理优化与引擎', def: 'vLLM/量化/KV cache 等系统工程，决定单位算力能服务多少用户。', keywords: ['推理', 'vllm', 'sglang', '量化', 'kv cache', '吞吐', '推理引擎', '推理优化'], upstream: ['frontier', 'openweight'], downstream: ['maas', 'deploy'], maturity: '爬坡期', why: '决定单位算力能服务多少用户，是成本曲线的工程端。', moat: '系统工程深度与硬件耦合优化。', bottleneck: '长上下文与高并发下的 KV 带宽墙。', signals: ['推理引擎版本与吞吐基准', '单 token 成本下降速率'], sub: [
          { id: 'engine', name: '推理引擎（vLLM/SGLang）', def: '调度、批处理与内核优化的主战场。' },
          { id: 'quant', name: '量化与压缩', def: 'FP4/FP8 与 KV 压缩：精度换吞吐的性价比杠杆。' },
          { id: 'serve', name: '服务化与调度', def: '多模型路由、弹性伸缩与冷启动治理。' }
        ] },
        { id: 'bench', name: '评测与基准', def: 'Benchmark 是行业的度量衡：榜单名次直接影响商业信任与叙事。', keywords: ['基准', 'benchmark', 'sota', '评测', 'arc-agi', 'lmarena', '榜单', '刷榜'], upstream: [], downstream: ['frontier', 'openweight'], maturity: '挤泡沫期', why: '行业的度量衡：榜单名次直接影响商业信任与叙事。', moat: '基准的方法论公信力与防污染设计。', bottleneck: '刷榜与数据污染侵蚀公信力，「评测作弊」事件频发。', signals: ['新基准更替速度', '模型作弊/污染曝光事件'] },
        { id: 'multimodal', name: '多模态与视频生成', def: '视觉/音频/视频的统一建模，视频生成是当前竞争最激烈的细分。', keywords: ['多模态', '视频生成', '图像生成', 'sora', 'veo', 'seedance', '可灵', '视频模型'], upstream: ['frontier'], downstream: ['creative'], maturity: '爬坡期', why: '统一建模打开视觉/音频/视频的变现面，视频生成竞争最烈。', moat: '视频版权数据 + 算力 + 生成质量。', bottleneck: '物理一致性与单条生成成本。', signals: ['视频模型迭代与时长突破', '创作工具的付费转化'] },
        { id: 'speech', name: '语音与音频模型', def: 'TTS、实时语音与音乐生成的模型层，voice 是下一个交互入口。', keywords: ['语音', '音频', 'tts', '音乐生成', 'suno', '实时语音', '全双工'], upstream: ['frontier'], downstream: ['audio'], maturity: '爬坡期', why: '延迟最敏感、粘性最强的交互入口。', moat: '延迟与情感表现力的端到端栈。', bottleneck: '全双工延迟与规模化成本。', signals: ['实时语音延迟纪录', '语音场景调用时长'] },
        { id: 'worldmodel', name: '世界模型', def: '让模型理解物理世界的尝试：视频生成作世界模拟器，通往具身智能。', keywords: ['世界模型', '物理仿真', '世界模拟', 'genie'], upstream: ['multimodal'], downstream: ['embodiedapp'], maturity: '萌芽期', why: '通往具身与物理仿真的必经实验，下一个范式的期权。', moat: '研究纵深与仿真数据闭环。', bottleneck: '物理规律的可验证性尚未解决。', signals: ['世界模型论文与 demo 突破', '机器人训练中仿真占比'] },
        { id: 'token', name: '模型定价与 token 经济', def: '每百万 token 的定价体系是智能的价格发现机制，降价即行业信号。', keywords: ['定价', '降价', 'token', '价格战', '每百万', '价格'], upstream: ['frontier', 'openweight', 'inference'], downstream: ['bizmodel', 'economics'], maturity: '重构期', why: '智能的价格发现机制：降价本身就是行业信号。', moat: '成本曲线领先对手一个身位。', bottleneck: '价格战下毛利与差异化的平衡。', signals: ['旗舰与快速档价差', '每任务成本基准（AA 口径）'] }
      ]
    },
    {
      key: 'L3', name: '平台与工具层', en: 'Platform & Tools',
      desc: '把模型能力变成开发者可用的产品基础设施：框架、API、搜索、护栏与协议。谁离开发者最近，谁捕获分发。',
      nodes: [
        { id: 'agentfw', name: '智能体框架与编排', def: 'Agent 的开发框架与多智能体编排层，应用复杂度的承载者。', keywords: ['智能体', 'agent 框架', '编排', '多智能体', 'langgraph', 'autogen', 'crewai', 'agent'], upstream: ['frontier', 'maas'], downstream: ['enterprise', 'office'], maturity: '过热期', why: '应用复杂度的承载层：谁定框架，谁定分发。', moat: '开发者心智与运行时事实标准。', bottleneck: '框架过剩、生产级可靠性工程尚未收敛。', signals: ['框架采用率消长（star/生产案例）', '标准化收敛事件（合并或淘汰）'] },
        { id: 'coding', name: 'Agentic 编码', def: 'AI 编码是模型变现最快、竞争最白热的场景：IDE、终端与云端智能体三条路线。', keywords: ['编码', 'cursor', 'claude code', 'copilot', 'ide', 'devin', 'codex', '代码'], upstream: ['frontier', 'maas'], downstream: ['devtools', 'devhost'], maturity: '爬坡期', why: '模型变现最快、能力兑现最直接的场景。', moat: '采纳/重试信号的数据飞轮 + 入口卡位。', bottleneck: '长任务可靠性与企业采购合规。', signals: ['编码工具 ARR 与估值锚', 'SWE 基准与真实仓库通过率'], sub: [
          { id: 'ide', name: 'AI IDE（Cursor 类）', def: '编辑器入口 + 商业化最成熟，被收购整合后进入巨头棋局。' },
          { id: 'cli', name: '终端 Agent（Claude Code/Codex）', def: '开发者自有环境里的常驻智能体，扩展机制成为新平台。' },
          { id: 'cloudag', name: '云端自主 Agent（Devin 类）', def: '异步整机沙箱形态，按任务交付而非按席位收费。' }
        ] },
        { id: 'devhost', name: '代码托管与 CI', def: '仓库与流水线是 agent 时代的新基座：自建托管（Origin 类）正在挑战 GitHub 的中心地位。', keywords: ['代码托管', 'github', 'gitlab', '仓库', 'ci', '版本控制', 'origin'], upstream: ['coding'], downstream: ['devtools'], maturity: '萌芽期', why: 'agent 时代的代码基座：托管权即生态权。', moat: '迁移成本与 CI 集成深度。', bottleneck: '与 GitHub 网络效应对抗的冷启动。', signals: ['自建托管平台的企业采用', 'agent 原生 CI 工具的出现'] },
        { id: 'maas', name: 'MaaS 与模型 API', def: '把模型按调用卖的开发者入口，价格战与生态锁定的主阵地。', keywords: ['api', 'maas', '开放平台', '模型服务', '推理服务', '接口'], upstream: ['frontier', 'openweight', 'inference', 'cloud'], downstream: ['agentfw', 'coding', 'rag'], maturity: '重构期', why: '开发者入口与价格战主阵地：卖模型的方式正在被重写。', moat: '生态锁定与企业合同。', bottleneck: '同质化与毛利压缩，开源权重平价冲击。', signals: ['API 降价节奏', '聚合/路由层份额'], sub: [
          { id: 'pub', name: '公云 API', def: '模型厂商直营的开发者入口，价格战的第一现场。' },
          { id: 'broker', name: '聚合与路由（OpenRouter 类）', def: '多模型代理与按效果路由，比价层捕获弃留决策。' },
          { id: 'priv', name: '私有化部署', def: '数据主权与合规驱动的自持路线，vLLM 栈的主场。' }
        ] },
        { id: 'search', name: 'AI 搜索与答案引擎', def: '用生成式答案重构信息获取，直接动摇传统搜索的分发权。', keywords: ['ai 搜索', '答案引擎', 'perplexity', '搜索引擎', '信息获取', 'ai 浏览器'], upstream: ['frontier', 'rag'], downstream: ['assistant'], maturity: '过热期', why: '重构信息分发权，动摇最大的广告市场。', moat: '分发入口与出版商独家授权。', bottleneck: '商业化（订阅/广告）与答案可信度。', signals: ['查询量份额变化', 'GEO 与出版商授权交易'], sub: [
          { id: 'answer', name: '答案引擎（Perplexity 类）', def: '引用优先的独立入口，靠授权内容建差异。' },
          { id: 'embed', name: '内嵌搜索（ChatGPT 搜索）', def: '助手内置检索：入口在手，搜索变成功能。' },
          { id: 'browser', name: 'AI 浏览器形态', def: '把答案层做进浏览器，直接接管会话与操作。' }
        ] },
        { id: 'rag', name: 'RAG 与知识库', def: '企业把私有知识接进模型的标准化路径，落地项目的第一站。', keywords: ['rag', '向量', '知识库', '检索增强', 'embedding', '企业知识'], upstream: ['maas'], downstream: ['enterprise', 'legal'], maturity: '成熟期', why: '企业私有知识接入的标准路径，落地项目的第一站。', moat: '数据管线资产与行业知识库。', bottleneck: '检索质量的场景适配长尾。', signals: ['企业 RAG 项目中标与续费率', '向量/检索组件营收增长'] },
        { id: 'devtools', name: '开发者工具链', def: 'SDK、CLI 与调试工作流：开发体验即生态护城河。', keywords: ['开发者工具', 'sdk', 'cli', '调试', '工作流', '开发者'], upstream: ['coding'], downstream: ['office'], maturity: '爬坡期', why: '开发体验即生态护城河的转化层。', moat: '工作流嵌入深度。', bottleneck: '模型厂商平台化对独立工具空间的挤压。', signals: ['SDK/CLI 下载与留存', '平台收购独立工具的动线'] },
        { id: 'guardrail', name: '安全护栏与评测服务', def: '红队、护栏与安全评估的产业化：前沿能力 commercialize 的前提。', keywords: ['护栏', '安全评估', '红队', 'preparedness', 'aisi', '安全评测'], upstream: ['training'], downstream: ['regulation'], maturity: '萌芽期', why: '前沿能力商业化的合规前提，监管直接创造的市场。', moat: '评测方法学与监管互认。', bottleneck: '标准未定，采购意愿滞后于合规压力。', signals: ['AI Act 执法案例', '红队/评估服务采购额'] },
        { id: 'deploy', name: '部署与可观测', def: '模型的灰度、监控与成本治理：生产环境与 demo 的分界线。', keywords: ['部署', '可观测', '监控', '灰度', '运维', '交付', 'fde', '部署工程', '实施', '伙伴认证', '专业服务'], upstream: ['inference'], downstream: ['enterprise'], maturity: '爬坡期', why: '生产与 demo 的分界线，可观测决定续费。', moat: '深度运维集成带来的切换成本。', bottleneck: '概率系统的 SLO 定义本身未定型。', signals: ['LLM 可观测工具营收', '企业 AI 项目上线率'] },
        { id: 'computeruse', name: '浏览器与计算机使用', def: '让模型直接操作电脑与浏览器：通用 agent 的最后一公里。', keywords: ['computer use', '浏览器', '桌面自动化', '操作电脑', 'computer'], upstream: ['agentfw'], downstream: ['office', 'enterprise'], maturity: '萌芽期', why: '通用 agent 的最后一公里：绕开 API 生态的直通路径。', moat: '暂无稳定护城河，先发交互数据占优。', bottleneck: '可靠性与安全边界（越权与误操作风险）。', signals: ['浏览器自动化的生产采用案例', '沙箱/权限基础设施成熟度'] },
        { id: 'mcp', name: '协议与互操作', def: 'MCP 等协议把工具调用标准化：agent 生态的 USB 接口。', keywords: ['mcp', '协议', '互操作', 'function calling', '标准化'], upstream: ['agentfw'], downstream: ['devtools', 'enterprise'], maturity: '爬坡期', why: '工具调用的 USB 接口：把 N×M 集成降为 N+M。', moat: '协议事实标准的网络效应。', bottleneck: '安全与授权模型尚不完善。', signals: ['主流平台原生支持数', 'MCP 服务器生态增速'] }
      ]
    },
    {
      key: 'L4', name: '行业应用层', en: 'Applications',
      desc: '智能变成收入的地方：消费助手、企业服务、垂直行业与创作工具。应用层的成败决定整条链的商业闭环。',
      nodes: [
        { id: 'assistant', name: '消费级 AI 助手', def: '面向大众的超级入口：ChatGPT/豆包/Kimi 的用户数竞赛与广告变现。', keywords: ['chatgpt', '助手', '豆包', 'kimi', '月之暗面', '消费级', '用户数'], upstream: ['maas', 'search', 'edge'], downstream: ['bizmodel', 'distribution'], maturity: '爬坡期', why: '面向大众的超级入口，用户数与广告变现双引擎。', moat: '品牌心智与默认分发位。', bottleneck: '变现多元化（广告/订阅）与差异化。', signals: ['周活与留存', '广告年化收入'], sub: [
          { id: 'general', name: '通用助手（ChatGPT/豆包）', def: '全人群入口，靠规模与分发打。' },
          { id: 'verticalag', name: '垂直人群助手', def: 'Teens/教育等特定人群的定制入口，政策敏感。' },
          { id: 'portal', name: '入口 App 化', def: '嵌进支付/终端等既有高频 App 的助手形态（阿宝类）。' }
        ] },
        { id: 'enterprise', name: '企业服务与客服', def: '企业级落地最宽的跑道：客服、营销、销售与内部效率。', keywords: ['企业', '客服', '营销', 'crm', '销售', 'b 端', 'to b'], upstream: ['agentfw', 'rag'], downstream: ['bizmodel'], maturity: '爬坡期', why: '企业落地最宽跑道：从客服到内部效率全流程渗透。', moat: '行业数据与流程集成深度。', bottleneck: '交付产能（人力）而非需求。', signals: ['企业 AI 预算占比', '客服/营销场景续费率'] },
        { id: 'health', name: '医疗 AI', def: '诊断、药物研发与临床流程：监管最严、周期最长、价值最深的垂直。', keywords: ['医疗', '诊断', '药物', '临床', '健康', '医院'], upstream: ['rag', 'multimodal'], downstream: ['bizmodel'], maturity: '爬坡期', why: '价值最深、周期最长的垂直，监管即门槛。', moat: '临床证据与审批资质。', bottleneck: '临床验证周期与责任认定。', signals: ['AI 药物管线进临床数', '医保/审批里程碑'] },
        { id: 'finance', name: '金融 AI', def: '投研、量化与风控：数据密集与合规敏感的行业。', keywords: ['金融', '投研', '量化', '风控', '银行', '证券', '保险', 'claude for excel', 'chatgpt for excel', 'grok for excel', '盈透', 'interactive brokers', '普华永道', '欧洲央行'], upstream: ['rag'], downstream: ['bizmodel'], maturity: '爬坡期', why: '数据密集 + 合规敏感，付费能力最强的行业之一。', moat: '数据接入与合规牌照。', bottleneck: '模型可解释性与监管接受度。', signals: ['金融机构 AI 采购额', '投研/交易助手渗透率'] },
        { id: 'legal', name: '法律与合规 AI', def: '合同、检索与合规自动化：文本密集型行业的天然适配。', keywords: ['法律', '律师', '合规', '合同', '司法', '法务', 'harvey', 'legora', 'legal-kb'], upstream: ['rag'], downstream: ['bizmodel'], maturity: '爬坡期', why: '文本密集天然适配，律所付费能力高。', moat: '律所关系与判例数据。', bottleneck: '责任边界与法院接受度。', signals: ['头部律所渗透口径（厂商自述需打折）', '法律 AI 融资与收入锚'] },
        { id: 'edu', name: '教育 AI', def: '辅导、测评与个性化学习：政策敏感但需求刚性。', keywords: ['教育', '学习成本', '学习新方式', '学习方法论', '学习体验', '辅导', '课程', '学校', '教学', 'chatgpt for teens', 'guided learning', 'learnvector', 'k-12', '教师', '教育部'], upstream: ['assistant'], downstream: ['bizmodel'], maturity: '过热期', why: '需求刚性但政策极敏感，个性化学习是真价值所在。', moat: '内容版权与学校渠道。', bottleneck: '未成年人/数据政策与采购周期。', signals: ['教育规划落地文件', 'K12 产品合规化进度'] },
        { id: 'creative', name: '图像与视频创作', def: '生成式创作工具：从玩具到生产力的临界点正在发生。', keywords: ['创作', '视频', '图像', 'midjourney', '剪辑', '设计', '生成'], upstream: ['multimodal'], downstream: ['distribution'], maturity: '过热期', why: '生成式最先击中创作链路，正处玩具到生产力的临界点。', moat: '工作流嵌入与社区生态。', bottleneck: '版权诉讼与商业化的平衡。', signals: ['创作工具付费转化', '版权判例进展'] },
        { id: 'audio', name: '音乐与语音产品', def: '音乐生成、播客与有声内容：版权与创作伦理的焦点区。', keywords: ['音乐', '播客', '配音', '有声', '语音产品'], upstream: ['speech'], downstream: ['distribution'], maturity: '过热期', why: '创作门槛最低的内容形态，版权争议的风暴眼。', moat: '音乐版权合作与分发渠道。', bottleneck: '训练数据合法性（GEMA 案先例）。', signals: ['音乐模型版本迭代', '版权诉讼与授权交易'] },
        { id: 'device', name: 'AI 硬件终端', def: '把模型装进眼镜、耳机与专用硬件：入口焦虑的产物。', keywords: ['ai 硬件', '眼镜', '耳机', '终端设备', '硬件产品'], upstream: ['edge', 'assistant'], downstream: ['distribution'], maturity: '挤泡沫期', why: '入口焦虑的产物：硬件是分发权的物化。', moat: '暂缺——产品形态尚未收敛。', bottleneck: '杀手级场景缺失，第一波出清进行中。', signals: ['AI 硬件退货率与复购', '大厂入场（眼镜/耳机）节奏'] },
        { id: 'embodiedapp', name: '具身智能应用', def: '人形机器人进入工厂与家庭：整机、场景与数据闭环的竞赛。', keywords: ['具身', '人形机器人', 'figure', 'optimus', '工厂', '仓储', '运动会'], upstream: ['robothw', 'worldmodel'], downstream: ['bizmodel'], maturity: '萌芽期', why: '机器人进工厂与家庭，具身价值的兑现端。', moat: '场景数据闭环与整机制造成本。', bottleneck: '场景泛化与经济性（回本周期）。', signals: ['工厂部署台数与复购', '家庭场景试点进度'], sub: [
          { id: 'factory', name: '工厂与仓储', def: '最先跑通的场景：结构化环境 + 可量化 ROI。' },
          { id: 'home', name: '家庭服务', def: '终局最大但最远：安全与泛化双重门槛。' },
          { id: 'specialag', name: '特种作业', def: '高危/极端环境作业，政策与预算驱动。' }
        ] },
        { id: 'game', name: '游戏与娱乐', def: 'NPC、内容生成与互动叙事：游戏是最宽容的试验场。', keywords: ['游戏', 'npc', '互动', '娱乐', '叙事'], upstream: ['agentfw', 'multimodal'], downstream: ['distribution'], maturity: '萌芽期', why: '最宽容的试验场：NPC 与内容生成先行。', moat: '引擎与 IP 的集成深度。', bottleneck: '生成内容的可控性与成本。', signals: ['3A 采用生成管线的案例', 'UGC 平台 AI 工具化'] },
        { id: 'office', name: '办公与协同', def: '文档、PPT、会议与邮件的 AI 化：存量软件的重新洗牌。', keywords: ['办公', '协同', '文档', 'ppt', '会议', '邮件', '效率', 'workbuddy', 'qwenwork', '千问办公', 'trae', '钉钉', '飞书', 'copilot', 'workspace'], upstream: ['agentfw', 'computeruse'], downstream: ['distribution'], maturity: '爬坡期', why: '存量软件的重新洗牌，办公是最高频的企业场景。', moat: '套件协同与分发（预装/渠道）。', bottleneck: '替代摩擦与席位定价竞争。', signals: ['办公 AI 席位与定价锚', '三强渠道与 FDE 准入对比'], sub: [
          { id: 'doc', name: '文档与演示', def: '写作与汇报的生成式重做，最普及的第一站。' },
          { id: 'meeting', name: '会议与协同', def: '纪要、行动项与实时协作的 AI 化。' },
          { id: 'sheet', name: '表格与数据 Agent', def: '结构化数据操作是价值最高、最难做对的一格。' }
        ] }
      ]
    },
    {
      key: 'L5', name: '商业与生态层', en: 'Business & Ecosystem',
      desc: '决定谁活下来谁定规则的层：商业模式、资本、人才、监管与联盟。产业链的利润分配在这里完成。',
      nodes: [
        { id: 'bizmodel', name: '商业模式与变现', def: '订阅、API、广告与按效果付费：智能的收费方式仍在发明中。', keywords: ['商业模式', '变现', 'arr', '收入', '订阅', '广告', '付费'], upstream: ['assistant', 'enterprise', 'token'], downstream: ['economics'], maturity: '重构期', why: '智能的收费方式仍在发明中，模式决定生死。', moat: '与场景耦合的变现闭环。', bottleneck: '订阅之外的规模化模式未定型。', signals: ['广告/按效果收入占比', '定价结构创新事件'] },
        { id: 'funding', name: '融资与估值', def: '万亿级的资本开支与融资竞赛：一级市场的信念定价。', keywords: ['融资', '估值', '领投', '风投', '筹款', '融资轮'], upstream: [], downstream: ['economics'], maturity: '过热期', why: '万亿级信念定价：资本开支节奏直接决定供给节奏。', moat: '算力绑定与战略投资人网络。', bottleneck: '估值与收入的剪刀差（ARR 倍数）。', signals: ['前沿 lab 融资条款', '一级市场 AI 份额'] },
        { id: 'mna', name: '并购与整合', def: '巨头用并购补能力拼图：SpaceX-xAI、NVIDIA-HF 式的重构。', keywords: ['收购', '并购', '合并', '整合', '交割', '全资'], upstream: [], downstream: ['competition'], maturity: '爬坡期', why: '巨头用并购补拼图，整合速度决定格局。', moat: '监管审查承受力与整合能力。', bottleneck: '反垄断审查与关键人才保留。', signals: ['十亿美元级交易数与交割率', '监管拦截案例'] },
        { id: 'talent', name: '人才流动', def: '联创离职、研究员创业与人才战：智力的再分配即未来的分配。', keywords: ['离职', '人才', '联创', '跳槽', '招聘', '研究员'], upstream: [], downstream: ['competition'], maturity: '爬坡期', why: '智力的再分配即未来的分配。', moat: '顶尖研究者的集聚效应。', bottleneck: '关键人风险与创始团队稳定性。', signals: ['联创/研究员离职创业数', 'lab 间人才流动方向'] },
        { id: 'delivery', name: '交付与实施（FDE）', def: '把模型接进客户现场：FDE 人力、服务伙伴认证与交付毛利，AI 应用的乙方层。', keywords: ['fde', '交付', '部署工程', '前沿部署', '实施', '服务伙伴', '专业服务', '伙伴认证', 'adp 认证', '返点', '保证金', '交付成本'], upstream: ['talent'], downstream: ['enterprise'], maturity: '爬坡期', why: '把模型接进客户现场的乙方层，交付产能即行业瓶颈。', moat: '认证体系与交付方法论复用。', bottleneck: '人力规模与毛利的矛盾（规模化困难）。', signals: ['FDE 认证与伙伴体系扩展', '交付毛利披露'] },
        { id: 'regulation', name: '监管与地缘', def: '欧盟 AI Act、美国出口管制与各国立法：合规成本成为产品变量。', keywords: ['监管', '法案', '欧盟', '立法', '合规要求', '执法', '管制'], upstream: [], downstream: ['supply', 'bizmodel'], maturity: '爬坡期', why: '合规成本成为产品变量，规则直接改写市场边界。', moat: '政策游说与合规工程能力。', bottleneck: '多辖区规则碎片化、不同步。', signals: ['AI Act 执法案例', '出口管制清单变化'] },
        { id: 'opensource', name: '开源治理与许可', def: 'Apache/MIT 与开源定义之争：许可即商业策略。', keywords: ['开源许可', 'apache', 'mit 许可', '许可证', '开源治理'], upstream: ['openweight'], downstream: ['economics'], maturity: '爬坡期', why: '许可即商业策略，开源治理决定生态走向。', moat: '基金会/社区治理权。', bottleneck: '「开源」定义之争对社区信任的消耗。', signals: ['许可证变更事件', '开源定义投票与治理动态'] },
        { id: 'economics', name: '成本与单位经济', def: '训练成本、推理毛利与烧钱速度：智能生意的会计学。', keywords: ['成本', '毛利', '单位经济', '烧钱', '盈利', '亏损', '现金流'], upstream: ['bizmodel', 'funding', 'token'], downstream: [], maturity: '重构期', why: '智能生意的会计学：训练成本、推理毛利与烧钱速度。', moat: '单位成本领先 + 收入质量（现金循环）。', bottleneck: '收入增速与算力开支的平衡。', signals: ['推理毛利与资本开支指引', '折旧口径变化'] },
        { id: 'distribution', name: '分发与渠道', def: '用户数、DAU 与入口占位：应用层的胜负手。', keywords: ['分发', '渠道', '用户数', 'dau', '增长', '获客', '留存'], upstream: ['assistant', 'creative', 'device'], downstream: ['competition'], maturity: '爬坡期', why: '应用层胜负手：入口占位与渠道决定天花板。', moat: '默认入口与渠道网络。', bottleneck: '分发被平台与硬件商双重钳制。', signals: ['预装/默认位争夺', '获客成本变化'] },
        { id: 'competition', name: '竞争格局与阵营', def: 'OpenAI 系、Anthropic 系、开源阵营与巨头生态的合纵连横。', keywords: ['竞争', '阵营', '对抗', '格局', '抢占', '对手'], upstream: ['mna', 'talent', 'distribution'], downstream: [], maturity: '重构期', why: '阵营合纵连横：格局变化本身即最大风险变量。', moat: '生态位锁定（算力/模型/应用绑定）。', bottleneck: '中立生态位的生存空间收窄。', signals: ['阵营化交易（算力/模型绑定）', '跨阵营合作破裂事件'] },
        { id: 'alliance', name: '标准与联盟', def: '算力联盟、模型合作与标准协议：生态位的中长期锁定。', keywords: ['联盟', '标准', '合作', '签署', '伙伴', '共同'], upstream: [], downstream: ['competition'], maturity: '萌芽期', why: '标准与联盟锁定中长期生态位。', moat: '先发标准制定权。', bottleneck: '联盟承诺的执行力与利益分配。', signals: ['算力联盟签约', '标准组织成员变动'] }
      ]
    }
  ],

  /* 行业通行技术栈视图（AI Stack），手工策展（2026-10-22 起）。
   * 分层逻辑：应用在顶、能源在底——自上而下是需求对物理约束的牵引，自下而上是价值流的供给底座；
   * 底三层（基础设施/芯片/能源）在行业话语里合称「AI 工厂」（AI Factories）。
   * tiers[].nodes 映射到上方五层的节点 id，全 56 节点一一定位；
   * 标准栈之外，本台另拆 L3 平台与工具、L5 商业与生态两层（extensions）——
   * 标准视图不回答「谁离开发者最近」与「钱和规则怎么分」，本台回答。
   * 原始参考图留档：console/assets/ai-stack-layers.png（2026-10 微信收录）。 */
  stack: {
    note: '行业通行的五层技术栈：应用 → 模型 → 基础设施 → 芯片 → 能源；底三层合称 AI 工厂，把电力变成可用智能的物理产线。本台五层产业链把全部 56 个节点映射进这五档，并在标准栈之外加拆两层（见下方扩展层）。',
    factory: { name: 'AI 工厂', en: 'AI Factories', desc: '基础设施 + 芯片 + 能源：把电力变成可用算力与智能的物理产线，当前万亿级资本开支的主战场。' },
    tiers: [
      { key: 'apps',   name: '应用', en: 'Applications',    maps: 'L4', desc: '智能变成产品与收入的地方：消费助手、企业服务、垂直行业、创作工具与具身落地。', nodes: ['assistant', 'enterprise', 'health', 'finance', 'legal', 'edu', 'creative', 'audio', 'device', 'game', 'office', 'embodiedapp', 'robothw'] },
      { key: 'models', name: '模型', en: 'Models',          maps: 'L2', desc: '智能本身的供给：语料与训练、前沿与开源权重、多模态与语音、推理优化与 token 定价。', nodes: ['pretrain', 'synth', 'frontier', 'openweight', 'training', 'inference', 'multimodal', 'speech', 'worldmodel', 'bench', 'token'] },
      { key: 'infra',  name: '基础设施', en: 'Infrastructure', maps: 'L1', factory: true, desc: '把芯片变成可用算力的系统集成：数据中心与集群、网络互连、云与算力租赁、边缘部署。', nodes: ['datacenter', 'network', 'cloud', 'edge'] },
      { key: 'chips',  name: '芯片', en: 'Chips',            maps: 'L1', factory: true, desc: '算力的物理上限：先进制程与代工、GPU 与 ASIC、HBM 存储，以及改写供给曲线的出口管制。', nodes: ['fab', 'gpu', 'asic', 'memory', 'supply'] },
      { key: 'energy', name: '能源', en: 'Energy',           maps: 'L1', factory: true, desc: 'AI 的终极约束：电力正在取代芯片成为选址与扩张的第一变量。', nodes: ['energy'] }
    ],
    extensions: [
      { key: 'L3', name: '平台与工具', note: '标准栈把开发者平台折叠进应用侧；本台单拆一层——谁离开发者最近，谁捕获分发（框架、MaaS、编码、协议）。' },
      { key: 'L5', name: '商业与生态', note: '标准栈不回答钱与规则；本台单拆一层——融资、并购、监管、成本与联盟决定谁活下来、谁定规则。' }
    ],
    refImage: 'assets/ai-stack-layers.png'
  }
};
