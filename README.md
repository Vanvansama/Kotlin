# 用Kotlin做了什么
构建一个简单的应用。此应用包括三个功能：
1. 一个待办事项列表。该列表的数据将从一个公开可用的 RESTful API 中获取。
2. 一个输入框和一个按钮，让用户能在现有的列表中添加新的项目。这仅适用于登录用户。
3. Auth0 提供登录注册功能。我们从 Auth0 获取 access_token，并使用它与安全的终端进行交互。
# 项目预览
![gif](https://raw.githubusercontent.com/Vanvansama/Kotlin/master/preview/preview.gif)

## RESTful API
使用到的 RESTful API 是一个可以在这里找到的 Express 应用程序。因此，在开发 Kotlin 应用之前，我们需要复制这个库。
~~~
git clone https://github.com/auth0-blog/nodejs-auth0/
cd nodejs-auth0
npm install
~~~
由于我们的 RESTful API 受到 Auth0 的保护，所以我们现在去创建一个免费的账号（如果我们还没有账号）。因为 Auth0 基于 OAuth 和 OpenID Connect 的标准来管理身份，所以我们将遵循最佳实践，并在基于[Web 的管理工具中创建我们后端的](https://manage.auth0.com/#/apis)API。这个表单的第一个字段 Name，它只是这个工具的友好名称，它的值对我们来说并不重要。第二个字段 Identifier，它是我们 API 的观众。当配置后端或者配置 Kotlin 的 Android 应用时我们将使用到该值。最后一个字段 Signing Algorithm，定义了我们的令牌将如何签名。

当我们完成 API 的创建时，Auth0 同时也会创建一个测试客户端。如果我们前往 Clients 菜单，我们可以看到其中有一个叫 Kotlin To Do App (Test Client) 的客户端。让我们访问这个客户端并复制其中的域值。有了这个域值，我们就可以运行我们的 RESTful API 了。在复制的库的根目录中，让我们执行以下命令：
>Linux下用export命令，windows下用set命令，也可以更改index.js文件设置
~~~
export AUTH0_AUDIENCE=kotlin-todo-app

export AUTH0_DOMAIN=kamisama.auth0.com

export AUHT0_ALGORITHM=RS256

node index
~~~
请注意，以上导出的值是指在 Auth0 上我自己的帐号。你自己的 AUTH0_DOMAIN 值会有所不同。另外两个值，AUTH0_AUDIENCE 和 AUHT0_ALGORITHM，如果你在配置 API 时没有更改任何内容，那么这两个值和我的将会是一样的。

运行最后的一行命令 node index后，我们的 RESTful API 将会启动并运行。我们可以发出两个简单的请求来测试它：
