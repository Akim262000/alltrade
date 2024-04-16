// $('#multiCollapse1').on('show.bs.collapse', function () {
//   $('#multiCollapse').collapse('hide')
// });

var multiCollapse1 = document.getElementById('multiCollapse1')
var multiCollapse2 = document.getElementById('multiCollapse2')
var multiCollapse3 = document.getElementById('multiCollapse3')
var multiCollapse4 = document.getElementById('multiCollapse4')
multiCollapse1.addEventListener('hidden.bs.collapse', function () {
  multiCollapse2.collapse('hide')
});