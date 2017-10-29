<script>
import Toolbar from "../Toolbar.vue";
import ToolbarDragger from "../ToolbarDragger.vue";
import ToolSearchBar from "./ToolSearchBar.vue";
import ToolItem from "./ToolItem.vue";
import ToolSelectItem from "./ToolSelectItem.vue";
import ToolSeperator from "./ToolSeperator.vue";
import FloatLeftMarginRight from "./FloatLeftMarginRight.vue";

const Flmr24 = {
  render(h) {
    return (
      <FloatLeftMarginRight value="24">
        {this.$slots.default}
      </FloatLeftMarginRight>
    );
  }
};

export default {
  name: "Test",
  components: {
    Toolbar,
    ToolSearchBar,
    ToolItem,
    ToolSelectItem,
    ToolSeperator,

    /* layout */
    FloatLeftMarginRight,
    Flmr24
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
              height: "56px",
              lineHeight: "56px"
            }}
          >
            <div
              style={{
                float: "left",
                width: "335px",
                height: "100%",
                marginRight: "-335px"
              }}
            >
              <FloatLeftMarginRight value={26} />
              <ToolSearchBar
                style={{
                  width: "309px"
                }}
              />
            </div>

            <div
              style={{
                position: "relative",
                marginLeft: "335px",
                height: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden"
              }}
            >
              <ToolbarDragger>
                <div style={{
                  width: '1200px',
                  height: '100%',
                }}>
                  <FloatLeftMarginRight value={95} />
                  <Flmr24>
                    <ToolSelectItem icon="icon-Choice" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-Selectinverse" />
                  </Flmr24>
                  <Flmr24>
                    <ToolSeperator />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-home" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-distance" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-area" />
                  </Flmr24>
                  <Flmr24>
                    <ToolSeperator />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-point" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-line" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-Straightarrow" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-rectangle" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-polygon" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-circle" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-text" />
                  </Flmr24>
                  <Flmr24>
                    <ToolItem icon="icon-clear" />
                  </Flmr24>
                </div>
              </ToolbarDragger>
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
