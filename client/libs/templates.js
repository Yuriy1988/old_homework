var tpl = (function () {

    function town () {
        return '<b><%=name%></b> <br> groups: <%=groups%>, teachers: <%=teachers%>';
    }

    function form() {
        return '<div class="modal fade" id="myModal" role="dialog">\
           <div class="modal-dialog">\
            <div class="modal-content">\
            <div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal">&times;</button>\
            </div>\
             <div class="modal-body">\
            <div class="col-sm-10">\
            <label for="name">Town</label>\
            <input type="text" name="name" id="name" class="form-control ">\
            </div>\
            <div class="col-sm-10">\
            <label for="groups">Groups</label>\
            <input type="text" name="groups" id="groups" class="form-control">\
            </div>\
            <div class="col-sm-10">\
            <label for="teachers">Teachers</label>\
            <input type="text" name="teachers" id="teachers" class="form-control">\
            </div>\
            </div>\
            <div class="modal-footer">\
            <button class="saveBtn btn btn-success" data-dismiss="modal"> save</button>\
            </div>\
           </div>\
           </div>\
           </div>';
    }

    function menu () {
        return '<div class="menu dropdown-menu">\
               <div class="update"  data-target="#myModal" data-toggle="modal">update</div>\
               <div  class="delete">delete</div>\
               </div>';
    }

    function AddBtn() {
        return '<button data-target="#myModal" data-toggle="modal"  class="addBtn btn btn-primary">add town</button>';
    }

    return {
        town: town(),
        form: form(),
        menu: menu(),
        AddBtn: AddBtn()
    };
})();

