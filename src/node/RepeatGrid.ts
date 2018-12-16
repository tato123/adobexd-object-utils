import { RepeatGrid } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import SceneNode from './SceneNode'

export default class RepeatGridWrapper extends SceneNode implements JsonSerializer {
  private repeatGrid: RepeatGrid

  constructor(xdNode: RepeatGrid) {
    super(xdNode)
    this.repeatGrid = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.repeatGrid
    return Object.assign(
      {},
      {
        type: node.constructor.name,

        width: node.width,
        height: node.height,
        numColumns: node.numColumns,
        numRows: node.numRows,
        paddingX: node.paddingX,
        paddingY: node.paddingY,
        cellSize: node.cellSize
      },
      super.toJSON()
    )
  }
}
