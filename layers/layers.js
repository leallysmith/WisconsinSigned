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
                popuplayertitle: "Coal Closure Energy Communities",
                interactive: false,
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
                popuplayertitle: "MSA/Non-MSAs that are Energy Communities",
                interactive: false,
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
                popuplayertitle: "Additional Selection Criteria Geographic Option 2 Persistent Poverty County",
                interactive: false,
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
                popuplayertitle: "Additional Selection Criteria Geographic Option 1 CEJST Energy",
                interactive: false,
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
                popuplayertitle: "Category 1 Eligibility",
                interactive: false,
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
                popuplayertitle: "Wisconsin Utilities",
                interactive: false,
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
                popuplayertitle: "Wisconsin",
                interactive: false,
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
                popuplayertitle: "Wisconsin Counties",
                interactive: true,
                title: '<img src="styles/legend/WisconsinCounties_11.png" /> Wisconsin Counties'
            });
var format_CountyNames_12 = new ol.format.GeoJSON();
var features_CountyNames_12 = format_CountyNames_12.readFeatures(json_CountyNames_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyNames_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyNames_12.addFeatures(features_CountyNames_12);
var lyr_CountyNames_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CountyNames_12, 
                style: style_CountyNames_12,
                popuplayertitle: "County Names",
                interactive: false,
                title: '<img src="styles/legend/CountyNames_12.png" /> County Names'
            });
var format_SignedParcelslastupdated21224_13 = new ol.format.GeoJSON();
var features_SignedParcelslastupdated21224_13 = format_SignedParcelslastupdated21224_13.readFeatures(json_SignedParcelslastupdated21224_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignedParcelslastupdated21224_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignedParcelslastupdated21224_13.addFeatures(features_SignedParcelslastupdated21224_13);cluster_SignedParcelslastupdated21224_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SignedParcelslastupdated21224_13
});
var lyr_SignedParcelslastupdated21224_13 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SignedParcelslastupdated21224_13, 
                style: style_SignedParcelslastupdated21224_13,
                popuplayertitle: "Signed Parcels (last updated 2/12/24)",
                interactive: false,
                title: '<img src="styles/legend/SignedParcelslastupdated21224_13.png" /> Signed Parcels (last updated 3/1/24)'
            });
