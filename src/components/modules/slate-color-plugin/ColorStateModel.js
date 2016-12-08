class ColorStateModel {
  static create(options) {
    return {
      color: {
        showPicker: false,
        rgba: { r: 255, g: 255, b: 255, a: 1 },
      }
    }
  }
}

export default ColorStateModel
