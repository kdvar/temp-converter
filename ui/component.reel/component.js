/**
 * @module ui/component.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Component
 * @extends Component
 */
exports.Component = Component.specialize(/** @lends Component# */ {
    constructor: {
        value: function Component() {
            this.super();
        }
    }
});
