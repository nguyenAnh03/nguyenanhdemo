var listmovie = [
    {name: 'Tiệc trăng máu', daodien: 'Nguyễn Quang Dũng', quocgia: 'Việt Nam', nam: 2022, theloai:['Tâm lí', 'Tình yêu', 'Chiếu rạp']},
    {name: 'Ma trận: Hồi sinh', daodien: 'Lana Wachowski', quocgia: 'Hoa Kỳ', nam: 2021, theloai:['Hành động', 'Khoa học viễn tưởng']},
    {name: 'Thủy quái rừng gỗ mun', daodien: 'Hạng Thu Lương, Hạng Hà Sinh', quocgia: 'Trung Quốc', nam: 2021, theloai:['Hành động', 'Ma-Kinh dị']},
    {name: 'Yêu tinh (2015)', daodien: 'Gil Kenan do David Lindsay-Abaire', quocgia: 'Hoa Kỳ', nam: 2015, theloai:['Ma-kinh dị']}
];
var listimg = [
    'https://kenh14cdn.com/thumb_w/660/2020/10/22/e7165bdeff9d16c34f8c-1603310951078488940988.jpg',
    'https://metiz.vn/media/poster_film/the_matrix_resurrections-vietnamese_poster_1_1_.jpg',
    'https://image.cdnclouds.org/420x600,sc/https://media.cdnclouds.org/img-redirect/movies/2021/thuy_quai_rung_go_mun_water_monster_2.jpg',
    'https://anh.eva.vn//upload/2-2015/images/2015-05-25/1432525310-1.jpg',
    'https://metiz.vn/media/poster_film/the_matrix_resurrections-vietnamese_poster_1_1_.jpg'
];
var listRv = document.getElementsByClassName('review-phim');
var listName = document.getElementsByClassName('title-phim');
var listPoster = document.getElementsByClassName('poster');
var soluongmang = 0;
if (listRv.length <= listmovie.length){
    soluongmang = listRv.length;
} else soluongmang = listmovie.length;
for(let index = 0; index < soluongmang; index++){
    var content = `<div>Trạng thái: HD Vietsub</div><div class="daodien">Đạo diễn: ${listmovie[index].daodien}</div>
                    <div>Quốc gia: ${listmovie[index].quocgia}</div>
                    <div>Năm sản xuất: ${listmovie[index].nam}</div>
                    <div>Chất lượng: Full HD</div>
                    <div class='theloai'>Thể loại: `;
    for(let j = 0; j < listmovie[index].theloai.length; j++){
        var type =`<a href="">${listmovie[index].theloai[j]}</a>`;
        if (j == listmovie[index].theloai.length-1){
            content += type;
        } else content += type+", ";
        
    }
    document.getElementsByClassName('review-phim')[index].innerHTML = content +`</div>`;
    listName[index].innerText = listmovie[index].name;
    listPoster[index].setAttribute('src',listimg[index]);
}


