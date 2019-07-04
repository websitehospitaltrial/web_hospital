$("#title_head").click(function () {
    $("#five_sense_organs").css("display","none");
    $("#oral ").css("display","none");
    $("#upper_limb").css("display","none");
    $("#inner_organ").css("display","none");
    $("#common").css("display","none");
    $("#lower_limb").css("display","none");
    $("#none").css("display","none");//显示div
    $("#head_part").css("display","block");
});

$("#title_five").click(function () {
    $("#five_sense_organs").css("display","block");
    $("#oral ").css("display","none");
    $("#upper_limb").css("display","none");
    $("#inner_organ").css("display","none");
    $("#common").css("display","none");
    $("#lower_limb").css("display","none");
    $("#none").css("display","none");//显示div
    $("#head_part").css("display","none");
});

$("#title_oral").click(function () {
    $("#five_sense_organs").css("display","none");
    $("#oral ").css("display","block");
    $("#upper_limb").css("display","none");
    $("#inner_organ").css("display","none");
    $("#common").css("display","none");
    $("#lower_limb").css("display","none");
    $("#none").css("display","none");//显示div
    $("#head_part").css("display","none");
});

$("#title_uplimb").click(function () {
    $("#five_sense_organs").css("display","none");
    $("#oral ").css("display","none");
    $("#upper_limb").css("display","block");
    $("#inner_organ").css("display","none");
    $("#common").css("display","none");
    $("#lower_limb").css("display","none");
    $("#none").css("display","none");//显示div
    $("#head_part").css("display","none");
});

$("#title_organ").click(function () {
    $("#five_sense_organs").css("display","none");
    $("#oral ").css("display","none");
    $("#upper_limb").css("display","none");
    $("#inner_organ").css("display","block");
    $("#common").css("display","none");
    $("#lower_limb").css("display","none");
    $("#none").css("display","none");//显示div
    $("#head_part").css("display","none");
});


$("#title_comm").click(function () {
    $("#five_sense_organs").css("display","none");
    $("#oral ").css("display","none");
    $("#upper_limb").css("display","none");
    $("#inner_organ").css("display","none");
    $("#common").css("display","block");
    $("#lower_limb").css("display","none");
    $("#none").css("display","none");//显示div
    $("#head_part").css("display","none");
});


$("#title_lolimb").click(function () {
    $("#five_sense_organs").css("display","none");
    $("#oral ").css("display","none");
    $("#upper_limb").css("display","none");
    $("#inner_organ").css("display","none");
    $("#common").css("display","none");
    $("#lower_limb").css("displasy","block");
    $("#none").css("display","none");//显示div
    $("#head_part").css("display","none");
});

$("#title_non").click(function () {
    $("#five_sense_organs").css("display","none");
    $("#oral ").css("display","none");
    $("#upper_limb").css("display","none");
    $("#inner_organ").css("display","none");
    $("#common").css("display","none");
    $("#lower_limb").css("display","none");
    $("#none").css("display","block");//显示div
    $("#head_part").css("display","none");
});

$(".title_like").click(function () {
   $(".type_like").css("display","block");
});

$("#title_chill_fever_like").click(function(){
    $("#chills_fever_like").css("display","block");
    $("#eating_like ").css("display","none");
    $("#drinking_like").css("display","none");
    $("#an_like").css("display","none");
});

$("#title_eating").click(function(){
    $("#chills_fever_like").css("display","none");
    $("#eating_like ").css("display","block");
    $("#drinking_like").css("display","none");
    $("#an_like").css("display","none");
});

$("#title_drinking").click(function(){
    $("#chills_fever_like").css("display","none");
    $("#eating_like ").css("display","none");
    $("#drinking_like").css("display","block");
    $("#an_like").css("display","none");
});

$("#title_an").click(function(){
    $("#chills_fever_like").css("display","none");
    $("#eating_like ").css("display","none");
    $("#drinking_like").css("display","none");
    $("#an_like").css("display","block");
});

$(".detail").click(function () {
    $(".right").css("display","block");
    $(".left").addClass(" col-sm-6 col-md-6 col-md-6 col-xs-6").removeClass("col-sm-12 col-md-12 col-md-12 col-xs-12");
});

$("#head_part,#five_sense_organs,#oral,#upper_limb,#lower_limb ,#inner_organ, #common ,#none").one("click",function () {
    $(".detail_table_symptom").css("display","block");
});

