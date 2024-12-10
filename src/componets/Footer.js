import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py=3">
            <div>
                <p>&copy; 2024 Rádio Web Diário Digital</p>
                <a href="#terms" className="text-light">Termos de Uso</a> |
                <a href="#privacy" className="text-light">Política de Privacidade</a>
            </div>
            <div>
                <a href="https://facebook.com" className="mx-2">Facebook</a>
                <a href="https://instagram.com" className="mx-2">Instagram</a>
                <a href="https://twitter.com" ClassName="mx-2">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;