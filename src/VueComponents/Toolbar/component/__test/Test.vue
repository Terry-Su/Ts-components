<template>
    <div>
        <Toolbar :style="{
            height: '56px',
            lineHeight: '56px',
        }">
            <ToolSearchBar />
            
            <ToolSelectItem icon="&#xe705;" />
            <ToolItem icon="&#xe716;" />
        </Toolbar>
    </div>
</template>

<script>
import Toolbar from "../Toolbar.vue";
import ToolSearchBar from "./ToolSearchBar.vue";
import ToolItem from "./ToolItem.vue";
import ToolSelectItem from "./ToolSelectItem.vue";


export default {
  name: "Test",
  components: {
    Toolbar,
    ToolSearchBar,
    ToolItem,
    ToolSelectItem,
  },
};
</script>

<style>

</style>
