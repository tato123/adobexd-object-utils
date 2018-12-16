import { SceneNode } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class SceneNodeWrapper implements JsonSerializer {
  private xdNode: SceneNode

  constructor(xdNode: SceneNode) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.xdNode
    return {
      type: node.constructor.name,
      guid: node.guid,
      parent: node.parent,
      children: [],
      isInArtworkTree: node.isInArtworkTree,
      isContainer: node.isContainer,
      selected: node.selected,
      visible: node.visible,
      opacity: node.opacity,
      transform: node.transform,
      translation: node.translation,
      rotation: node.rotation,
      globalBounds: node.globalBounds,
      localBounds: node.localBounds,
      boundsInParent: node.boundsInParent,
      topLeftInParent: node.topLeftInParent,

      localCenterPoint: node.localCenterPoint,
      globalDrawBounds: node.globalDrawBounds,
      name: node.name,
      hasDefaultName: node.hasDefaultName,
      locked: node.locked,
      markedForExport: node.markedForExport,
      hasLinkedContent: node.hasLinkedContent
    }
  }
}
