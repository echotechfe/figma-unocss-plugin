import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['iife'],
  target: 'es2019',
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: false,
  minify: true,
  outExtension: () => ({
    js: `.js`
  })
});