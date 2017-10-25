<template>
    <div @mousedown="this.onDragStart" @touchstart="this.onDragStart" :style="style">
      <slot></slot>
    </div>
</template>

<script>
import * as DraggerFiber from '../draggerFiber/index'
import * as Util from '../util/index'

export default {
  name: "App",
  props: [
    'getRestrictElement',
    'shouldRestrictParentElement',
  ],
  data() {
    return {
      x: null,
      y: null,

      // mouse's x position to element's left side
      offsetX: null,
      // mouse's x position to document's left side
      clientX: null,
      // previous mouse's x position to document's left side
      prevMouseMoveClientX: null,
      // mouse's y position to element's top side
      offsetY: null,
      // mouse's y position to document's top side
      clientY: null,
      // previous mouse's y position to document's top side
      prevMouseMoveClientY: null,

      isPressed: null,
      element: null,
      restrictElement: null
    };
  },
  computed: {
    style() {
      return {
        position: 'absolute',
        left: this.x + 'px',
        top: this.y + 'px',
      }
    }
  },
  beforeCreate() {
    Util.mapMethodsFromAToB(DraggerFiber, this, [
      "bindDocumentEvents",
      "documentMouseMoveTouchMoveCallback",
      "documentMouseUpTouchLeaveCallback",
      "getElementWidth",
      "getElementHeight",
      "getElementLeft",
      "getElementTop",
      "getParentElement",
      "getParentElementLeft",
      "getParentElementTop",
      "onDragStart",
      "updateProp"
    ]);    
  },
  mounted() {
    this.updateProp('element', this.$el)
    
    const { element, getParentElement } = this;

    const elementParentElement = getParentElement();

    this.updateProp("elementLeft", element.getBoundingClientRect().x);
    this.updateProp("elementTop", element.getBoundingClientRect().y);
    this.updateProp(
      "parentElementLeft",
      elementParentElement.getBoundingClientRect().x
    );
    this.updateProp(
      "parentElementTop",
      elementParentElement.getBoundingClientRect().y
    );

    this.bindDocumentEvents();
  },
};
</script>

<style>

</style>
