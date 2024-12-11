import React from 'react';

const RadioPlayer = () => {
    return (
        <div id="radio" className="text-center my-5">
            <h1 class="titulo">Bem vindo ao diario digital</h1>
            <br></br>
            <h2 class="titulo">Ouça a Rádio</h2>
            <br></br>
            <audio controls>
                <source src="https://8630.brasilstream.com.br/stream.m3u" type="audio/mpeg" />
                Seu navegador não suporta o player de áudio.
            </audio>
        </div>
        
    );
};

export default RadioPlayer;