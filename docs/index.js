const codes = document.querySelectorAll('pre code.html')
codes.forEach(code => code.innerHTML = code.innerHTML.replace(/</g, `&lt;`).replace(/>/g, `&gt;`))
