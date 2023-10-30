var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleImagery_1 = new ol.layer.Tile({
            'title': 'Google Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGray_2 = new ol.layer.Tile({
            'title': 'ESRI Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoalClosureEnergyCommunities_4 = new ol.format.GeoJSON();
var features_CoalClosureEnergyCommunities_4 = format_CoalClosureEnergyCommunities_4.readFeatures(json_CoalClosureEnergyCommunities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoalClosureEnergyCommunities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoalClosureEnergyCommunities_4.addFeatures(features_CoalClosureEnergyCommunities_4);
var lyr_CoalClosureEnergyCommunities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoalClosureEnergyCommunities_4, 
                style: style_CoalClosureEnergyCommunities_4,
                interactive: true,
    title: 'Coal Closure Energy Communities<br />\
    <img src="styles/legend/CoalClosureEnergyCommunities_4_0.png" /> Census tract directly adjoining a census tract with a coal closure<br />\
    <img src="styles/legend/CoalClosureEnergyCommunities_4_1.png" /> Census tract with a coal closure<br />'
        });
var format_MSANonMSAsthatareEnergyCommunities_5 = new ol.format.GeoJSON();
var features_MSANonMSAsthatareEnergyCommunities_5 = format_MSANonMSAsthatareEnergyCommunities_5.readFeatures(json_MSANonMSAsthatareEnergyCommunities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSANonMSAsthatareEnergyCommunities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSANonMSAsthatareEnergyCommunities_5.addFeatures(features_MSANonMSAsthatareEnergyCommunities_5);
var lyr_MSANonMSAsthatareEnergyCommunities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MSANonMSAsthatareEnergyCommunities_5, 
                style: style_MSANonMSAsthatareEnergyCommunities_5,
                interactive: true,
    title: 'MSA/Non-MSAs that are Energy Communities<br />\
    <img src="styles/legend/MSANonMSAsthatareEnergyCommunities_5_0.png" /> is an energy community, as it meets both the Fossil Fuel Employment (FFE) threshold and the unemployment rate requirement<br />'
        });
var format_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.format.GeoJSON();
var features_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = format_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.readFeatures(json_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.addFeatures(features_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6);
var lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6, 
                style: style_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6,
                interactive: true,
                title: '<img src="styles/legend/AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.png" /> Additional Selection Criteria Geographic Option 2 Persistent Poverty County'
            });
var format_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.format.GeoJSON();
var features_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = format_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.readFeatures(json_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.addFeatures(features_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7);
var lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7, 
                style: style_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7,
                interactive: true,
                title: '<img src="styles/legend/AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.png" /> Additional Selection Criteria Geographic Option 1 CEJST Energy'
            });
var format_Category1Eligibility_8 = new ol.format.GeoJSON();
var features_Category1Eligibility_8 = format_Category1Eligibility_8.readFeatures(json_Category1Eligibility_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Category1Eligibility_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Category1Eligibility_8.addFeatures(features_Category1Eligibility_8);
var lyr_Category1Eligibility_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Category1Eligibility_8, 
                style: style_Category1Eligibility_8,
                interactive: true,
                title: '<img src="styles/legend/Category1Eligibility_8.png" /> Category 1 Eligibility'
            });
var format_WisconsinUtilities_9 = new ol.format.GeoJSON();
var features_WisconsinUtilities_9 = format_WisconsinUtilities_9.readFeatures(json_WisconsinUtilities_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WisconsinUtilities_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WisconsinUtilities_9.addFeatures(features_WisconsinUtilities_9);
var lyr_WisconsinUtilities_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WisconsinUtilities_9, 
                style: style_WisconsinUtilities_9,
                interactive: true,
    title: 'Wisconsin Utilities<br />\
    <img src="styles/legend/WisconsinUtilities_9_0.png" /> NORTHERN STATES POWER COMPANY-WISCONSIN (XCEL)<br />\
    <img src="styles/legend/WisconsinUtilities_9_1.png" /> WISCONSIN ELECTRIC POWER COMPANY (WE)<br />\
    <img src="styles/legend/WisconsinUtilities_9_2.png" /> WISCONSIN PUBLIC SERVICE CORPORATION (WPS)<br />\
    <img src="styles/legend/WisconsinUtilities_9_3.png" /> WISCONSIN POWER & LIGHT COMPANY (AE)<br />'
        });
