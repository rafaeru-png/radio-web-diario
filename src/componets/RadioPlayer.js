import React from 'react';

const RadioPlayer = () => {
    return (
        <div id="radio" className="text-center my-5">
            <h2>Ouça a Rádio</h2>
            <audio controls>
                <source src="https://8630.brasilstream.com.br/stream.m3u" type="audio/mpeg" />
                Seu navegador não suporta o player de áudio.
            </audio>
        </div>
        
    );
};

export default RadioPlayer;