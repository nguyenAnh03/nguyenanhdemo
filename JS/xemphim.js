var imgphim = '';
if (localStorage.getItem('type-phim') == 1) {
    imgphim = `IMAGE/TrangChu/img-decu/${localStorage.getItem('id-phim')}.webp`;
} else {
    imgphim = `IMAGE/TrangChu/img-capnhat/${localStorage.getItem('id-phim')}.webp`;
}

document.getElementById('poster-phim').style.backgroundImage = `url(${imgphim})`;
document.getElementById('img-poster').setAttribute('src', `${imgphim}`);
document.getElementById('text-name').innerText = localStorage.getItem('name-movie');