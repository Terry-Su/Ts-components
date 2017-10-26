<template>
<div :style="{
        width: '100%',
        height: '100%',
        lineHeight: '100%'
      }">
    <div :style="{
        float: 'right',
        width: '32px',
        height: '100%',           
        marginLeft: '-32px',
        lineHeight: '100%',      
        textAlign: 'center',      
        background: '#02335b',          
        borderRadius: '0 4px 4px 0',
    }">
        <i class="iconfont" :style="{
            display: 'inline-block',
            padding: '8px',            
            fontSize: '16px',
            lineHeight: '100%',  
            color: 'white',  
            cursor: 'pointer',            
        }">&#xe727;</i>
    </div>
    
    <div :style="{
        marginRight: '32px',
        height: '100%',
        lineHeight: '100%',
    }">
        <input type="text" placeholder="Search something" :style="{
        width: '100%',
        height: '100%',    
        padding: '0px',  
        lineHeight: '100%',
        color: '#fff',
        fontSize: '10px',
        textIndent: '0.8em',
        borderRaduis: '4px',
        background: '#02335b',
        border: 'none',
        borderImageWidth: 'none',
    }"/>
    </div>
    
 
    
</div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #a0b2c1;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #a0b2c1;
  opacity: 1;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #a0b2c1;
  opacity: 1;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #a0b2c1;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #a0b2c1;
}
</style>
