process.env.NODE_ENV = 'development'

import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import configList from './rollup.config'

configList.map((config, index) => {
  if (index === 0) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve(),
        livereload()
      ]
    ]
  }
  return config
})

export default configList