process.env.NODE_ENV = 'development'

import path from 'path'
import serve from 'rollup-plugin-serve'
import configList, { resolveFile } from './rollup.config'

const PORT = 3000
const devSite = `http://127.0.0.1:${PORT}`
const devPath = path.join('public', 'index.html')
const devUrl = `${devSite}/${devPath}`
console.log(`[dev]: ${devUrl}`)

configList.map((config, index) => {
  if (index === 0) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: [resolveFile('')]
        })
      ]
    ]
  }
  return config
})

export default configList