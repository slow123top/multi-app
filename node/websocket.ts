class WebSocketManager {
    constructor(url = null, userId = null, receiveMessageCallback = null) {
      this.socket = null // WebSocket 对象
      this.sendTimeObj = null // 发送信息给服务端的重复调用的时间定时器
      this.reconnectTimeObj = null // 尝试链接的宏观定时器
      this.reconnectTimeDistance = 5000 // 重连间隔，单位：毫秒
      this.maxReconnectAttempts = 10 // 最大重连尝试次数
      this.reconnectAttempts = 0 // 当前重连尝试次数
      this.id = userId //用户ID（业务逻辑，根据自己业务需求调整）
      this.url = url // WebSocket 连接地址
      this.receiveMessageCallback = receiveMessageCallback // 接收消息回调函数
    }
  
    /**
     * 开启WebSocket
     */
    async start() {
      if (this.url && this.id) {
        // 连接WebSocket
        this.connectWebSocket()
      } else {
        console.error('WebSocket erros: 请传入连接地址和用户id')
      }
    }
  
    /**
     * 创建WebSocket连接, 超级快递车
     */
    connectWebSocket() {
      // 通过id生成唯一值（服务端要求，具体根据自己业务去调整）
      let id = `${this.id}-${Math.random()}`
      // 创建 WebSocket 对象
      this.socket = new WebSocket(this.url, id) // 快递员（WebSocket连接实例
  
      // 处理连接打开事件
      this.socket.onopen = (event) => {
        // 给服务端发送第一条反馈信息
        this.startSendServe()
      }
  
      // 处理接收到消息事件
      this.socket.onmessage = (event) => {
        this.receiveMessage(event)
      }
  
      // 处理连接关闭事件
      this.socket.onclose = (event) => {
        // 清除定时器
        clearTimeout(this.sendTimeObj)
        clearTimeout(this.reconnectTimeObj)
        // 尝试重连
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
          this.reconnectAttempts++
          console.log('重试链接次数：'+ this.reconnectAttempts)
          this.reconnectTimeObj = setTimeout(() => {
            this.connectWebSocket()
          }, this.reconnectTimeDistance)
        } else {
          // 重置重连次数
          this.reconnectAttempts = 0
          console.error(
            'WebSocketManager erros: Max reconnect attempts reached. Unable to reconnect.'
          )
        }
      }
  
      // 处理 WebSocket 错误事件
      this.socket.onerror = (event) => {
        console.error('WebSocketManager error:', event)
      }
    }
  
    /**
     * 发送给node的第一条信息
     */
    startSendServe() {
  
      this.sendMessage('hi I come from client')
    }
  
    /**
     * 发送消息
     * @param {String} message 消息内容
     */
    sendMessage(message) {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(message)
      } else {
        console.error(
          'WebSocketManager error: WebSocket connection is not open. Unable to send message.'
        )
      }
    }
  
    /**
     * 接收到消息
     */
    receiveMessage(event) {
      // 根据业务自行处理
      console.log('receiveMessage:', event.data)
      this.receiveMessageCallback && this.receiveMessageCallback(event.data)
    }
  
    /**
     * 关闭连接
     */
    closeWebSocket() {
      this.socket.close()
      // 清除定时器 重置重连次数
      clearTimeout(this.sendTimeObj)
      clearTimeout(this.reconnectTimeObj)
      this.reconnectAttempts = 0
    }
  }