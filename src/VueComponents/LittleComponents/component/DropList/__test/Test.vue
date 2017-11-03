<script>
import DropList from "../DropList";

const log = ({key, value}) => console.log({
  key, value
})
export default {
  name: "Test",
  render(h) {
    return (
      <DropList
        style={{
          width: "160px",
          height: "30px"
        }}

        data={[
          {
            key: 0,
            value: "All range"
          },
          {
            key: 1,
            value: "Last 1 month"
          },
          {
            key: 2,
            value: "Last 6 month"
          },
          {
            key: 3,
            value: "Last 1 year"
          },
          {
            key: 4,
            value: "Custom range"
          }
        ]}

        itemSelectedCallback={log}
      />
    );
  }
};
</script>