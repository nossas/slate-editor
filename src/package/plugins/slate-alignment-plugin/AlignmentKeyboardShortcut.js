import { alignLeft, alignCenter, alignRight } from './AlignmentUtils'


const AlignmentKeyboardShortcut = (event, data, change) => {
  const keyLeft = data.key === 'l'
  const macLeft = data.isCmd && data.isShift && keyLeft
  const winLeft = data.isAlt && data.isShift && keyLeft
  const isLeft = macLeft || winLeft
  if (isLeft) {
    event.preventDefault()
    return alignLeft(change)
  }

  const keyCenter = data.key === 'c'
  const macCenter = data.isCmd && data.isShift && keyCenter
  const winCenter = data.isAlt && data.isShift && keyCenter
  const isCenter = macCenter || winCenter
  if (isCenter) {
    event.preventDefault()
    return alignCenter(change)
  }

  const keyRight = data.key === 'r'
  const macRight = data.isCmd && data.isShift && keyRight
  const winRight = data.isAlt && data.isShift && keyRight
  const isRight = macRight || winRight
  if (isRight) {
    event.preventDefault()
    return alignRight(change)
  }

  return
}

export default AlignmentKeyboardShortcut
