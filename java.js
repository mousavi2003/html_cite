<script src="jquery-3.4.0.min.js"></script>

function confirmed(){
    var check = confirm("آیا حذف این پیام را تایید می کنید؟");
    if (check == 1){
        document.getElementById('text').innerHTML = '';
        alert("پیام حذف شد");
    }
    else{
        document.getElementById('text').innerHTML = 'در صورت تایید، این پیام حذف خواهد شد';
        alert("حذف پیام لغو شد");
    }
}