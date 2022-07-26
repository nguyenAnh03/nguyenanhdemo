var navmovie = localStorage.getItem('nav-movie');
switch (navmovie) {
    case 'chieurap':
        chieurap();
        break;
    case 'kinhdi':
        kinhdi()
        break;
    case 'tinhcam':
        tinhcam();
        break;
    case 'tamly':
        tamly();
        break;
    case 'hoathinh':
        hoathinh();
        break;
}





function hoathinh() {
    var listMovie = [
        { id: 'gaudobienhinh', name: 'Gấu đỏ biến hình', year: 2022, theloai: ['Hoạt hình, Phiêu Lưu'], linkimg: 'MWz6d3' },
        { id: 'anhemnhagau', name: 'Anh em nhà gấu 2', year: 2006, theloai: ['Hoạt hình, Phiêu Lưu'], linkimg: 'ZdvzRo' },
        { id: 'angrybird', name: 'Angry Bird 2', year: 2019, theloai: ['Phim Hành Động', 'Phiêu Lưu', 'Hoạt Hình'], linkimg: '6i5arq' },
        { id: 'kungfupanda', name: 'Kung Fu Panda: Hiệp Sĩ Rồng - Kung Fu Panda: The Dragon Knight (2022)', year: 2022, theloai: ['Phim Hành Động', 'Phim Hoạt Hình'], linkimg: '0X6a1t' },
        { id: 'dainaotaydu', name: 'Đại Náo Tây Du', year: 2018, theloai: ['Viễn Tưởng', 'Hoạt Hình'], linkimg: 'ZRz3t4' },
        { id: 'phamnhantutien', name: 'Phàm Nhân Tu Tiên', year: 2020, theloai: [' Hành Động', 'Phiêu Lưu', 'Bí ẩn', 'Hoạt Hình'], linkimg: 'SYK4nr' },
        { id: 'liethoakieusau', name: 'Liệt Hỏa Kiêu Sầu', year: 2021, theloai: ['Phiêu Lưu', 'Bí ẩn', 'Hoạt Hình'], linkimg: 'EP16Gd' },
        { id: 'thogarakhobau', name: 'Thỏ Gà Rà Kho Báu', year: '2020', theloai: ['Phiêu Lưu', 'Hoạt Hình'], linkimg: 'EA2bWS' },
        { id: 'canhsatvutru', name: 'Lightyear: Cảnh Sát Vũ Trụ', year: 2022, theloai: ['Phiêu Lưu', 'Hoạt Hình'], linkimg: '5sChId' },
        { id: 'linhhondoixa', name: 'Linh Hồi Đổi Xác', year: 2020, theloai: ['Phiêu Lưu - Hành Động', 'Hoạt Hình', 'Khoa Học - Viễn Tưởng'], linkimg: '9hMHGa' },
        { id: 'hoiquaisieucap', name: 'Hội Quái Siêu Cấp (Super Monsters)', year: 2017, theloai: ['Hoạt hình'], linkimg: 'ZRmarz' },
        { id: 'thegioikyao', name: 'Thế Giới Kỳ Ảo', year: 2018, theloai: ['Hành Động', 'Phiêu Lưu', 'Bí ẩn'], linkimg: 'czbcT4' },
        { id: 'banhquythu', name: 'Bánh Quy Thú: Gánh Xiếc Phép Thuật', year: 2020, theloai: ['Hài Hước', 'Gia Đình', 'Hoạt hình'], linkimg: 'zlDNc8' },
        { id: 'vuahaitac', name: 'Vua Hải Tặc: Đảo Châu Báu', year: 2000, theloai: ['Hài Hước', 'Phiêu Lưu', 'Bí ẩn'], linkimg: 's8604a' },
        { id: 'kedanhcapmattrang', name: 'Kẻ Đánh Cắp Mặt Trăng 4: Sự Trỗi Dậy Của Gru', year: 2022, theloai: ['Hài Hước', 'Phiêu Lưu'], linkimg: 'mbiDDJ' }


    ]
    postToList(listMovie);

}

