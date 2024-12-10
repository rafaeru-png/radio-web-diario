import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py=3">
              <div class="social-links">
                <a href="https://facebook.com" className="mx-2" target="_blank" class="social-icon">
                <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" className="mx-2" target="_blank" class="social-icon">
                <i class="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" ClassName="mx-2" target="_blank" class="social-icon">
                <i class="fab fa-twitter"></i>
                </a>
            </div>
            <div>
                <p>&copy; 2024 Rádio Web Diário Digital</p>
                <a href="#terms" className="text-light">Termos de Uso</a> | 
                <a href="#privacy" className="text-light">Política de Privacidade</a>
            </div>
            
        </footer>
    );
};

export default Footer;