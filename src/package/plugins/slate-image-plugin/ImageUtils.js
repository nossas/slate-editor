export const insertImageStrategy = state => {
  const src = 'https://orig06.deviantart.net/7869/f/2009/131/9/e/zubat_icon_by_the_fry_bat.gif'
  return state
    .transform()
    .insertInline({
      type: 'image',
      isVoid: true,
      data: { src }
    })
    .apply()
}
