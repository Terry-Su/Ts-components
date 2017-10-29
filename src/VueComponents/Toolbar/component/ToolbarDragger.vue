<script>
import * as Util from "../util/index";
import * as ToolbarToolFiber from "../toolbarToolFiber/index";
import Dragger from "../../Dragger/component/Dragger.vue";

const RestrictElement = {
  render(h) {
    return (
      <div
        style={{
          position: "absolute",
          width: '100%',
          height: "100%",
          background: "orange",
          display: "none",
        }}
      >
      </div>
    );
  }
};

export default {
  name: "ToolbarDragger",
  component: {
    RestrictElement
  },
  data() {
    return {
      style: {
        // float: 'left',
        // display: 'inline-block',
        height: "100%"
      },
      toolbarWidth: null,
      toolbarHeight: null,
      toDragElementWidth: null,
      toDragElementHeight: null,
      restrictElement: null,
      styleOfRestrictElement: null
    };
  },
  methods: {
    updateProp(key, value) {
      this[key] = value;
    },
    updateDragData() {
      this.updateProp("toolbarWidth", this.getToobarWidth());
      this.updateProp("toolbarHeight", this.getToobarHeight());
      this.updateProp("toolbarRight", this.getToobarRight());
      this.updateProp("toDragElementWidth", this.getToDragElementWidth());
      this.updateProp("toDragElementHeight", this.getToDragElementHeight());
      this.updateProp("toDragElementRight", this.getToDragElementRight());

      this.updateStyleOfRestrictElement();
      this.updateProp("restrictElement", this.getRestrictElement());
    },
    updateStyleOfRestrictElement() {
      const deltaX = this.toDragElementRight - this.toolbarRight

      const width = this.toDragElementWidth + deltaX
      const left = -1 * deltaX

      console.log(deltaX)
      this.updateProp('styleOfRestrictElement', {
        width: width + 'px',
        left: left + 'px',
      })
    },
    getToobarWidth() {
      return this.$parent.$el.getBoundingClientRect().width;
    },
    getToobarHeight() {
      return this.$parent.$el.getBoundingClientRect().height;
    },
    getToobarRight() {
      return this.$parent.$el.getBoundingClientRect().right;
    },
    getToDragElementWidth() {
      return this.$el.children[0].getBoundingClientRect().width;
    },
    getToDragElementHeight() {
      return this.$el.children[0].getBoundingClientRect().height;
    },
    getToDragElementRight() {
      return this.$el.children[0].getBoundingClientRect().right;
    },
    getRestrictElement() {
      const filterRestrictElement = el => el.className === "restrictElement";
      const restrictElement = Array.prototype.filter.call(
        this.$el.children,
        filterRestrictElement
      )[0];
      return restrictElement;
    }
  },
  mounted() {
    this.updateDragData();
    Util.bindWindowResize(this.updateDragData);
  },
  render(h) {
    return (
      <div style={{
        position: 'relative',
        ...this.style || {},
      }}>
        <Dragger  style={{
          height: '56px',
        }}>
          { 
            /*
            this.$slots.default
            */
          }
          <div style={{
            float: 'left',
            width: '1200px',
            height: '100px',
            background: 'blue',
          }}>
            123123123
          </div>
        </Dragger>
        <RestrictElement
          class="restrictElement"
          style={this.styleOfRestrictElement}
        />
      </div>
    );
  }
};
</script>

<style>

</style>
