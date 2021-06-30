require(['d3'], function(d3) {

    window._saveMeta = _.debounce(function(chart_id, meta) {
        console.log('save', meta);
        meta.attribution = meta.attribution ? 1:0;
        $.ajax({
            url: '/api/plugin/river/meta/'+chart.get('id'),
            type: 'PUT',
            data: JSON.stringify(meta),
            success: function() {
                console.log('meta saved');
            }
        });
    }, 500);

    window._saveTags = _.debounce(function(chart_id, tags) {
        console.log('save tags', tags);
        $.ajax({
            url: '/api/plugin/river/tags/'+chart.get('id'),
            type: 'PUT',
            data: JSON.stringify(tags),
            success: function() {
                console.log('meta saved');
            }
        });
    }, 500);

});