// 只能点击一次
$("#pain").one("click",function () {
    $(this).append( "<label>"
        +"<input name='items' type='checkbox' >"+ "隐隐作痛"
        +"<input name='items' type='checkbox'>"+ "凉痛"
        +"<input name='items' type='checkbox'>"+ "刺痛"
        +"</label>");
});

$("#sweat").one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "汗多"
        +"<input name='items' type='checkbox'>"+ "汗少"
        +"<input name='items' type='checkbox'>"+ "盗汗"
        +"<input name='items' type='checkbox'>"+ "自汗"
        +"</label>");
});

$("#injury").one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "骨折"
        +"<input name='items' type='checkbox'>"+ "骨裂"
        +"<input name='items' type='checkbox'>"+ "软组织损伤"
        +"<input name='items' type='checkbox'>"+ "皮外伤"
        +"</label>");
});


$("#chills_fever").one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "畏寒"
        +"<input name='items' type='checkbox'>"+ "畏热"
        +"<input name='items' type='checkbox'>"+ "发热"
        +"<input name='items' type='checkbox'>"+ "发冷"
        +"</label>");
});

$("#na").one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "可"
        +"<input name='items' type='checkbox'>"+ "多"
        +"</label>");
});

$("#mouth").one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "口干"
        +"<input name='items' type='checkbox'>"+ "口苦"
        +"<input name='items' type='checkbox'>"+ "口干欲饮饮水可解"
        +"<input name='items' type='checkbox'>"+ "口干欲饮饮水不可解"
        +"</label>");
});


$("#sleep").one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "未安"
        +"<input name='items' type='checkbox'>"+ "安"
        +"<input name='items' type='checkbox'>"+ "多梦"
        +"<input name='items' type='checkbox'>"+ "难入眠"
        +"<input name='items' type='checkbox'>"+ "难复眠"
        +"</label>");
});

$("#cough").one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "咽痒咳嗽"
        +"<input name='items' type='checkbox'>"+ "干咳"
        +"<input name='items' type='checkbox'>"+ "有痰咳嗽"
        +"<input name='items' type='checkbox'>"+ "异物感咳嗽"
        +"</label>");
});



// 经带

//月经
$("#title2_texture_yuejing").click(function () {
    $("#title3_texture_yuejing").css("display","block");
    $("#title3_color_yuejing").css("display","none");
    $("#title3_complication_yuejing").css("display","none");
    $("#title3_volume_yuejing").css("display","none");
	$("#title3_texture_baidai").css("display","none");
	$("#title3_color_baidai").css("display","none");
	$("#title3_smell_baidai").css("display","none");
	$("#title3_volume_baidai").css("display","none");
});

$("#title2_color_yuejing").click(function () {
    $("#title3_texture_yuejing").css("display","none");
    $("#title3_color_yuejing").css("display","block");
    $("#title3_complication_yuejing").css("display","none");
    $("#title3_volume_yuejing").css("display","none");
	$("#title3_texture_baidai").css("display","none");
	$("#title3_color_baidai").css("display","none");
	$("#title3_smell_baidai").css("display","none");
	$("#title3_volume_baidai").css("display","none");
});

$("#title2_complication_yuejing").click(function () {
    $("#title3_texture_yuejing").css("display","none");
    $("#title3_color_yuejing").css("display","none");
    $("#title3_complication_yuejing").css("display","block");
    $("#title3_volume_yuejing").css("display","none");
	$("#title3_texture_baidai").css("display","none");
	$("#title3_color_baidai").css("display","none");
	$("#title3_smell_baidai").css("display","none");
	$("#title3_volume_baidai").css("display","none");
});

$("#title2_volume_yuejing").click(function () {
    $("#title3_texture_yuejing").css("display","none");
    $("#title3_color_yuejing").css("display","none");
    $("#title3_complication_yuejing").css("display","none");
    $("#title3_volume_yuejing").css("display","block");
	$("#title3_texture_baidai").css("display","none");
	$("#title3_color_baidai").css("display","none");
	$("#title3_smell_baidai").css("display","none");
	$("#title3_volume_baidai").css("display","none");
});


