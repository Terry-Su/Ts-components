import jss from 'jss'
import styles from './styles'
import createStyleSheet from './util/createStyleSheet'

const { classes } = createStyleSheet(styles)

export default {
  name: "DropList",
  props: {
    dataStructure: [
      {
        key: Number,
        value: String,
      }
    ],
    data: {
      type: Array,
      default() {
        return []
      }
    },
    activeKey: {
      type: Number,
      default: 0,
    },
    shouldExpand: {
      type: Boolean,
      default: false,
    },
    itemSelectedCallback: '',
  },
  data() {
    return {
      listInfo: this.data,
      stateShouldExpand: this.shouldExpand,
      stateActiveKey: this.activeKey,
    }
  },
  methods: {
    toggleMenu() {
      this.stateShouldExpand = !this.stateShouldExpand
    },
    foldMenu() {
      this.stateShouldExpand = false
    },
    onListItemClick({
      key,
      value,
    }) {      
      this.foldMenu()

      this.stateActiveKey = key

      this.itemSelectedCallback && this.itemSelectedCallback({key, value})      
    },
  },
  mounted() {
    // // mock
    // this.listInfo = [
    //   {
    //     key: 0,
    //     value: 'All range',
    //   },
    //   {
    //     key: 1,
    //     value: 'Last 1 month',
    //   },
    //   {
    //     key: 2,
    //     value: 'Last 6 month',
    //   },
    //   {
    //     key: 3,
    //     value: 'Last 1 year',
    //   },
    //   {
    //     key: 4,
    //     value: 'Custom range',
    //   },
    // ]

  },
  render(h) {

    const getActiveValue = () => {
      const { 
        listInfo, 
        stateActiveKey,
      } = this

      if (listInfo && listInfo.length > 0) {
        return listInfo.filter(({ key }) => key === stateActiveKey)[0].value
      }
    }

    return (
      <div class={classes.container} >
        <div
          class={classes.header}
          onClick={this.toggleMenu}
        >
          <i class={`iconfont icon-arrow_b ${classes.containerIcon}`} />
          <div class={classes.containerText} >
            { getActiveValue() }
          </div>
        </div>
        {
          this.stateShouldExpand && this.listInfo.length > 0 && (
            <div class={classes.listContainer}>
              {this.listInfo.map(item => (
                <div
                  class={classes.listItem}
                  style={styles.listItem}
                  key={item.key}
                  onClick={() => this.onListItemClick(item)}
                >
                  {item.value}
                </div>
              ))}
            </div>
          )
        }
      </div>
    );
  }
};
