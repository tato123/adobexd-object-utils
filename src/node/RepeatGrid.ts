import { RepeatGrid } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import SceneNode from './SceneNode'

export default class XDRepeatGridWrapper implements JsonSerializer {
  private xdNode: RepeatGrid
  private parentNodeWrapper: SceneNode

  constructor(xdNode: RepeatGrid) {
    this.xdNode = xdNode
    this.parentNodeWrapper = new SceneNode(this.xdNode)
  }

  toJSON(): SerializedNode {
    let result = {}

    if (this.parentNodeWrapper) {
      result = this.parentNodeWrapper.toJSON()
    }

    const node = this.xdNode
    return {
      type: node.constructor.name,

      width: node.width,
      height: node.height,
      numColumns: node.numColumns,
      numRows: node.numRows,
      paddingX: node.paddingX,
      paddingY: node.paddingY,
      cellSize: node.cellSize,
      ...result
    }
  }
}
