import { SceneNode } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export interface SerializedSceneNode extends SerializedNode {
  type: string
  guid: SceneNode['guid']
  parent: SceneNode['parent']
  children: SceneNode['children']
  isInArtworkTree: SceneNode['isInArtworkTree']
  isContainer: SceneNode['isContainer']
  selected: SceneNode['selected']
  visible: SceneNode['visible']
  opacity: SceneNode['opacity']
  transform: SceneNode['transform']
  translation: SceneNode['translation']
  rotation: SceneNode['rotation']
  globalBounds: SceneNode['globalBounds']
  localBounds: SceneNode['localBounds']
  boundsInParent: SceneNode['boundsInParent']
  topLeftInParent: SceneNode['topLeftInParent']
  localCenterPoint: SceneNode['localCenterPoint']
  globalDrawBounds: SceneNode['globalDrawBounds']
  name: SceneNode['name']
  hasDefaultName: SceneNode['hasDefaultName']
  locked: SceneNode['locked']
  markedForExport: SceneNode['markedForExport']
  hasLinkedContent: SceneNode['hasLinkedContent']
}

export default class SceneNodeWrapper implements JsonSerializer {
  private xdNode: SceneNode

  constructor(xdNode: SceneNode) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedSceneNode {
    let result = {}

    const node = this.xdNode
    return {
      type: node.constructor.name,
      guid: node.guid,
      parent: node.parent,
      children: node.children,
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
      hasLinkedContent: node.hasLinkedContent,
      ...result
    }
  }
}
