const audio = document.getElementById('music');
var playMusic = document.getElementById('play-pause');
var flag = true;
var indexList = -1;
var coverimg = document.getElementById('img-cover');
var pop = document.getElementById('popup-dialog');
var checkrandom = true;
var checkrepeat = true;
var checkheart = true;
var checkAlbum = -1;
document.getElementById('border-div').addEventListener("click", setProgress);
// hàm kiểm tra điều kiện để chạy thanh thời gian
var nextSong;
function chaytheothutu() {
    nextSong = setInterval(() => {
        if (audio.currentTime == audio.duration) {
            audioAnimation.pause();
            if (indexList == (listmusic.length - 1)) {
                audioAnimation.pause();
                return;
            }
            next(checkAlbum);
            audioAnimation.play();
        }
        var widthcolor = (audio.currentTime / audio.duration) * 100;
        document.getElementById('div-color').style.width = `${widthcolor}%`;
    }, 200);
}
chaytheothutu();
var audioAnimation = coverimg.animate([
    {
        transform: 'rotate(0deg)'
    },
    {
        transform: 'rotate(359deg)'
    }
], {
    duration: 3000,
    iterations: Infinity
});
// xóa hiệu ứng của đĩa nhạc
audioAnimation.cancel();
// hàm thay đổi màu sắc và icon khi click của play, pause, random, repeat
function changeButton() {
    var random = document.getElementById('random');
    var repeat = document.getElementById('repeat');
    var heart = document.getElementById('heart');

    playMusic.addEventListener('click', function () {
        if (flag) {
            if (indexList == -1) {
                changeSong(0, listmusic);
                playMusic.className = 'fa-solid fa-pause';
                return;
            }
            playMusic.className = 'fa-solid fa-pause';
            audio.play();
            audioAnimation.play();
            flag = !flag;
        } else {
            playMusic.className = 'fa-solid fa-play';
            audio.pause();
            audioAnimation.pause();
            flag = !flag;
        }

    })
    // change button repeat, heart, random

    random.addEventListener('click', function () {
        if (checkrandom) {
            random.style.color = 'blue'
            checkrandom = !checkrandom;
        } else {
            random.style.color = 'white'
            checkrandom = !checkrandom;
        }
    })
    repeat.addEventListener('click', function () {
        if (checkrepeat) {
            repeat.style.color = 'blue'
            checkrepeat = !checkrepeat;
        } else {
            repeat.style.color = 'white'
            checkrepeat = !checkrepeat;
        }
    })
    heart.addEventListener('click', function () {
        if (checkheart) {
            heart.style.color = 'red'
            checkheart = !checkheart;
        } else {
            heart.style.color = 'white'
            checkheart = !checkheart;
        }
    })



}
changeButton();
const volup = document.getElementById('volume-music');
const volumeicon = document.getElementById('icon-volume');
var vol = volup.value;
audio.volume = vol;
function changeVolume() {
    volup.oninput = function () {
        vol = volup.value;
        audio.volume = vol
        document.getElementById('volume-music').setAttribute("value", vol);
        if (vol == 0) {
            volumeicon.className = 'fa-solid fa-volume-xmark';
        } else if (vol < 0.5) {
            volumeicon.className = 'fa-solid fa-volume-low';
        } else if (vol <= 1) {
            volumeicon.className = 'fa-solid fa-volume-high';
        }

    };
}
changeVolume();
volumeicon.addEventListener('click', function () {
    var checkvolume = true;
    if (checkvolume) {
        volumeicon.className = 'fa-solid fa-volume-xmark';
        document.getElementById('volume-music').setAttribute("value", 0);
        audio.volume = 0;
        checkvolume = !checkvolume;
    } else {
        document.getElementById('volume-music').setAttribute("value", vol);
        if (vol == 0) {
            volumeicon.className = 'fa-solid fa-volume-xmark';
        } else if (vol < 0.5) {
            volumeicon.className = 'fa-solid fa-volume-low';
        } else if (vol <= 1) {
            volumeicon.className = 'fa-solid fa-volume-high';
        }
        audio.volume = vol;
        console.log(vol);
        checkvolume = !checkvolume;
    }


});
banner();
// hàm để chạy banner
function banner() {
    var item = document.getElementsByClassName('item-banner');
    var index = 0;
    var a, b, c, d;
    setInterval(() => {
        a = index;
        if (a == 0) {
            b = 1; c = 2; d = 3;
        } else
            if (a == 1) {
                b = 2; c = 3; d = 0;
            } else
                if (a == 2) {
                    b = 3; c = 0; d = 1;
                } else
                    if (a = 3) {
                        b = 0; c = 1; d = 2;
                    }
        item[d].className = 'item-banner last';
        item[c].className = 'item-banner prev';
        item[b].className = 'item-banner next';
        item[a].className = 'item-banner active';
        if (index == 3) {
            index = 0;
        } else {
            index++;
        }
    }, 2500);
}
// mảng bài hát mặc định
var listmusic = [
    { id: 'xemnhutachuatung', link: 'qls6Xc', name: 'Xem Như Ta Chưa Từng (OST Ai Là Người Thứ Ba?)', singer: 'Lệ Quyên' },
    { id: 'cochangtraivietlencay', link: 'cAoks9', name: 'Có Chàng Trai Viết Lên Cây (Mắt Biếc OST)', singer: 'Anh Tú, Bùi Công Nam' },
    { id: 'khongtiecthoigian', link: 'nutsGf', name: 'Không Tiếc Thời Gian (不惜时光)', singer: 'Trương Lương Dĩnh' },
    { id: 'hoabingan', link: 'QO8Te0', name: 'Hoa Bỉ Ngạn / 彼岸花 (電視劇《問天錄》主題曲)', singer: '周深 / Châu Thâm' },
    { id: 'canyouseemyheart', link: '73h6sI', name: 'Can You See My Heart', singer: 'Heize' },
    { id: 'ngaychuagiongbao', link: 'ah6uwl', name: 'Ngày Chưa Giông Bão', singer: 'Bùi Lan Hương' },
    { id: 'anhdidi', link: 'XyfWLh', name: 'Anh Đi Đi', singer: 'Hương Giang, Erik' },
    { id: 'chotoimotvedituoitho', link: 'LsdoMv', name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ', singer: 'Linkly' },
    { id: 'lonroiconkhocnhe', link: '6IkjvR', name: 'Lớn Rồi Còn Khóc Nhè', singer: 'Trúc Nhân' },
    { id: 'rucrothangnam', link: 'pGtjSR', name: 'Rực Rỡ Tháng Năm (Tháng Năm Rực Rỡ OST)', singer: 'Mỹ Tâm' }
]
var listTime = [listmusic.length];
postToList();
// post bài hát mặc định lên trên list
function postToList() {
    var temp = listmusic;
    for (let i = 0; i < listmusic.length; i++) {
        var list = `<li class="item-list" onclick="changeSongToList(${i}); nextMusic()">
                        <div class="img-item">
                            <img src="IMAGE/NhacPhim/${listmusic[i].id}.webp">
                        </div>
                        <div class="name-and-singer">
                            <div class="title-item">
                                ${listmusic[i].name}
                            </div>
                            <div class="singer">
                                ${listmusic[i].singer}
                            </div>
                        </div>
                        
                        <div class="title-item-trans">
                            ${listmusic[i].name}
                        </div>
                        <div>
                            <audio id="music-hide${i}">
                                <source src="https://bom.so/${listmusic[i].link}">
                            </audio>
                            <div class="time-item-trans">
                                
                            </div>
                        </div>
                    </li>`
        document.getElementById('list-menu').innerHTML += list;
    }
    for (let i = 0; i < listmusic.length; i++) {
        var time = document.getElementById(`music-hide${i}`);
        getDuration(time, i);
    }
}
// Hàm này để đổi bài hát được post trên list
function changeSongToList(i) {
    changeSong(i, listmusic);
}
// hàm trả thời gian âm thanh nhưng ở dạng object 
// nên phải dùng hàm formatTine để định dạng lại và trả về chuỗi
function getDuration(music, i) {
    var time_item = null;
    music.addEventListener('loadedmetadata', function () {
        time_item = formatTime(music.duration);
        listTime[i] = time_item;
    });
}
// hàm định dạng thời gian âm thanh về hh:mm:ss
function formatTime(sec_num) {
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

    hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    var time = (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
    var timelast = time.toString();
    return timelast;
}
// hàm trở về bài hát tiếp theo
function next(temp) {
    console.log(temp);
    var mangnext;
    if(temp == -1) {
        mangnext = listmusic;
    } else {
        mangnext = album[temp].listMusicAlbum;
    }
    if (indexList == mangnext.length - 1) {
        return;
    }
    indexList++;
    changeSong(indexList, mangnext);
    document.getElementsByClassName('item-list')[indexList].style.backgroundColor = "#333";
    document.getElementsByClassName('item-list')[indexList - 1].style.backgroundColor = "#170f23";

}
document.getElementById('next').addEventListener('click', function(){
    next(checkAlbum);
});
// hàm này để chạy sang bài hát trước đó
function back(temp) {
    var mangnext;
    if(temp == -1) {
        mangnext = listmusic;
    } else {
        mangnext = album[temp].listMusicAlbum;
    }
    if (indexList == 0) {
        return;
    }
    indexList--;
    changeSong(indexList, mangnext);
    document.getElementsByClassName('item-list')[indexList].style.backgroundColor = "#333";
    document.getElementsByClassName('item-list')[indexList + 1].style.backgroundColor = "#170f23";
}
document.getElementById('back').addEventListener('click', function(){
    back(checkAlbum);
});
// hàm đổi bài hát chung cho 2 lần sử dụng là list đã được post lên và với album
function changeSong(a, b) {
    if (indexList == -1) {
        indexList = b.length - 1;
    }
    if (a != b.length - 1) {
        document.getElementsByClassName('item-list')[indexList].style.backgroundColor = "#170f23";
    }
    document.getElementsByClassName('item-list')[a].style.backgroundColor = "#333";
    indexList = a;
    audio.setAttribute('src', `https://bom.so/${b[indexList].link}`);
    audio.play();
    audioAnimation.play();
    document.getElementById('title-Music').innerText = b[indexList].name;

    playMusic.className = 'fa-solid fa-pause';
    flag = false;
}
// hàm này để chạy lên đầu trang khi chuyển bài bằng cách click chuột
function nextMusic() {
    const element = document.getElementsByClassName('item-list')[indexList];
    element.scrollIntoView(true);

    location = '#body-nhac';
}
function setProgress(e) {
    const width = this.clientWidth; // lấy width của div ngoài bao gồm padding
    const clickX = e.offsetX; //  trả về tọa độ x của phần tử div vừa nhấp vào
    const duration = audio.duration; // lấy thời gian của nhạc

    audio.currentTime = (clickX / width) * duration;
    document.getElementById('play-pause').className = 'fa-solid fa-pause';
    audio.play();
    audioAnimation.play();
    flag = false;
}
var album = [
    {
        name: 'Nhạc Phim Hàn Quốc', id: 'phimhauduemattroi', listMusicAlbum: [
            { id: 'spring', link: 'V2THSt', name: 'Spring', singer: 'Park Bom, Dara' },
            { id: 'withoutyou', link: 'MMtR5P', name: 'Without You (Miley Cyrus Remix)', singer: 'The Kid LAROI, Miley Cyrus' },
            { id: 'moonlight', link: 'fqTs0G', name: 'Moonlight Drawn By Clouds', singer: 'Gummy' },
            { id: 'imissyou', link: 'KLOe24', name: 'I Miss You', singer: 'Kim Bum Soo' },
            { id: 'forever', link: 'kXlfD8', name: 'Forever', singer: 'Ahn Jae-wook' },
            { id: 'sweetdream', link: '2h7tbv', name: 'Sweet Dream', singer: 'Jang Na Ra' },
        ]
    },
    {
        name: 'Nhạc Phim Hoa Ngữ', id: 'phimtrunghoa', listMusicAlbum: [
            { id: 'xemnhutachuatung', link: 'qls6Xc', name: 'Xem Như Ta Chưa Từng (OST Ai Là Người Thứ Ba?)', singer: 'Lệ Quyên' },
            { id: 'xemnhutachuatung', link: 'qls6Xc', name: 'Xem Như Ta Chưa Từng (OST Ai Là Người Thứ Ba?)', singer: 'Lệ Quyên' },
            { id: 'xemnhutachuatung', link: 'qls6Xc', name: 'Xem Như Ta Chưa Từng (OST Ai Là Người Thứ Ba?)', singer: 'Lệ Quyên' },
        ]
    },
    {
        name: 'Nhạc Phim Âu Mỹ', id: 'phimaumy', listMusicAlbum: [
            { id: 'xemnhutachuatung', link: 'qls6Xc', name: 'Xem Như Ta Chưa Từng (OST Ai Là Người Thứ Ba?)', singer: 'Lệ Quyên' },
            { id: 'xemnhutachuatung', link: 'qls6Xc', name: 'Xem Như Ta Chưa Từng (OST Ai Là Người Thứ Ba?)', singer: 'Lệ Quyên' },
        ]
    },
    {
        name: 'Nhạc Phim Việt Nam', id: 'phimvietnam', listMusicAlbum: [
            { id: 'xemnhutachuatung', link: 'qls6Xc', name: 'Xem Như Ta Chưa Từng (OST Ai Là Người Thứ Ba?)', singer: 'Lệ Quyên' },
        ]
    },
    {
        name: 'Nhạc Phim Anime', id: 'anime', listMusicAlbum: [
            { id: 'khongtiecthoigian', link: 'nutsGf', name: 'Không Tiếc Thời Gian (不惜时光)', singer: 'Trương Lương Dĩnh' },
            { id: 'khongtiecthoigian', link: 'nutsGf', name: 'Không Tiếc Thời Gian (不惜时光)', singer: 'Trương Lương Dĩnh' },
        ]
    },
    {
        name: 'Nhạc Tổng Hợp', id: 'thelove', listMusicAlbum: listmusic
    },
]
postListAlbum();
function postListAlbum() {
    for (let i = 0; i < album.length; i++) {
        var string = `<div class="group-album">
                        <div class="img-album">
                            <img class="img-play" src="IMAGE/NhacPhim/${album[i].id}.webp" alt="">
                        </div>
                        <div class="icon-play">
                            <i class="fa-regular fa-circle-play"></i>
                            <div class="name-album">${album[i].name}</div> 
                        </div>
                    </div>`;
        document.getElementById('albums').innerHTML += string;
    }
}
var listMusicAlbumItem = document.getElementsByClassName('icon-play');
postItemAlbum(listMusicAlbumItem);
console.log();
function postItemAlbum() {
    for (let i = 0; i < listMusicAlbumItem.length; i++) {
        listMusicAlbumItem[i].addEventListener('click', function () {
            indexList = -1;
            checkAlbum = i;
            document.getElementById('list-menu').innerHTML = '';
            for (let j = 0; j < album[i].listMusicAlbum.length; j++) {
                var list = `<li class="item-list" onclick="changeSongToAlbum(${j}, ${i})">
                                <div class="img-item">
                                    <img src="IMAGE/NhacPhim/${album[i].listMusicAlbum[j].id}.webp">
                                </div>
                                <div class="name-and-singer">
                                    <div class="title-item">
                                        ${album[i].listMusicAlbum[j].name}
                                    </div>
                                    <div class="singer">
                                        ${album[i].listMusicAlbum[j].singer}
                                    </div>
                                </div>
                                
                                <div class="title-item-trans">
                                    ${album[i].listMusicAlbum[j].name}
                                </div>
                                <div>
                                    <audio id="music-hide${j}">
                                        <source src="https://bom.so/${album[i].listMusicAlbum[j].link}">
                                    </audio>
                                    <div class="time-item-trans">
                                        
                                    </div>
                                </div>
                            </li>`
                document.getElementById('list-menu').innerHTML += list;
            }
            for (let j = 0; j < album[i].listMusicAlbum.length; j++) {
                var time = document.getElementById(`music-hide${j}`);
                getDuration(time, j);
            }
            location = "#body-nhac"
            AddTimes();
        })
    }
}
function changeSongToAlbum(j, i) {
    changeSong(j, album[i].listMusicAlbum)
}
setTimeout(() => {
    popupDialog();
}, 10000);
function popupDialog() {
    pop.style.opacity = '1';
    pop.style.transition = '0.5s linear'
    pop.style.display = '';
    document.getElementById('close').addEventListener('click', function () {
        pop.style.opacity = '0';
        setTimeout(() => {
            pop.style.display = 'none';
        }, 1000);
    });
    console.log('Helo');
}
setTimeout(() => {
    console.clear();
}, 5000);
var intervalRepeat;
var intervalRandom;
function RandomSong() {
    var listMusicRandom = document.getElementsByClassName('item-list');
    clearInterval(nextSong);
    clearInterval(intervalRepeat);
    checkrepeat != checkrepeat;
    if (checkrandom) {
        intervalRandom = setInterval(() => {
            if (audio.currentTime == audio.duration) {
                var randomnumber;
                while (true) {
                    randomnumber = Math.round(Math.random() * listMusicRandom.length);
                    if (randomnumber != indexList) {
                        break;
                    }
                }
                audioAnimation.pause();
                document.getElementsByClassName('item-list')[indexList].style.backgroundColor = "#170f23";
                indexList = --randomnumber;
                document.getElementsByClassName('item-list')[indexList].style.backgroundColor = "#333";
                console.log(indexList, randomnumber);
                if (indexList == (listmusic.length - 1)) {
                    audioAnimation.pause();
                    return;
                }
                next(checkAlbum);
                playMusic.className = 'fa-solid fa-pause';
                flag = false;
                audioAnimation.play();
            }
            var widthcolor = (audio.currentTime / audio.duration) * 100;
            document.getElementById('div-color').style.width = `${widthcolor}%`;
        }, 200);
    } else {
        clearInterval(intervalRandom);
        chaytheothutu();
    }
}

// function repeat() {
//     if (checkrepeat) {
//         clearInterval(nextSong);
//         clearInterval(intervalRandom);
//         checkrandom != checkrandom;
//         setInterval(() => {
//             if (audio.currentTime == audio.duration) {
//                 indexList -= 1;
//                 console.log(indexList);
//                 next();
//             }
//         }, 200);
//     } else {
//         chaytheothutu();
//         clearInterval(intervalRepeat);
//     }
// }