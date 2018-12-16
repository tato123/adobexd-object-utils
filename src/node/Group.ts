import { Group } from '../@types/scenegraph'
import SceneNode from './SceneNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class GroupWrapper extends SceneNode implements JsonSerializer {
  private groupWrapper: Group

  constructor(xdNode: Group) {
    super(xdNode)
    this.groupWrapper = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.groupWrapper
    return Object.assign(
      {},
      {
        type: node.constructor.name,
        mask: node.mask
      },
      super.toJSON()
    )
  }
}
