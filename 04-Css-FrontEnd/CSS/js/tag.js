// Como mudar de cor e tambem aparecer os nomes das tags do html.
const colors = {
      p: '#72577c',
      div: '#562155',
      span: '#ff494b',
      section: '#db3026',
      ul: '#b22148',
      ol: '#94b053',
      li: '#1693a5',
      header: '#e30224',
      nav: '#ff3d00',
      main: '#75c58e',
      footer: '#ff3d00',
      form: '#99173c',
      body: '#e3a72f',
      padrao: '#bffa37',
      get(tag) {
            return this[tag] ? this[tag] : this.padrao3
      }

}

document.querySelectorAll('.tag').forEach(elemento => {
      const tagName = elemento.tagName.toLowerCase()

      elemento.style.borderColor = colors.get(tagName)

      if (!elemento.classList.contains('nolabel')) {
            const label = document.createElement('label')
            label.style.backgroundColor = colors.get(tagName)
            label.innerHTML = tagName
            elemento.insertBefore(label, elemento.childNodes[0])
      }
})