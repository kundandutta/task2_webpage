$('li').click(function() {
    $(this).siblings().find('a').removeClass('focus');
    $(this).find('a').addClass('focus');
  });

  function read()
  <a href="Profile.htm" target="_blank" class="focus">Profile</a>