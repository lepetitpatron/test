function Magic()
{
	var left = document.getElementById('Força');
	var right = document.getElementById('Barça');
	var switched = false;

	window.addEventListener('click', function()
	{
		if (!switched)
		{
			left.style.backgroundColor = '#A50044';
			right.style.backgroundColor = '#004D98';
		}
		else
		{
			left.style.backgroundColor = '#004D98';
			right.style.backgroundColor = '#A50044';
		}

		switched = !switched;
	});
}

document.addEventListener('DOMContentLoaded', Magic);