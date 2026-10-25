# AI GURU 工作台（ai-guru-console）

**用最细的维度，一层层拆解 AI 全行业。**

本仓库不是新闻 console。新闻与资讯只是证据：它们被拆开、挂到行业结构的坐标上。产品本体是**拆解**——纵向五层产业链 56 个节点，横向 18 个主题域与赛道，一层层下钻到「GPU 与加速卡」「推理优化与引擎」「交付与实施（FDE）」这样的最细维度，每个节点一页，聚合全库证据。

## 拆解的三个层次

1. **拆解主轴（纵向）**：五层价值流——`L1 算力与硬件 → L2 数据与模型 → L3 平台与工具 → L4 行业应用 → L5 商业与生态`，共 56 个节点（手工策展于 [`console/chain.js`](console/chain.js)）。节点页自动聚合线索、大事、档案、玩家与模型；聚合为零的节点即采集缺口信号。全景页（`#/chain/map`）顶部另有行业通行的**技术栈视图**：`应用 → 模型 → 基础设施 → 芯片 → 能源`，底三层合称「AI 工厂」（AI Factories），56 个节点全部映射进五档；原始参考图留档于 [`console/assets/ai-stack-layers.png`](console/assets/ai-stack-layers.png)。
2. **横向切面**：18 个主题域（见 [`_topics.md`](_topics.md)）与赛道评分卡，与产业链正交——一个主题域内的线索会分散挂到不同层的节点上。
3. **证据层**：线索时间线（`<主题>/*.md`）、年度大事记（`_2025/_2026大事记.md`）、精选档案（`aihot-mirror/`）与待核实清单（`docs/2026待核实清单.md`）。**宁可漏收，不可错收**：官方一手源 + ≥2 家主流媒体交叉印证才入库；事实与观点严格分离。

拆解台在 [`console/`](console/)：纯静态单页，双击 `console/index.html` 即用（file:// 直开）；证据层数据由 `make console` 从仓库 md 重建内嵌。

## 目录结构

```
ai-guru-console/
├── console/               # 拆解台（五层产业链为主轴的静态单页工作台）
│   ├── chain.js           # 拆解骨架：五层 56 节点，手工策展
│   ├── guide.js           # 阅读路线与通读序列，手工策展
│   └── data.js            # 证据层内嵌数据（构建生成，勿手改）
├── <主题文件夹>/          # 18 个横向主题域
│   ├── _index.md          # 主题说明 + 线索列表 + 候选线索
│   └── <线索>.md          # 证据层原子：一条持续追加的时间线文档
├── _topics.md             # 主题索引（横向切面）
├── _2026大事记.md         # 2026 年度重点事件索引（按月归档）
├── _2025大事记.md         # 2025 年度重点事件索引（回溯建档）
├── tools/                 # 辅助工具（CLI + Web 界面 + 浏览器扩展 + 构建脚本）
│   ├── cmd/               # 自包含 Go module
│   └── scripts/           # validate.py 校验 / build_feed.py 订阅源 / build_console.py 重建拆解台数据
├── docs/                  # 项目文档 + 线索模板 + 待核实清单 + 来源档案
└── README.md
```

## 如何使用拆解台

1. 从**产业链全景**进（`#/chain/map`）：先看技术栈视图（应用→模型→基础设施→芯片→能源，底三层即 AI 工厂）定位，再拿五层骨架，看价值怎么从算力流到商业生态。
2. 逐层下钻（`#/chain/L1`…`L5`），再进任意**节点页**（如 `#/chain/L1/gpu`）：该坐标上的全部线索、大事、档案与玩家一页聚齐。
3. 需要**横向**视角时切主题域（`#/topics`）与赛道矩阵（`#/sectors`）；需要**证据原文**时进线索库、大事记与语料检索。
4. 想系统读一遍：拆解台内置七条阅读路线（P1→P7）与逐站通读模式，入口在「阅读指南」。

## 证据层如何维护

1. 找到事件所属的线索文件（如 `智能体平台/MCP协议.md`）。若无线索，从 [`docs/线索模板.md`](docs/线索模板.md) 复制一个新建。
2. 在「时间线」顶部最近的 `### YYYY-MM` 下插入一条：

   ```
   - **2026-07-21** · [标题](URL)
     一句话摘要。关键数据/影响。
   ```

3. 跨月则新建月份标题。
4. 更新 frontmatter 的 `更新:` 日期。
5. 若属于年度重点事件，同步在 [`_2026大事记.md`](_2026大事记.md) 对应月份下登记一行；事件应尽量双链到产业链节点所属线索。
6. （可选）补充「概述」（事实）或「分析」（观点）。

详见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

## 证据层最近动态

