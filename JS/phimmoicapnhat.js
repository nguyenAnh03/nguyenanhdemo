var listmovie = [
    { name: 'Tiệc trăng máu', daodien: 'Nguyễn Quang Dũng', quocgia: 'Việt Nam', nam: 2022, theloai: ['Tâm lí', 'Tình yêu', 'Chiếu rạp'], id: 'tiectrangmau'},
    { name: 'Ma trận: Hồi sinh', daodien: 'Lana Wachowski', quocgia: 'Hoa Kỳ', nam: 2021, theloai: ['Hành động', 'Khoa học viễn tưởng'], id: 'matranhoisinh'},
    { name: 'Thủy quái rừng gỗ mun', daodien: 'Hạng Thu Lương, Hạng Hà Sinh', quocgia: 'Trung Quốc', nam: 2021, theloai: ['Hành động', 'Ma-Kinh dị'], id: 'thuyquairunggomun' },
    { name: 'Yêu tinh (2015)', daodien: 'Gil Kenan do David Lindsay-Abaire', quocgia: 'Hoa Kỳ', nam: 2015, theloai: ['Ma-kinh dị'], id: 'yeutinh' }
];

for (let index = 0; index < listmovie.length; index++) {
    var content = ` <section class="item-phimcapnhat">
                        <div class="poster-phim">
                            <img class="poster" src="IMAGE/TrangChu/img-capnhat/${listmovie[index].id}.webp" alt="poster phim" title="${listmovie[index].name}">
                            <div class="button">
                                <button class="button-xem" onclick="watchmoviecapnhat(${index})">Xem phim</button>
                                <button class="button-gt">Giới thiệu</button>
                            </div>
                        </div>
                        <div class="content-phim">
                            <div class="title-phim title-phim-m-c-n">${listmovie[index].name}</div>
                            <div class="review-phim">
                            <div>Trạng thái: HD Vietsub</div>
                            <div class="daodien">Đạo diễn: ${listmovie[index].daodien}</div>
                            <div>Quốc gia: ${listmovie[index].quocgia}</div>
                            <div>Năm sản xuất: ${listmovie[index].nam}</div>
                            <div>Chất lượng: Full HD</div>
                            <div class='theloai'>Thể loại: `;

    for (let j = 0; j < listmovie[index].theloai.length; j++) {
        var type = `<a href="">${listmovie[index].theloai[j]}</a>`;
        if (j == listmovie[index].theloai.length - 1) {
            content += type;
        } else content += type + ", ";
    }
    content += `</div> </div> </section>`;
    document.getElementById('bodder-phimmoicapnhat-id').innerHTML += content;
}

function watchmoviecapnhat(j) {
    var listItem = document.getElementsByClassName('title-phim-m-c-n');
    for (let i = 0; i < listItem.length; i++) {
        console.log(i);
        if (listmovie[j].name == listItem[i].innerText){
            localStorage.setItem('name-movie', listItem[i].innerText);
            location = "xemphim.html";
            localStorage.setItem('id-phim', listmovie[j].id);
            localStorage.setItem('type-phim', 0);
            break;
        }
    }
}