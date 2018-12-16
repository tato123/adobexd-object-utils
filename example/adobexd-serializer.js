'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var XDMatrixWrapper = /** @class */ (function () {
    function XDMatrixWrapper(xdNode) {
        this.xdNode = xdNode;
    }
    XDMatrixWrapper.prototype.toJSON = function () {
        var result = {};
        var node = this.xdNode;
        return __assign({ type: node.constructor.name }, result);
    };
    return XDMatrixWrapper;
}());

var XDColorWrapper = /** @class */ (function () {
    function XDColorWrapper(xdNode) {
        this.xdNode = xdNode;
    }
    XDColorWrapper.prototype.toJSON = function () {
        var result = {};
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, a: node.a, r: node.r, g: node.g, b: node.b }, result);
    };
    return XDColorWrapper;
}());

var XDLinearGradientFillWrapper = /** @class */ (function () {
    function XDLinearGradientFillWrapper(xdNode) {
        this.xdNode = xdNode;
    }
    XDLinearGradientFillWrapper.prototype.toJSON = function () {
        var result = {};
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, colorStops: node.colorStops, startX: node.startX, startY: node.startY, endX: node.endX, endY: node.endY }, result);
    };
    return XDLinearGradientFillWrapper;
}());

var XDRadialGradientFillWrapper = /** @class */ (function () {
    function XDRadialGradientFillWrapper(xdNode) {
        this.xdNode = xdNode;
    }
    XDRadialGradientFillWrapper.prototype.toJSON = function () {
        var result = {};
        var node = this.xdNode;
        return __assign({ type: node.constructor.name }, result);
    };
    return XDRadialGradientFillWrapper;
}());

var ImageFillWrapper = /** @class */ (function () {
    function ImageFillWrapper(xdNode) {
        this.xdNode = xdNode;
    }
    ImageFillWrapper.prototype.toJSON = function () {
        var result = {};
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, 
            // SCALE_STRETCH: ImageFill.SCALE_STRETCH,
            // SCALE_COVER: ImageFill.SCALE_COVER,
            scaleBehaviour: node.scaleBehaviour, mimeType: node.mimeType, isLinkedContent: node.isLinkedContent, naturalWidth: node.naturalWidth, naturalHeight: node.naturalHeight }, result);
    };
    return ImageFillWrapper;
}());

var XDShadowWrapper = /** @class */ (function () {
    function XDShadowWrapper(xdNode) {
        this.xdNode = xdNode;
    }
    XDShadowWrapper.prototype.toJSON = function () {
        var result = {};
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, x: node.x, y: node.y, blur: node.blur, color: node.color, visible: node.visible }, result);
    };
    return XDShadowWrapper;
}());

var BlurWrapper = /** @class */ (function () {
    function BlurWrapper(xdNode) {
        this.xdNode = xdNode;
    }
    BlurWrapper.prototype.toJSON = function () {
        var result = {};
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, blurAmount: node.blurAmount, brightnessAmount: node.brightnessAmount, fillOpacity: node.fillOpacity, isBackgroundEffect: node.isBackgroundEffect, visible: node.visible }, result);
    };
    return BlurWrapper;
}());

var SceneNodeWrapper = /** @class */ (function () {
    function SceneNodeWrapper(xdNode) {
        this.xdNode = xdNode;
    }
    SceneNodeWrapper.prototype.toJSON = function () {
        var result = {};
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, guid: node.guid, parent: node.parent, children: node.children, isInArtworkTree: node.isInArtworkTree, isContainer: node.isContainer, selected: node.selected, visible: node.visible, opacity: node.opacity, transform: node.transform, translation: node.translation, rotation: node.rotation, globalBounds: node.globalBounds, localBounds: node.localBounds, boundsInParent: node.boundsInParent, topLeftInParent: node.topLeftInParent, localCenterPoint: node.localCenterPoint, globalDrawBounds: node.globalDrawBounds, name: node.name, hasDefaultName: node.hasDefaultName, locked: node.locked, markedForExport: node.markedForExport, hasLinkedContent: node.hasLinkedContent }, result);
    };
    return SceneNodeWrapper;
}());

var GraphicsNodeWrapper = /** @class */ (function () {
    function GraphicsNodeWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new SceneNodeWrapper(this.xdNode);
    }
    GraphicsNodeWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, fill: node.fill, fillEnabled: node.fillEnabled, stroke: node.stroke, strokeEnabled: node.strokeEnabled, strokeWidth: node.strokeWidth, strokePosition: node.strokePosition, strokeEndCaps: node.strokeEndCaps, strokeJoins: node.strokeJoins, strokeMiterLimit: node.strokeMiterLimit, strokeDashArray: node.strokeDashArray, strokeDashOffset: node.strokeDashOffset, shadow: node.shadow, blur: node.blur, pathData: node.pathData, hasLinkedGraphicFill: node.hasLinkedGraphicFill }, result);
    };
    return GraphicsNodeWrapper;
}());

var ArtboardWrapper = /** @class */ (function () {
    function ArtboardWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new GraphicsNodeWrapper(this.xdNode);
    }
    ArtboardWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, width: node.width, height: node.height, viewportHeight: node.viewportHeight }, result);
    };
    return ArtboardWrapper;
}());

var XDRectangleWrapper = /** @class */ (function () {
    function XDRectangleWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new GraphicsNodeWrapper(this.xdNode);
    }
    XDRectangleWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, width: node.width, height: node.height, cornerRadii: node.cornerRadii, hasRoundedCorners: node.hasRoundedCorners, effectiveCornerRadii: node.effectiveCornerRadii }, result);
    };
    return XDRectangleWrapper;
}());

