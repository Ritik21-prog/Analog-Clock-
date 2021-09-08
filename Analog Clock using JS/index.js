setInterval(() => {
    d= new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=htime*30+mtime/2;
    mrotation=mtime*6;
    srotation=stime*6;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;

    if(htime<12)
    {
        var meridian="AM";
    }   
    else
    {
        var meridian="PM"
    } 
    if(htime<10)
    {
        htime="0"+htime;
    }
    if(mtime<10)
    {
        mtime="0"+mtime;
    }
    if(stime<10)
    {
        stime="0"+stime;
    }

    var time= htime+":"+mtime+":"+stime+" "+meridian;
    document.getElementById("digitalTime").innerText=time;

}, 1000);