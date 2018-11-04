function test()
{
    var element = document.querySelector('button');
    var col = true;

    element.addEventListener('click', function()
    {
        if (col)
        {
            color('red');
        }
        else
        {
            color('black');
        }

        col = !col;
    });
}

function color(value)
{
    document.getElementsByTagName('h1')[0].style.color = value;
}

document.addEventListener('DOMContentLoaded', test);


