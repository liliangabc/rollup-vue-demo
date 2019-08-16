process.env.NODE_ENV = 'production'

import { uglify } from 'rollup-plugin-uglify'
import configList, { resolveFile } from './rollup.config'

configList.map((config, index) => {
  config.plugins = [
    ...config.plugins,
    ...[
      uglify()
    ]
  ]
  return config
})

export default configList