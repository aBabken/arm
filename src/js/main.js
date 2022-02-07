import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import $ from 'jquery';
import 'select2';
import 'select2/src/scss/core.scss';



$(() => {
  $('.lang-selector').select2({
    minimumResultsForSearch: -1,
    width: '100%',
    height: '100%'
    });
});
