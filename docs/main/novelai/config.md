---
title: 全局配置
icon: markdown
order: 2
tag:
  - Markdown
---
插件的设置全部需要在你的项目根目录的env文件中写好(通常是env.dev)。在运行时，插件会一次性读入，如果你需要更改全局配置，必须重新启动bot才能够更新设置。

下面是一份配置文件的示例，包含了nonebot自带的配置
```
HOST=127.0.0.1
PORT=8081
LOG_LEVEL=DEBUG
FASTAPI_RELOAD=false

SUPERUSERS=[""]  # 配置 NoneBot 超级用户
NICKNAME=["Mutsuki"]  # 配置机器人的昵称
COMMAND_START=["/",""]  # 配置命令起始字符
COMMAND_SEP=["#"]  # 配置命令分割字符

NOVELAI_TOKEN="eyJhbGciOiJI..."
NOVELAI_TAG="loli,1 girl,cute,kawaii,"
NOVELAI_PAID=1
NOVELAI_DAYLIMIT=0
NOVELAI_MODE="naifu"
NOVELAI_SITE="127.0.0.1:6969"
```
## 必要设置
必要设置是用来连接后端服务器的，如果你没有正确配置，那么插件将无法正常工作。如果你使用该插件的扩展，也必须正确配置这些设置。

### 