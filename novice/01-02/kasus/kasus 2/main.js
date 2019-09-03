var x=3;
var y=-7;
var z=2;

let myText = document.querySelector('body');

if (x>0 && y>0 && z>0)
{
       alert("Tanda +");
}
else if (x<0 && y<0 && z<0)
        {
            myText.textContent = "Tanda +";
        }
        else if (x>0 && y<0 && z<0)
        {
            myText.textContent = "Tanda +";
        }
        else if (x<0 && y>0 && z<0)
        {
            myText.textContent = "Tanda +";
        }
        else
        {
            myText.textContent = "Tanda -";
        }
		