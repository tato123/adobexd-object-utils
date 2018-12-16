import { RootNode } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import SceneNode from './SceneNode'

export default class RootNodeWrapper extends SceneNode implements JsonSerializer {
  private rootNode: RootNode

  constructor(xdNode: RootNode) {
    super(xdNode)
    this.rootNode = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.rootNode
    return Object.assign(
      {},
      {
        type: node.constructor.name
      },
      super.toJSON()
    )
  }
}
