import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { Star } from '@material-ui/icons';

export default function stars(nota) {// recebe a nota do filme como parametro e retorna a aveliaçãio em forma de estrelas
    
    return (
        <div>
            {Array.from({length: 5}).map((item) => {
                if((nota % 2) == 1){
                    nota++;
                }
                if(nota >= 2){
                    nota = nota - 2;  
                    return <StarIcon></StarIcon>;
                }
                return <StarBorderIcon></StarBorderIcon>
            })}
        </div>
    )
}
