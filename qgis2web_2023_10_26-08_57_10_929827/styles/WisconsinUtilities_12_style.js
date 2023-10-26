var size = 0;
var placement = 'point';
function categories_WisconsinUtilities_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'ADAMS-COLUMBIA ELECTRIC COOPERATIVE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(42,212,76,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NORTHERN STATES POWER COMPANY-WISCONSIN':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,51,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WISCONSIN ELECTRIC POWER COMPANY':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,170,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WISCONSIN PUBLIC SERVICE CORPORATION':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(34,27,238,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_WisconsinUtilities_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("UTIL_LAB");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_WisconsinUtilities_12(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