var format_Wisconsin_10 = new ol.format.GeoJSON();
var features_Wisconsin_10 = format_Wisconsin_10.readFeatures(json_Wisconsin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wisconsin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wisconsin_10.addFeatures(features_Wisconsin_10);
var lyr_Wisconsin_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wisconsin_10, 
                style: style_Wisconsin_10,
                interactive: true,
                title: '<img src="styles/legend/Wisconsin_10.png" /> Wisconsin'
            });
var format_WisconsinCounties_11 = new ol.format.GeoJSON();
var features_WisconsinCounties_11 = format_WisconsinCounties_11.readFeatures(json_WisconsinCounties_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WisconsinCounties_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WisconsinCounties_11.addFeatures(features_WisconsinCounties_11);
var lyr_WisconsinCounties_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WisconsinCounties_11, 
                style: style_WisconsinCounties_11,
                interactive: true,
                title: '<img src="styles/legend/WisconsinCounties_11.png" /> Wisconsin Counties'
            });
var format_SignedParcelslastupdated102523_12 = new ol.format.GeoJSON();
var features_SignedParcelslastupdated102523_12 = format_SignedParcelslastupdated102523_12.readFeatures(json_SignedParcelslastupdated102523_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignedParcelslastupdated102523_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignedParcelslastupdated102523_12.addFeatures(features_SignedParcelslastupdated102523_12);
var lyr_SignedParcelslastupdated102523_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SignedParcelslastupdated102523_12, 
                style: style_SignedParcelslastupdated102523_12,
                interactive: true,
                title: '<img src="styles/legend/SignedParcelslastupdated102523_12.png" /> Signed Parcels (last updated 10/25/23)'
            });
var format_SignedParcelslastupdated102523_13 = new ol.format.GeoJSON();
var features_SignedParcelslastupdated102523_13 = format_SignedParcelslastupdated102523_13.readFeatures(json_SignedParcelslastupdated102523_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignedParcelslastupdated102523_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignedParcelslastupdated102523_13.addFeatures(features_SignedParcelslastupdated102523_13);cluster_SignedParcelslastupdated102523_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SignedParcelslastupdated102523_13
});
var lyr_SignedParcelslastupdated102523_13 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SignedParcelslastupdated102523_13, 
                style: style_SignedParcelslastupdated102523_13,
                interactive: true,
                title: '<img src="styles/legend/SignedParcelslastupdated102523_13.png" /> Signed Parcels (last updated 10/25/23)'
            });
var group_48eLowIncomeCredits = new ol.layer.Group({
                                layers: [lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6,lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7,lyr_Category1Eligibility_8,],
                                title: "48e Low Income Credits"});
