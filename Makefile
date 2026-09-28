# Root Makefile — forwards to tools/cmd
# 内容库为本仓库主体；Go 工具在 tools/cmd 下自包含维护。

.PHONY: build run test test-short test-coverage clean install fmt vet lint lint-fix security quality release mod console help

# 私人工作台：构建内嵌数据，产物 console/data.js；双击 console/index.html 即用（file://）
console:
	python3 tools/scripts/build_console.py

# 所有 Go 相关 target 转发到 tools/cmd
build run test test-short test-coverage clean install fmt vet lint lint-fix security quality release mod help:
	@$(MAKE) -C tools/cmd $@
