var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_districtsvollstndig1districtsvollstndig_1 = new ol.format.GeoJSON();
var features_districtsvollstndig1districtsvollstndig_1 = format_districtsvollstndig1districtsvollstndig_1.readFeatures(json_districtsvollstndig1districtsvollstndig_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_districtsvollstndig1districtsvollstndig_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_districtsvollstndig1districtsvollstndig_1.addFeatures(features_districtsvollstndig1districtsvollstndig_1);
var lyr_districtsvollstndig1districtsvollstndig_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_districtsvollstndig1districtsvollstndig_1, 
                style: style_districtsvollstndig1districtsvollstndig_1,
                popuplayertitle: 'districts-vollständig (1) — districts-vollständig',
                interactive: false,
                title: '<img src="styles/legend/districtsvollstndig1districtsvollstndig_1.png" /> districts-vollständig (1) — districts-vollständig'
            });
var format_Ergebniss_19_03_2026lines_2 = new ol.format.GeoJSON();
var features_Ergebniss_19_03_2026lines_2 = format_Ergebniss_19_03_2026lines_2.readFeatures(json_Ergebniss_19_03_2026lines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ergebniss_19_03_2026lines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ergebniss_19_03_2026lines_2.addFeatures(features_Ergebniss_19_03_2026lines_2);
var lyr_Ergebniss_19_03_2026lines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ergebniss_19_03_2026lines_2, 
                style: style_Ergebniss_19_03_2026lines_2,
                popuplayertitle: 'Ergebniss_19_03_2026 — lines',
                interactive: false,
                title: '<img src="styles/legend/Ergebniss_19_03_2026lines_2.png" /> Ergebniss_19_03_2026 — lines'
            });

lyr_OSMStandard_0.setVisible(true);lyr_districtsvollstndig1districtsvollstndig_1.setVisible(true);lyr_Ergebniss_19_03_2026lines_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_districtsvollstndig1districtsvollstndig_1,lyr_Ergebniss_19_03_2026lines_2];
lyr_districtsvollstndig1districtsvollstndig_1.set('fieldAliases', {'fid': 'fid', 'ART': 'ART', 'name': 'name', 'KN': 'KN', 'STAND': 'STAND', 'KOORD_GEN': 'KOORD_GEN', 'KOORD_ORI': 'KOORD_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'AvgLevels': 'AvgLevels', });
lyr_Ergebniss_19_03_2026lines_2.set('fieldAliases', {'fid': 'fid', 'source_gpkg': 'source_gpkg', 'gpkg_id': 'gpkg_id', 'point_count': 'point_count', 'line_length_m': 'line_length_m', 'original_point_count': 'original_point_count', 'filtered_point_count': 'filtered_point_count', 'start_time': 'start_time', 'end_time': 'end_time', 'original_crs': 'original_crs', });
lyr_districtsvollstndig1districtsvollstndig_1.set('fieldImages', {'fid': 'TextEdit', 'ART': 'TextEdit', 'name': 'TextEdit', 'KN': 'TextEdit', 'STAND': 'DateTime', 'KOORD_GEN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'AvgLevels': 'TextEdit', });
lyr_Ergebniss_19_03_2026lines_2.set('fieldImages', {'fid': 'TextEdit', 'source_gpkg': 'TextEdit', 'gpkg_id': 'TextEdit', 'point_count': 'TextEdit', 'line_length_m': 'TextEdit', 'original_point_count': 'TextEdit', 'filtered_point_count': 'TextEdit', 'start_time': 'DateTime', 'end_time': 'DateTime', 'original_crs': 'TextEdit', });
lyr_districtsvollstndig1districtsvollstndig_1.set('fieldLabels', {'fid': 'no label', 'ART': 'no label', 'name': 'no label', 'KN': 'no label', 'STAND': 'no label', 'KOORD_GEN': 'no label', 'KOORD_ORI': 'no label', 'LAENGE_GEN': 'no label', 'LAENGE_ORI': 'no label', 'AvgLevels': 'no label', });
lyr_Ergebniss_19_03_2026lines_2.set('fieldLabels', {'fid': 'no label', 'source_gpkg': 'no label', 'gpkg_id': 'no label', 'point_count': 'no label', 'line_length_m': 'no label', 'original_point_count': 'no label', 'filtered_point_count': 'no label', 'start_time': 'no label', 'end_time': 'no label', 'original_crs': 'no label', });
lyr_Ergebniss_19_03_2026lines_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});