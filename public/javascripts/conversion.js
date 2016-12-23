$('#convert').on('click', function() {

    var from = $('#from').val();
    var to = $('#to').val();

    $.get('http://api.fixer.io/latest?base=' + from + '&symbols=' + to).then(function(data){

        var toConvert = $('#value').val();
        var rate = data.rates[to];
        $('#resultat').text(parseFloat(toConvert) * rate);
    })
})