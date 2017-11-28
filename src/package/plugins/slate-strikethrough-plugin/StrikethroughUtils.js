export const hasMark = value => value.marks.some(mark => mark.type === 'strikethrough')

export const strikethroughMarkStrategy = change => change
  .toggleMark('strikethrough')
  .focus()
