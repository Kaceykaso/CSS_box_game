		$(document).ready(function()
		{
  			callBlock();

  			function callBlock()
			  {
    var top = $('#block').position().top;
    //$('#tip').text(top);
				    if(top < -65) 				{
					      var block = document.getElementById('block');
      					var border = document.getElementById('border');
      					var success = document.getElementById('success');

      					block.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
      					block.style.top = '-70px';
					      block.style.cursor = 'default';
					
					      border.style.borderColor = '#090';
					
      					success.style.opacity = '1';
				    }
    				setTimeout(callBlock, 200);
  			}
		});