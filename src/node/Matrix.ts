import { Matrix } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDMatrixWrapper implements JsonSerializer {
  private xdNode: Matrix

  constructor(xdNode: Matrix) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.xdNode
    return {
      type: node.constructor.name,
      hasSkey: node.hasSkew(),
      translate: node.getTranslate()
    }
  }
}
