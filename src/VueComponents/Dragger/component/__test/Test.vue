<template>
    <div>
        <TestParent>
            <Dragger>
                <TestChild />
            </Dragger>
        </TestParent>

        <br />
        <br />
        <br />

        <TestParentRestrictor>
          <Dragger :shouldRestrictParentElement="true" >
            <TestChild />
          </Dragger>
        </TestParentRestrictor>

        <br />
        <br />
        <br />

        <TestParentRestrictor>
          <Dragger :getRestrictElement="getRestrictElement" >
            <TestChild />
          </Dragger>
        </TestParentRestrictor>
    </div>
</template>

<script>
import Dragger from "../Dragger.vue";
import TestChild from "./TestChild.vue";
import TestParent from "./TestParent.vue";
import TestParentRestrictor from "./TestParentRestrictor.vue";

const shouldShowCatalog = ["normal", "restrictor"];
const include = num => shouldShowCatalog.includes(num);

export default {
  name: "Test",
  components: {
    Dragger,
    TestChild,
    TestParent,
    TestParentRestrictor
  },
  data() {
    return {
    };
  },
  methods: {
    getRestrictElement() {
      return this.$children[1].$el
    }
  }
};
</script>

<style>

</style>


