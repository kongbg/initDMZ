FROM node:16-slim as build-stage

#FROM kongbg/node

# 设置工作目录
WORKDIR /app

# 拷贝代码
COPY . /app

RUN npm install cnpm -g --registry=https://registry.npm.taobao.org

RUN cnpm install

# 启动node
CMD ["node", "./src/index.js"]