function chieurap() {
    var listMovie = [
        { name: 'Tiệc trăng máu', daodien: 'Nguyễn Quang Dũng', quocgia: 'Việt Nam', year: 2022, theloai: ['Tâm lí', 'Tình yêu', 'Chiếu rạp'], id: 'tiectrangmau', linkimg: 'o49Xjm' },
        { name: 'Ma trận: Hồi sinh', daodien: 'Lana Wachowski', quocgia: 'Hoa Kỳ', year: 2021, theloai: ['Hành động', 'Khoa học viễn tưởng'], id: 'matranhoisinh', linkimg: 'oZbyvf' },
        { name: 'Thủy quái rừng gỗ mun', daodien: 'Hạng Thu Lương, Hạng Hà Sinh', quocgia: 'Trung Quốc', year: 2021, theloai: ['Hành động', 'Ma-Kinh dị'], id: 'thuyquairunggomun', linkimg: 'tU9RYW' },
        { name: 'Yêu tinh (2015)', daodien: 'Gil Kenan do David Lindsay-Abaire', quocgia: 'Hoa Kỳ', year: 2015, theloai: ['Ma-kinh dị'], id: 'yeutinh', linkimg: '8LJZae' },
        { name: 'Thế giới khủng long: Lãnh địa', year: 2022, theloai: ['Hành động', 'Kinh dị'], id: 'thegioikhunglong', linkimg: 'LR6PGb' },
        { name: 'Thiên nga bóng đêm', year: 2022, theloai: ['Truyền hình', 'Tình cảm'], id: 'thienngabongdem', linkimg: 'XYWbKG' },
        { name: 'Em và Trịnh', year: 2022, theloai: ['Tâm lí - Tình cảm'], id: 'emvatrinh', linkimg: 'gZOqdl' },
        { name: 'Người khởi lửa', year: 2022, theloai: ['Kinh dị', 'Giật gân'], id: 'nguoikhoilua', linkimg: 'frL5Gn' },
        { name: 'Sát thủ nhân tạo 2: Mẫu vật còn lại', year: 2022, theloai: ['Kinh dị', 'Khoa học viễn tưởng'], id: 'satthunhantao', linkimg: 'l10ubl' },
        { name: 'Hào khí chiến binh', year: 2011, theloai: ['Kinh dị', 'Hành động'], id: 'haokhichienbinh', linkimg: 'bvlzhk' },
        { name: 'Con tàu Titanic', year: 1997, theloai: ['Tâm lí - Tình cảm'], id: 'contautitanic', linkimg: 'BEarlZ' },
        { name: 'Kiều', year: 2021, theloai: ['Tâm lí - Tình cảm'], id: 'kieu', linkimg: 'fshksU' },
        { name: 'Chị Mười Ba: 3 ngày sinh tử', year: 2021, theloai: ['Phiêu Lưu - Hành Động', 'Hài Hước', 'Phim Chiếu Rạp'], id: 'chimuoiba', linkimg: '277WoI' },
        { name: 'Hóa Ra Em Rất Yêu Anh', year: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'hoaraemyeuanhratnhieu', linkimg: '2E0RFb' },
        { id: 'kedanhcapmattrang', name: 'Kẻ Đánh Cắp Mặt Trăng 4: Sự Trỗi Dậy Của Gru', year: 2022, theloai: ['Hài Hước', 'Phiêu Lưu'], linkimg: 'mbiDDJ' }

    ]
    postToList(listMovie);
}

