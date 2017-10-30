<script>
import Toolbar from "../Toolbar.vue";
import ToolSearchBar from "./ToolSearchBar.vue";
import ToolIconItem from "./ToolIconItem.vue";
import ToolSelectItem from "./ToolSelectItem.vue";
import ToolSeperator from "./ToolSeperator.vue";
import ToolButtonItem from "./ToolButtonItem.vue";
import Dragger from "../../../Dragger/component/Dragger.vue";

const ToolItemWrapper = {
  name: "ToolItemWrapper",
  props: ["marginRight"],
  render(h) {
    return (
      <div
        style={{
          display: "inline-block",
          marginRight: (this.marginRight || 24) + "px",
          height: "100%",
          whiteSpace: "normal",
          verticalAlign: "top"
        }}
      >
        {this.$slots.default}
      </div>
    );
  }
};

export default {
  name: "Test",
  components: {
    Toolbar,
    ToolSearchBar,
    ToolIconItem,
    ToolSelectItem,
    ToolSeperator,
    ToolButtonItem,

    /* layout */
    ToolItemWrapper,

    /* interact */
    Dragger
  },
  data() {
    return {
      test() {
        return document.documentElement.getBoundingClientRect().width;
      }
    };
  },
  watch: {
    test() {
      console.log("Watching test value: " + this.test);
    }
  },
  render(h) {
    return (
      <div>
        <div>
          <Toolbar
            style={{
              width: "100%",
              height: "56px"
            }}
          >
            {/* Search bar */}
            <div
              style={{
                float: "left",
                width: `${335 + 95}px`,
                height: "100%",
                marginRight: `${-(335 + 95)}px`,
                marginLeft: "26px"
              }}
            >
              <ToolSearchBar
                style={{
                  width: "309px",
                  display: "inline-block"
                }}
              />
            </div>

            {/* Export button */}
            <div
              style={{
                float: "right",
                width: `${80 + 26}px`,
                height: "100%",
                marginLeft: `${-(80 + 26)}px`,
                marginRight: `${26}px`,
                fontSize: '10px',
              }}
            >
              <ToolButtonItem style={{
                marginLeft: '26px'
              }}>
                Export
              </ToolButtonItem>
            </div>

            {/* icon items */}
            <div
              style={{
                position: "relative",
                marginLeft: `${335 + 95 + 26}px`,
                marginRight: `${80 + 26 + 26}px`,
                height: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden"
              }}
            >
              <Dragger
                style={{
                  height: "100%"
                }}
                shouldRestrictParentElement
              >
                <div
                  style={{
                    height: "100%",
                    whiteSpace: "nowrap"
                  }}
                >
                  <ToolItemWrapper>
                    <ToolSelectItem icon="icon-Choice" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-Selectinverse" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolSeperator />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-home" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-distance" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-area" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolSeperator />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-point" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-line" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-Straightarrow" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-rectangle" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-polygon" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-circle" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-text" />
                  </ToolItemWrapper>
                  <ToolItemWrapper>
                    <ToolIconItem icon="icon-clear" />
                  </ToolItemWrapper>
                </div>
              </Dragger>
            </div>
          </Toolbar>
        </div>
      </div>
    );
  }
};
</script>

<style>

</style>