//白带
$("#title2_texture_baidai").click(function () {
    $("#title3_texture_yuejing").css("display","none");
    $("#title3_color_yuejing").css("display","none");
    $("#title3_complication_yuejing").css("display","none");
    $("#title3_volume_yuejing").css("display","none");
	$("#title3_texture_baidai").css("display","block");
	$("#title3_color_baidai").css("display","none");
	$("#title3_smell_baidai").css("display","none");
	$("#title3_volume_baidai").css("display","none");
});

$("#title2_color_baidai").click(function () {
    $("#title3_texture_yuejing").css("display","none");
    $("#title3_color_yuejing").css("display","none");
    $("#title3_complication_yuejing").css("display","none");
    $("#title3_volume_yuejing").css("display","none");
	$("#title3_texture_baidai").css("display","none");
	$("#title3_color_baidai").css("display","block");
	$("#title3_smell_baidai").css("display","none");
	$("#title3_volume_baidai").css("display","none");
});

$("#title2_smell_baidai").click(function () {
    $("#title3_texture_yuejing").css("display","none");
    $("#title3_color_yuejing").css("display","none");
    $("#title3_complication_yuejing").css("display","none");
    $("#title3_volume_yuejing").css("display","none");
	$("#title3_texture_baidai").css("display","none");
	$("#title3_color_baidai").css("display","none");
	$("#title3_smell_baidai").css("display","block");
	$("#title3_volume_baidai").css("display","none");
});

$("#title2_volume_baidai").click(function () {
    $("#title3_texture_yuejing").css("display","none");
    $("#title3_color_yuejing").css("display","none");
    $("#title3_complication_yuejing").css("display","none");
    $("#title3_volume_yuejing").css("display","none");
	$("#title3_texture_baidai").css("display","none");
	$("#title3_color_baidai").css("display","none");
	$("#title3_smell_baidai").css("display","none");
	$("#title3_volume_baidai").css("display","block");
});


// 脉搏
$("#title1_lefthand").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","none");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title1_righthand").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","none");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title1_hands").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","none");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title2_cun_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title2_guan_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title2_chi_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title3_fu_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","block");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title3_chen_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","block");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title3_chi_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","block");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title3_shu_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","block");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","none");
});

$("#title3_xu_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","block");
	$("#title4_shi").css("display","none");
});

$("#title3_shi_pulse").click(function(){
	$("#title2_pulse").css("display","block");
	$("#title3_pulse").css("display","block");
	$("#title4_fu").css("display","none");
	$("#title4_chen").css("display","none");
	$("#title4_chi").css("display","none");
	$("#title4_shu").css("display","none");
	$("#title4_xu").css("display","none");
	$("#title4_shi").css("display","block");
});

//二便
//小便

//大便

// $("#title1_faeces").click(function () {
//     $("#title2_texture_faeces").css("display","block");
//     $("#title2_color_faeces").css("display","block");
//     $("#title2_volume_faeces").css("display","block");
//     $("#title2_smell_baidai").css("display","block");
//     $("#title2_times_faeces").css("display","block");
// });



$("#title1_texture_faeces").click(function () {

    $("#title2_texture_faeces").css("display","block");
    $("#title2_color_faeces").css("display","none");
    $("#title2_volume_faeces").css("display","none");
    $("#title2_smell_faeces").css("display","none");
    $("#title2_times_faeces").css("display","none");
});

$("#title1_color_faeces").click(function () {

    $("#title2_texture_faeces").css("display","none");
    $("#title2_color_faeces").css("display","block");
    $("#title2_volume_faeces").css("display","none");
    $("#title2_smell_faeces").css("display","none");
    $("#title2_times_faeces").css("display","none");
});
$("#title1_volume_faeces").click(function () {

    $("#title2_texture_faeces").css("display","none");
    $("#title2_color_faeces").css("display","none");
    $("#title2_volume_faeces").css("display","block");
    $("#title2_smell_faeces").css("display","none");
    $("#title2_times_faeces").css("display","none");
});
$("#title2_smell_faeces").click(function () {

    $("#title2_texture_faeces").css("display","none");
    $("#title2_color_faeces").css("display","none");
    $("#title2_volume_faeces").css("display","none");
    $("#title2_smell_faeces").css("display","block");
    $("#title2_times_faeces").css("display","none");
});


$("#title1_times_faeces").click(function () {
    $("#title2_texture_faeces").css("display","none");
    $("#title2_color_faeces").css("display","none");
    $("#title2_volume_faeces").css("display","none");
    $("#title2_smell_faeces").css("display","none");
    $("#title2_times_faeces").css("display","block");
});

