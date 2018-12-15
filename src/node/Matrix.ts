import { Matrix } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDMatrixWrapper implements JsonSerializer {
  private xdNode: Matrix

  constructor(xdNode: Matrix) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    let result = {}

    const node = this.xdNode
    return {
      type: node.constructor.name,

      ...result
    }
  }
}
