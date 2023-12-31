var size = 0;
var placement = 'point';
function categories_WisconsinUtilities_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'NORTHERN STATES POWER COMPANY-WISCONSIN':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,51,28,0.611764705882353)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WISCONSIN ELECTRIC POWER COMPANY':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,223,13,0.592156862745098)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WISCONSIN PUBLIC SERVICE CORPORATION':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(80,77,255,0.6470588235294118)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WISCONSIN POWER & LIGHT COMPANY':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(24,160,178,0.5568627450980392)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_WisconsinUtilities_9 = function(feature, resolution){
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
    
var style = categories_WisconsinUtilities_9(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
