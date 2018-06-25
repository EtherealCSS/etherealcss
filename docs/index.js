const pres = document.querySelectorAll('pre')
pres.forEach(pre => {
  if (pre.getAttribute('data-type') !== 'html') return
  pre.innerHTML = pre.innerHTML.replace(/</g, `&lt;`).replace(/>/g, `&gt;`)
})

const codes = document.querySelectorAll('code')
codes.forEach(code => {
  if (code.getAttribute('data-type') !== 'html') return
  code.innerHTML = code.innerHTML.replace(/</g, `&lt;`).replace(/>/g, `&gt;`)
})
