process.env.NODE_ENV = 'production'

import { uglify } from 'rollup-plugin-uglify'
import cleanup from 'rollup-plugin-cleanup'
import configList, { resolveFile } from './rollup.config'

configList.map((config, index) => {
  config.plugins = [
    ...config.plugins,
    ...[
      uglify(),
      cleanup()
    ]
  ]
  return config
})

export default configList