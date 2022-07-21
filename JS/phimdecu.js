 var listMovieOffer = [
    { ten: 'Thế giới khủng long: Lãnh địa', nam: 2022, theloai: ['Hành động', 'Kinh dị'], id: 'thegioikhunglong' },
    { ten: 'Thiên nga bóng đêm', nam: 2022, theloai: ['Truyền hình', 'Tình cảm'], id: 'thienngabongdem' },
    { ten: 'Em và Trịnh', nam: 2022, theloai: ['Tâm lí - Tình cảm'], id:'emvatrinh'},
    { ten: 'Người khởi lửa', nam: 2022, theloai: ['Kinh dị', 'Giật gân'], id: 'nguoikhoilua' },
    { ten: 'Sát thủ nhân tạo 2: Mẫu vật còn lại', nam: 2022, theloai: ['Kinh dị', 'Khoa học viễn tưởng'], id:'satthunhantao' },
    { ten: 'Hào khí chiến binh', nam: 2011, theloai: ['Kinh dị', 'Hành động'], id: 'haokhichienbinh' },
    { ten: 'Nhện trong mạng', nam: 2019, theloai: ['Giật gân', 'Hành động'], id: 'nhentrongmang' },
    { ten: 'Bác sĩ Đường', nam: 2022, theloai: ['Tâm lí - Tình cảm'], id: 'bacsiduong' },
    { ten: 'Người đàn ông', nam: 2022, theloai: ['Tâm Lý - Tình cảm', 'Kinh dị - Ma'], id: 'nguoidanong' },
    { ten: 'Người kế nhiệm Namsan', nam: 2020, theloai: ['Tâm lí - Tình cảm'], id: 'nguoikenhiemnamsan' },
    { ten: 'Con tàu Titanic', nam: 1997, theloai: ['Tâm lí - Tình cảm'], id: 'contautitanic' },
    { ten: 'Kiều', nam: 2021, theloai: ['Tâm lí - Tình cảm'], id: 'kieu' },
    { ten: 'Chị Mười Ba: 3 ngày sinh tử', nam: 2021, theloai: ['Phiêu Lưu - Hành Động', 'Hài Hước', 'Phim Chiếu Rạp'], id: 'chimuoiba' },
    { ten: 'Hóa Ra Em Rất Yêu Anh', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'hoaraemyeuanhratnhieu' },
    { ten: 'Thủy hầu tử', nam: 2022, theloai: ['Bí Ẩn','Kinh Dị','Đạo Đức','Kinh Dị'], id: 'thuyhautu' },
    { ten: 'Thưa mẹ con đi', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'thuamecondi' },
    { ten: 'Hot Seat', nam: 2022, theloai: ['Hành động','Hình sự'], id: 'ghenong' },
];

var indexpage = 10;

if (listMovieOffer.length >10) {
    changepage(0, 10);
} else {
    changepage(0, listMovieOffer.length);
}

function checkDisabled(sessionStr) {
    if (sessionStr-10 <= 0) {
        document.getElementById('truoc').style.color = '#222';
        document.getElementById('truoc').disabled = true;
    } else {
        document.getElementById('truoc').style.color = 'rgba(252, 185, 0, 1)';
        document.getElementById('truoc').disabled = false;
    }

    if ((sessionStr) >= listMovieOffer.length || listMovieOffer.length <= 10) {
        document.getElementById('sau').style.color = '#222';
        document.getElementById('sau').disabled = true;
    } else {
        document.getElementById('sau').style.color = 'rgba(252, 185, 0, 1)';
        document.getElementById('sau').disabled = false;
    }

}

function truoc() {

    var index = indexpage;
    if (index % 10 != 0) {
        index = index - index%10;
    }
    if (index-10 <= 0) {
        changepage(0, index);
    } else {
        changepage(index-10, index);
    }
    if (index-10 == 0) {
        index = 10;
    } else  index -= 10;

    checkDisabled(index);
}

function sau() {

    var index = indexpage;
    if (index+10 >= listMovieOffer.length) {
        changepage(index, listMovieOffer.length);
        index = listMovieOffer.length;
    } else {
        changepage(index, index+10);
        index +=10;
    }
    

    checkDisabled(index);
}


function changepage(numberindex, totalItem) {
    document.getElementById('bodder-phimdecu-id').innerHTML = null;
    for (let i = numberindex; i < totalItem; i++) {
        var content = `<section class="item-phimdecu">
                            <img onclick="watchmovie(${i})" src="IMAGE/TrangChu/img-decu/${listMovieOffer[i].id}.webp" title="${listMovieOffer[i].ten}">
                            <div class="title-phim watchmovie" onclick="watchmovie(${i})">${listMovieOffer[i].ten}</div> 
                            <div>Năm sản xuất: ${listMovieOffer[i].nam}</div>
                            <div>Thể loại: `;
        for (let j = 0; j < listMovieOffer[i].theloai.length; j++) {
            var type = `<a href="">${listMovieOffer[i].theloai[j]}</a>`;
            if (j == listMovieOffer[i].theloai.length - 1) {
                content += type;
            } else content += type + ", ";
        }
        document.getElementById('bodder-phimdecu-id').innerHTML += content;
        document.getElementsByClassName('xemphimdecu').onclick = function () {
            alert(listMovieOffer[i].ten);
        }
    }
    
}


function watchmovie(j) {
    var listItem = document.getElementsByClassName('watchmovie');
    for (let i = 0; i < listItem.length; i++) {
        // console.log(i);
        if (listMovieOffer[j].ten == listItem[i].innerText){
            localStorage.setItem('name-movie', listItem[i].innerText);
            location = "xemtrailer.html";
            localStorage.setItem('id-phim', listMovieOffer[j].id);
            localStorage.setItem('category-phim', listMovieOffer[j].theloai);
            localStorage.setItem('year-phim', listMovieOffer[j].nam);
            localStorage.setItem('type-phim', 1);
            break;
        }
    }
}

function watchmovieright(j) {
    var listItem = document.getElementsByClassName('item-title-right');
    for (let i = 0; i < listItem.length; i++) {
        console.log(i);
        if (listMovieOffer[j].ten == listItem[i].innerText){
            localStorage.setItem('name-movie', listItem[i].innerText);
            location = "xemtrailer.html";
            localStorage.setItem('id-phim', listMovieOffer[j].id);
            localStorage.setItem('category-phim', listMovieOffer[j].theloai);
            localStorage.setItem('year-phim', listMovieOffer[j].nam);
            localStorage.setItem('type-phim', 1);
            break;
        }
    }
}

function listmovieright() {
    for (let i = 0; i <listMovieOffer.length; i++) {
        var menu = `
        <li class="item-navbar-right">
            <img src="IMAGE/TrangChu/img-decu/${listMovieOffer[i].id}.webp" title="${listMovieOffer[i].ten}">
            <div>
                <div class="item-title-right" onclick="watchmovieright(${i})" >${listMovieOffer[i].ten}</div>
                <p>Năm: ${listMovieOffer[i].nam}</p>
            </div>
        </li>`;
        document.getElementById('menu-menu-right').innerHTML += menu;
        console.log(listMovieOffer.length);
    }
}