<script type="text/javascript">
  function parseWebAddress(data){
    $.each(data, function(index, value){
      var template_a  = "<a href='" + value['gallery_web_address'] + "'>" + value['name'] + "</a>";
      var template_li = "<li class='photos__list-links'>" + template_a + "</li>";
      $('.photos__list').append(template_li);
    });
  }

<script type="text/javascript" src="http://banginmeals.herokuapp.com/get_meals?callback=parseWebAddress">
</script>
