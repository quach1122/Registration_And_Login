/**
 * Created by andy on 2/13/2015.
 */
/**
 * Created by andy on 2/13/2015.
 */
//var obj;
//document.addEventListener('DOMContentLoaded', function () {
//    console.log('Hello World');
//    var btn = document.getElementById('uploads').addEventListener('click',function(){
//        var input = document.querySelector('input[type="file"]').files;
//        var files = Array.prototype.slice.call(input);
//        console.log(files);
//
//        var formdata = new FormData();
//        formdata.append('name','Andy');
//        formdata.append('file1',files[0]);
//
//        var xhr = new XMLHttpRequest();
//        xhr.open('POST','http://localhost:8000/files');
//        xhr.setRequestHeader('accept','application/json');
//        xhr.addEventListener('readystatechange',function(){
//            if(xhr.readyState === 4 && xhr.status === 201){
//                 obj = JSON.parse(xhr.responseText).message;
//                console.log('obj ' +obj);
//            }
//        });
//        xhr.send(formdata);
//    });
//});