var XDEllipseWrapper = /** @class */ (function () {
    function XDEllipseWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new GraphicsNodeWrapper(this.xdNode);
    }
    XDEllipseWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, radiusX: node.radiusX, radiusY: node.radiusY, isCircle: node.isCircle }, result);
    };
    return XDEllipseWrapper;
}());

var XDLineWrapper = /** @class */ (function () {
    function XDLineWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new GraphicsNodeWrapper(this.xdNode);
    }
    XDLineWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, start: node.start, end: node.end }, result);
    };
    return XDLineWrapper;
}());

var XDPathWrapper = /** @class */ (function () {
    function XDPathWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new GraphicsNodeWrapper(this.xdNode);
    }
    XDPathWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, pathData: node.pathData }, result);
    };
    return XDPathWrapper;
}());

var XDBooleanGroupWrapper = /** @class */ (function () {
    function XDBooleanGroupWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new GraphicsNodeWrapper(this.xdNode);
    }
    XDBooleanGroupWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, pathOp: node.pathOp }, result);
    };
    return XDBooleanGroupWrapper;
}());

var XDTextWrapper = /** @class */ (function () {
    function XDTextWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new GraphicsNodeWrapper(this.xdNode);
    }
    XDTextWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, text: node.text, styleRanges: node.styleRanges, flipY: node.flipY, textAlign: node.textAlign, lineSpacing: node.lineSpacing, areaBox: node.areaBox, clippedByArea: node.clippedByArea }, result);
    };
    return XDTextWrapper;
}());

var XDGroupWrapper = /** @class */ (function () {
    function XDGroupWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new SceneNodeWrapper(this.xdNode);
    }
    XDGroupWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, mask: node.mask }, result);
    };
    return XDGroupWrapper;
}());

var XDSymbolInstanceWrapper = /** @class */ (function () {
    function XDSymbolInstanceWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new SceneNodeWrapper(this.xdNode);
    }
    XDSymbolInstanceWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, symbolId: node.symbolId }, result);
    };
    return XDSymbolInstanceWrapper;
}());

var XDRepeatGridWrapper = /** @class */ (function () {
    function XDRepeatGridWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new SceneNodeWrapper(this.xdNode);
    }
    XDRepeatGridWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name, width: node.width, height: node.height, numColumns: node.numColumns, numRows: node.numRows, paddingX: node.paddingX, paddingY: node.paddingY, cellSize: node.cellSize }, result);
    };
    return XDRepeatGridWrapper;
}());

var XDLinkedGraphicWrapper = /** @class */ (function () {
    function XDLinkedGraphicWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new SceneNodeWrapper(this.xdNode);
    }
    XDLinkedGraphicWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name }, result);
    };
    return XDLinkedGraphicWrapper;
}());

var XDRootNodeWrapper = /** @class */ (function () {
    function XDRootNodeWrapper(xdNode) {
        this.xdNode = xdNode;
        this.parentNodeWrapper = new SceneNodeWrapper(this.xdNode);
    }
    XDRootNodeWrapper.prototype.toJSON = function () {
        var result = {};
        if (this.parentNodeWrapper) {
            result = this.parentNodeWrapper.toJSON();
        }
        var node = this.xdNode;
        return __assign({ type: node.constructor.name }, result);
    };
    return XDRootNodeWrapper;
}());



var NodeTypes = /*#__PURE__*/Object.freeze({
    Matrix: XDMatrixWrapper,
    Color: XDColorWrapper,
    LinearGradientFill: XDLinearGradientFillWrapper,
    RadialGradientFill: XDRadialGradientFillWrapper,
    ImageFill: ImageFillWrapper,
    Shadow: XDShadowWrapper,
    Blur: BlurWrapper,
    SceneNode: SceneNodeWrapper,
    GraphicsNode: GraphicsNodeWrapper,
    Artboard: ArtboardWrapper,
    Rectange: XDRectangleWrapper,
    Ellipse: XDEllipseWrapper,
    Line: XDLineWrapper,
    Path: XDPathWrapper,
    BooleanGroup: XDBooleanGroupWrapper,
    Text: XDTextWrapper,
    Group: XDGroupWrapper,
    SymbolInstance: XDSymbolInstanceWrapper,
    RepeatGrid: XDRepeatGridWrapper,
    LinkedGraphic: XDLinkedGraphicWrapper,
    RootNode: XDRootNodeWrapper
});

function getXDWrapper(node) {
    var wrapperName = NodeTypes[node.constructor.name];
    if (wrapperName !== undefined) {
        return new wrapperName(node);
    }
    return undefined;
}
function getArtboardAsJSON(artboard) {
    var children = [];
    artboard.children.forEach(function (node) {
        if (getXDWrapper(node) !== undefined) {
            var result = getXDWrapper(node);
            if (result) {
                children.push(result);
            }
        }
    });
    return children;
}
function getDocumentAsJSON(documentRoot) {
    var children = [];
    documentRoot.children.forEach(function (artboard) {
        var result = getArtboardAsJSON(artboard);
        if (result) {
            children.push(result);
        }
    });
    return children;
}
function serialize(node) {
    return node.length === 0 ? [] : node.map(function (n) { return getArtboardAsJSON(n); });
}
module.exports = {
    serialize: serialize,
    getXDWrapper: getXDWrapper,
    getArtboardAsJSON: getArtboardAsJSON,
    getDocumentAsJSON: getDocumentAsJSON
};
