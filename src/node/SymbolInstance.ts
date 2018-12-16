import { SymbolInstance } from '../@types/scenegraph'
import SceneNode from './SceneNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class SymbolInstanceWrapper extends SceneNode implements JsonSerializer {
  private symbolInstance: SymbolInstance

  constructor(xdNode: SymbolInstance) {
    super(xdNode)
    this.symbolInstance = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.symbolInstance
    return Object.assign(
      {},
      {
        type: node.constructor.name,
        symbolId: node.symbolId
      },
      super.toJSON()
    )
  }
}
