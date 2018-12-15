/// <reference path="./@types/scenegraph.d.ts" />
/// <reference path="./@types/index.d.ts" />

import * as NodeTypes from './node'

interface AllocObject {
  constructor: {
    name: string
  }
}

interface XdWrapper extends NodeTypes.JsonSerializer {
  new (any): XdWrapper
}

function getXDWrapper(node: AllocObject): XdWrapper | undefined {
  const wrapperName: XdWrapper = NodeTypes[node.constructor.name]
  if (wrapperName !== undefined) {
    return new wrapperName(node)
  }

  return undefined
}

function getArtboardAsJSON(artboard): Array<NodeTypes.SerializedNode> {
  const children: Array<NodeTypes.SerializedNode> = []

  artboard.children.forEach(node => {
    if (getXDWrapper(node) !== undefined) {
      const result: any = getXDWrapper(node)
      if (result) {
        children.push(result)
      }
    }
  })

  return children
}

function getDocumentAsJSON(documentRoot): Array<NodeTypes.SerializedNode> {
  const children: Array<NodeTypes.SerializedNode> = []

  documentRoot.children.forEach(artboard => {
    const result: any = getArtboardAsJSON(artboard)
    if (result) {
      children.push(result)
    }
  })

  return children
}

module.exports = {
  getXDWrapper: getXDWrapper,
  getArtboardAsJSON: getArtboardAsJSON,
  getDocumentAsJSON: getDocumentAsJSON
}