var format_SignedParcelNameslastupdated21224_14 = new ol.format.GeoJSON();
var features_SignedParcelNameslastupdated21224_14 = format_SignedParcelNameslastupdated21224_14.readFeatures(json_SignedParcelNameslastupdated21224_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignedParcelNameslastupdated21224_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignedParcelNameslastupdated21224_14.addFeatures(features_SignedParcelNameslastupdated21224_14);
var lyr_SignedParcelNameslastupdated21224_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SignedParcelNameslastupdated21224_14, 
                style: style_SignedParcelNameslastupdated21224_14,
                popuplayertitle: "Signed Parcel Names (last updated 2/12/24)",
                interactive: true,
                title: '<img src="styles/legend/SignedParcelNameslastupdated21224_14.png" /> Signed Parcel Names (last updated 3/1/24)'
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

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleImagery_1.setVisible(true);lyr_ESRIGray_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_CoalClosureEnergyCommunities_4.setVisible(true);lyr_MSANonMSAsthatareEnergyCommunities_5.setVisible(true);lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.setVisible(true);lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.setVisible(true);lyr_Category1Eligibility_8.setVisible(true);lyr_WisconsinUtilities_9.setVisible(true);lyr_Wisconsin_10.setVisible(true);lyr_WisconsinCounties_11.setVisible(true);lyr_CountyNames_12.setVisible(false);lyr_SignedParcelslastupdated21224_13.setVisible(true);lyr_SignedParcelNameslastupdated21224_14.setVisible(false);
var layersList = [group_Basemaps,group_EnergyCommunities,group_48eLowIncomeCredits,lyr_WisconsinUtilities_9,lyr_Wisconsin_10,lyr_WisconsinCounties_11,lyr_CountyNames_12,lyr_SignedParcelslastupdated21224_13,lyr_SignedParcelNameslastupdated21224_14];
lyr_CoalClosureEnergyCommunities_4.set('fieldAliases', {'objectid': 'OBJECTID', 'affgeoid_tract_2020': 'AFFGEOID_Tract_2020', 'fipstate_2020': 'fipstate_2020', 'fipcounty_2020': 'fipcounty_2020', 'geoid_county_2020': 'geoid_county_2020', 'fiptract_2020': 'fiptract_2020', 'geoid_tract_2020': 'geoid_tract_2020', 'mine_qual': 'Mine_Qual', 'generator_qual': 'Generator_Qual', 'neighbor_qual': 'Neighbor_Qual', 'state_name': 'State_Name', 'county_name': 'County_Name', 'censustract_name': 'CensusTract_Name', 'mine_closure': 'Mine_Closure', 'generator_closure': 'Generator_Closure', 'adjacent_to_closure': 'Adjacent_to_Closure', 'tract_status': 'Tract_Status', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'record_added': 'record_added', 'symbol': 'Symbol', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldAliases', {'objectid_1': 'OBJECTID_1', 'objectid': 'ObjectID', 'affgeoid_cty_2020': 'AFFGEOID_COUNTY_2020', 'fipstate_2020': 'fipstate_2020', 'fipscty_2020': 'fipscounty_2020', 'geoid_cty_2020': 'geoid_county_2020', 'county_name_2020': 'county_name_2020', 'state_name': 'state_name', 'msa_area_id': 'MSA_area_ID_2020', 'msa_area_name': 'MSA_area_name_2020', 'ffe_ind_qual': 'ffe_ind_qual', 'ec_ind_qual': 'ec_ind_qual', 'msa_qual': 'msa_qual', 'fee_qual_status': 'FEE_qual_status', 'ec_qual_status': 'EC_qual_status', 'label_fee': 'Label_FEE', 'label_ec': 'Label_EC', 'msa_nmsa_label': 'Label_MSA_NMSA', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'date_record_added': 'date_record_added', 'globalid': 'globalid', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'Persistent': 'Persistent', 'Persiste_1': 'Persiste_1', 'Persiste_2': 'Persiste_2', 'Persiste_3': 'Persiste_3', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldAliases', {'GEOID10': 'GEOID10', 'SF': 'SF', 'CF': 'CF', 'N_ENY': 'N_ENY', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Category1Eligibility_8.set('fieldAliases', {'CensusTrac': 'CensusTrac', 'NMTCQualif': 'NMTCQualif', 'StateName': 'StateName', 'CountyName': 'CountyName', 'Vintage': 'Vintage', 'CountyFIPS': 'CountyFIPS', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_WisconsinUtilities_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE': 'CODE', 'COLOR': 'COLOR', 'UTIL_LAB': 'Utility Name', 'Util_Type': 'Utility Type', 'PSC_ID': 'PSC ID', 'ADDRESS_1': 'Mail', 'ADDRESS_2': 'Street', 'CITY': 'City', 'STATE': 'State', 'ZIP': 'ZIP', 'PHONE': 'Phone', 'WEB': 'Website', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'DATA_DATE': 'DATA_DATE', 'GIS_DATA': 'GIS_DATA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LABEL': 'Utility Name', 'FOE_Part': 'FOE_Part', });
lyr_Wisconsin_10.set('fieldAliases', {'STATE': 'STATE', 'NAME': 'NAME', 'FIPS': 'FIPS', 'LON': 'LON', 'LAT': 'LAT', });
lyr_WisconsinCounties_11.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_CountyNames_12.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_SignedParcelslastupdated21224_13.set('fieldAliases', {'Opportunity Name': 'Opportunity Name', 'Account Name': 'Account Name', 'Lease Area (Acres or Square Feet)': 'Lease Area (Acres or Square Feet)', 'AO Link': 'AO Link', 'Site Lat/Long Coordinates (Latitude)': 'Site Lat/Long Coordinates (Latitude)', 'Site Lat/Long Coordinates (Longitude)': 'Site Lat/Long Coordinates (Longitude)', 'Market': 'Market', 'Utility': 'Utility', });
lyr_SignedParcelNameslastupdated21224_14.set('fieldAliases', {'Opportunity Name': 'Opportunity Name', 'Account Name': 'Account Name', 'Lease Area (Acres or Square Feet)': 'Lease Area (Acres or Square Feet)', 'AO Link': 'AO Link', 'Site Lat/Long Coordinates (Latitude)': 'Site Lat/Long Coordinates (Latitude)', 'Site Lat/Long Coordinates (Longitude)': 'Site Lat/Long Coordinates (Longitude)', 'Market': 'Market', 'Utility': 'Utility', });
lyr_CoalClosureEnergyCommunities_4.set('fieldImages', {'objectid': 'TextEdit', 'affgeoid_tract_2020': 'TextEdit', 'fipstate_2020': 'TextEdit', 'fipcounty_2020': 'TextEdit', 'geoid_county_2020': 'TextEdit', 'fiptract_2020': 'TextEdit', 'geoid_tract_2020': 'TextEdit', 'mine_qual': 'TextEdit', 'generator_qual': 'TextEdit', 'neighbor_qual': 'TextEdit', 'state_name': 'TextEdit', 'county_name': 'TextEdit', 'censustract_name': 'TextEdit', 'mine_closure': 'TextEdit', 'generator_closure': 'TextEdit', 'adjacent_to_closure': 'TextEdit', 'tract_status': 'TextEdit', 'date_last_update': 'DateTime', 'dataset_version': 'TextEdit', 'record_added': 'DateTime', 'symbol': 'TextEdit', 'SHAPE__Length': 'TextEdit', 'SHAPE__Area': 'TextEdit', });
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'affgeoid_cty_2020': 'TextEdit', 'fipstate_2020': 'TextEdit', 'fipscty_2020': 'TextEdit', 'geoid_cty_2020': 'TextEdit', 'county_name_2020': 'TextEdit', 'state_name': 'TextEdit', 'msa_area_id': 'TextEdit', 'msa_area_name': 'TextEdit', 'ffe_ind_qual': 'TextEdit', 'ec_ind_qual': 'TextEdit', 'msa_qual': 'TextEdit', 'fee_qual_status': 'TextEdit', 'ec_qual_status': 'TextEdit', 'label_fee': 'TextEdit', 'label_ec': 'TextEdit', 'msa_nmsa_label': 'TextEdit', 'date_last_update': 'DateTime', 'dataset_version': 'TextEdit', 'date_record_added': 'DateTime', 'globalid': 'TextEdit', 'SHAPE__Length': 'TextEdit', 'SHAPE__Area': 'TextEdit', });
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'Persistent': 'TextEdit', 'Persiste_1': 'TextEdit', 'Persiste_2': 'TextEdit', 'Persiste_3': 'Range', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldImages', {'GEOID10': 'TextEdit', 'SF': 'TextEdit', 'CF': 'TextEdit', 'N_ENY': 'Range', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Category1Eligibility_8.set('fieldImages', {'CensusTrac': 'TextEdit', 'NMTCQualif': 'TextEdit', 'StateName': 'TextEdit', 'CountyName': 'TextEdit', 'Vintage': 'Range', 'CountyFIPS': 'TextEdit', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_WisconsinUtilities_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE': 'TextEdit', 'COLOR': 'Range', 'UTIL_LAB': 'TextEdit', 'Util_Type': 'TextEdit', 'PSC_ID': 'TextEdit', 'ADDRESS_1': 'TextEdit', 'ADDRESS_2': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'PHONE': 'TextEdit', 'WEB': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'DATA_DATE': 'DateTime', 'GIS_DATA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LABEL': 'TextEdit', 'FOE_Part': 'Range', });
lyr_Wisconsin_10.set('fieldImages', {'STATE': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', });
lyr_WisconsinCounties_11.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_CountyNames_12.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_SignedParcelslastupdated21224_13.set('fieldImages', {'Opportunity Name': 'TextEdit', 'Account Name': 'TextEdit', 'Lease Area (Acres or Square Feet)': 'TextEdit', 'AO Link': 'TextEdit', 'Site Lat/Long Coordinates (Latitude)': 'TextEdit', 'Site Lat/Long Coordinates (Longitude)': 'TextEdit', 'Market': 'TextEdit', 'Utility': 'TextEdit', });
lyr_SignedParcelNameslastupdated21224_14.set('fieldImages', {'Opportunity Name': 'TextEdit', 'Account Name': 'TextEdit', 'Lease Area (Acres or Square Feet)': 'TextEdit', 'AO Link': 'TextEdit', 'Site Lat/Long Coordinates (Latitude)': 'TextEdit', 'Site Lat/Long Coordinates (Longitude)': 'TextEdit', 'Market': 'TextEdit', 'Utility': 'TextEdit', });
lyr_CoalClosureEnergyCommunities_4.set('fieldLabels', {});
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldLabels', {});
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldLabels', {});
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldLabels', {});
lyr_Category1Eligibility_8.set('fieldLabels', {});
lyr_WisconsinUtilities_9.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'CODE': 'header label - visible with data', 'COLOR': 'header label - visible with data', 'UTIL_LAB': 'header label - visible with data', 'Util_Type': 'header label - visible with data', 'PSC_ID': 'header label - visible with data', 'ADDRESS_1': 'header label - visible with data', 'ADDRESS_2': 'header label - visible with data', 'CITY': 'header label - visible with data', 'STATE': 'header label - visible with data', 'ZIP': 'header label - visible with data', 'PHONE': 'header label - visible with data', 'WEB': 'header label - visible with data', 'AREA': 'header label - visible with data', 'PERIMETER': 'header label - visible with data', 'DATA_DATE': 'header label - visible with data', 'GIS_DATA': 'header label - visible with data', 'Shape_Leng': 'header label - visible with data', 'Shape_Area': 'header label - visible with data', 'LABEL': 'header label - visible with data', 'FOE_Part': 'header label - visible with data', });
lyr_Wisconsin_10.set('fieldLabels', {'STATE': 'header label - visible with data', 'NAME': 'header label - visible with data', 'FIPS': 'header label - visible with data', 'LON': 'header label - visible with data', 'LAT': 'header label - visible with data', });
lyr_WisconsinCounties_11.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'header label - visible with data', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_CountyNames_12.set('fieldLabels', {'STATEFP': 'header label - visible with data', 'COUNTYFP': 'header label - visible with data', 'COUNTYNS': 'header label - visible with data', 'GEOID': 'header label - visible with data', 'NAME': 'header label - visible with data', 'NAMELSAD': 'header label - visible with data', 'LSAD': 'header label - visible with data', 'CLASSFP': 'header label - visible with data', 'MTFCC': 'header label - visible with data', 'CSAFP': 'header label - visible with data', 'CBSAFP': 'header label - visible with data', 'METDIVFP': 'header label - visible with data', 'FUNCSTAT': 'header label - visible with data', 'ALAND': 'header label - visible with data', 'AWATER': 'header label - visible with data', 'INTPTLAT': 'header label - visible with data', 'INTPTLON': 'header label - visible with data', });
lyr_SignedParcelslastupdated21224_13.set('fieldLabels', {'Opportunity Name': 'header label - visible with data', 'Account Name': 'header label - visible with data', 'Lease Area (Acres or Square Feet)': 'header label - visible with data', 'AO Link': 'header label - visible with data', 'Site Lat/Long Coordinates (Latitude)': 'header label - visible with data', 'Site Lat/Long Coordinates (Longitude)': 'header label - visible with data', 'Market': 'header label - visible with data', 'Utility': 'header label - visible with data', });
lyr_SignedParcelNameslastupdated21224_14.set('fieldLabels', {'Opportunity Name': 'header label - visible with data', 'Account Name': 'header label - visible with data', 'Lease Area (Acres or Square Feet)': 'header label - visible with data', 'AO Link': 'header label - visible with data', 'Site Lat/Long Coordinates (Latitude)': 'header label - visible with data', 'Site Lat/Long Coordinates (Longitude)': 'header label - visible with data', 'Market': 'header label - visible with data', 'Utility': 'header label - visible with data', });
lyr_SignedParcelNameslastupdated21224_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});