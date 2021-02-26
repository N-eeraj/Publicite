let menu=false;

function fnShowMenu()
{
	console.log(menu)
	if(menu==false)
	{
		document.getElementById('hamburger').setAttribute('src', 'images/close.png');
		document.getElementById('menu_container').style.display = 'block';
		menu=true;
	}
	else
	{
		
		document.getElementById('hamburger').setAttribute('src', 'images/hamburger.png');
		document.getElementById('menu_container').style.display = 'none';
		menu=false;
	}
	
}

function fnInternalLink()
{
	menu=true;
	console.log(menu)
	fnShowMenu()
}
