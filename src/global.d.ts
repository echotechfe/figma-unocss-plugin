declare module 'vue-style-transformer/transformer' {
  // 定义模块的导出类型
  export function toUnoCSS(css: string): string
  export function replaceShortcuts(css: string[]): string[]
}