function kinhdi() {
    var listMovie = [
        { id: 'linhhondoixa', name: 'Linh Hồi Đổi Xác', year: 2020, theloai: ['Phiêu Lưu - Hành Động', 'Hoạt Hình', 'Khoa Học - Viễn Tưởng'], linkimg: '9hMHGa' },
        { name: 'Yêu tinh (2015)', daodien: 'Gil Kenan do David Lindsay-Abaire', quocgia: 'Hoa Kỳ', year: 2015, theloai: ['Ma-kinh dị'], id: 'yeutinh', linkimg: '8LJZae' },
        { name: 'Thế giới khủng long: Lãnh địa', year: 2022, theloai: ['Hành động', 'Kinh dị'], id: 'thegioikhunglong', linkimg: 'LR6PGb' },
        { name: 'Thiên nga bóng đêm', year: 2022, theloai: ['Truyền hình', 'Tình cảm'], id: 'thienngabongdem', linkimg: 'XYWbKG' },
        { name: 'Ma trận: Hồi sinh', daodien: 'Lana Wachowski', quocgia: 'Hoa Kỳ', year: 2021, theloai: ['Hành động', 'Khoa học viễn tưởng'], id: 'matranhoisinh', linkimg: 'oZbyvf' },
        { name: 'Thủy quái rừng gỗ mun', daodien: 'Hạng Thu Lương, Hạng Hà Sinh', quocgia: 'Trung Quốc', year: 2021, theloai: ['Hành động', 'Ma-Kinh dị'], id: 'thuyquairunggomun', linkimg: 'tU9RYW' },
        { name: 'Thưa mẹ con đi', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'thuamecondi', linkimg: '3ml6Fo' },
        { name: 'Hot Seat', year: 2022, theloai: ['Hành động', 'Hình sự'], id: 'ghenong', linkimg: '5Ma5en' },
        { name: 'Người khởi lửa', year: 2022, theloai: ['Kinh dị', 'Giật gân'], id: 'nguoikhoilua', linkimg: 'frL5Gn' },
        { name: 'Sát thủ nhân tạo 2: Mẫu vật còn lại', year: 2022, theloai: ['Kinh dị', 'Khoa học viễn tưởng'], id: 'satthunhantao', linkimg: 'l10ubl' },
        { name: 'Hào khí chiến binh', year: 2011, theloai: ['Kinh dị', 'Hành động'], id: 'haokhichienbinh', linkimg: 'bvlzhk' },
        { name: 'Con tàu Titanic', year: 1997, theloai: ['Tâm lí - Tình cảm'], id: 'contautitanic', linkimg: 'BEarlZ' },
        { name: 'Chị Mười Ba: 3 ngày sinh tử', year: 2021, theloai: ['Phiêu Lưu - Hành Động', 'Hài Hước', 'Phim Chiếu Rạp'], id: 'chimuoiba', linkimg: '277WoI' },
        { name: 'Hóa Ra Em Rất Yêu Anh', year: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'hoaraemyeuanhratnhieu', linkimg: '2E0RFb' },
        { id: 'kedanhcapmattrang', name: 'Kẻ Đánh Cắp Mặt Trăng 4: Sự Trỗi Dậy Của Gru', year: 2022, theloai: ['Hài Hước', 'Phiêu Lưu'], linkimg: 'mbiDDJ' }

    ]
    postToList(listMovie);
}
function tamly() {
    var listMovie = [
        { name: 'Hot Seat', year: 2022, theloai: ['Hành động', 'Hình sự'], id: 'ghenong', linkimg: '5Ma5en' },
        { id: 'gaudobienhinh', name: 'Gấu đỏ biến hình', year: 2022, theloai: ['Hoạt hình, Phiêu Lưu'], linkimg: 'MWz6d3' },
        { id: 'anhemnhagau', name: 'Anh em nhà gấu 2', year: 2006, theloai: ['Hoạt hình, Phiêu Lưu'], linkimg: 'ZdvzRo' },
        { id: 'angrybird', name: 'Angry Bird 2', year: 2019, theloai: ['Phim Hành Động', 'Phiêu Lưu', 'Hoạt Hình'], linkimg: '6i5arq' },
        { id: 'kungfupanda', name: 'Kung Fu Panda: Hiệp Sĩ Rồng - Kung Fu Panda: The Dragon Knight (2022)', year: 2022, theloai: ['Phim Hành Động', 'Phim Hoạt Hình'], linkimg: '0X6a1t' },
        { id: 'dainaotaydu', name: 'Đại Náo Tây Du', year: 2018, theloai: ['Viễn Tưởng', 'Hoạt Hình'], linkimg: 'ZRz3t4' },
        { id: 'phamnhantutien', name: 'Phàm Nhân Tu Tiên', year: 2020, theloai: [' Hành Động', 'Phiêu Lưu', 'Bí ẩn', 'Hoạt Hình'], linkimg: 'SYK4nr' },
        { name: 'Thế giới khủng long: Lãnh địa', year: 2022, theloai: ['Hành động', 'Kinh dị'], id: 'thegioikhunglong', linkimg: 'LR6PGb' },
        { name: 'Thiên nga bóng đêm', year: 2022, theloai: ['Truyền hình', 'Tình cảm'], id: 'thienngabongdem', linkimg: 'XYWbKG' },
        { name: 'Thưa mẹ con đi', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'thuamecondi', linkimg: '3ml6Fo' },
    ]
    postToList(listMovie);
}

