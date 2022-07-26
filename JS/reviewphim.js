var listMovieReview = [
    { linkreview: 'SYQtSCqPpgI', title: 'Phim Sát Thủ Nhân Tạo Phần 2: Mẫu Vật Còn Lại' },
    { linkreview: 'dj7MmTcaMCM', title: 'Mia và Chú Sư Tử Trắng' },
    { linkreview: 'nFYBD4Fc2vY', title: 'The Wolf And The Lion' },
    { linkreview: 'M_LXGxDPkNo', title: 'Hodini' },
    { linkreview: 'HeTCSwgIZyE', title: 'Nước Cờ Sinh Tử' },
    { linkreview: 'U4FJPikzl_Q', title: 'Tôi đang giảm cân' },
    { linkreview: 'J0E_0dbWu1Y', title: 'Cuộc Xâm Lược Trái Đất ' },
    { linkreview: 'jPFW8p5Zwps', title: 'Sherlock Holmes' },
    { linkreview: '1EaNiqwf-t4', title: 'Ứng Dụng Tử Thần - Countdown' },
    { linkreview: 'U0846YT56Aw', title: 'Thiếu Niên Bạc Tỷ - Top Secret - The Billionaire' },
    { linkreview: 'FOICVP4Pclg', title: 'Dog - Chú Chó Nghiệp Vụ' },
    { linkreview: 'N1VmJN4gYfs', title: 'Trí Lực Siêu Phàm - The Darkest Minds' },
    { linkreview: '8Ga3ljbY5BU', title: 'Chiến Binh Bất Tử ' },
    { linkreview: 'QAla-TXnhNo', title: 'Bệnh Truyền Nhiễm' },
    { linkreview: '5h4owvXuuSM', title: 'Chiến Hạm' },
    { linkreview: '2JzogaENI5M', title: 'Jerry Và Marge Trúng Lớn' },
    { linkreview: 'Qfg3dabMjyQ', title: 'Cuộc Chiến Trên Sa Mạc - Sahara' },

]
var menulist = document.getElementById('menu-right-review');
var video = document.getElementById('video');
var indexlist = -1;
for (let i = 0; i < listMovieReview.length; i++) {
    var item = `<li class="item">
                    <div class="img-playlist">
                        <img src="https://eplaza.vn/api/upload/category/bcac3484-310d-44c3-b943-af41b731fad8.png" alt="${listMovieReview[i].title}">
                        <div class="icon-item-review">
                        <i class="fa-brands fa-youtube "></i>
                        </div>
                    </div>
                    <div class="title-review">${listMovieReview[i].title}</div>
                </li>`
    menulist.innerHTML += item;

}

var listItem = document.getElementsByClassName('item');
for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', function () {
        video.setAttribute('src', `https://www.youtube.com/embed/${listMovieReview[i].linkreview}?autoplay=1;controls=0&loop=1`);
        scrollTo(0,0);
        indexlist = i;
    })
}

function next() {
    if(indexlist == listMovieReview.length - 1) {
        return;
    } else {
        indexlist++;
        video.setAttribute('src', `https://www.youtube.com/embed/${listMovieReview[indexlist].linkreview}?autoplay=1;controls=0&loop=1`);
        scrollTo(0,0);
    }
}
function prev() {
    if(indexlist == 0) {
        return;
    } else {
        indexlist--;
        video.setAttribute('src', `https://www.youtube.com/embed/${listMovieReview[indexlist].linkreview}?autoplay=1;controls=0&loop=1`);
        scrollTo(0,0);
    }
}