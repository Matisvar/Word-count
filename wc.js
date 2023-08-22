function count() 
{
    let a = document.getElementById("type").value;
    let count = 0;
    let b = document.getElementById("answer");
    let sp = a.split(' ');//converts string to array

    for (let i = 0; i < sp.length; i++) 
    {
        if (sp[i].trim()!= "") 
        {
            count++;
        }
    }

    b.innerHTML = "Word count: " + count;
}
