$(function() {
  $('#nav03,#nav03_select').mouseover(function() {
    $('#nav03_list_box').show();
  }).mouseout(function() {
    $('#nav03_list_box').hide();
  });
  $('#nav03_list_box').mouseover(function() {
    $('#nav03_list_box').show();
  }).mouseout(function() {
    $('#nav03_list_box').hide();
  });
});

function submitType(val) {
  var url = "/search/" + val + "/";
  location.href = url;
}