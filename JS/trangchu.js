var listmovie = [
    {name: 'Tiệc trăng máu', daodien: 'Nguyễn Quang Dũng', quocgia: 'Việt Nam', nam: 2022, theloai:['Tâm lí', 'Tình yêu', 'Chiếu rạp']},
    {name: 'Ma trận: Hồi sinh', daodien: 'Lana Wachowski', quocgia: 'Hoa Kỳ', nam: 2021, theloai:['Hành động', 'Khoa học viễn tưởng']},
    {name: 'Tiệc trăng ngọt', daodien: 'Nguyễn Anh Tuấn', quocgia: 'Việt Nam', nam: 2012, theloai:['Tâm lí']},
    {name: 'Tiệc trăng đào', daodien: 'Nguyễn Quang Tèo', quocgia: 'Việt Nam', nam: 2020, theloai:['Tâm lí']}
];
var listimg = [
    'https://kenh14cdn.com/thumb_w/660/2020/10/22/e7165bdeff9d16c34f8c-1603310951078488940988.jpg',
    'https://metiz.vn/media/poster_film/the_matrix_resurrections-vietnamese_poster_1_1_.jpg',
    'https://metiz.vn/media/poster_film/the_matrix_resurrections-vietnamese_poster_1_1_.jpg',
    'https://metiz.vn/media/poster_film/the_matrix_resurrections-vietnamese_poster_1_1_.jpg',
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


