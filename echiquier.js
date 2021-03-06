

let line = 1

for(let i = 1; i<= 64;i++){
    //créer une case div avec la classe .case
    let cell = document.createElement("div") 
    cell.classList.add("case")
    //permet de faire le contraire et donc d'inverser le plateau
    if(line%2!==0){
        //une fois sur deux, ajouter la classe casenoir
        if(i % 2 == 0){
            cell.classList.add("caseNoire")
        }
    }
    else{
        //permet de faire une ligne sur 2
        if(i % 2 == 1){
            cell.classList.add("caseNoire")
        }
    }
    //l'ajouter dans la balise #chess
    document.querySelector("div#chess").appendChild(cell)  
    //on indique qu'on change de ligne toute les 8 case
    if(i%8==0){
        line++
    }
}

//Il faut donner un ID à chaque case pour y placer les pièces
function setAnId(){
    let cells = document.getElementsByClassName("case")
    for(let n = 0; n<= cells.length; n++){
        let numeroCase = "cell_"+(n+1)
        
        let cell = cells[n]
        cell.id = numeroCase
        if(pieces.hasOwnProperty(numeroCase)){
        cell.innerHTML = pieces[numeroCase]
        }
    }
}

//On place les pièces dans les bonnes cases 
let pieces = {
    cell_1 : "<img src='img/rook_b.svg'>",
    cell_2 : "<img src='img/knight_b.svg'>",
    cell_3 : "<img src='img/bishop_b.svg'>",
    cell_4 : "<img src='img/queen_b.svg'>",
    cell_5 : "<img src='img/king_b.svg'>",
    cell_6 : "<img src='img/bishop_b.svg'>",
    cell_7 : "<img src='img/knight_b.svg'>",
    cell_8 : "<img src='img/rook_b.svg'>",
    cell_9 : "<img src='img/pawn_b.svg'>",
    cell_10 : "<img src='img/pawn_b.svg'>",
    cell_11 : "<img src='img/pawn_b.svg'>",
    cell_12 : "<img src='img/pawn_b.svg'>",
    cell_13 : "<img src='img/pawn_b.svg'>",
    cell_14 : "<img src='img/pawn_b.svg'>",
    cell_15 : "<img src='img/pawn_b.svg'>",
    cell_16 : "<img src='img/pawn_b.svg'>",
    
    cell_49 : "<img src='img/pawn_w.svg'>",
    cell_50 : "<img src='img/pawn_w.svg'>",
    cell_51 : "<img src='img/pawn_w.svg'>",
    cell_52 : "<img src='img/pawn_w.svg'>",
    cell_53 : "<img src='img/pawn_w.svg'>",
    cell_54 : "<img src='img/pawn_w.svg'>",
    cell_55 : "<img src='img/pawn_w.svg'>",
    cell_56 : "<img src='img/pawn_w.svg'>",
    cell_57 : "<img src='img/rook_w.svg'>",
    cell_58 : "<img src='img/knight_w.svg'>",
    cell_59 : "<img src='img/bishop_w.svg'>",
    cell_60 : "<img src='img/king_w.svg'>",
    cell_61 : "<img src='img/queen_w.svg'>",
    cell_62 : "<img src='img/bishop_w.svg'>",
    cell_63 : "<img src='img/knight_w.svg'>",
    cell_64 : "<img src='img/rook_w.svg'>",
}
setAnId()

