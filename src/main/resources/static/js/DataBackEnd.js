var informationModule = (function(){
    var metadata = new Array();
    return{
        getMetadata : function(){
            return metadata;
        },
        setMetadata : function(datemeta, openmeta, lowmeta, closemeta, volumemeta){
            metadata.push({date : datemeta, open : openmeta, high: highmeta, low : lowmeta, close : closemeta, volume : volumemeta});
        }
    }
})();