function tinhcam() {
    var listMovie = [
        { id: 'phamnhantutien', name: 'Phàm Nhân Tu Tiên', year: 2020, theloai: [' Hành Động', 'Phiêu Lưu', 'Bí ẩn', 'Hoạt Hình'], linkimg: 'SYK4nr' },
        { name: 'Thế giới khủng long: Lãnh địa', year: 2022, theloai: ['Hành động', 'Kinh dị'], id: 'thegioikhunglong', linkimg: 'LR6PGb' },
        { name: 'Thưa mẹ con đi', nam: 2019, theloai: ['Tâm lí - Tình cảm'], id: 'thuamecondi', linkimg: '3ml6Fo' },
        { name: 'Hot Seat', year: 2022, theloai: ['Hành động', 'Hình sự'], id: 'ghenong', linkimg: '5Ma5en' },
        { name: 'Người khởi lửa', year: 2022, theloai: ['Kinh dị', 'Giật gân'], id: 'nguoikhoilua', linkimg: 'frL5Gn' },
        { name: 'Nhện trong mạng', year: 2019, theloai: ['Giật gân', 'Hành động'], id: 'nhentrongmang', linkimg: 'l6opVR' },
        { name: 'Bác sĩ Đường', year: 2022, theloai: ['Tâm lí - Tình cảm'], id: 'bacsiduong', linkimg: 'P1OsFC' },
        { name: 'Người đàn ông', year: 2022, theloai: ['Tâm Lý - Tình cảm', 'Kinh dị - Ma'], id: 'nguoidanong', linkimg: 'C5pXZU' },
        { name: 'Người kế nhiệm Namsan', year: 2020, theloai: ['Tâm lí - Tình cảm'], id: 'nguoikenhiemnamsan', linkimg: 'nyfAJc' },
        { name: 'Con tàu Titanic', year: 1997, theloai: ['Tâm lí - Tình cảm'], id: 'contautitanic', linkimg: 'BEarlZ' },
    ]
    postToList(listMovie);
}
function postToList(theloaiphim) {
    for (let i = 0; i < theloaiphim.length; i++) {
        var content = `<section class="item-phimdecu">
                                <img onclick="" src="https://bom.so/${theloaiphim[i].linkimg}" title="${theloaiphim[i].name}">
                                <div class="title-phim watchmovie">${theloaiphim[i].name}</div> 
                                <div>Năm sản xuất: ${theloaiphim[i].year}</div>
                                <div>Thể loại: `;
        for (let j = 0; j < theloaiphim[i].theloai.length; j++) {
            var type = `<a href="">${theloaiphim[i].theloai[j]}</a>`;
            if (j == theloaiphim[i].theloai.length - 1) {
                content += type;
            } else content += type + ", ";
        }
        document.getElementById('theloai-all-item').innerHTML += content;
    }
    var listWatch = document.getElementsByClassName('watchmovie');
    for (let i = 0; i < listWatch.length; i++) {
        listWatch[i].addEventListener('click', function () {
            watchmovie(i, theloaiphim);
        })
    }
}
function watchmovie(j, theloaiphim) {
    var listItem = document.getElementsByClassName('watchmovie');
    for (let i = 0; i < theloaiphim.length; i++) {
        if (theloaiphim[j].name == listItem[i].innerText) {
            localStorage.setItem('name-movie', listItem[i].innerText);
            location = "xemtrailer.html";
            localStorage.setItem('id-phim', theloaiphim[j].id);
            localStorage.setItem('category-phim', theloaiphim[j].theloai);
            localStorage.setItem('year-phim', theloaiphim[j].year);
            localStorage.setItem('link-img', theloaiphim[j].linkimg);
            localStorage.setItem('id-phim', theloaiphim[j].id);
            break;
        }
    }
}

