function getDOM(css_selector = '') {
  return document.querySelector(css_selector)
}

const submitBtn = getDOM('.submit')
const clearBtn = getDOM('.clear')
const saveBtn = getDOM('.save')
const cvs = getDOM('#canvas')
const ctx = cvs.getContext('2d')

cvs.width = 600
cvs.height = 300

ctx.lineWidth = 5
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
// ctx.strokeStyle = '#f00'

cvs.onmousedown = (event) => {
  ctx.beginPath()
  ctx.moveTo(event.offsetX, event.offsetY)
  cvs.onmousemove = (event) => {
    ctx.lineTo(event.offsetX, event.offsetY)
    ctx.stroke()
  }
  cvs.onmouseup = (event) => {
    cvs.onmousemove = null
    ctx.closePath()
  }
}

// 清空签名
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, cvs.width, cvs.height)
})
// 保存签名
saveBtn.onclick = () => {
  const a = document.createElement('a')
  a.download = new Date().getTime()
  a.href = cvs.toDataURL('image/png', 1)
  document.body.appendChild(a)
  a.click()
  a.remove()
}
