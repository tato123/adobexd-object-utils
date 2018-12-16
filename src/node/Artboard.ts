import GraphicsNode from './GraphicsNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import { Artboard } from '../@types/scenegraph'

export default class ArtboardWrapper extends GraphicsNode implements JsonSerializer {
  private artboardNode: Artboard

  constructor(xdNode: Artboard) {
    super(xdNode)
    this.artboardNode = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.artboardNode
    return Object.assign(
      {},
      {
        type: node.constructor.name,
        width: node.width,
        height: node.height,
        viewportHeight: node.viewportHeight
      },
      super.toJSON()
    )
  }
}
