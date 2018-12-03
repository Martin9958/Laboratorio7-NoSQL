var BolsaBackEndModule = (function(){

    var errorMessage = function () {
        alert("Los datos no se han encontrado, lamentamos las molestias");
    }
    var getBolsaData =  function (callback){
        axios.get('/BolsaAPI/'+document.getElementById('function').value+'/'+document.getElementById('symbol').value)
            .then(function (response){
                callback.onsuccess(response.data);
                document.getElementById("Bolsadata").innerHTML = "";
                document.getElementById("Bolsadata").innerHTML = JSON.stringify(response.data);

            })
            .catch(function (){
                errorMessage();
            });
    };

    return {
        getBolsaData: getBolsaData
    };

})();