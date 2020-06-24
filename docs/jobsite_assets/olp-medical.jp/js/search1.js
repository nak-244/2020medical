$(function() {
  var href = "https://olp-medical.jp/index.cfm";
  $('.srh_ken_param,.srh_city_param,.srh_jobtype_child_param,.srh_shift_param,.srh_room_type_param,.sfw,.sfw1').on('change', function() {
    var srh_ken_param = $('.srh_ken_param').map(function() {
      return $(this).val();
    }).get();
    var srh_city_param = $('.srh_city_param:checked').map(function() {
      return $(this).val();
    }).get();
    var srh_jobtype_child_param = $('.srh_jobtype_child_param:checked').map(function() {
      return $(this).val();
    }).get();
    var srh_shift_param = $('.srh_shift_param:checked').map(function() {
      return $(this).val();
    }).get();
    var srh_room_type_param = $('.srh_room_type_param:checked').map(function() {
      return $(this).val();
    }).get();
    var sfw = $('.sfw:checked').map(function() {
      return $(this).val();
    }).get();
    var sfw1 = $('.sfw1').map(function() {
      return $(this).val();
    }).get();

    $('#test').prop('href', href + "?fuseaction=job.joblist&srh_ken_param=" + srh_ken_param + "&srh_city_param=" + srh_city_param + "&srh_jobtype_child_param=" + srh_jobtype_child_param + "&srh_shift_param=" + srh_shift_param + "&srh_room_type_param=" + srh_room_type_param + "&sfw=" + sfw + sfw1);
  });
});
