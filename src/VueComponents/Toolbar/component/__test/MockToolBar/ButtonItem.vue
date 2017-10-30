<script>
export default {
  name: "ButtonItem",
  props: ["color", "background", "hoverColor"],
  render(h) {
    return (
      <div
        class="ButtonItem"
        OnHover={() => console.log(`hover`)}
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          borderRadius: "3px",
          cursor: "pointer",
          color: this.color || 'white',
          background: this.background || '#1099d3',
        }}
      >
      {this.$slots.default}
      </div>
    );
  }
};
</script>

<style scoped>
.ButtonItem:hover {
  background: #1199d3;
}
</style>
