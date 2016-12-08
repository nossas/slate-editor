import FontSizeNode from './FontSizeNode'
import FontSizeUtils from './FontSizeUtils'
import FontSizeInput from './FontSizeInput'
import FontSizeKeyboardShortcut from './FontSizeKeyboardShortcut'


export default options => {
  const sign = '[SlateJS][FontSizePlugin]'
  if (!options) throw new Error(`${sign} You must supply the options to configure the plugin.`)
  if (!options.initialFontSize) throw new Error(`${sign} You must supply the \`initialFontSize\`.`)

  const { initialFontSize } = options

  if (!initialFontSize) throw new Error('You must supply an `applyTransform` function...')

  return {
    schema: {
      nodes: {
        'font-size': FontSizeNode,
      },
    },
    ...FontSizeKeyboardShortcut({ initialFontSize }),
  }
}

export {
  FontSizeNode,
  FontSizeUtils,
  FontSizeInput,
  FontSizeKeyboardShortcut,
}
