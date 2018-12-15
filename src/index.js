function getXDWrapper(node) {
  const wrapperName = WRAPPER_ASSIGNMENTS[node.constructor.name];
  if (wrapperName !== undefined) {
    return new wrapperName(node);
  }

  return undefined;
}

function getArtboardAsJSON(artboard) {
  const children = [];

  artboard.children.forEach(node => {
    if (getXDWrapper(node) !== undefined) {
      children.push(getXDWrapper(node));
    }
  });

  return children;
}

function getDocumentAsJSON(documentRoot) {
  const children = [];

  documentRoot.children.forEach(artboard => {
    children.push(getArtboardAsJSON(artboard));
  });

  return children;
}

module.exports = {
  getXDWrapper: getXDWrapper,
  getArtboardAsJSON: getArtboardAsJSON,
  getDocumentAsJSON: getDocumentAsJSON
};
