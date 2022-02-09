


$( document ).ready(function() {
    const ENDPOINT =
   'https://covid-19-data.p.rapidapi.com/';
    $('#check-weather').click(function () {
    if ((!$('#country-name').val()) && (!$('#date').val())) {
    $('#country-name-validation').show();
    return;
    }
    $("#loader").removeClass('d-none');
    $.ajax({
        "async": true,
	    "crossDomain": true,
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "0eaf85e90emsh909fe7c567d4f04p10bad1jsne26460938022",
        },
        url: ENDPOINT + 'country?name=' + $('#country-name').val() +
         '&date=' + + $('#date').val(),
        type: 'GET',
        success: function (result) {
        console.log(result);
        $.each(result, function (index,value){
            console.log(value.country);
            console.log(value.confirmed);
        });
        },
        complete: function () {
        $("#loader").addClass('d-none');
        },
        })
    });
       });
       