<!-- RECENT:START -->
- **2026-10-02** · [OpenAI GPT-6 Astra Ultrafast 在 NVIDIA Blackwell GPU 上运行](https://aihot.news/items/rp0ocer4fughonyd9ddfr3r8i) — 通过 OpenAI API 与符合条件的 ChatGPT Work / Codex 用户开放；官方称 Ultrafast 模式 token 生成速度最高可达 Astra 标准模式的 8 倍。OpenAI 推理负责人 Philippe Tillet 与计算 CTO Uday Ruddarraju 联合署名，NVIDIA / OpenAI 双侧官方页同日发布。
- **2026-10-01** · [Claude Code 推出 mods，可用 TypeScript 函数改写提示词、替换内置功能](https://aihot.news/items/qzfc4nrsqe4rk8yxlk16ox6in) — Anthropic 将 Claude Code 的可编程面正式开放：用户可用 TypeScript 自定义 Token Weather 等插件；与「Anthropic: Claude.dev 开发者博客 9-30 入门教程」同日上线，把 Claude Code 从「终端 IDE」升级为「可注入扩展的运行时」。
- **2026-10-01** · [Modal 正式发布 VM Sandboxes：给 Agent 一台完整的 Linux 虚拟机](https://aihot.news/items/rdjmj3nqrje120k46r63xrth4) — 同步发布 Modal Clusters（多节点 GPU 集群）与 Sidecars（Sandboxes 低延迟信任边界），Agent 推理基础设施从「容器化」过渡到「整机 + 集群」形态；与 Kimi K2.6 编码 Agent 服务（9-23）等案例互证，AI Infra 主流路线回到「以整机为单位的 Agent VM」。
- **2026-09-30** · [Google DeepMind 发布 Gemini 4 Argon，面向可信网络防御者先行开放](https://aihot.news/items/uob3jvsb97uh5achwaggjrhqh) — 继 Gemini 3.8 Flash 不到一个月再度旗舰点版本迭代；Artificial Analysis 智能指数追平 GPT-6 Astra，折扣价下每任务成本仅 Astra 的 60%，Google 重回智能水平前三。Gemini 4 Argon (High) 上线 Arena Agent Arena 第 8（净提升 +7.92%）。
- **2026-09-30** · [NVIDIA 董事会批准增加 1500 亿美元股票回购授权](https://aihot.news/items/r1djnvgg1hj9iqj6itgwjucbp) — 剩余回购总额达 2350 亿美元；与同期「Anthropic 与 SpaceX 最高 845 亿美元算力协议」（✅ Anthropic filing 披露，The Information/Yahoo 索引级印证，见待核实清单九·新加 2）「OpenAI 据报洽谈以约 1.4 万亿美元估值融资至少 300 亿美元」（✅ Bloomberg 2026-09-29 首发 + Reuters 跟进，索引级印证，估值口径为不含本轮募资额，见待核实清单九·新加 6）一同折射 2026-09 末「前沿算力 + 现金循环」的资本侧转折。
- **2026-09-30** · [ElevenLabs 完成 3 亿美元员工股份回购，估值升至 220 亿美元](https://aihot.news/items/fkaymng16iu4hg5x53jpq7o8p) — 同步发布 Eleven v4 与低延迟 Turbo 版（语音生成最富表现力档位）；上一次估值为 2025 年的 30 亿，17 个月内涨约 7 倍，语音 AI 估值锚由 ElevenLabs 与 Suno 两端共同托起。
- **2026-09-29** · [OpenAI DevDay 2026 发布 GPT-6.1 Sol 与常驻智能体 Dots 等 20 余项更新](https://aihot.news/items/phuhohutcf75ktuyyfdzwug8z) — 发布 7 天后接替 GPT-6 Sol、智能指数距 GPT-6 Astra 仅 1 分，API 价格约 Astra 五分之一；同步上线常驻智能体 dots、Agents API 公测、全双工语音模型 GPT-Live-1 与 ChatGPT Work 的 Data agent。
<!-- RECENT:END -->

## 如何订阅

RSS：`https://standup-coder.github.io/ai-news-database/feed.xml`（每周自动更新；备份地址见 `feed.xml`）。首页：`https://standup-coder.github.io/ai-news-database/`。订阅源是证据层更新的通报，不是产品本体——拆解请用 console。

## 如何新增一个主题域

见 [`_topics.md`](_topics.md) 的「如何新增主题」。新增主题只扩横向切面；若出现新的产业环节，应优先在 [`console/chain.js`](console/chain.js) 的对应层加节点。

## 许可

- **代码**（`console/`、`tools/` 等）：[MIT](LICENSE)
- **内容**（主题文件夹、年度大事记、docs 文档）：[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) —— 转载请署名「AI GURU 工作台（ai-guru-console，原 AI News Database）」并以相同方式共享。

## 工具

所有辅助工具统一在 [`tools/`](tools/) 目录下管理（拆解以 console 为主入口，工具仅作可选辅助）：

- `tools/cmd/`：Go CLI（`ai-news-database`），含本地阅读、筛选、导出等能力
- `tools/cmd/web/`：本地 Web 界面（由 CLI 的 `web` 子命令提供服务）
- `tools/cmd/browser-extension/`：浏览器剪藏扩展
- `tools/scripts/build_console.py`：把仓库 md 重建为 `console/data.js`（`make console`）

在 `tools/cmd/` 目录下构建：

```bash
cd tools/cmd
go build ./...
go test ./...
```

或从仓库根用转发 Makefile：

```bash
make build
make test
make console   # 重建拆解台内嵌数据
```
