var changing_thumbs = new Array();

function changeThumb(index, i, num_thumbs, thumb, attempt)
{
	if (changing_thumbs[index])
	{
		if ( i > num_thumbs )
		{
			i = 1;
		}			
		
		lthumb = new Image();
		lthumb.src = base_url + thumb + "-" + i + ".jpg";
		
		if ( lthumb.complete )
		{
			document.getElementById(index).src = base_url +  thumb + "-" + i + ".jpg";
			i++;
			setTimeout("changeThumb('" + index + "'," + i + ", " + num_thumbs + ", '" + thumb + "', 1)", 600);
		}
		else
		{
			/*if ( attempt > 1 ) {
				i++;
				setTimeout("changeThumb('" + index + "'," + i + ", " + num_thumbs + ", '" + thumb + "', 1)", 600);
			} else {
				setTimeout("changeThumb('" + index + "'," + i + ", " + num_thumbs + ", '" + thumb + "', 2)", 20);
			}*/
			
			setTimeout("changeThumb('" + index + "'," + i + ", " + num_thumbs + ", '" + thumb + "', 1)", 20);
		}
	}
}	

function startThumbChange(index, num_thumbs, thumb)
{	
	changing_thumbs[index] = true;
	num_thumbs = num_thumbs - 1;	
	changeThumb(index, 1, num_thumbs, thumb, 1);
}

function endThumbChange(index, thumb)
{
	changing_thumbs[index] = false;
	document.getElementById(index).src = base_url + thumb;
}
