import{S as a}from"./sweetalert2.all.015ec384.js";import"./_commonjsHelpers.4e997714.js";$(document).ready(function(){n=n(),l(),$(document).on("change","#color_id",function(){$("#loading__js").css("display","flex"),l()}),c("submit",".form-submit"),$(document).on("click",".edit",function(){$("#loading__js").css("display","flex");let t=$(this).attr("url-update"),o=$(this).attr("url-get-size"),e=`
        <form method="post" 
          class="form-submit"
          enctype="multipart/form-data"
          url-store="${t}"
          >
            <div class="modal-body">
              <div class="form-group">
                  <div class="form-group col-12">
                      <div class="input-group">
                          <div class="input-group-prepend" style="width:auto;">
                              <span class="input-group-text" style="width:100%;">M\xE0u S\u1EAFc</span>
                          </div>
                          <select class="form-control" name="size_id" id="size_id_edit">

                          </select>
                      </div>
                      <!-- /.input group -->
                  </div>
              </div>
              <div class="form-group">
                  <div class="form-group col-12">
                      <div class="input-group">
                          <div class="input-group-prepend" style="width:auto;">
                              <span class="input-group-text" style="width:100%;">M\xE0u S\u1EAFc</span>
                          </div>
                          <input id="quantity_edit" type="number" min="0" name="quantity"class="form-control">
                      </div>
                      <!-- /.input group -->
                  </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">\u0110\xF3ng</button>
                <button type="submit" class="btn btn-primary">C\u1EADp nh\u1EADt</button>
            </div>
      </form>
      `;$("#body-modal-edit").html(e),u(o)}),$(document).on("click",".delete",function(){let t=$(this).attr("url-delete");a.fire({title:"B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"C\xD3",cancelButtonText:"KH\xD4NG"}).then(o=>{o.isConfirmed&&($("#loading__js").css("display","flex"),$.ajax({type:"POST",url:t}).done(e=>{$("#loading__js").css("display","none"),e.status==!0?(l(),$(this).closest("tr").remove(),r(n,"success",e.message)):(console.log("false"),r(n,"error",e.message))}).fail(()=>{$("#loading__js").css("display","none"),r(n,"error","C\xF3 l\u1ED7i x\u1EA3y ra vui l\xF2ng th\u1EED l\u1EA1i"),setTimeout(()=>{location.reload()},2e3)}))})})});function l(){let t=$("#color_id").val(),o=$("#size_id").attr("url-get-size");$.ajax({type:"GET",url:o,data:{product_color_id:t}}).done(e=>{d(e,"size_id"),$("#loading__js").css("display","none")})}function u(t){$.ajax({type:"GET",url:t}).done(o=>{let e=`<option>${o.size}</option>`;$("#size_id_edit").html(e),$("#quantity_edit").val(o.quantity),$("#loading__js").css("display","none"),$("#modal-edit").modal("show")})}function d(t,o){let e="";t.forEach(s=>{e+=`<option value="${s.id}">${s.name}</option>`}),$(`#${o}`).html(e)}function n(){return a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",a.stopTimer),t.addEventListener("mouseleave",a.resumeTimer)}})}function r(t,o,e){let s,i;o=="success"?(s="rgba(40,167,69,.85)",i="success"):o=="error"&&(s="rgba(220,53,69,.85)",i="error"),t.fire({icon:i,title:e,background:s,color:"#fff"})}function c(t,o){$(document).on(t,o,function(e){e.preventDefault();let s=$(this).attr("url-store");$.ajax({url:s,method:"POST",data:new FormData(this),dataType:"JSON",contentType:!1,cache:!1,processData:!1,async:!0}).done(i=>{i.status==!1?r(n,"error",i.message):i.status==!0&&(window.location.href=i.route)}).fail(function(i){i.status==422&&r(n,"error",i.responseJSON.message)})})}
