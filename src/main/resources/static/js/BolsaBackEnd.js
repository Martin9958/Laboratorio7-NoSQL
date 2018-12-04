var BolsaBackEndModule = (function(){
    var time = "";

    var errorMessage = function () {
        alert("Los datos no se han encontrado, lamentamos las molestias");
    };

    var timefunction = function (timer) {
        if(timer == "C"){
            time = "Time Series (Daily)";
        }else if(timer == "TIME_SERIES_INTRADAY"){
            time = "Time Series (5min)";
        }else if(timer == "TIME_SERIES_DAILY_ADJUSTED"){
            time = "Time Series (Daily)";
        }else if(timer == "TIME_SERIES_WEEKLY"){
            time = "Weekly Adjusted Time Series";
        }else if(timer == "TIME_SERIES_WEEKLY_ADJUSTED") {
            time = "Weekly Adjusted Time Series";
        }else if(timer == "TIME_SERIES_MONTHLY"){
            time = "Monthly Time Series";
        }else if(timer == "TIME_SERIES_MONTHLY_ADJUSTED"){
            time = "Monthly Time Series";
        }

    };


    return {
            getBolsaData : async function () {
                await Promise.resolve(axios.get('/BolsaAPI/' + document.getElementById('function').value + '/' + document.getElementById('symbol').value))
                    .then(function (response) {
                        timefunction(document.getElementById('function').value);
                        document.getElementById("Bolsadata").innerHTML = "";
                        document.getElementById("Bolsadata").innerHTML = JSON.stringify(response.data);



                    })
                    .catch(function () {
                        errorMessage();
                    });
            }
        };


})();
