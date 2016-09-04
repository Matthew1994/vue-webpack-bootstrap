<template>
  <div id="comfirm-box">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Large Modal</button>

    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确认</button>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      title: '是否确认？'
    }
  },
  created: function() {
    console.log('create');
  },
  methods: {
    onYes: function() {
      console.log('Yes');
    },
    onNo: function() {
      console.log('No');
    }
  }
}
</script>

<style>
</style>
