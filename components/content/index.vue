<template>
  <div class="clearfix content">
    <a-upload
      action="http://xiaotuwo.getharbours.com/api/files/upload"
      list-type="picture-card"
      accept="image/*"
      name="file"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <a-icon type="plus" />
      <div class="ant-upload-text">
        上传
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="预览" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = file.response.url;
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
      this.$message.success('复制图片链接成功');
      document.addEventListener("copy", function copyCall(e) {
        e.preventDefault()
        e.clipboardData.setData("text/html", file.preview)
        e.clipboardData.setData("text/plain", file.preview)
        document.removeEventListener("copy", copyCall)
      })
      document.execCommand("copy")
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
  },
};
</script>
<style>
.content {
  margin: 30px 100px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
