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
 $(document).on("click", ".Ministry_twitter_handle_link", function(){
 	username = $(this).html();
 	create_link_to_twitter(username);
 });
 $(document).on("click", ".Minister_twitter_handle_link", function(){
 	username = $(this).html();
 	create_link_to_twitter(username);
 });
 $(document).on("click", "#ministry_list_menu_icon", ministry_menu_button);