<template>
  <div>
    <h1 class="banner">Onein Vue Icon -「vue3」</h1>
    <div class="code">
      <div>
        <h3>Installation & Upgradation</h3>
        <pre><code>yarn add onein-vue-icon<br />yarn upgrade onein-vue-icon@0.2.0</code></pre>
      </div>
      <div>
        <h3>Usage</h3>
        <pre><code>import { OiHome } from 'onein-vue-icon'<br />&lt;OiHome :size="18" color="#009C22" /&gt;</code></pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style lang="css">
.banner {
  padding-top: 30px;
  text-align: center;
}
.code {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 720px;
}
.code div {
  width: 49%;
}
pre {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  color: #476391;
  background-color: #e7ecf3;
  overflow: auto;
}
h3 {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 10px 0;
}
</style>
