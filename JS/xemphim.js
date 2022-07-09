var listUrlMovie = [
    { id: 'thegioikhunglong', linkmovie: '4bk0auIF', tap: 0 },
    { id: 'emvatrinh', linkmovie: '', tap: 0 },
    { id: 'nguoikhoilua', linkmovie: 'wOJbsMi9', tap: 0 },
    { id: 'satthunhantao', linkmovie: 'CZH8yA9F', tap: 0 },
    { id: 'haokhichienbinh', linkmovie: '', tap: 0 },
    { id: 'nhentrongmang', linkmovie: '89ZpG7WmO60', tap: 0 },
    { id: 'bacsiduong', linkmovie: 'SyITiPtF', tap: 1 },
    { id: 'nguoidanong', linkmovie: 'pt81CJcWZy8', tap: 0 },
    { id: 'nguoikenhiemnamsan', linkmovie: 'h91TSTc_8_o', tap: 0 },
    { id: 'contautitanic', linkmovie: '', tap: 0 },
    { id: 'kieu', linkmovie: 'QJH2OinB4a4', tap: 0 },
    { id: 'chimuoiba', linkmovie: 'Ncwkodt5dA4', tap: 0 },
    { id: 'hoaraemyeuanhratnhieu', linkmovie: 'jRQrMy8ROeE', tap: 0 },
    { id: 'thuyhautu', linkmovie: 'scvhgqqky', tap: 0 },
    { id: 'thuamecondi', linkmovie: 'zJHg946nn', tap: 0 },
    { id: 'thienngabongdem', linkmovie: 'oSaXQda5', tap: 1 },
    { id: 'thuamecondi', linkmovie: 'bjWmZeL3', tap: 0 },
    { id: 'tiectrangmau', linkmovie: 'ZcPb96BS', tap: 0 },
    { id: 'matranhoisinh', linkmovie: 'WXHVBCEuy', tap: 0 },
    { id: 'thuyquairunggomun', linkmovie: '08WNQAdR', tap: 0 },
    { id: 'yeutinh', linkmovie: 'tbgl2NS2', tap: 0 }
];
var listUrlsever = [
    { id: 'thegioikhunglong', linkmovie: 'https://short.ink/XSK9-be7g' },
    { id: 'emvatrinh', linkmovie: 'https://short.ink/3ktywJAf3' },
    { id: 'nguoikhoilua', linkmovie: 'https://short.ink/pirBa0zn7' },
    { id: 'satthunhantao', linkmovie: 'https://short.ink/KrVHUW7nK' },
    { id: 'haokhichienbinh', linkmovie: '//ok.ru/videoembed/1747761760788' },
    { id: 'nhentrongmang', linkmovie: 'https://short.ink/89ZpG7WmO60' },
    { id: 'bacsiduong', linkmovie: 'https://short.ink/aU1vZvQiS' },
    { id: 'nguoidanong', linkmovie: 'https://short.ink/pt81CJcWZy8' },
    { id: 'nguoikenhiemnamsan', linkmovie: 'https://short.ink/h91TSTc_8_o' },
    { id: 'contautitanic', linkmovie: 'https://short.ink/RyW7i9IyH' },
    { id: 'kieu', linkmovie: 'https://short.ink/QJH2OinB4a4' },
    { id: 'chimuoiba', linkmovie: 'https://short.ink/Ncwkodt5dA4' },
    { id: 'hoaraemyeuanhratnhieu', linkmovie: 'https://short.ink/jRQrMy8ROeE' },
    { id: 'thuyhautu', linkmovie: 'https://short.ink/scvhgqqky' },
    { id: 'thuamecondi', linkmovie: 'https://short.ink/zJHg946nn' },
    { id: 'thienngabongdem', linkmovie: 'https://short.ink/K9PGuByx7' },
    { id: 'thuamecondi', linkmovie: 'https://short.ink/pt81CJcWZy8' },
    { id: 'tiectrangmau', linkmovie: 'https://short.ink/Ft9LqdXpu' },
    { id: 'matranhoisinh', linkmovie: 'https://short.ink/WXHVBCEuy' },
    { id: 'thuyquairunggomun', linkmovie: 'https://short.ink/8ZarsluMU' },
    { id: 'yeutinh', linkmovie: 'https://short.ink/e-6rgdQ49' }
];
var listMovieTap = [
    { id: 'thienngabongdem', tap: ['EfG7MirP', 'EfG7MirP', 'WDbAxTFP', 'OrNHySLW', 'BjcJmvQb', 'fQD8oNzh', 'oy54p8vx', 'udbz4fUm', 'TeyLaTwx', '3IQOR0Rs', '9AZEiAZU', 'hRv62K2M'] },
    { id: 'bacsiduong', tap: ['SyITiPtF', 'DFW6lWxA', 'FB56AIOr', 'L9MUbhR0', 'FLZWT2Qf', 'hwKvDHaZ', 'LUhQaFEt', 'zMQ5B0PL', 'LzsmVQ3T'] }
];
var idphim = localStorage.getItem('id-phim');
var indexphim = 0;
for (let i = 0; i < listUrlMovie.length; i++) {
    if (listUrlMovie[i].id == idphim) {
        indexphim = i;
        document.getElementById('video-movie').setAttribute('src', `https://cdn.jwplayer.com/players/${listUrlMovie[indexphim].linkmovie}-2o6TYCRV.html`);
        if (listUrlMovie[i].linkmovie == '') {
            setTimeout(() => {
                document.getElementById('video-movie').setAttribute('src', `${listUrlsever[indexphim].linkmovie}`);
                alert('Đang chuyển sever');
                setTimeout(() => {
                    location = '#video-movie';
                }, 1000);
            }, 1000);

        }
        break;
    }
}
console.log(listUrlMovie[indexphim].id);
for (let i = 0; i < listMovieTap.length; i++) {

    if (listUrlMovie[indexphim].tap != 0) {
        if (idphim == listMovieTap[i].id) {
            for (let j = 0; j < listMovieTap[i].tap.length; j++) {
                document.getElementById('changetap').innerHTML += `<button onclick="changetapphim(${i},${j})" class="tap">Tập ${j + 1}</button>`;
            }
        }
    } else if (listUrlMovie[indexphim].tap == 0) {
        document.getElementById('changetap').innerHTML = `<button onclick="fullmovie()" class="one">Full</button>`;
        break;
    }
}
// document.addEventListener('contextmenu', event => event.preventDefault());
document.getElementById('title-xem-phim').innerText = localStorage.getItem('name-movie');

var listsever = document.getElementsByClassName('sever');
sever1();
sever2();
function sever1() {
    listsever[0].addEventListener('click', function () {
        document.getElementById('video-movie').setAttribute('src', `${listUrlsever[indexphim].linkmovie}`);
        console.log(`https://short.ink/${listUrlsever[indexphim].linkmovie}`);
        setTimeout(() => {
            location = '#video-movie'
        }, 100);
    });
}
function sever2() {
    listsever[1].addEventListener('click', function () {
        document.getElementById('video-movie').setAttribute('src', `https://cdn.jwplayer.com/players/${listUrlsever[indexphim].linkmovie}-2o6TYCRV.html`);
        console.log(`https://short.ink/${listUrlsever[indexphim].linkmovie}`);
        setTimeout(() => {
            location = '#video-movie'
        }, 100);
    });
}


function changetapphim(i, j) {
    document.getElementById('video-movie').setAttribute('src', `https://cdn.jwplayer.com/players/${listMovieTap[i].tap[j]}-2o6TYCRV.html`);
    location = '#video-movie';
}
function fullmovie() {
    location = '#video-movie';
}