requirejs.config({
  paths: {
    'materialize': 'materialize',
    'jquery': 'jquery-2.1.1.min',
    'velocity': 'velocity.min',
    'hammerjs': 'hammer.min',
    'jquery-hammer': 'jquery-hammer'
  },
  shim: {
    'materialize': {
      deps: ['jquery.hammer', 'jquery', 'hammerjs', 'velocity']
    }
  }
});

require([
  'jquery', 'app', 'materialize'
], function($){
  $(function() {
    $('.slider').slider({full_width: true});
    $('.button-collapse').sideNav();
  });
});