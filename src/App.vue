<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <!-- 头部组件 -->
        <j-header></j-header> 
      </a-layout-header>
      <a-layout-content>
        <!-- 身体 -->
        <j-contnet></j-contnet>
      </a-layout-content>
      <a-layout-footer>
        <!-- 尾部组件 -->
        <j-footer></j-footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import JHeader from "../components/header/index.vue";
import JFooter from "../components/footer/index.vue";
import JContnet from './view/content/index.vue'
export default {
  components: {
    JHeader, 
    JFooter,
    JContnet
  },
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      fileList: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-3",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-4",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-5",
          name: "image.png",
          status: "error",
        },
      ],
    };
  },
  methods: {
  },
};
</script>
