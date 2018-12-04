var BolsaBackEndModule = (function(){

    var errorMessage = function () {
        alert("Los datos no se han encontrado, lamentamos las molestias");
    };

    return {
            getBolsaData : async function (callback) {
                await Promise.resolve(axios.get('/BolsaAPI/' + document.getElementById('function').value + '/' + document.getElementById('symbol').value))
                    .then(function (response) {
                        var info = response.data["Time Series (Daily)"];
                        var infotime = Object.keys(info);
                        console.log(infotime);
                        document.getElementById("Bolsadata").innerHTML = "";
                        document.getElementById("Bolsadata").innerHTML = JSON.stringify(response.data);

                    })
                    .catch(function () {
                        errorMessage();
                    });
            }
        };


})();
