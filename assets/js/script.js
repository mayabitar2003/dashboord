// بداية كود الخاص عند الضغط على الايقونة بيختفي السلايد اليميني وبيظهر 
let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
// اسم الايقونة منستدعيها لأي دي الخاص بالايقونة 
let toggleSidebar = document.querySelector("#sidebar-togle");
toggleSidebar.addEventListener("click" , () => {
let sidebarRight = window.getComputedStyle(sidebar).right;  //الحصول على العرض 
if (window.innerWidth > 768 ){
    if (sidebarRight == "0px"){
        sidebar.style.right = "-200px";
        content.style.marginRight = "0px";
    }
    else {
        sidebar.style.right = "0px";
        content.style.marginRight = "200px";
    
    }
}
else {
    if (sidebarRight == "0px"){
        sidebar.style.right = "-200px";  
    }
    else {   sidebar.style.right = "0px";}
}






});







// togglesidebar.addEventListener('click', () => {
// // sidebarwidth اسم من عندي بحيث اذا العرض 200 ونقرت عليها اذا 200 صفرلي العرض 
//     let sidebarwidth = window.getComputedStyle(sidebar).width;
//     if (sidebarwidth === '200px') {
//         sidebar.style.width = '0';
//         content.style.marginRight = '0';

//     }
//     // والا اعرض المساحة 
//     else {
//         sidebar.style.width = '200px';
//         content.style.marginRight = '200px';
//     }

// });
// نهايته




document.addEventListener('DOMContentLoaded', function () {
    const bell = document.getElementById('bell');
    const ulbeell = document.getElementById('ul-beell');
  
    bell.addEventListener('click', function () {
      if (ulbeell.style.display === "none" || ulbeell.style.display === "") {
        ulbeell.style.display = "block";
      } else {
        ulbeell.style.display = "none";
      }
    });
  });



// عند الضغط على ايقونة الرسالة تفتح عندي هنا من اجل
// messsages-area اسم ايدي من القائمة انا حطيتو
let messagescontainer = document.getElementById('messages-container');
let messsagesarea = document.getElementById('messsages-area');
messagescontainer.addEventListener('click' , function(){
messsagesarea.style.display = messsagesarea.style.display === "block" ? "none" : "block" ;
});


// للجرس

// ------


// من اجل جدول صفحة الطلاب لظهور التفاصيل عليه

new DataTable('#example', {
    responsive: true,
    buttons: [
        { 
            extend:'copy',
            text: 'نسخ'
        },{
             extend:'excel',
            text: 'اكسل '
        },{
             extend:'pdf',
            text: 'ملف'
        },{
             extend:'print',
            text: 'طباعة'
        },
       
    ],
    layout: {
        topStart: 'buttons'
    }
});
new DataTable('#example2', {
    responsive: true,
    buttons: [
        { 
            extend:'copy',
            text: 'نسخ'
        },{
             extend:'excel',
            text: 'اكسل '
        },{
             extend:'pdf',
            text: 'ملف'
        },{
             extend:'print',
            text: 'طباعة'
        },
       
    ],
    layout: {
        topStart: 'buttons'
    }
});
// /




