var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_districtsvollstndig_1 = new ol.format.GeoJSON();
var features_districtsvollstndig_1 = format_districtsvollstndig_1.readFeatures(json_districtsvollstndig_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_districtsvollstndig_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_districtsvollstndig_1.addFeatures(features_districtsvollstndig_1);
var lyr_districtsvollstndig_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_districtsvollstndig_1, 
                style: style_districtsvollstndig_1,
                popuplayertitle: 'districts-vollständig',
                interactive: false,
                title: '<img src="styles/legend/districtsvollstndig_1.png" /> districts-vollständig'
            });
var format_Pfadepfade_2 = new ol.format.GeoJSON();
var features_Pfadepfade_2 = format_Pfadepfade_2.readFeatures(json_Pfadepfade_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pfadepfade_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pfadepfade_2.addFeatures(features_Pfadepfade_2);
var lyr_Pfadepfade_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pfadepfade_2, 
                style: style_Pfadepfade_2,
                popuplayertitle: 'Pfade — pfade',
                interactive: false,
                title: '<img src="styles/legend/Pfadepfade_2.png" /> Pfade — pfade'
            });

lyr_OSMStandard_0.setVisible(true);lyr_districtsvollstndig_1.setVisible(true);lyr_Pfadepfade_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_districtsvollstndig_1,lyr_Pfadepfade_2];
lyr_districtsvollstndig_1.set('fieldAliases', {'fid': 'fid', 'ART': 'ART', 'name': 'name', 'KN': 'KN', 'STAND': 'STAND', 'KOORD_GEN': 'KOORD_GEN', 'KOORD_ORI': 'KOORD_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'AvgLevels': 'AvgLevels', });
lyr_Pfadepfade_2.set('fieldAliases', {'fid': 'fid', 'path': 'path', 'begin': 'begin', 'end': 'end', });
lyr_districtsvollstndig_1.set('fieldImages', {'fid': 'TextEdit', 'ART': 'TextEdit', 'name': 'TextEdit', 'KN': 'TextEdit', 'STAND': 'DateTime', 'KOORD_GEN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'AvgLevels': 'TextEdit', });
lyr_Pfadepfade_2.set('fieldImages', {'fid': 'TextEdit', 'path': 'TextEdit', 'begin': 'DateTime', 'end': 'DateTime', });
lyr_districtsvollstndig_1.set('fieldLabels', {'fid': 'no label', 'ART': 'no label', 'name': 'no label', 'KN': 'no label', 'STAND': 'no label', 'KOORD_GEN': 'no label', 'KOORD_ORI': 'no label', 'LAENGE_GEN': 'no label', 'LAENGE_ORI': 'no label', 'AvgLevels': 'no label', });
lyr_Pfadepfade_2.set('fieldLabels', {'fid': 'no label', 'path': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_Pfadepfade_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});