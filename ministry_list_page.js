const get_ministry_list = ()=>{
	$.ajax({
        data : {
        },
        type : 'GET',
        url : '', 
        header: 'Access-Control-Allow-Origin: *',
        error : function(){
           console.log('Server not responding')
        }
    })
    .done(function(data) {
      	add_ministry_list(data);
    });
}
const add_ministry_list = ()=>{
	ministry_list = document.createElement('tr');
	ministry_list.className = 'ministry_list';
	ministry_list.innerHTML = `<td>Ministry of Petroleum</td>
	    <td class="Ministry_twitter_handle_link">Abdulaz29562466</td>
	    <td>Alhaji Abdulazeez</td>
	    <td class="Minister_twitter_handle_link">Abdulaz29562466</td>
	    <td>N50,000,000,000</td>`;
	$('.ministry_list_table table').append(ministry_list);
}
const create_link_to_twitter = (username) =>{
	window.open(`https://twitter.com/${username}`,"_blank");
}
const ministry_menu_button = () =>{
	if($('.ministry_list_navbar').css('height') == '0px'){
		$('.ministry_list_navbar').css('height', 'auto');
		//$('.ministry_list_navbar').css('width', '100%');
		$('.ministry_list_navbar').css('border-top', '1px solid white');
	}else{
		$('.ministry_list_navbar').css('height', '0px');
		//$('.ministry_list_navbar').css('width', '0%');
		$('.ministry_list_navbar').css('border-top', 'none');
	}
}
const filter_box_list = ()=>{
	if($('.filter_box_cover').css('height') == '0px'){
		$('.filter_box_cover').css('height', '100px');
		$('.filter_box_cover').css('border', '1px solid #dddddd');
		$('.ministry_list_filter_body').css('height', '120px');
	}else{
		$('.filter_box_cover').css('height', '0px');
		$('.filter_box_cover').css('border', 'none');
		$('.ministry_list_filter_body').css('height', '40px');
	}
}
$(document).on("click", ".Ministry_twitter_handle_link", function(){
	username = $(this).html();
	create_link_to_twitter(username);
});
$(document).on("click", ".Minister_twitter_handle_link", function(){
	username = $(this).html();
	create_link_to_twitter(username);
});
$(document).on("click", "#ministry_list_menu_icon", ministry_menu_button);
$(document).on("click", ".filter_box", filter_box_list);
add_ministry_list();
