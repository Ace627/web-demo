// 获取 Canvas 元素
const cvs = document.getElementById('canvas')
// 获取 Canvas 的绘图上下文对象
const ctx = cvs.getContext('2d')

// 设置 Canvas 的宽高
cvs.width = 500
cvs.height = 300

// 设置线条宽度
ctx.lineWidth = 40
// 设置线条末端线帽的样式
ctx.lineCap = 'round'
// 设置相交线的拐点样式
ctx.lineJoin = 'round'

// 绘制遮罩层背景
ctx.fillStyle = '#00f'
ctx.fillRect(0, 0, cvs.width, cvs.height)

// 鼠标按下事件
cvs.onmousedown = (event) => {
  ctx.moveTo(event.offsetX, event.offsetY) // 将画笔移动到对应线条的起点
  // 鼠标移动事件
  cvs.onmousemove = (event) => {
    ctx.lineTo(event.offsetX, event.offsetY) // 将画笔移动到对应线条的终点
    ctx.globalCompositeOperation = 'destination-out' // 隐藏原内容和新内容重叠的部分
    ctx.stroke()
  }
}
// 鼠标抬起事件
cvs.onmouseup = (event) => {
  cvs.onmousemove = null // 清除鼠标移动事件
}
