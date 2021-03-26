fetch('https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0').then(response => response.json()).then(data => test(data));

function test(data){
    for (i = 0; i < data.length; i++){
        let first = data[i];
    fetch('https://www.cheapshark.com/api/1.0/deals?id=' + data[i].cheapestDealID).then(response => response.json()).then(data2 => {

        let result = 100 - (( first['cheapest'] / data2['gameInfo']['retailPrice']) * 100)
        $('.container .row').append(
            '<div class="col-md-4">' +
            '<div class="card-item shadow mt-3 pb-3">' +
            '<div class="image">' +
            '<img class="w-100 cover" src="'+ first['thumb'] +'">' +
            '</div>' +
            '<div class="title pt-4 pl-3 border-bottom border-2">' +
            '<h3 class="font font-weight-bold">' + first['external'] + '</h3>' +
            '</div>' +
            '<div class="price pt-2 pl-3 pr-3">' +
            '<div class="d-flex">' +
            '<span>' + first['cheapest'] + ' &#36;' + '</span>' +
            '<span class="text-danger ml-3">' + data2['gameInfo']['retailPrice'] + '</span>' + '</div>' +
            '<div class="text-right">' + result.toFixed(0) + '% İndirim' +'<span>' + '</div>' + '</div>' + '</div>'
        );
    });
    }
}

