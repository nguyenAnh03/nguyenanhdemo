var listUrl = [
    { id: 'thegioikhunglong', linktrailer: '3y0KM5jUnmk'},
    { id:'emvatrinh', linktrailer: 'EOOIa7RFRpk'},
    { id: 'nguoikhoilua', linktrailer: 'Kj4j8x3Do34'},
    { id:'satthunhantao', linktrailer: 'NprcHuYuP54' },
    { id: 'haokhichienbinh' , linktrailer: 'm6NnlFkZ-pQ'},
    { id: 'nhentrongmang', linktrailer : '89ZpG7WmO60'},
    { id: 'bacsiduong', linktrailer : 'Xf8341PO0Xw' },
    { id: 'nguoidanong', linktrailer: 'pt81CJcWZy8'},
    { id: 'nguoikenhiemnamsan', linktrailer: 'h91TSTc_8_o'},
    { id: 'contautitanic', linktrailer: 'b0KYvGa_nN8' },
    { id: 'kieu', linktrailer: 'QJH2OinB4a4' },
    { id: 'chimuoiba', linktrailer: 'Ncwkodt5dA4' },
    { id: 'hoaraemyeuanhratnhieu', linktrailer: 'MhUTrSMWsJQ'},
    { id: 'thuyhautu', linktrailer: 'tssQAw2k9h4' },
    { id: 'thuamecondi', linktrailer: 'DkrxQbFwto0'},
    { id: 'thienngabongdem', linktrailer: '57hwFyB6ask'},
    { id: 'ghenong', linktrailer: 'twQePz-lkXE'},
    { id: 'tiectrangmau', linktrailer: 'WiAjAc5MEWE' },
    { id: 'matranhoisinh', linktrailer: '4s8plIwRKq8'},
    { id: 'thuyquairunggomun', linktrailer: 'ac2F8Kxuf-8'},
    { id: 'yeutinh', linktrailer: '33FIPgb7ISo'},
    { id: 'anhemnhagau', linktrailer: 'nKGsVfUTGjA'},
    { id: 'gaudobienhinh', linktrailer: 'jO2hbtq-l_g'},
    { id: 'angrybird', linktrailer: 'hOoGrouSrbs'},
    { id: 'kungfupanda', linktrailer: 'Aftg630D6X8' },
    { id: 'dainaotaydu', linktrailer: 'bUChq9Y1Vnc'},
    { id: 'phamnhantutien', linktrailer: 'hCtyCmTxUwE'},
    { id: 'liethoakieusau', linktrailer: 'Et8eE2Pgkd8'},
    { id: 'thogarakhobau', linktrailer: 'U383YVOPDuc'},
    { id: 'canhsatvutru', linktrailer: 'hB_JdXDnZVQ'},
    { id: 'linhhondoixac', linktrailer: 'UKjCRkHOG9c'},
    { id: 'hoiquaisieucap', linktrailer: 'Ntc2JiK4_AQ'},
    { id: 'thegioikyao', linktrailer: 'jSnzO3v1iD0'},
    { id: 'banhquythu', linktrailer: 'g7HwTGPUOjA'},
    { id: 'vuahaitac', linktrailer: 'gUWbT1wmwb0'}







];

for (let i = 0; i < listUrl.length; i++) {
    if (localStorage.getItem('id-phim') == listUrl[i].id) {
        document.getElementById('url-trailer').setAttribute('src', `https://www.youtube.com/embed/${listUrl[i].linktrailer}`);
        document.getElementById('url-trailer').setAttribute('title', localStorage.getItem('name-movie'));
        break;
    }
}
setTimeout(() => {
    console.clear();
}, 1000);