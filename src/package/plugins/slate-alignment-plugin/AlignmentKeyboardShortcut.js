import { alignLeft, alignCenter, alignRight } from './AlignmentUtils'


const AlignmentKeyboardShortcut = (event, change) => {
  const keyLeft = event.key === 'l'
  const macLeft = event.metaKey && event.shiftKey && keyLeft
  const winLeft = event.altKey && event.shiftKey && keyLeft
  const isLeft = macLeft || winLeft
  if (isLeft) {
    event.preventDefault()
    return alignLeft(change)
  }

  const keyCenter = event.key === 'c'
  const macCenter = event.metaKey && event.shiftKey && keyCenter
  const winCenter = event.altKey && event.shiftKey && keyCenter
  const isCenter = macCenter || winCenter
  if (isCenter) {
    event.preventDefault()
    return alignCenter(change)
  }

  const keyRight = event.key === 'r'
  const macRight = event.metaKey && event.shiftKey && keyRight
  const winRight = event.altKey && event.shiftKey && keyRight
  const isRight = macRight || winRight
  if (isRight) {
    event.preventDefault()
    return alignRight(change)
  }

  return
}

export default AlignmentKeyboardShortcut
