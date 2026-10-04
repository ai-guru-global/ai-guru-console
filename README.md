# AI News Database（AI 新闻数据库）

一个专门用于持续沉淀 AI 高质量新闻和重点事件的 Markdown 数据库。按主题组织、以线索为单位、用时间线累积，最终呈现深度分析与演进脉络。

<!-- RECENT:START -->
- **2026-10-02** · [OpenAI GPT-6 Astra Ultrafast 在 NVIDIA Blackwell GPU 上运行](https://aihot.news/items/rp0ocer4fughonyd9ddfr3r8i) — 通过 OpenAI API 与符合条件的 ChatGPT Work / Codex 用户开放；官方称 Ultrafast 模式 token 生成速度最高可达 Astra 标准模式的 8 倍。OpenAI 推理负责人 Philippe Tillet 与计算 CTO Uday Ruddarraju 联合署名，NVIDIA / OpenAI 双侧官方页同日发布。
- **2026-10-01** · [Claude Code 推出 mods，可用 TypeScript 函数改写提示词、替换内置功能](https://aihot.news/items/qzfc4nrsqe4rk8yxlk16ox6in) — Anthropic 将 Claude Code 的可编程面正式开放：用户可用 TypeScript 自定义 Token Weather 等插件；与「Anthropic: Claude.dev 开发者博客 9-30 入门教程」同日上线，把 Claude Code 从「终端 IDE」升级为「可注入扩展的运行时」。
- **2026-10-01** · [Modal 正式发布 VM Sandboxes：给 Agent 一台完整的 Linux 虚拟机](https://aihot.news/items/rdjmj3nqrje120k46r63xrth4) — 同步发布 Modal Clusters（多节点 GPU 集群）与 Sidecars（Sandboxes 低延迟信任边界），Agent 推理基础设施从「容器化」过渡到「整机 + 集群」形态；与 Kimi K2.6 编码 Agent 服务（9-23）等案例互证，AI Infra 主流路线回到「以整机为单位的 Agent VM」。
- **2026-09-30** · [Google DeepMind 发布 Gemini 4 Argon，面向可信网络防御者先行开放](https://aihot.news/items/uob3jvsb97uh5achwaggjrhqh) — 继 Gemini 3.8 Flash 不到一个月再度旗舰点版本迭代；Artificial Analysis 智能指数追平 GPT-6 Astra，折扣价下每任务成本仅 Astra 的 60%，Google 重回智能水平前三。Gemini 4 Argon (High) 上线 Arena Agent Arena 第 8（净提升 +7.92%）。
- **2026-09-30** · [NVIDIA 董事会批准增加 1500 亿美元股票回购授权](https://aihot.news/items/r1djnvgg1hj9iqj6itgwjucbp) — 剩余回购总额达 2350 亿美元；与同期「Anthropic 与 SpaceX 最高 845 亿美元算力协议」（✅ Anthropic filing 披露，The Information/Yahoo 索引级印证，见待核实清单九·新加 2）「OpenAI 据报洽谈以约 1.4 万亿美元估值融资至少 300 亿美元」（✅ Bloomberg 2026-09-29 首发 + Reuters 跟进，索引级印证，估值口径为不含本轮募资额，见待核实清单九·新加 6）一同折射 2026-09 末「前沿算力 + 现金循环」的资本侧转折。
- **2026-09-30** · [ElevenLabs 完成 3 亿美元员工股份回购，估值升至 220 亿美元](https://aihot.news/items/fkaymng16iu4hg5x53jpq7o8p) — 同步发布 Eleven v4 与低延迟 Turbo 版（语音生成最富表现力档位）；上一次估值为 2025 年的 30 亿，17 个月内涨约 7 倍，语音 AI 估值锚由 ElevenLabs 与 Suno 两端共同托起。
- **2026-09-29** · [OpenAI DevDay 2026 发布 GPT-6.1 Sol 与常驻智能体 Dots 等 20 余项更新](https://aihot.news/items/phuhohutcf75ktuyyfdzwug8z) — 发布 7 天后接替 GPT-6 Sol、智能指数距 GPT-6 Astra 仅 1 分，API 价格约 Astra 五分之一；同步上线常驻智能体 dots、Agents API 公测、全双工语音模型 GPT-Live-1 与 ChatGPT Work 的 Data agent。
<!-- RECENT:END -->

## 这是什么

- **Markdown 数据库为主体**：根目录是按 AI 全景主题组织的 Markdown 文件，git 跟踪、人可读、可长期沉淀。
- **一条线索 = 一个时间线文档**：每个 `.md` 持续追加某条故事线（产品、技术、趋势）的相关新闻，越积越厚。
- **手动整理为主**：当前阶段不依赖自动化抓取，新闻由人工筛选、整理后录入，保证质量。
- **辅助工具统一在 [`tools/`](tools/)**：CLI、Web 界面、浏览器扩展均在 `tools/cmd/` 下作为自包含 Go module 维护，仅作可选辅助，不是核心入口。

## 目录结构

```
ai-news-database/
├── <主题文件夹>/          # 18 个 AI 全景主题，见 _topics.md
│   ├── _index.md          # 主题说明 + 线索列表 + 候选线索
│   └── <线索>.md          # 线索·时间线文件
├── _topics.md             # 中心主题索引
├── _2026大事记.md         # 2026 年度重点事件索引（按月归档）
├── _2025大事记.md         # 2025 年度重点事件索引（回溯建档）
├── tools/                 # 辅助工具（CLI + Web 界面 + 浏览器扩展 + 脚本）
│   ├── cmd/               # 自包含 Go module
│   └── scripts/           # validate.py 格式校验 / build_feed.py 订阅源生成
├── docs/                  # 项目文档 + 线索模板 + 路线图
└── README.md
```

## 如何阅读

1. 从 [`_topics.md`](_topics.md) 选一个主题，或从 [`_2026大事记.md`](_2026大事记.md) / [`_2025大事记.md`](_2025大事记.md) 按月份浏览年度重点事件。
2. 进入主题文件夹，读 `_index.md` 看该主题下有哪些线索、哪些候选线索待建。
3. 打开任一线索 `.md`，「时间线」章节按时间倒序排列（最新在上），往下看即追溯演进。

## 如何订阅

RSS：`https://standup-coder.github.io/ai-news-database/feed.xml`（每周自动更新；备份地址见 `feed.xml`）。首页：`https://standup-coder.github.io/ai-news-database/`。

## 如何贡献一条新闻

1. 找到新闻所属的线索文件（如 `智能体平台/Claude代码助手.md`）。若无线索，从 [`docs/线索模板.md`](docs/线索模板.md) 复制一个新建。
2. 在「时间线」顶部最近的 `### YYYY-MM` 下插入一条：

   ```
   - **2026-07-21** · [标题](URL)
     一句话摘要。关键数据/影响。
   ```

3. 跨月则新建月份标题。
4. 更新 frontmatter 的 `更新:` 日期。
5. 若属于年度重点事件，同步在 [`_2026大事记.md`](_2026大事记.md) 对应月份下登记一行。
6. （可选）补充「概述」（事实）或「分析」（观点）。

详见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

## 如何新建一个主题

见 [`_topics.md`](_topics.md) 的「如何新增主题」。

## 许可

- **代码**（`tools/` 等）：[MIT](LICENSE)
- **内容**（主题文件夹、年度大事记、docs 文档）：[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) —— 转载请署名「AI News Database」并以相同方式共享。

## 工具

所有辅助工具统一在 [`tools/`](tools/) 目录下管理（当前阶段以手动整理为主，工具仅作可选辅助）：

- `tools/cmd/`：Go CLI（`ai-news-database`），含本地阅读、筛选、导出等能力
- `tools/cmd/web/`：本地 Web 界面（由 CLI 的 `web` 子命令提供服务）
- `tools/cmd/browser-extension/`：浏览器剪藏扩展

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
```
