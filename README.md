# 用Kotlin做了什么
构建一个简单的应用。此应用包括三个功能：
1. 一个待办事项列表。该列表的数据将从一个公开可用的 RESTful API 中获取。
2. 一个输入框和一个按钮，让用户能在现有的列表中添加新的项目。这仅适用于登录用户。
3. Auth0 提供登录注册功能。我们从 Auth0 获取 access_token，并使用它与安全的终端进行交互。

## RESTful API
使用到的 RESTful API 是一个可以在这里找到的 Express 应用程序。因此，在开发 Kotlin 应用之前，我们需要复制这个库。
~~~
git clone https://github.com/auth0-blog/nodejs-auth0/
cd nodejs-auth0
npm install
~~~
  