$("#title1_volume_urine").click(function () {

    $("#title2_texture_urine").css("display","none");
    $("#title2_color_urine").css("display","none");
    $("#title2_feel_urine").css("display","none");
    $("#title2_smell_urine").css("display","none");
    $("#title2_volume_urine").css("display","block");
});

$("#title1_feel_urine").click(function () {

    $("#title2_texture_urine").css("display","none");
    $("#title2_color_urine").css("display","none");
    $("#title2_feel_urine").css("display","block");
    $("#title2_smell_urine").css("display","none");
    $("#title2_volume_urine").css("display","none");
});

$("#title1_texture_urine").click(function () {

    $("#title2_texture_urine").css("display","block");
    $("#title2_color_urine").css("display","none");
    $("#title2_feel_urine").css("display","none");
    $("#title2_smell_urine").css("display","none");
    $("#title2_volume_urine").css("display","none");
});

$("#title1_smell_urine").click(function () {

    $("#title2_texture_urine").css("display","none");
    $("#title2_color_urine").css("display","none");
    $("#title2_feel_urine").css("display","none");
    $("#title2_smell_urine").css("display","block");
    $("#title2_volume_urine").css("display","none");
});

$("#title1_volume_urine").click(function () {

    $("#title2_texture_urine").css("display","none");
    $("#title2_color_urine").css("display","none");
    $("#title2_feel_urine").css("display","none");
    $("#title2_smell_urine").css("display","none");
    $("#title2_volume_urine").css("display","block");
});

$("#title1_lefthand").click(function () {
    $("#title2_pulse").css("display","block");
});

$("#title2_pulse").click(function () {
    $("#title3_pulse").css("display","block");
});

$("#title3_fu_pulse").click(function () {
    $("#title4_fu").css("display","block");
    $("#title4_chen").css("display","none");
    $("#title4_chi").css("display","none");
    $("#title4_shu").css("display","none");
    $("#title4_xu").css("display","none");
    $("#title4_shi").css("display","none");
});

$("#title3_chen_pulse").click(function () {
    $("#title4_fu").css("display","none");
    $("#title4_chen").css("display","block");
    $("#title4_chi").css("display","none");
    $("#title4_shu").css("display","none");
    $("#title4_xu").css("display","none");
    $("#title4_shi").css("display","none");
});

$("#title3_chi_pulse").click(function () {
    $("#title4_fu").css("display","none");
    $("#title4_chen").css("display","none");
    $("#title4_chi").css("display","block");
    $("#title4_shu").css("display","none");
    $("#title4_xu").css("display","none");
    $("#title4_shi").css("display","none");
});

$("#title3_xu_pulse").click(function () {
    $("#title4_fu").css("display","none");
    $("#title4_chen").css("display","none");
    $("#title4_chi").css("display","none");
    $("#title4_shu").css("display","none");
    $("#title4_xu").css("display","block");
    $("#title4_shi").css("display","none");
});

$("#title3_shu_pulse").click(function () {
    $("#title4_fu").css("display","none");
    $("#title4_chen").css("display","none");
    $("#title4_chi").css("display","none");
    $("#title4_shu").css("display","block");
    $("#title4_xu").css("display","none");
    $("#title4_shi").css("display","none");
});

$("#title3_shi_pulse").click(function () {
    $("#title4_fu").css("display","none");
    $("#title4_chen").css("display","none");
    $("#title4_chi").css("display","none");
    $("#title4_shu").css("display","none");
    $("#title4_xu").css("display","none");
    $("#title4_shi").css("display","block");

});

