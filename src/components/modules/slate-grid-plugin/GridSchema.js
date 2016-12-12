import GridNode from './GridNode'
import GridRowNode from './GridRowNode'
import GridCellNode from './GridCellNode'


const GridSchema = {
  nodes: {
    'grid': GridNode,
    'grid-row': GridRowNode,
    'grid-cell': GridCellNode,
  },
}

export default GridSchema
