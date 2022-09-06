var num = 0
var images = ["https://runda.si/i/1486182b-b00a-4f19-b799-eb3bbeedc9d2.jpg", 
"https://www.stagioninelpiatto.com/wp-content/uploads/2019/11/pasta-ragu-di-lenticchie.jpg", 
"https://bioradar.net/wp-content/uploads/2016/01/IMG_69221-1024x831.jpg", 
"https://1.bp.blogspot.com/-YsNZdsZLm3k/Tlvk6VPfFmI/AAAAAAAAAVk/hV-Py5AnUIg/s1600/finepix+29+august+2011+099.JPG", 
"https://blog.giallozafferano.it/pentolinesglutinate/wp-content/uploads/2021/03/20210305_133441-scaled.jpg"]
function next() {
    var slider = document.getElementById("change");
    num++
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num]
}

function prev() {
    var slider = document.getElementById('change');
    num--;
    if (num<0) {
        num=images.length-1;
    }
    slider.src=images[num];
}
