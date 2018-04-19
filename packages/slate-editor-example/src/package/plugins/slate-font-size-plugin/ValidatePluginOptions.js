const ValidatePluginOptions = options => {
  const sign = '[SlateJS][FontSizePlugin]'

  if (!options) {
    throw new Error(`${sign} You must supply the options to configure the plugin.`)
  }

  if (!options.initialFontSize) {
    throw new Error(`${sign} You must supply the \`initialFontSize\`.`)
  }
}

export default ValidatePluginOptions
