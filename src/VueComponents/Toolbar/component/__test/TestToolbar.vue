<script>
import Toolbar from "../Toolbar.vue";
import ToolSearchBar from "./ToolSearchBar.vue";
import ToolItem from "./ToolItem.vue";
import ToolSelectItem from "./ToolSelectItem.vue";
import ToolSeperator from "./ToolSeperator.vue";
import FloatLeftMarginRight from "./FloatLeftMarginRight.vue";
import Dragger from "../../../Dragger/component/Dragger.vue";

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
    Flmr24,

    /* interact */
    Dragger
  },
  data() {
    return {
      test: "123"
    };
  },
  render(h) {
    return (
      <div>
        <div>
          <Toolbar
            style={{
              width: "1000px",
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
              <Dragger
                getRestrictElement={() =>
                  document.getElementById("draggerRestrictElemnt")}
                style={{
                  display: "inline-block",
                  width: "1200px",
                  height: "100%",
                  whiteSpace: "normal",
                  verticalAlign: "top"
                }}
              >
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
              </Dragger>

              <div
                id="draggerRestrictElemnt"
                style={{
                  //   position: "absolute",
                  float: "left",
                  marginLeft: "-500px",
                  width: "3000px",
                  height: "100%"
                }}
              />
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
