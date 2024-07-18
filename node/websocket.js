const WebSocket = require('ws')

// 创建WebSocket服务器监听端口3000
const wss = new WebSocket.Server({ port: 3000 })

wss.on('connection', function connection(ws) {
  // 当客户端连接时，打印连接
  console.log('connected')

  // 当接收到客户端消息时，打印消息内容并将其发送回客户端
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)
    ws.send('echo: ' + message);
    wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send('asdasdasdas');
         // client.send(message.);
          //ws.send('echo: ' + message);
        }
      });
  })

  // 当连接关闭时，打印信息
  ws.on('close', function close() {
    console.log('disconnected')
  })

  ws.send('Welcome to the WebSocket server!')

  // 发送欢迎消息给客户端
  // setInterval(function () {
  //   ws.send('Welcome to the WebSocket server!')
  // }, 3000)
})
console.log('WebSocket server is running on ws://localhost:3000')
