$("#editForm").submit((e) => {
    e.preventDefault();

    var inputs = $("#editForm").serializeArray();
    var data = {};

    $.map(inputs,(i) => {
        data[i['name']] = i['value'];
    })
    
    var id = data['id'];
    delete data['id'];

    
})