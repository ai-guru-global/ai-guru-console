# HANDOFF.MD

> 执行新任务前先看本文件，避免重复踩坑；踩到新坑请追加。

## 坑

- **headless 测试 console 脚本不能用 `require`**：`console/data.js` 自带 `var DB = {}`，CommonJS require 后 DB 留在模块作用域，`global.DB` 拿不到。要用 `eval(fs.readFileSync(...))` 串联加载各脚本（与浏览器全局变量语义一致，脚本顺序见 `console/index.html` 底部）。
- **浏览器验证**：ZCode 内置浏览器技能依赖的 node REPL 工具不在会话中时，用上面的 eval 管线跑无头断言（提取目标函数源码 + 最小桩），数字口径与台内 `nodeStats` 完全一致。
- **侧栏不加 nodeStats 计数**：`buildNavTree` 有意不扫全库档案（见 app.js 内注释），新增侧栏链接不要顺手加实时计数。
- **大体量新 md 别放 docs/**：`build_console.py` 的 library 层对 docs/ 用 rglob 全量内嵌进 console/data.js（已 2.8MB）；独立知识库放 `wiki/`——主题只认 `_topics.md` 表格 + 主题目录顶层 `*.md`，validate/build 都不扫 wiki/ 子目录（2026-10-27 建 GPU高网设计 69 篇时验证过）。
- **并行子代理写大批文件会被限流打断**：8 个并发里 3 个报 Rate limit，但其中 2 个实际已把文件写完（报错发生在收尾汇报阶段）；重派前先 `find` 盘点实际落盘情况，只补真正缺失的批次，并发降到 2 稳定。
- **本机 grep 是 ugrep 别名**：中文长行上 `.{0,50}词.{0,90}` 有界重复报「exceeds complexity limits」；提取 md/json 长行上下文改用 `perl -ne 'while (/(.{0,50}词.{0,90})/g){...}'`。
- **批量建卡证据口径（2026-10-27 批 31 卡经验）**：时间线条目优先复用 `DB.archive`（4249 条）与大事记已有 aihot.news/官方 URL；2024 及更早的稳定事实可无 URL 裸条目（先例 AI芯片竞争.md）；证据不足的厂建「观察中」卡并显式写明证据缺口——台内宁可薄，不可编。
- **wiki/GPU高网设计 与台内已互链**：台内入口 `推理与基础设施/GPU高速网络.md`（证据时间线），改 wiki 不需要重建 data.js，改线索卡才需要 `make console`。
