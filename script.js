let board = [];
function checkWin(x,y)
{
  for (let i = 0; i<=6; i++)
    {
       if (i<=2)
        {
            if ( board[(i+3)] ==  'X' && board[(i+6)] ==  'X' && board[i] ==  'X')
                {
                    document.getElementById("winner").innerHTML = `${x} Wins`;
                    setTimeout(() => {location.reload();},1500);
                    return true;
                }
            else  if ( board[(i+3)] ==  'O' && board[(i+6)] ==  'O' && board[i] ==  'O')
                {
                        document.getElementById("winner").innerHTML =`${y} Wins`;
                        setTimeout(() => {location.reload();},1500);
                        return true;
                }
        }
        if (i == 0|| i == 3 || i == 6 )
            {
                if ( board[(i+1)] ==  'X' && board[(i+2)] ==  'X' && board[i] ==  'X')
                    {
                        document.getElementById("winner").innerHTML = `${x} Wins`;
                        setTimeout(() => {location.reload();},1500);
                        return true;
                    }
                    else  if ( board[(i+1)] ==  'O' && board[(i+2)] ==  'O' && board[i] ==  'O')
                    {
                        document.getElementById("winner").innerHTML =`${y} Wins`;
                        setTimeout(() => {location.reload();},1500);
                        return true;
                    }
            }
       
        if (i == 0 )
            {
                if (board[i + 4] == 'X' && board[i + 8] == 'X' && board[i] =='X')
                    {
                        document.getElementById("winner").innerHTML = `${x} Wins`;
                        setTimeout(() => {location.reload();},1500);
                        return true;
                    }
                    else if (board[i + 4] == 'O' && board[i + 8] == 'O' && board[i] == 'O')
                        {
                            document.getElementById("winner").innerHTML = `${y} Wins`;
                            setTimeout(() => {location.reload();},1500);
                            return true;
                        }
            }
            if (i == 2)
                {
                    if (board [i + 2] == 'X' && board[i + 4] == 'X' && board[i] == 'X' )
                        {
                            document.getElementById("winner").innerHTML = `${x} Wins`;
                            setTimeout(() => {location.reload();},1500);
                            return true;
                        }
                        else if (board [i + 2] == 'O' && board[i + 4] == 'O' && board[i] == 'O')
                            {
                                document.getElementById("winner").innerHTML = `${y} Wins`;
                                setTimeout(() => {location.reload();},1500);
                                return true;
                            }
                }
        if (turn == 9)
            {
                document.getElementById("winner").innerHTML = `Draw`;
                                setTimeout(() => {location.reload();},1500);
                                return true;
            }
    }
    
}

let turn = 0;
let form =  document.getElementById("form");
let clone = document.getElementById("game");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
        const form = document.getElementById("form");
        let p1_name = form.p1.value;
        let p2_name = form.p2.value;

           document.getElementById("form-div").style.display = "none";
           for (let i=0; i<9; i++)
            {
                let grid = document.getElementById("game");
                let ch = document.createElement("div");
                grid.appendChild(ch);
                ch.className = "item";
                ch.id = `items${i}`;
                document.getElementById(`items${i}`).addEventListener("click", function move() {
                    if(turn % 2 == 0){
                        document.getElementById(`items${i}`).innerHTML = "X";
                        turn +=1;
                        document.getElementById(`items${i}`).id = `${i}X`
                        board[i] = 'X';
                        console.log(board);
                        let winn = checkWin(p1_name,p2_name);
                        if (winn == true)
                            {
                                board.splice(0,board.length);
                                grid.remove();
                            }
                    }
                    else 
                    {
                        document.getElementById(`items${i}`).innerHTML = "O";
                        turn +=1;
                        document.getElementById(`items${i}`).id = `${i}O`
                        board[i] = 'O';
                        console.log(board);
                        let winn = checkWin(p1_name,p2_name);
                        if (winn == true)
                            {
                                board.splice(0,board.length);
                                grid.remove();
                            }
                    }
                }
                )
            }
        })
       


