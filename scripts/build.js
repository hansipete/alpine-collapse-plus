buildPlugin({
  entryPoints: ['builds/cdn.js'],
  outfile: 'dist/collapse-plus.min.js',
})

buildPlugin({
  entryPoints: ['builds/module.js'],
  outfile: 'dist/collapse-plus.esm.js',
  platform: 'neutral',
  mainFields: ['main', 'module'],
})

function buildPlugin(buildOptions) {
  return require('esbuild').buildSync({
    ...buildOptions,
    minify: true,
    bundle: true,
  })
}
