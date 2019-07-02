var ile = 0;
function control()
{
    menu();
}

function game()
{
    document.getElementById("button").style.visibility = "visible";
    load();
    fill();
    clear();
    boxes();
    time();
}

function load()
{
    var liczba = 1;
    var id = 0;
    for (var i = 0; i<9;i++)
    {
        document.getElementById("tabelka").innerHTML += '<div class="row"></div>';
        var wiersz = i+1;
        var start = liczba;
        for (var j = 0;j<9;j++)
        {
            
            id++;
            var kolumna = j+1;
            if(kolumna==3 || kolumna==6)
            {
                if(wiersz==3 || wiersz==6)
                {
                    document.getElementsByClassName("row")[i].innerHTML += '<div id="'+id+'" class="okno brd-right brd-down" ></div>';
                }
                else
                {
                    document.getElementsByClassName("row")[i].innerHTML += '<div id="'+id+'" class="okno brd-right" ></div>';
                }
            }
            else
            {
                if(wiersz==3 || wiersz==6)
                {
                    document.getElementsByClassName("row")[i].innerHTML += '<div id="'+id+'" class="okno brd-down" ></div>';
                }
                else
                {
                    document.getElementsByClassName("row")[i].innerHTML += '<div id="'+id+'" class="okno" ></div>';
                }
            }
            if(j==2 || j==5){liczba++}
            if(j==8){liczba=start}
        }
        if(i==2 || i==5){liczba+=3}
    }

}

var okna = [[1,2,3,10,11,12,19,20,21],[4,5,6,13,14,15,22,23,24],[7,8,9,16,17,18,25,26,27],[28,29,30,37,38,39,46,47,48],[31,32,33,40,41,42,49,50,51],[34,35,36,43,44,45,52,53,54],[55,56,57,64,65,66,73,74,75],[58,59,60,67,68,69,76,77,78],[61,62,63,70,71,72,79,80,81]];
var wiersze = [[1,2,3,4,5,6,7,8,9],[10,11,12,13,14,15,16,17,18],[19,20,21,22,23,24,25,26,27],[28,29,30,31,32,33,34,35,36],[37,38,39,40,41,42,43,44,45],[46,47,48,49,50,51,52,53,54],[55,56,57,58,59,60,61,62,63],[64,65,66,67,68,69,70,71,72],[73,74,75,76,77,78,79,80,81]];
var kolumny = [[1,10,19,28,37,46,55,64,73],[2,11,20,29,38,47,56,65,74],[3,12,21,30,39,48,57,66,75],[4,13,22,31,40,49,58,67,76],[5,14,23,32,41,50,59,68,77],[6,15,24,33,42,51,60,69,78],[7,16,25,34,43,52,61,70,79],[8,17,26,35,44,53,62,71,80],[9,18,27,36,45,54,63,72,81]];

var okno = [[],[],[],[],[],[],[],[],[]];
var wiersz = [[],[],[],[],[],[],[],[],[]];
var kolumna = [[],[],[],[],[],[],[],[],[]];
let chw = [[],[],[],[],[],[],[],[],[]];
let chk = [[],[],[],[],[],[],[],[],[]];
let cho = [[],[],[],[],[],[],[],[],[]];
var bylow = [];
var bylok = [];
var byloo = [];
var available;
var input = [];
var wstawione = [];

function Wst(x,y)
{
    this.id = x,
    this.val = y
}

function fill()
{
    ava();
    var cell = 0;
    var wstecz = 0;
    while(cell<81)
    {
        if(available[cell].length==0)
        {
            available[cell] = [1,2,3,4,5,6,7,8,9];
            document.getElementById(cell+1).innerHTML = "";
            cell--;
            remove(cell);
            wstecz++;
        }

        var liczba = Math.floor((Math.random() * 9) + 1);
        
        if(check(cell,liczba))
        {
            document.getElementById(cell+1).innerHTML = liczba;
            available[cell].splice(liczba-1, 1);
            pushit(cell,liczba);
            cell++;
        }
        else
        {
            available[cell].splice(liczba-1, 1);
        }
    }
    console.log("Cofnięć: "+wstecz);
}

