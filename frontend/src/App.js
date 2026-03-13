import "@/App.css";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg"></div>
          
          {/* Photo Container with Gradient */}
          <div className="photo-container">
            <div className="photo-gradient-overlay"></div>
            <img 
              src="https://customer-assets.emergentagent.com/job_43656913-8892-44e1-85f6-535764d1f349/artifacts/s8ejgdcx_IMG_7800.JPG.jpeg" 
              alt="Dra. Eliane Costa" 
              className="hero-photo"
              data-testid="hero-photo"
            />
          </div>
          
          {/* Title Section */}
          <div className="title-wrapper" data-testid="title-wrapper">
            <div className="title-line title-line-top"></div>
            <h1 className="thunder-title" data-testid="main-title">Dra. Eliane Costa</h1>
            <p className="subtitle" data-testid="subtitle">Resultados reais começam na alimentação certa.</p>
            <div className="title-line title-line-bottom"></div>
          </div>
        </section>
        
        {/* Buttons Section */}
        <section className="buttons-section">
          <div className="buttons-container">
            
            <a 
              href="https://api.whatsapp.com/send/?phone=5562994423813&text=Ol%C3%A1+Dra.+Gostaria+de+obter+mais+informa%C3%A7%C3%B5es+sobre+sua+consulta.+&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-btn"
              data-testid="btn-agende-consulta"
            >
              <div className="btn-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="btn-text">
                <span className="btn-title">Agende sua consulta</span>
                <span className="btn-subtitle">WhatsApp</span>
              </div>
            </a>
            
            <a 
              href="https://lastlink.com/p/C557B4F03/checkout-payment" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-btn"
              data-testid="btn-combo-ebooks"
            >
              <div className="btn-icon">
                <i className="fas fa-book"></i>
              </div>
              <div className="btn-text">
                <span className="btn-title">Combo de eBooks</span>
                <span className="btn-subtitle">Eliane Costa</span>
              </div>
            </a>
            
            <a 
              href="https://www.google.com.br/search?client=safari&sca_esv=47a906e9dc93da55&channel=iphone_bm&q=PUNK+CROSSFIT&ludocid=9725252000059705323&lsig=AB86z5VFf1QfEEDOdwNqgPDvt4cy&shndl=-1&shem=labmtrc,lsde,vslcca&source=sh/x/loc/act/m1/3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-btn"
              data-testid="btn-consultorio"
            >
              <div className="btn-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="btn-text">
                <span className="btn-title">Consultório</span>
                <span className="btn-subtitle">PUNK CROSSFIT</span>
              </div>
            </a>
            
            <a 
              href="https://elipcl.hotmart.host/pagina-de-vendas-61793b05-1c8d-4c7f-acef-73a11629e2fa?fbclid=PAQ0xDSwQgJJJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaev_AxuRmrNgPLYRjj8ksBZHlqLKLZ5SSMG852cCohJjQnMN6kyatwDxx9HzA_aem_-R1OPGvSv7uMj2u4isP0bg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-btn"
              data-testid="btn-mounjaro"
            >
              <div className="btn-icon">
                <i className="fas fa-syringe"></i>
              </div>
              <div className="btn-text">
                <span className="btn-title">Mounjaro: o jeito certo de usar</span>
                <span className="btn-subtitle">Guia Completo</span>
              </div>
            </a>
            
          </div>
        </section>
        
        {/* Differential Section */}
        <section className="differential">
          <div className="glow-divider"></div>
          <div className="differential-content">
            <h2 className="thunder-title-secondary" data-testid="differential-title">Nutricionista Esportiva</h2>
            <div className="features">
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Nutrição Esportiva</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Emagrecimento</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Saúde</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Resultados Reais</span>
              </div>
            </div>
          </div>
          <div className="glow-divider"></div>
        </section>
        
        {/* Footer */}
        <footer className="footer">
          <p className="copyright" data-testid="copyright">
            © 2026 Dra. Eliane Costa - Nutricionista Esportiva
          </p>
        </footer>
        
      </div>
    </div>
  );
}

export default App;
