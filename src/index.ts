import { toUnoCSS, replaceShortcuts } from 'vue-style-transformer/transformer'

figma.codegen.on('generate', async (e) => {
  const node = e.node
  const cssObj = await node.getCSSAsync()
  const raw = Object.entries(cssObj)

  const cssCode = raw
    .map(
      ([key, value]) => `${key}: ${value.replace(/\/\*.*\*\//g, '').trim()};`,
    )
    .join('\n')
  const uno = raw
    .map(
      ([key, value]) =>
        `${key}: ${value
          .replace(/\/\*.*\*\//g, '')
          .replace(/var\(--[\w-]*,\s*(.*)\)/g, (_, $1) => $1)
          .trim()}`,
    )
    .map((i) => toUnoCSS(i))
    .filter((i) => !!i)

  const unoCode = replaceShortcuts(uno).join(' ')


  return [
    {
      title: 'Echo-UnoCSS',
      code: unoCode,
      language: 'HTML',
    },
    {
      title: 'css',
      code: cssCode,
      language: 'CSS',
    },
  ]
})
