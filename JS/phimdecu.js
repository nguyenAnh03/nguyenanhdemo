var listMovieOffer = [
    { ten: 'Em và Trịnh', nam: 2022, theloai: ['Tâm lí', 'Tình cảm'], id:'emvatrinh'},
    { ten: 'Người khởi lửa', nam: 2022, theloai: ['Kinh dị', 'Giật gân'], id: 'nguoikhoilua' },
    { ten: 'Sát thủ nhân tạo 2: Mẫu vật còn lại', nam: 2022, theloai: ['Kinh dị', 'Khoa học viễn tưởng'], id:'satthunhantao' },
    { ten: 'Hào khí chiến binh', nam: 2011, theloai: ['Kinh dị', 'Hành động'], id: 'haokhichienbinh' },
    { ten: 'Nhện trong mạng', nam: 2019, theloai: ['Giật gân'], id: 'nhentrongmang' }
];

console.log(listMovieOffer.length);

for (let i = 0; i < listMovieOffer.length; i++) {
    var content = `<section class="item-phimdecu">
                        <img src="../IMAGE/TrangChu/img-decu/${listMovieOffer[i].id}.webp" title="${listMovieOffer[i].ten}">
                        <a class="title-phim" href="">${listMovieOffer[i].ten}</a> 
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

listmovieright();

function doitrang(i) {
    for (; i < listMovieOffer.length; i++) {
        var content = `<section class="item-phimdecu">
                            <img src="${listMovieOffer[i].hinh}">
                            <a class="title-phim" href="">${listMovieOffer[i].ten}</a> 
                            <div>Năm sản xuất: ${listMovieOffer[i].nam}</div>
                            <div>Thể loại: `;
        console.log(typeof (content));
        for (let j = i; j < listMovieOffer[i].theloai.length; j++) {
            var type = `<a href="">${listMovieOffer[i].theloai[j]}</a>`;
            if (j == listMovieOffer[i].theloai.length - 1) {
                content += type;
            } else content += type + ", ";
        }
        console.log(typeof (content));
        document.getElementById('bodder-phimdecu-id').innerHTML += content;
        console.log(document.getElementById('bodder-phimdecu-id').innerHTML);
    }
}

function listmovieright() {
    for (let i = 0; i <listMovieOffer.length; i++) {
        var menu = `
        <li>
            <img src="../IMAGE/TrangChu/img-decu/${listMovieOffer[i].id}.webp" title="${listMovieOffer[i].ten}">
            <div>
                <a href="">${listMovieOffer[i].ten}</a>
                <p>Năm: ${listMovieOffer[i].nam}</p>
            </div>
        </li>`;
        document.getElementById('menu-menu-right').innerHTML += menu;
    }
}