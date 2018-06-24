const pres = document.querySelectorAll('pre')

pres.forEach(pre => {
  if (pre.getAttribute('data-type') !== 'html') return
  pre.innerHTML = pre.innerHTML.replace(/</g, `&lt;`).replace(/>/g, `&gt;`)
})