var group_EnergyCommunities = new ol.layer.Group({
                                layers: [lyr_CoalClosureEnergyCommunities_4,lyr_MSANonMSAsthatareEnergyCommunities_5,],
                                title: "Energy Communities"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_GoogleImagery_1,lyr_ESRIGray_2,lyr_OpenStreetMap_3,],
                                title: "Basemaps"});

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleImagery_1.setVisible(true);lyr_ESRIGray_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_CoalClosureEnergyCommunities_4.setVisible(true);lyr_MSANonMSAsthatareEnergyCommunities_5.setVisible(true);lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.setVisible(true);lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.setVisible(true);lyr_Category1Eligibility_8.setVisible(true);lyr_WisconsinUtilities_9.setVisible(true);lyr_Wisconsin_10.setVisible(true);lyr_WisconsinCounties_11.setVisible(true);lyr_SignedParcelslastupdated102523_12.setVisible(true);lyr_SignedParcelslastupdated102523_13.setVisible(true);
var layersList = [group_Basemaps,group_EnergyCommunities,group_48eLowIncomeCredits,lyr_WisconsinUtilities_9,lyr_Wisconsin_10,lyr_WisconsinCounties_11,lyr_SignedParcelslastupdated102523_12,lyr_SignedParcelslastupdated102523_13];
lyr_CoalClosureEnergyCommunities_4.set('fieldAliases', {'objectid': 'OBJECTID', 'affgeoid_tract_2020': 'AFFGEOID_Tract_2020', 'fipstate_2020': 'fipstate_2020', 'fipcounty_2020': 'fipcounty_2020', 'geoid_county_2020': 'geoid_county_2020', 'fiptract_2020': 'fiptract_2020', 'geoid_tract_2020': 'geoid_tract_2020', 'mine_qual': 'Mine_Qual', 'generator_qual': 'Generator_Qual', 'neighbor_qual': 'Neighbor_Qual', 'state_name': 'State_Name', 'county_name': 'County_Name', 'censustract_name': 'CensusTract_Name', 'mine_closure': 'Mine_Closure', 'generator_closure': 'Generator_Closure', 'adjacent_to_closure': 'Adjacent_to_Closure', 'tract_status': 'Tract_Status', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'record_added': 'record_added', 'symbol': 'Symbol', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldAliases', {'objectid_1': 'OBJECTID_1', 'objectid': 'ObjectID', 'affgeoid_cty_2020': 'AFFGEOID_COUNTY_2020', 'fipstate_2020': 'fipstate_2020', 'fipscty_2020': 'fipscounty_2020', 'geoid_cty_2020': 'geoid_county_2020', 'county_name_2020': 'county_name_2020', 'state_name': 'state_name', 'msa_area_id': 'MSA_area_ID_2020', 'msa_area_name': 'MSA_area_name_2020', 'ffe_ind_qual': 'ffe_ind_qual', 'ec_ind_qual': 'ec_ind_qual', 'msa_qual': 'msa_qual', 'fee_qual_status': 'FEE_qual_status', 'ec_qual_status': 'EC_qual_status', 'label_fee': 'Label_FEE', 'label_ec': 'Label_EC', 'msa_nmsa_label': 'Label_MSA_NMSA', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'date_record_added': 'date_record_added', 'globalid': 'globalid', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'Persistent': 'Persistent', 'Persiste_1': 'Persiste_1', 'Persiste_2': 'Persiste_2', 'Persiste_3': 'Persiste_3', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldAliases', {'GEOID10': 'GEOID10', 'SF': 'SF', 'CF': 'CF', 'N_ENY': 'N_ENY', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Category1Eligibility_8.set('fieldAliases', {'CensusTrac': 'CensusTrac', 'NMTCQualif': 'NMTCQualif', 'StateName': 'StateName', 'CountyName': 'CountyName', 'Vintage': 'Vintage', 'CountyFIPS': 'CountyFIPS', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_WisconsinUtilities_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE': 'CODE', 'COLOR': 'COLOR', 'UTIL_LAB': 'Utility Name', 'Util_Type': 'Utility Type', 'PSC_ID': 'PSC ID', 'ADDRESS_1': 'Mail', 'ADDRESS_2': 'Street', 'CITY': 'City', 'STATE': 'State', 'ZIP': 'ZIP', 'PHONE': 'Phone', 'WEB': 'Website', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'DATA_DATE': 'DATA_DATE', 'GIS_DATA': 'GIS_DATA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LABEL': 'Utility Name', 'FOE_Part': 'FOE_Part', });
lyr_Wisconsin_10.set('fieldAliases', {'STATE': 'STATE', 'NAME': 'NAME', 'FIPS': 'FIPS', 'LON': 'LON', 'LAT': 'LAT', });
lyr_WisconsinCounties_11.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_SignedParcelslastupdated102523_12.set('fieldAliases', {'id': 'id', 'Parcel': 'Parcel', 'owner': 'owner', 'descrption': 'descrption', 'bldblRel': 'bldblRel', 'bldblAcr': 'bldblAcr', 'LotSize': 'LotSize', 'ownerAddr': 'ownerAddr', 'mailAddr': 'mailAddr', 'crtclHbttJ': 'crtclHbttJ', 'crtclHbtt0': 'crtclHbtt0', 'fldHgh': 'fldHgh', 'fldLw': 'fldLw', 'fld02': 'fld02', 'fld02Acr': 'fld02Acr', 'fld1': 'fld1', 'fld1Acr': 'fld1Acr', 'mnmdArprt': 'mnmdArprt', 'mnmdArprtA': 'mnmdArprtA', 'mnmdBldng': 'mnmdBldng', 'mnmdBldngA': 'mnmdBldngA', 'mnmdOlAndN': 'mnmdOlAndN', 'mnmdOlAnd0': 'mnmdOlAnd0', 'mnmdRl': 'mnmdRl', 'mnmdRd': 'mnmdRd', 'mnmdRdAcr': 'mnmdRdAcr', 'mnmdTrnsms': 'mnmdTrnsms', 'mnmdTrnsm0': 'mnmdTrnsm0', 'pdUs': 'pdUs', 'pdUsAcr': 'pdUsAcr', 'slp': 'slp', 'slpAcr': 'slpAcr', 'wtlnds': 'wtlnds', 'wtlndsAcr': 'wtlndsAcr', 'bldblSmAcr': 'bldblSmAcr', 'bldblSmRel': 'bldblSmRel', 'acrgClc': 'acrgClc', 'acrgDdd': 'acrgDdd', 'cnssZp': 'cnssZp', 'CountyID': 'CountyID', 'cntyNm': 'cntyNm', 'elvtn': 'elvtn', 'LandUseCde': 'LandUseCde', 'LandUseNm': 'LandUseNm', 'lstUpdtd': 'lstUpdtd', 'lglDsc1': 'lglDsc1', 'mktVlBldg': 'mktVlBldg', 'mktVlLnd': 'mktVlLnd', 'mnId': 'mnId', 'mnNm': 'mnNm', 'pn': 'pn', 'rsId': 'rsId', 'rbstId': 'rbstId', 'schlDstId': 'schlDstId', 'acrgAdjcnt': 'acrgAdjcnt', 'mktVlTt': 'mktVlTt', 'bldngs': 'bldngs', 'ownrOccpd': 'ownrOccpd', 'lglDsc2': 'lglDsc2', 'slPrc': 'slPrc', 'trnsDt': 'trnsDt', 'uspsRsdntl': 'uspsRsdntl', 'altId1': 'altId1', 'sctnTwnshp': 'sctnTwnshp', });
lyr_SignedParcelslastupdated102523_13.set('fieldAliases', {'id': 'id', 'Parcel': 'Parcel', 'owner': 'owner', 'descrption': 'descrption', 'bldblRel': 'bldblRel', 'bldblAcr': 'bldblAcr', 'LotSize': 'LotSize', 'ownerAddr': 'ownerAddr', 'mailAddr': 'mailAddr', 'crtclHbttJ': 'crtclHbttJ', 'crtclHbtt0': 'crtclHbtt0', 'fldHgh': 'fldHgh', 'fldLw': 'fldLw', 'fld02': 'fld02', 'fld02Acr': 'fld02Acr', 'fld1': 'fld1', 'fld1Acr': 'fld1Acr', 'mnmdArprt': 'mnmdArprt', 'mnmdArprtA': 'mnmdArprtA', 'mnmdBldng': 'mnmdBldng', 'mnmdBldngA': 'mnmdBldngA', 'mnmdOlAndN': 'mnmdOlAndN', 'mnmdOlAnd0': 'mnmdOlAnd0', 'mnmdRl': 'mnmdRl', 'mnmdRd': 'mnmdRd', 'mnmdRdAcr': 'mnmdRdAcr', 'mnmdTrnsms': 'mnmdTrnsms', 'mnmdTrnsm0': 'mnmdTrnsm0', 'pdUs': 'pdUs', 'pdUsAcr': 'pdUsAcr', 'slp': 'slp', 'slpAcr': 'slpAcr', 'wtlnds': 'wtlnds', 'wtlndsAcr': 'wtlndsAcr', 'bldblSmAcr': 'bldblSmAcr', 'bldblSmRel': 'bldblSmRel', 'acrgClc': 'acrgClc', 'acrgDdd': 'acrgDdd', 'cnssZp': 'cnssZp', 'CountyID': 'CountyID', 'cntyNm': 'cntyNm', 'elvtn': 'elvtn', 'LandUseCde': 'LandUseCde', 'LandUseNm': 'LandUseNm', 'lstUpdtd': 'lstUpdtd', 'lglDsc1': 'lglDsc1', 'mktVlBldg': 'mktVlBldg', 'mktVlLnd': 'mktVlLnd', 'mnId': 'mnId', 'mnNm': 'mnNm', 'pn': 'pn', 'rsId': 'rsId', 'rbstId': 'rbstId', 'schlDstId': 'schlDstId', 'acrgAdjcnt': 'acrgAdjcnt', 'mktVlTt': 'mktVlTt', 'bldngs': 'bldngs', 'ownrOccpd': 'ownrOccpd', 'lglDsc2': 'lglDsc2', 'slPrc': 'slPrc', 'trnsDt': 'trnsDt', 'uspsRsdntl': 'uspsRsdntl', 'altId1': 'altId1', 'sctnTwnshp': 'sctnTwnshp', });
lyr_CoalClosureEnergyCommunities_4.set('fieldImages', {'objectid': 'TextEdit', 'affgeoid_tract_2020': 'TextEdit', 'fipstate_2020': 'TextEdit', 'fipcounty_2020': 'TextEdit', 'geoid_county_2020': 'TextEdit', 'fiptract_2020': 'TextEdit', 'geoid_tract_2020': 'TextEdit', 'mine_qual': 'TextEdit', 'generator_qual': 'TextEdit', 'neighbor_qual': 'TextEdit', 'state_name': 'TextEdit', 'county_name': 'TextEdit', 'censustract_name': 'TextEdit', 'mine_closure': 'TextEdit', 'generator_closure': 'TextEdit', 'adjacent_to_closure': 'TextEdit', 'tract_status': 'TextEdit', 'date_last_update': 'DateTime', 'dataset_version': 'TextEdit', 'record_added': 'DateTime', 'symbol': 'TextEdit', 'SHAPE__Length': 'TextEdit', 'SHAPE__Area': 'TextEdit', });
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'affgeoid_cty_2020': 'TextEdit', 'fipstate_2020': 'TextEdit', 'fipscty_2020': 'TextEdit', 'geoid_cty_2020': 'TextEdit', 'county_name_2020': 'TextEdit', 'state_name': 'TextEdit', 'msa_area_id': 'TextEdit', 'msa_area_name': 'TextEdit', 'ffe_ind_qual': 'TextEdit', 'ec_ind_qual': 'TextEdit', 'msa_qual': 'TextEdit', 'fee_qual_status': 'TextEdit', 'ec_qual_status': 'TextEdit', 'label_fee': 'TextEdit', 'label_ec': 'TextEdit', 'msa_nmsa_label': 'TextEdit', 'date_last_update': 'DateTime', 'dataset_version': 'TextEdit', 'date_record_added': 'DateTime', 'globalid': 'TextEdit', 'SHAPE__Length': 'TextEdit', 'SHAPE__Area': 'TextEdit', });
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'Persistent': 'TextEdit', 'Persiste_1': 'TextEdit', 'Persiste_2': 'TextEdit', 'Persiste_3': 'Range', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldImages', {'GEOID10': 'TextEdit', 'SF': 'TextEdit', 'CF': 'TextEdit', 'N_ENY': 'Range', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Category1Eligibility_8.set('fieldImages', {'CensusTrac': 'TextEdit', 'NMTCQualif': 'TextEdit', 'StateName': 'TextEdit', 'CountyName': 'TextEdit', 'Vintage': 'Range', 'CountyFIPS': 'TextEdit', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_WisconsinUtilities_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE': 'TextEdit', 'COLOR': 'Range', 'UTIL_LAB': 'TextEdit', 'Util_Type': 'TextEdit', 'PSC_ID': 'TextEdit', 'ADDRESS_1': 'TextEdit', 'ADDRESS_2': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'PHONE': 'TextEdit', 'WEB': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'DATA_DATE': 'DateTime', 'GIS_DATA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LABEL': 'TextEdit', 'FOE_Part': 'Range', });
lyr_Wisconsin_10.set('fieldImages', {'STATE': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', });
lyr_WisconsinCounties_11.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_SignedParcelslastupdated102523_12.set('fieldImages', {'id': 'TextEdit', 'Parcel': 'TextEdit', 'owner': 'TextEdit', 'descrption': 'TextEdit', 'bldblRel': 'TextEdit', 'bldblAcr': 'TextEdit', 'LotSize': 'TextEdit', 'ownerAddr': 'TextEdit', 'mailAddr': 'TextEdit', 'crtclHbttJ': 'TextEdit', 'crtclHbtt0': 'TextEdit', 'fldHgh': 'TextEdit', 'fldLw': 'TextEdit', 'fld02': 'TextEdit', 'fld02Acr': 'TextEdit', 'fld1': 'TextEdit', 'fld1Acr': 'TextEdit', 'mnmdArprt': 'TextEdit', 'mnmdArprtA': 'TextEdit', 'mnmdBldng': 'TextEdit', 'mnmdBldngA': 'TextEdit', 'mnmdOlAndN': 'TextEdit', 'mnmdOlAnd0': 'TextEdit', 'mnmdRl': 'TextEdit', 'mnmdRd': 'TextEdit', 'mnmdRdAcr': 'TextEdit', 'mnmdTrnsms': 'TextEdit', 'mnmdTrnsm0': 'TextEdit', 'pdUs': 'TextEdit', 'pdUsAcr': 'TextEdit', 'slp': 'TextEdit', 'slpAcr': 'TextEdit', 'wtlnds': 'TextEdit', 'wtlndsAcr': 'TextEdit', 'bldblSmAcr': 'TextEdit', 'bldblSmRel': 'TextEdit', 'acrgClc': 'TextEdit', 'acrgDdd': 'TextEdit', 'cnssZp': 'TextEdit', 'CountyID': 'TextEdit', 'cntyNm': 'TextEdit', 'elvtn': 'TextEdit', 'LandUseCde': 'TextEdit', 'LandUseNm': 'TextEdit', 'lstUpdtd': 'TextEdit', 'lglDsc1': 'TextEdit', 'mktVlBldg': 'TextEdit', 'mktVlLnd': 'TextEdit', 'mnId': 'TextEdit', 'mnNm': 'TextEdit', 'pn': 'TextEdit', 'rsId': 'TextEdit', 'rbstId': 'TextEdit', 'schlDstId': 'TextEdit', 'acrgAdjcnt': 'TextEdit', 'mktVlTt': 'TextEdit', 'bldngs': 'TextEdit', 'ownrOccpd': 'TextEdit', 'lglDsc2': 'TextEdit', 'slPrc': 'TextEdit', 'trnsDt': 'TextEdit', 'uspsRsdntl': 'TextEdit', 'altId1': 'TextEdit', 'sctnTwnshp': 'TextEdit', });
lyr_SignedParcelslastupdated102523_13.set('fieldImages', {'id': 'TextEdit', 'Parcel': 'TextEdit', 'owner': 'TextEdit', 'descrption': 'TextEdit', 'bldblRel': 'TextEdit', 'bldblAcr': 'TextEdit', 'LotSize': 'TextEdit', 'ownerAddr': 'TextEdit', 'mailAddr': 'TextEdit', 'crtclHbttJ': 'TextEdit', 'crtclHbtt0': 'TextEdit', 'fldHgh': 'TextEdit', 'fldLw': 'TextEdit', 'fld02': 'TextEdit', 'fld02Acr': 'TextEdit', 'fld1': 'TextEdit', 'fld1Acr': 'TextEdit', 'mnmdArprt': 'TextEdit', 'mnmdArprtA': 'TextEdit', 'mnmdBldng': 'TextEdit', 'mnmdBldngA': 'TextEdit', 'mnmdOlAndN': 'TextEdit', 'mnmdOlAnd0': 'TextEdit', 'mnmdRl': 'TextEdit', 'mnmdRd': 'TextEdit', 'mnmdRdAcr': 'TextEdit', 'mnmdTrnsms': 'TextEdit', 'mnmdTrnsm0': 'TextEdit', 'pdUs': 'TextEdit', 'pdUsAcr': 'TextEdit', 'slp': 'TextEdit', 'slpAcr': 'TextEdit', 'wtlnds': 'TextEdit', 'wtlndsAcr': 'TextEdit', 'bldblSmAcr': 'TextEdit', 'bldblSmRel': 'TextEdit', 'acrgClc': 'TextEdit', 'acrgDdd': 'TextEdit', 'cnssZp': 'TextEdit', 'CountyID': 'TextEdit', 'cntyNm': 'TextEdit', 'elvtn': 'TextEdit', 'LandUseCde': 'TextEdit', 'LandUseNm': 'TextEdit', 'lstUpdtd': 'TextEdit', 'lglDsc1': 'TextEdit', 'mktVlBldg': 'TextEdit', 'mktVlLnd': 'TextEdit', 'mnId': 'TextEdit', 'mnNm': 'TextEdit', 'pn': 'TextEdit', 'rsId': 'TextEdit', 'rbstId': 'TextEdit', 'schlDstId': 'TextEdit', 'acrgAdjcnt': 'TextEdit', 'mktVlTt': 'TextEdit', 'bldngs': 'TextEdit', 'ownrOccpd': 'TextEdit', 'lglDsc2': 'TextEdit', 'slPrc': 'TextEdit', 'trnsDt': 'TextEdit', 'uspsRsdntl': 'TextEdit', 'altId1': 'TextEdit', 'sctnTwnshp': 'TextEdit', });
lyr_CoalClosureEnergyCommunities_4.set('fieldLabels', {});
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldLabels', {});
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldLabels', {});
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldLabels', {});
lyr_Category1Eligibility_8.set('fieldLabels', {});
lyr_WisconsinUtilities_9.set('fieldLabels', {'OBJECTID': 'no label', 'CODE': 'no label', 'COLOR': 'no label', 'UTIL_LAB': 'no label', 'Util_Type': 'no label', 'PSC_ID': 'no label', 'ADDRESS_1': 'no label', 'ADDRESS_2': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'PHONE': 'no label', 'WEB': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'DATA_DATE': 'no label', 'GIS_DATA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'LABEL': 'no label', 'FOE_Part': 'no label', });
lyr_Wisconsin_10.set('fieldLabels', {'STATE': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'LON': 'no label', 'LAT': 'no label', });
lyr_WisconsinCounties_11.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'header label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_SignedParcelslastupdated102523_12.set('fieldLabels', {'id': 'no label', 'Parcel': 'header label', 'owner': 'no label', 'descrption': 'no label', 'bldblRel': 'no label', 'bldblAcr': 'header label', 'LotSize': 'inline label', 'ownerAddr': 'no label', 'mailAddr': 'no label', 'crtclHbttJ': 'no label', 'crtclHbtt0': 'no label', 'fldHgh': 'no label', 'fldLw': 'no label', 'fld02': 'no label', 'fld02Acr': 'no label', 'fld1': 'no label', 'fld1Acr': 'no label', 'mnmdArprt': 'no label', 'mnmdArprtA': 'no label', 'mnmdBldng': 'no label', 'mnmdBldngA': 'no label', 'mnmdOlAndN': 'no label', 'mnmdOlAnd0': 'no label', 'mnmdRl': 'no label', 'mnmdRd': 'no label', 'mnmdRdAcr': 'no label', 'mnmdTrnsms': 'no label', 'mnmdTrnsm0': 'no label', 'pdUs': 'no label', 'pdUsAcr': 'no label', 'slp': 'no label', 'slpAcr': 'no label', 'wtlnds': 'no label', 'wtlndsAcr': 'no label', 'bldblSmAcr': 'no label', 'bldblSmRel': 'no label', 'acrgClc': 'no label', 'acrgDdd': 'no label', 'cnssZp': 'no label', 'CountyID': 'no label', 'cntyNm': 'no label', 'elvtn': 'no label', 'LandUseCde': 'no label', 'LandUseNm': 'no label', 'lstUpdtd': 'no label', 'lglDsc1': 'no label', 'mktVlBldg': 'no label', 'mktVlLnd': 'no label', 'mnId': 'no label', 'mnNm': 'no label', 'pn': 'no label', 'rsId': 'no label', 'rbstId': 'no label', 'schlDstId': 'no label', 'acrgAdjcnt': 'no label', 'mktVlTt': 'no label', 'bldngs': 'no label', 'ownrOccpd': 'no label', 'lglDsc2': 'no label', 'slPrc': 'no label', 'trnsDt': 'no label', 'uspsRsdntl': 'no label', 'altId1': 'no label', 'sctnTwnshp': 'no label', });
lyr_SignedParcelslastupdated102523_13.set('fieldLabels', {'id': 'no label', 'Parcel': 'header label', 'owner': 'inline label', 'descrption': 'no label', 'bldblRel': 'no label', 'bldblAcr': 'no label', 'LotSize': 'no label', 'ownerAddr': 'no label', 'mailAddr': 'no label', 'crtclHbttJ': 'no label', 'crtclHbtt0': 'no label', 'fldHgh': 'no label', 'fldLw': 'no label', 'fld02': 'no label', 'fld02Acr': 'no label', 'fld1': 'no label', 'fld1Acr': 'no label', 'mnmdArprt': 'no label', 'mnmdArprtA': 'no label', 'mnmdBldng': 'no label', 'mnmdBldngA': 'no label', 'mnmdOlAndN': 'no label', 'mnmdOlAnd0': 'no label', 'mnmdRl': 'no label', 'mnmdRd': 'no label', 'mnmdRdAcr': 'no label', 'mnmdTrnsms': 'no label', 'mnmdTrnsm0': 'no label', 'pdUs': 'no label', 'pdUsAcr': 'no label', 'slp': 'no label', 'slpAcr': 'no label', 'wtlnds': 'no label', 'wtlndsAcr': 'no label', 'bldblSmAcr': 'no label', 'bldblSmRel': 'no label', 'acrgClc': 'no label', 'acrgDdd': 'no label', 'cnssZp': 'no label', 'CountyID': 'no label', 'cntyNm': 'no label', 'elvtn': 'no label', 'LandUseCde': 'no label', 'LandUseNm': 'no label', 'lstUpdtd': 'no label', 'lglDsc1': 'no label', 'mktVlBldg': 'no label', 'mktVlLnd': 'no label', 'mnId': 'no label', 'mnNm': 'no label', 'pn': 'no label', 'rsId': 'no label', 'rbstId': 'no label', 'schlDstId': 'no label', 'acrgAdjcnt': 'no label', 'mktVlTt': 'no label', 'bldngs': 'no label', 'ownrOccpd': 'no label', 'lglDsc2': 'no label', 'slPrc': 'no label', 'trnsDt': 'no label', 'uspsRsdntl': 'no label', 'altId1': 'no label', 'sctnTwnshp': 'no label', });
lyr_SignedParcelslastupdated102523_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});