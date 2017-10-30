<script>
import Dragger from "../Dragger.vue";
import DraggingThinElement from "./DraggingThinElement.vue";
import DraggingThickElement from "./DraggingThickElement.vue";
import DraggingContainer from "./DraggingContainer.vue";
import DraggingRestrictor from "./DraggingRestrictor.vue";

export default {
  name: "Test",
  components: {
    Dragger,
    DraggingThinElement,
    DraggingThickElement,
    DraggingContainer,
    DraggingRestrictor
  },
  data() {
    return {};
  },
  render(h) {
    return (
      <div>
        {/* thin */}
        <div>
          <h1>thin</h1>
          <DraggingContainer>
            <Dragger>
              <DraggingThinElement />
            </Dragger>
          </DraggingContainer>
          <hr />
        </div>

        {/* thick */}
        <div>
          <h1>thick</h1>
          <DraggingContainer>
            <Dragger>
              <DraggingThickElement />
            </Dragger>
          </DraggingContainer>
          <hr />
        </div>

        {/* thin, restrict parent element */}
        <div>
          <h1>thin, restrict parent element</h1>
          <DraggingContainer>
            <Dragger shouldRestrictParentElement={true}>
              <DraggingThinElement />
            </Dragger>
          </DraggingContainer>
          <hr />
        </div>

        {/* thick, restrict parent element */}
        <div>
          <h1>thick, restrict parent element</h1>
          <DraggingContainer>
            <Dragger shouldRestrictParentElement={true}>
              <DraggingThickElement />
            </Dragger>
          </DraggingContainer>
          <hr />
        </div>

        {
          //   {/* thin, getRestrictElement */}
          // <div>
          //   <h1>thin, getRestrictElement</h1>
          //   <DraggingContainer>
          //     <Dragger getRestrictElement={() => document.getElementById('restrictElement')}>
          //       <DraggingThinElement />
          //     </Dragger>
          //   </DraggingContainer>
          //   <br />
          //   <DraggingRestrictor id="restrictElement" style={{
          //     position: 'fixed',
          //   }}/>
          //   <hr />
          // </div>
        }

        {/* thin, disableDragWhenDraggingElementInside */}
        <div>
          <h1>thin, disableDragWhenDraggingElementInside</h1>
          <DraggingContainer>
            <Dragger disableDragWhenDraggingElementInside={true}>
              <DraggingThinElement />
            </Dragger>
          </DraggingContainer>
          <hr />
        </div>
      </div>
    );
  }
};
</script>

<style>

</style>


