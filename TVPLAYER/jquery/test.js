document.getElementById("formLink").onclick = function()
{
    document.getElementById("box").style.display = "block";
    document.getElementById("box-inner").style.display = "block";
}
document.getElementById("box").onclick = function(e)
{
    if(e.toElement == document.getElementById("box-inner"))
    {
        document.getElementById("box").style.display = "none";
        document.getElementById("box-inner").style.display = "none";
    }
}