var imgphim = '';
var listDirecto = [
    { id:'emvatrinh', daodien: 'Phan Gia Nhật Linh', quocgia: 'Việt Nam'},
    { id: 'nguoikhoilua', daodien: 'Keith Thomas', quocgia: 'Hoa Kỳ'},
    { id:'satthunhantao' , daodien: 'Park Hoon-jung', quocgia: 'Hàn Quốc'},
    { id: 'haokhichienbinh', daodien: 'Wei Te-sheng', quocgia: 'Nhật Bản' },
    { id: 'nhentrongmang', daodien: 'Eran Riklis', quocgia: 'Âu Mỹ'},
    { id: 'bacsiduong', daodien: 'Wen De Guang', quocgia: 'Trung Quốc'},
    { id: 'nguoidanong', daodien: 'Alex Garland', quocgia: 'Vương Quốc Anh'},
    { id: 'nguoikenhiemnamsan', daodien: 'Woo Min Ho', quocgia: 'Hàn Quốc'},
    { id: 'contautitanic', daodien: 'James Cameron', quocgia: 'Hoa Kỳ'},
    { id: 'kieu', daodien: 'Mai Thu Huyền', quocgia: 'Việt Nam'},
    { id: 'chimuoiba', daodien: 'Võ Thanh Hòa', quocgia: 'Việt Nam'},
    { id: 'hoaraemyeuanhratnhieu', daodien: 'Dư Thuý Hoa', quocgia: 'Trung Quốc'},
    { id: 'thuyhautu', daodien: 'Huang Xingang', quocgia: 'Trung Quốc'},
    { id: 'thuamecondi',daodien: 'Trịnh Đình Lê Minh', quocgia: 'Việt Nam'},
    { id: 'thuamecondi',daodien: 'Trịnh Đình Lê Minh', quocgia: 'Việt Nam'},
    { id: 'thuamecondi',daodien: 'Trịnh Đình Lê Minh', quocgia: 'Việt Nam'},
    { id: 'tiectrangmau', daodien: 'Nguyễn Quang Dũng', quocgia: 'Việt Nam'},
    { id: 'matranhoisinh', daodien: 'Lana Wachowski', quocgia: 'Hoa Kỳ'},
    { id: 'thuyquairunggomun', daodien: 'Hạng Thu Lương, Hạng Hà Sinh', quocgia: 'Trung Quốc'},
    { id: 'yeutinh', daodien: 'Gil Kenan do David Lindsay-Abaire', quocgia: 'Hoa Kỳ'}
];
if (localStorage.getItem('type-phim') == 1) {
    imgphim = `IMAGE/TrangChu/img-decu/${localStorage.getItem('id-phim')}.webp`;
} else {
    imgphim = `IMAGE/TrangChu/img-capnhat/${localStorage.getItem('id-phim')}.webp`;
}
var background = `IMAGE/TrangChu/img-xemphim/${localStorage.getItem('id-phim')}.webp`;
document.getElementById('poster-phim').style.backgroundImage = `url(${background})`;
document.getElementById('img-poster').setAttribute('src', `${imgphim}`);
document.getElementById('text-name').innerText = localStorage.getItem('name-movie');
document.getElementById('year-phim').innerHTML = `Năm sản xuất: <span>${localStorage.getItem('year-phim')}</span>`;
document.getElementById('category-phim').innerHTML += `Thể loại: <span>${localStorage.getItem('category-phim')}</span>`;
for(let i = 0; i < listDirecto.length; i++) {
    if (listDirecto[i].id == localStorage.getItem('id-phim')) {
        document.getElementById('directo-phim').innerHTML = `Đạo diễn : <span>${listDirecto[i].daodien}</span>`;
        document.getElementById('country-phim').innerHTML = `Quốc gia: <span>${listDirecto[i].quocgia}</span>`;
        break;
    }
}
