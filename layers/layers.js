var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_umrisse_1 = new ol.format.GeoJSON();
var features_umrisse_1 = format_umrisse_1.readFeatures(json_umrisse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_umrisse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_umrisse_1.addFeatures(features_umrisse_1);
var lyr_umrisse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_umrisse_1, 
                style: style_umrisse_1,
                popuplayertitle: 'umrisse',
                interactive: false,
                title: '<img src="styles/legend/umrisse_1.png" /> umrisse'
            });
var format_Stand_14_04_2026_2 = new ol.format.GeoJSON();
var features_Stand_14_04_2026_2 = format_Stand_14_04_2026_2.readFeatures(json_Stand_14_04_2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stand_14_04_2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stand_14_04_2026_2.addFeatures(features_Stand_14_04_2026_2);
var lyr_Stand_14_04_2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stand_14_04_2026_2, 
                style: style_Stand_14_04_2026_2,
                popuplayertitle: 'Stand_14_04_2026',
                interactive: false,
                title: '<img src="styles/legend/Stand_14_04_2026_2.png" /> Stand_14_04_2026'
            });

lyr_OSMStandard_0.setVisible(true);lyr_umrisse_1.setVisible(true);lyr_Stand_14_04_2026_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_umrisse_1,lyr_Stand_14_04_2026_2];
lyr_umrisse_1.set('fieldAliases', {'fid': 'fid', 'ART': 'ART', 'name': 'name', 'KN': 'KN', 'STAND': 'STAND', 'KOORD_GEN': 'KOORD_GEN', 'KOORD_ORI': 'KOORD_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'AvgLevels': 'AvgLevels', });
lyr_Stand_14_04_2026_2.set('fieldAliases', {'fid': 'fid', 'source_gpkg': 'source_gpkg', 'gpkg_id': 'gpkg_id', 'point_count': 'point_count', 'line_length_m': 'line_length_m', 'segment_count': 'segment_count', 'gap_count': 'gap_count', 'original_point_count': 'original_point_count', 'filtered_point_count': 'filtered_point_count', 'start_time': 'start_time', 'end_time': 'end_time', 'original_crs': 'original_crs', });
lyr_umrisse_1.set('fieldImages', {'fid': 'TextEdit', 'ART': 'TextEdit', 'name': 'TextEdit', 'KN': 'TextEdit', 'STAND': 'DateTime', 'KOORD_GEN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'AvgLevels': 'TextEdit', });
lyr_Stand_14_04_2026_2.set('fieldImages', {'fid': 'TextEdit', 'source_gpkg': 'TextEdit', 'gpkg_id': 'TextEdit', 'point_count': 'TextEdit', 'line_length_m': 'TextEdit', 'segment_count': 'TextEdit', 'gap_count': 'TextEdit', 'original_point_count': 'TextEdit', 'filtered_point_count': 'TextEdit', 'start_time': 'DateTime', 'end_time': 'DateTime', 'original_crs': 'TextEdit', });
lyr_umrisse_1.set('fieldLabels', {'fid': 'no label', 'ART': 'no label', 'name': 'no label', 'KN': 'no label', 'STAND': 'no label', 'KOORD_GEN': 'no label', 'KOORD_ORI': 'no label', 'LAENGE_GEN': 'no label', 'LAENGE_ORI': 'no label', 'AvgLevels': 'no label', });
lyr_Stand_14_04_2026_2.set('fieldLabels', {'fid': 'no label', 'source_gpkg': 'no label', 'gpkg_id': 'no label', 'point_count': 'no label', 'line_length_m': 'no label', 'segment_count': 'no label', 'gap_count': 'no label', 'original_point_count': 'no label', 'filtered_point_count': 'no label', 'start_time': 'no label', 'end_time': 'no label', 'original_crs': 'no label', });
lyr_Stand_14_04_2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});