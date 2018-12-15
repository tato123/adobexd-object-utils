import { SymbolInstance } from '../@types/scenegraph'
import SceneNode from './SceneNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDSymbolInstanceWrapper implements JsonSerializer {
  private xdNode: SymbolInstance
  private parentNodeWrapper: SceneNode

  constructor(xdNode: SymbolInstance) {
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

      symbolId: node.symbolId,
      ...result
    }
  }
}
