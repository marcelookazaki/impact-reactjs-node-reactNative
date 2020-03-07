import React, { useState, useEffect } from 'react';
import { Lista } from './Lista';

export const Componente2 = _ => {

    const [nome, setNome] = useState('');
    const [categorias] = useState(['INFORMATICA', 'REDES', 'ADM']);

    useEffect(() => {
        setTimeout(() => setNome('Marcelo'),3000);
        setTimeout(_ => setNome(''),10000);
        }
    )

    const renderLista = () =>{
        return(
            categorias.map((cat, i) => 
                <Lista key={i} texto={cat} />)
        )
    }

    return(
        <div>
            <h1> Meu nome é: {nome}</h1>
            <ul>
                {renderLista()}
            </ul>                   
        </div>
    );
}
