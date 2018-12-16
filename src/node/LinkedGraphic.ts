import { LinkedGraphic } from '../@types/scenegraph'
import SceneNode from './SceneNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class LinkedGraphicWrapper extends SceneNode implements JsonSerializer {
  private linkedGraphic: LinkedGraphic

  constructor(xdNode: LinkedGraphic) {
    super(xdNode)
    this.linkedGraphic = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.linkedGraphic
    return Object.assign(
      {},
      {
        type: node.constructor.name
      },
      super.toJSON()
    )
  }
}
