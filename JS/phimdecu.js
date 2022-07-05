var listMovieOffer = [
    { ten: 'Em và Trịnh', nam: 2022, theloai: ['Tâm lí - Tình cảm'], id:'emvatrinh'},
    { ten: 'Người khởi lửa', nam: 2022, theloai: ['Kinh dị', 'Giật gân'], id: 'nguoikhoilua' },
    { ten: 'Sát thủ nhân tạo 2: Mẫu vật còn lại', nam: 2022, theloai: ['Kinh dị', 'Khoa học viễn tưởng'], id:'satthunhantao' },
    { ten: 'Hào khí chiến binh', nam: 2011, theloai: ['Kinh dị', 'Hành động'], id: 'haokhichienbinh' },
    { ten: 'Nhện trong mạng', nam: 2019, theloai: ['Giật gân'], id: 'nhentrongmang' },
    { ten: 'Bác sĩ Đường', nam: 2022, theloai: ['Tâm lí - Tình cảm'], id: 'bacsiduong' },
    { ten: 'Người đàn ông', nam: 2022, theloai: ['Tâm Lý - Tình cảm', 'Khoa học viễn tưởng', 'Kinh dị - Ma'], id: 'nguoidanong' },
    { ten: 'Người kế nhiệm Namsan', nam: 2020, theloai: ['Tâm lí - Tình cảm'], id: 'nguoikenhiemnamsan' },
    { ten: 'Con tàu Titanic', nam: 1997, theloai: ['Tâm lí - Tình cảm'], id: 'contautitanic' },
    { ten: 'Kiều', nam: 2021, theloai: ['Tâm lí - Tình cảm'], id: 'kieu' },
    { ten: 'Chị Mười Ba: 3 ngày sinh tử', nam: 2021, theloai: ['Phiêu Lưu - Hành Động', 'Hài Hước', 'Phim Chiếu Rạp'], id: 'chimuoiba' },
    { ten: 'Hóa ra em yêu anh rất nhiều', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'hoaraemyeuanhratnhieu' },
    { ten: 'Thưa mẹ con đi', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'thuamecondi' },
    { ten: 'Thưa mẹ con đi', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'thuamecondi' },
    { ten: 'Thưa mẹ con đi', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'thuamecondi' },
    { ten: 'Thưa mẹ con đi', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'thuamecondi' },
];

listmovieright();

var indexpage = 10;
if ( typeof(Storage) !== 'undefined') {
    sessionStorage.setItem('index',indexpage);
} else {
    console.log('Trình duyệt không hỗ trợ');
}
console.log(sessionStorage.getItem('index'));
if (listMovieOffer.length >10) {
    doitrang(0, 10);
} else {
    doitrang(0, listMovieOffer.length);
}
checkDisabled(sessionStorage.getItem('index'))

function checkDisabled(sessionStr) {
    if (sessionStr-10 <= 0) {
        document.getElementById('truoc').style.color = '#222';
        document.getElementById('truoc').disabled = true;
    } else {
        document.getElementById('truoc').style.color = 'rgba(252, 185, 0, 1)';
        document.getElementById('truoc').disabled = false;
    }
    // console.log(sessionStr);
    if ((sessionStr) >= listMovieOffer.length || listMovieOffer.length <= 10) {
        document.getElementById('sau').style.color = '#222';
        document.getElementById('sau').disabled = true;
    } else {
        document.getElementById('sau').style.color = 'rgba(252, 185, 0, 1)';
        document.getElementById('sau').disabled = false;
    }

}

function truoc() {
    var index = parseInt(sessionStorage.getItem('index'));
    if (index % 10 != 0) {
        index = index - index%10;
    }
    if (index-10 <= 0) {
        doitrang(0, index);
    } else {
        doitrang(index-10, index);
    }
    if (index-10 == 0) {
        index = 10;
    } else  index -= 10;
    sessionStorage.setItem('index',index);
    checkDisabled(index);
}

function sau() {
    var index = parseInt(sessionStorage.getItem('index'));
    if (index+10 >= listMovieOffer.length) {
        doitrang(index, listMovieOffer.length);
        index = listMovieOffer.length;
    } else {
        doitrang(index, index+10);
        index +=10;
    }
    
    sessionStorage.setItem('index',index);
    checkDisabled(index);
}


function doitrang(numberindex, totalItem) {
    document.getElementById('bodder-phimdecu-id').innerHTML = null;
    for (i = numberindex; i < totalItem; i++) {
        var content = `<section class="item-phimdecu">
                            <img src="IMAGE/TrangChu/img-decu/${listMovieOffer[i].id}.webp" title="${listMovieOffer[i].ten}">
                            <a class="title-phim" href="xemphim.html">${listMovieOffer[i].ten}</a> 
                            <div>Năm sản xuất: ${listMovieOffer[i].nam}</div>
                            <div>Thể loại: `;
        for (let j = 0; j < listMovieOffer[i].theloai.length; j++) {
            var type = `<a href="">${listMovieOffer[i].theloai[j]}</a>`;
            if (j == listMovieOffer[i].theloai.length - 1) {
                content += type;
            } else content += type + ", ";
        }
        document.getElementById('bodder-phimdecu-id').innerHTML += content;
        
    }
}

function listmovieright() {
    for (let i = 0; i <listMovieOffer.length; i++) {
        var menu = `
        <li>
            <img src="IMAGE/TrangChu/img-decu/${listMovieOffer[i].id}.webp" title="${listMovieOffer[i].ten}">
            <div>
                <a href="">${listMovieOffer[i].ten}</a>
                <p>Năm: ${listMovieOffer[i].nam}</p>
            </div>
        </li>`;
        document.getElementById('menu-menu-right').innerHTML += menu;
    }
}