var imgphim = '';
var listDirecto = [
    { id: 'thegioikhunglong', daodien: 'Colin Trevorrow', quocgia: 'Hoa Kỳ', linkimg: 'LHRoyP'},
    { id: 'bacsiduong', daodien: 'Wen De Guang', quocgia: 'Trung Quốc', linkimg: 'Rn8dyu'},
    { id:'emvatrinh', daodien: 'Phan Gia Nhật Linh', quocgia: 'Việt Nam', linkimg: 'exl6yl'},
    { id: 'nguoikhoilua', daodien: 'Keith Thomas', quocgia: 'Hoa Kỳ', linkimg: 'FabN7T'},
    { id:'satthunhantao' , daodien: 'Park Hoon-jung', quocgia: 'Hàn Quốc', linkimg: 'vOnhmz'},
    { id: 'haokhichienbinh', daodien: 'Wei Te-sheng', quocgia: 'Nhật Bản' , linkimg: 'e7Mbjo'},
    { id: 'nhentrongmang', daodien: 'Eran Riklis', quocgia: 'Âu Mỹ',  linkimg: 'BDfzIi'},
    { id: 'nguoidanong', daodien: 'Alex Garland', quocgia: 'Vương Quốc Anh', linkimg: 'Grvxa6'},
    { id: 'nguoikenhiemnamsan', daodien: 'Woo Min Ho', quocgia: 'Hàn Quốc', linkimg: 'VWf0kY'},
    { id: 'contautitanic', daodien: 'James Cameron', quocgia: 'Hoa Kỳ', linkimg: 'nIbLK1'},
    { id: 'kieu', daodien: 'Mai Thu Huyền', quocgia: 'Việt Nam', linkimg: 'n82bfk'},
    { id: 'chimuoiba', daodien: 'Võ Thanh Hòa', quocgia: 'Việt Nam', linkimg: 'sNJQmj'},
    { id: 'hoaraemyeuanhratnhieu', daodien: 'Dư Thuý Hoa', quocgia: 'Trung Quốc', linkimg: 'ZBu1Kc'},
    { id: 'thuyhautu', daodien: 'Huang Xingang', quocgia: 'Trung Quốc', linkimg: 'jwQirP'},
    { id: 'thuamecondi',daodien: 'Trịnh Đình Lê Minh', quocgia: 'Việt Nam', linkimg: 'oHktcc'},
    { id: 'thienngabongdem',daodien: 'Park Bong Sub', quocgia: 'Hàn Quốc', linkimg: 'BBFxWt'},
    { id: 'ghenong',daodien: 'James Cullen Bressack', quocgia: 'Âu Mỹ', linkimg: '80hHmn'},
    { id: 'tiectrangmau', daodien: 'Nguyễn Quang Dũng', quocgia: 'Việt Nam', linkimg: 'PVjpOy'},
    { id: 'matranhoisinh', daodien: 'Lana Wachowski', quocgia: 'Hoa Kỳ', linkimg: 'ols7gf'},
    { id: 'thuyquairunggomun', daodien: 'Hạng Thu Lương, Hạng Hà Sinh', quocgia: 'Trung Quốc', linkimg: 'rSRjvC'},
    { id: 'yeutinh', daodien: 'Gil Kenan do David Lindsay-Abaire', quocgia: 'Hoa Kỳ', linkimg: 'MKkw3g'},
    { id: 'gaudobienhinh', daodien: 'Domee Shi', quocgia: 'Âu Mỹ',linkimg:'UTIVJP'},
    { id: 'anhemnhagau', daodien: 'Ben Gluck',quocgia: 'Âu Mỹ',linkimg: 'I8vxKY'},
    { id: 'angrybird', daodien: 'Thurop Van Orman, John Rice', quocgia: 'Hoa Kỳ, Phần Lan', linkimg: 'GjC6ws'},
    { id: 'kungfupanda', daodien: 'Chưa cập nhật', quocgia: 'Trung Quốc', linkimg: 'Nb4TfE' },
    { id: 'dainaotaydu', daodien: 'Mã Hệ Hải', linkimg: 'dDjsrH'},
    { id: 'phamnhantutien', daodien: 'Chưa cập nhật',quocgia: 'Trung Quốc', linkimg: 'F3zB3i'},
    { id: 'liethoakieusau', daodien: 'Đang cập nhật',quocgia: 'Trung Quốc', linkimg: 'uLWSSv'},
    { id: 'thogarakhobau', daodien: ' Ben Stassen, Benjamin Mousquet', quocgia: 'Âu Mỹ', linkimg: 'Iu85IM'},
    { id: 'canhsatvutru', daodien: 'Angus MacLane', quocgia: 'Âu Mỹ', linkimg: 'emShCj'},
    { id: 'linhhondoixac', daodien: 'Nakajima Takeru, Okada Yoshiyuki', quocgia: 'Đang cập nhật',linkimg: 'La5etu'},
    { id: 'hoiquaisieucap', daodien: 'Đang cập nhật', quocgia: 'Đang cập nhật',linkimg: 'aVxLJv'},
    { id: 'thegioikyao', daodien: 'Han Yan', quocgia:'Trung Quốc',linkimg: 'Y82ja9' },
    { id: 'banhquythu', daodien: 'Đang cập nhật', quocgia: 'Âu Mỹ', linkimg: 'j348Uz'},
    { id: 'vuahaitac', daodien: 'Đang cập nhật', quocgia: 'Nhật Bản',linkimg: 'xlEZGc'},
    { id: 'kedanhcapmattrang', daodien: 'Kyle Balda, Brad Ableson, Jonathan Del Val', linkimg: '5pYpAo'}








];
imgphim = `https://bom.so/${localStorage.getItem('link-img')}`;
for (let i = 0; i < listDirecto.length; i++) {
    console.log(listDirecto[i].linkimg);
    if (localStorage.getItem('id-phim') == listDirecto[i].id) {
        background = `https://bom.so/${listDirecto[i].linkimg}`
        break;
    }
}
// console.log(background);
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