$("#title1_texture_tongue").click(function () {
    $("#title2_texture_tongue").css("display","block");
    $("#title2_coated_tongue").css("display","none");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","none");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title1_coated_tongue").click(function () {
    $("#title2_texture_tongue").css("display","none");
    $("#title2_coated_tongue").css("display","block");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","none");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title_color_tongue_texture").click(function () {
    $("#title2_texture_tongue").css("display","block");
    $("#title2_coated_tongue").css("display","none");
    $("#title3_type_position_1").css("display","block");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","none");
    // $("title3_type_color_coated").css("display","none");
    $("#title3_sublingua_vessel_coated").css("display","none");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title_shape_tongue").click(function () {
    $("#title2_texture_tongue").css("display","block");
    $("#title2_coated_tongue").css("display","none");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","block");
    $("#title3_type_condition").css("display","none");
    $("#title3_sublingua_vessel_coated").css("display","none");
    $("#title3_type_color_coated").css("display","none");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title_condition_tongue").click(function () {
    $("#title2_texture_tongue").css("display","block");
    $("#title2_coated_tongue").css("display","none");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","block");
    $("#title3_sublingua_vessel_coated").css("display","none");
    $("#title3_type_color_coated").css("display","none");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title_color_tongue_coated").click(function () {
    $("#title2_texture_tongue").css("display","none");
    $("#title2_coated_tongue").css("display","block");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","block");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","none");
    $("#title1_coated_tongue").css("display","block");
    // $("title3_type_color_coated").css("display","block");
    $("#title3_sublingua_vessel_coated").css("display","none");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title_sublingua_vessel_coated").click(function () {
    $("#title2_texture_tongue").css("display","none");
    $("#title2_coated_tongue").css("display","block");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","none");
    $("#title1_coated_tongue").css("display","block");
    $("#title3_type_color_coated").css("display","none");
    $("#title3_sublingua_vessel_coated").css("display","block");
    $("#title3_texture_tongue_coated").css("display","none");

});

$("#title_texture_tongue_coated").click(function () {
    $("#title2_texture_tongue").css("display","none");
    $("#title2_coated_tongue").css("display","block");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","none");
    $("#title1_coated_tongue").css("display","block");
    $("#title3_type_color_coated").css("display","none");
    $("#title3_sublingua_vessel_coated").css("display","none");
    $("#title3_texture_tongue_coated").css("display","block");
});

$("#title3_type_position").click(function () {
    // $("#title2_texture_tongue").css("display","block");
    $("#title2_coated_tongue").css("display","none");
    $("#title3_type_position_1").css("display","block");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","none");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title3_type_shape").click(function () {
    // $("#title2_texture_tongue").css("display","block");
    $("#title2_coated_tongue").css("display","none");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","block");
    $("#title3_type_condition").css("display","none");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title3_type_condition").click(function () {
    // $("#title2_texture_tongue").css("display","block");
    // $("#title2_coated_tongue").css("display","none");
    $("#title3_type_position_1").css("display","none");
    $("#title3_type_position_2").css("display","none");
    $("#title3_type_shape").css("display","none");
    $("#title3_type_condition").css("display","block");
    $("#title3_texture_tongue_coated").css("display","none");
});

$("#title_tip_tongue_1,#title_mid_tongue_1,#title_side_tongue_1,#title_root_tongue_1").
    one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "暗"
        +"<input name='items' type='checkbox'>"+ "红"
        +"<input name='items' type='checkbox'>"+ "淡红"
        +"<input name='items' type='checkbox'>"+ "紫"
        +"<input name='items' type='checkbox' >"+ "淡暗"
        +"<input name='items' type='checkbox'>"+ "紫暗"
        +"<input name='items' type='checkbox'>"+ "暗红"
        +"</label>");
});

$("#title_tip_tongue_2,#title_mid_tongue_2,#title_side_tongue_2,#title_root_tongue_2").
    one("click",function () {
    $(this).append("<label>"
        +"<input name='items' type='checkbox' >"+ "白（染苔）"
        +"<input name='items' type='checkbox'>"+ "薄白"
        +"<input name='items' type='checkbox'>"+ "白腻"
        +"<input name='items' type='checkbox'>"+ "白厚腻"
        +"<input name='items' type='checkbox' >"+ "黄（染苔）"
        +"<input name='items' type='checkbox'>"+ "薄黄"
        +"<input name='items' type='checkbox'>"+ "黄腻"
        +"<input name='items' type='checkbox'>"+ "黄厚腻"
        +"<input name='items' type='checkbox' >"+ "黑"
        +"<input name='items' type='checkbox'>"+ "黑（染苔）"
        +"<input name='items' type='checkbox'>"+ "焦黄"
        +"<input name='items' type='checkbox'>"+ "焦黄（染苔）"
        +"<input name='items' type='checkbox' >"+ "焦黑"
        +"<input name='items' type='checkbox'>"+ "焦黑（染苔）"
        +"</label>");
});