function ava()
{
    available = [];
    available.length = 81;
    for (var i=0;i<81;i++)
    {
        available[i] = [1,2,3,4,5,6,7,8,9];
    }
}

function check(cell,liczba)
{
    id = cell+1;
    var w;
    var k;
    var o;
    for(var i=0;i<9;i++)
    {
        if(wiersze[i].includes(id))
        {
            w = wiersz[i];
        }
    }

    for(var i=0;i<9;i++)
    {
        if(kolumny[i].includes(id))
        {
            k = kolumna[i];
        }
    }

    for(var i=0;i<9;i++)
    {
        if(okna[i].includes(id))
        {
            o = okno[i];
        }
    }

    if(w.includes(liczba) || k.includes(liczba) || o.includes(liczba))
    {
        return false; 
    }
    else
    {
        if(available[cell].includes(liczba))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

function pushit(cell,liczba)
{    
    id = cell+1;
    for(var i=0;i<9;i++)
    {
        if(wiersze[i].includes(id))
        {
            wiersz[i].push(liczba);
        }
    }

    for(var i=0;i<9;i++)
    {
        if(kolumny[i].includes(id))
        {
            kolumna[i].push(liczba);
        }
    }

    for(var i=0;i<9;i++)
    {
        if(okna[i].includes(id))
        {
            okno[i].push(liczba);
        }
    }
}

function remove(cell)
{    
    id = cell+1;
    for(var i=0;i<9;i++)
    {
        if(wiersze[i].includes(id))
        {
            wiersz[i].pop();
        }
    }

    for(var i=0;i<9;i++)
    {
        if(kolumny[i].includes(id))
        {
            kolumna[i].pop();
        }
    }

    for(var i=0;i<9;i++)
    {
        if(okna[i].includes(id))
        {
            okno[i].pop();
        }
    }
}

function clear()
{
    var i = 0;
    while(i<ile)
    {
        let id = Math.floor((Math.random() * 80));
        if(input.includes(id))
        {

        }
        else
        {
            input.push(id);

            clearr(id);

            

            i++;
        }
    }
}

function clearr(id)
{
    var kom = id + 1;
    
    for(var i=0;i<9;i++)
    {
        if(wiersze[i].includes(kom))
        {
            for(var j=0;j<9;j++)
            {
                if(wiersz[i][j]==document.getElementById(kom).innerHTML)
                {
                    wiersz[i][j]=0;
                }
            }
        }
    }

    for(var i=0;i<9;i++)
    {
        if(kolumny[i].includes(kom))
        {
            for(var j=0;j<9;j++)
            {
                if(kolumna[i][j]==document.getElementById(kom).innerHTML)
                {
                    kolumna[i][j]=0;
                }
            }
        }
    }

    for(var i=0;i<9;i++)
    {
        if(okna[i].includes(kom))
        {
            for(var j=0;j<9;j++)
            {
                if(okno[i][j]==document.getElementById(kom).innerHTML)
                {
                    okno[i][j]=0;
                }
            }
        }
    }

    document.getElementById(kom).innerHTML = "";
}

function boxes()
{
    var i = 0;
    while(i<81)
    {
        var kom = i+1;
        if(document.getElementById(kom).innerHTML == "")
        {
            document.getElementById(kom).classList.remove('okno');
            document.getElementById(kom).classList.add('okno2');
            document.getElementById(kom).innerHTML = '<input type="text" maxlength="1" id="box'+kom+'" class="boxes" onkeypress="isInputNumber(event)">';
        }
        i++;
    }
}

function menu()
{
    document.getElementById("tabelka").innerHTML = '<div id="logo"><img src="sudoku2.png" width="200px"></div><div id="newgame" onclick="level()">Nowa Gra</div>';
}

function level()
{
    document.getElementById("tabelka").innerHTML = "";
    document.getElementById("tabelka").innerHTML = '<div id="info">Wybierz poziom trudności</div>';
    document.getElementById("tabelka").innerHTML += '<div id="easy" class="choose" onclick="easy()">Łatwy</div>';
    document.getElementById("tabelka").innerHTML += '<div id="medium" class="choose" onclick="medium()">Średni</div>';
    document.getElementById("tabelka").innerHTML += '<div id="hard" class="choose" onclick="hard()">Trudny</div>';
}

function easy()
{
    ile = 20;
    document.getElementById("tabelka").innerHTML = "";
    game();
}

function medium()
{
    ile = 35;
    document.getElementById("tabelka").innerHTML = "";
    game();
}

function hard()
{
    ile = 50;
    document.getElementById("tabelka").innerHTML = "";
    game();
}

function isInputNumber(evt){

    if(evt.charCode>48 && evt.charCode<58)
    {
        
    }
    else
    {
        evt.preventDefault();
    }
    
}

function checkbtn()
{

    if(all()){win()}
    else
    {
        chw = [[],[],[],[],[],[],[],[],[]];
        chk = [[],[],[],[],[],[],[],[],[]];
        cho = [[],[],[],[],[],[],[],[],[]];

        for(var l = 1;l<82;l++)
        {
            var id = l;
            var liczba = document.getElementById(id).innerHTML;
            
            if(liczba.length<3)
            {
                liczba = parseInt(document.getElementById(id).innerHTML);
            }
            else
            {
                liczba = parseInt(document.getElementById("box"+id).value);
                document.getElementById("box"+id).style.backgroundColor = "white";
                if(isNaN(liczba))
                {
                    liczba = 0;
                }
            }

            for(var i=0;i<9;i++)
            {
                if(wiersze[i].includes(id))
                {
                    chw[i].push(liczba);
                }
            }
        
            for(var i=0;i<9;i++)
            {
                if(kolumny[i].includes(id))
                {
                    chk[i].push(liczba);
                }
            }
        
            for(var i=0;i<9;i++)
            {
                if(okna[i].includes(id))
                {
                    cho[i].push(liczba);
                }
            }
        }

        color();
    }

}


function rept(x)
{
    let arr = x;
    for(i = 1;i<10;i++)
    {
        if(bylow.includes(i))
        {

        }
        else
        {
            if(arr.includes(i))
            {
                if(arr.indexOf(i)==arr.lastIndexOf(i))
                {

                }
                else
                {
                    return i;
                }
            }
        }
    }
}

function color()
{
    bylow = [];
    bylok = [];
    byloo = [];

    for(var i = 0;i<9;i++)
    {
        for(var t = 0;t<5;t++)
        {
            var num = rept(chw[i]);
            bylow.push(num);
            if(num!=0 && num!=undefined)
            {
                for(var j = 0;j<9;j++)
                {
                    if(chw[i][j]==num)
                    {
                        var id = (j+1)+(9*i);
                        if(document.getElementById(id).innerHTML.length>3)
                        {
                            document.getElementById("box"+id).style.backgroundColor = "firebrick";
                        }
                    }
                }
            }
        }
        bylow = [];
    }
    
    for(var i = 0;i<9;i++)
    {
        for(var t = 0;t<5;t++)
        {
            var num = rept(chk[i]);
            bylok.push(num);
            if(num!=0 && num!=undefined)
            {
                for(var j = 0;j<9;j++)
                {
                    if(chk[i][j]==num)
                    {
                        var id = (i+1)+(9*j);
                        if(document.getElementById(id).innerHTML.length>3)
                        {
                            document.getElementById("box"+id).style.backgroundColor = "firebrick";
                        }
                    }
                }
            }
        }
        bylok = [];
    }

    for(var i = 0;i<9;i++)
    {
        for(var t = 0;t<5;t++)
        {
            var num = rept(cho[i]);
            byloo.push(num);
            if(num!=0 && num!=undefined)
            {
                for(var j = 0;j<9;j++)
                {
                    if(cho[i][j]==num)
                    {
                        if(i<3)
                        {
                            if(j<3){var id = (j+1)+(3*i);red(id);}
                            if(j<6 && j>2){var id = (j+7)+(3*i);red(id);}
                            if(j<9 && j>5){var id = (j+13)+(3*i);red(id);}
                        }
                        else if(i<6 && i>2)
                        {
                            if(j<3){var id = (j+19)+(3*i);red(id);}
                            if(j<6 && j>2){var id = (j+25)+(3*i);red(id);}
                            if(j<9 && j>5){var id = (j+31)+(3*i);red(id);}
                        }
                        else if(i<9 && i>5)
                        {
                            if(j<3){var id = (j+37)+(3*i);red(id);}
                            if(j<6 && j>2){var id = (j+43)+(3*i);red(id);}
                            if(j<9 && j>5){var id = (j+49)+(3*i);red(id);}
                        }
                    }
                }
            }
        }
        byloo = [];
    }

}

function red(id)
{
    if(document.getElementById(id).innerHTML.length>6)
        {
            document.getElementById("box"+id).style.backgroundColor = "firebrick";
        }
}

function all()
{
        chw = [[],[],[],[],[],[],[],[],[]];
        chk = [[],[],[],[],[],[],[],[],[]];
        cho = [[],[],[],[],[],[],[],[],[]];

        for(var l = 1;l<82;l++)
        {
            var id = l;
            var liczba = document.getElementById(id).innerHTML;
            
            if(liczba.length<3)
            {
                liczba = parseInt(document.getElementById(id).innerHTML);
            }
            else
            {
                liczba = parseInt(document.getElementById("box"+id).value);
                document.getElementById("box"+id).style.backgroundColor = "white";
                if(isNaN(liczba))
                {
                    liczba = 0;
                }
            }

            for(var i=0;i<9;i++)
            {
                if(wiersze[i].includes(id))
                {
                    chw[i].push(liczba);
                }
            }
        
            for(var i=0;i<9;i++)
            {
                if(kolumny[i].includes(id))
                {
                    chk[i].push(liczba);
                }
            }
        
            for(var i=0;i<9;i++)
            {
                if(okna[i].includes(id))
                {
                    cho[i].push(liczba);
                }
            }
        }

    var error = 0;
    for(i=1;i<82;i++)
    {
        if(document.getElementById(i).innerHTML.length>6)
        {
            if(document.getElementById("box"+i).value == ""){error++}
        }
    }

    var alliinon = [];

    for(var i = 0;i<9;i++)
    {
        alliinon = alliinon.concat(chw[i]);
        alliinon = alliinon.concat(chk[i]);
        alliinon = alliinon.concat(cho[i]);
    }
    
    for(var j=1;j<10;j++)
    {
        var cnt = 0;
        for(var t=0;t<243;t++)
        {
            if(alliinon[t]==j){cnt++};
        }
        if(cnt>27){error++};
    }
    
    if(error==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function rept2(array)
{
    var arr = array;
    
    for(j = 1;j<10;j++)
    {
        if(arr.includes(j)){
        
        if(arr.indexOf(j)==arr.lastIndexOf(j))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
            
    }
}

function win()
{
    document.getElementById("tabelka").innerHTML = '<div id="win">Wygrałeś!!!</div><div id="time">Twój czas:</div><div id="timebox">'+czas+'</div><div id="newgame" onclick="level()">Nowa Gra</div>';
    document.getElementById("button").style.visibility = "hidden";
    clearTimeout(stoper);
    document.getElementById("timer").style.visibility = "hidden";
    okno = [[],[],[],[],[],[],[],[],[]];
    wiersz = [[],[],[],[],[],[],[],[],[]];
    kolumna = [[],[],[],[],[],[],[],[],[]];
    chw = [[],[],[],[],[],[],[],[],[]];
    chk = [[],[],[],[],[],[],[],[],[]];
    cho = [[],[],[],[],[],[],[],[],[]];
    bylow = [];
    bylok = [];
    byloo = [];
    available = undefined;
    input = [];
    wstawione = [];
    minuty = 0;
    sekundy = 0;
    czas = 0;
    stoper = undefined;
}
var minuty = 0;
var sekundy = 0;
var czas = 0;
var stoper;
function time()
{
    document.getElementById("timer").style.visibility = "visible";
    sekundy++;
    if(sekundy==60)
    {
        sekundy = 0;
        minuty++;
    }
    var m;
    var s;
    if(minuty<10){m = "0"+minuty}
    if(minuty>9){m = minuty}
    if(sekundy<10){s = "0"+sekundy}
    if(sekundy>9){s = sekundy}
    document.getElementById("timer").innerHTML = m+":"+s;
    czas = m+":"+s;
    stoper = setTimeout(time, 1000);
}