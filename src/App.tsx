import React from 'react';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const CONFIG = {
  whatsappNumber: "5544997068938",
  defaultMsg: "Olá! Gostaria de conversar sobre as soluções da Day One Digital para meu negócio."
};

function getWaLink(msg?: string): string {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg || CONFIG.defaultMsg)}`;
}

function trackClick(service: string, placement: string) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_click",
      service: service || "general",
      placement: placement || "other",
      page_path: window.location.pathname
    });
  }
}

export default function App() {
  const handleCtaClick = (service: string, placement: string) => {
    trackClick(service, placement);
  };

  const downloadHtmlFile = async () => {
    try {
      const res = await fetch('/deploy.html');
      const text = await res.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'index.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      window.location.href = '/deploy.html';
    }
  };

  return (
    <>
      <header>
        <div className="wrap">
          <a href="#inicio" aria-label="Day One Digital, início">
            <img 
              src="/dayone-logo.jpg" 
              alt="Day One Digital" 
              width={285} 
              height={260} 
            />
          </a>
          <nav aria-label="Principal">
            <div className="links">
              <a href="#solucoes">Soluções</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#duvidas">Dúvidas</a>
            </div>
            <details className="m-menu">
              <summary>Menu</summary>
              <div>
                <a href="#solucoes">Soluções</a>
                <a href="#como-funciona">Como funciona</a>
                <a href="#duvidas">Dúvidas</a>
              </div>
            </details>
            <a 
              className="btn" 
              href={getWaLink(CONFIG.defaultMsg)}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("general", "header")}
            >
              Falar com a D1
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* Hero Section */}
        <section className="hero">
          <div className="wrap">
            <div style={{ maxWidth: '820px' }}>
              <p className="eyebrow">Aquisição de clientes para negócios locais</p>
              <h1>Seu próximo cliente pode estar procurando por você agora.</h1>
              <p className="lead">
                Atraia potenciais clientes com tráfego pago ou transforme visitantes em contatos com uma landing page estratégica. Escolha a solução que seu negócio precisa.
              </p>
              <a 
                className="btn" 
                href={getWaLink("Olá! Conheci a Day One Digital pela página e gostaria de entender qual solução faz mais sentido para o meu negócio.")}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("general", "hero")}
              >
                Quero entender a melhor solução
              </a>
              <p className="aux">Primeiro contato sem compromisso de contratação.</p>
            </div>
          </div>
        </section>

        {/* Identificação da dor */}
        <section>
          <div className="wrap">
            <p className="eyebrow">Identificação da dor</p>
            <h2>Ter um bom serviço é importante. Fazer as pessoas certas chegarem até ele também.</h2>
            <p className="lead">
              Muitos negócios locais entregam um bom trabalho, mas ainda dependem de indicações, publicações esporádicas ou ações de divulgação sem uma estratégia definida.
            </p>
            <div className="cards" style={{ marginTop: '40px' }}>
              <div>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="#D9AD4B" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2.5 20c.8-3.5 3.3-5.5 6.5-5.5s5.7 2 6.5 5.5M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.8c1.6.9 2.5 2.8 3 5.2" />
                </svg>
                <h3>Poucos contatos novos</h3>
                <p>Você quer alcançar pessoas além dos clientes que já conhecem sua empresa.</p>
              </div>
              <div>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="#D9AD4B" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V15M12 18h.01" />
                </svg>
                <h3>Dúvidas sobre onde investir</h3>
                <p>Você não sabe se precisa anunciar, melhorar sua oferta ou estruturar uma página.</p>
              </div>
              <div>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="#D9AD4B" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 5h16v11H9l-5 4z" />
                  <path d="M8 9h8M8 12h5" />
                </svg>
                <h3>Interesse que não vira contato</h3>
                <p>Pessoas acessam seus canais, mas nem sempre encontram informações suficientes para dar o próximo passo.</p>
              </div>
            </div>
            <p className="lead" style={{ marginTop: '40px' }}>
              <strong style={{ color: 'var(--fg)' }}>O primeiro passo é identificar o gargalo certo.</strong> Em alguns negócios, o desafio está em atrair público. Em outros, está em apresentar melhor o serviço e facilitar o contato comercial.</p>
          </div>
        </section>

        {/* Soluções */}
        <section id="solucoes">
          <div className="wrap">
            <p className="eyebrow">Soluções</p>
            <h2>Duas soluções. Objetivos claros.</h2>
            <p className="lead">Contrate o serviço que faz sentido para o momento do seu negócio.</p>
            <div className="sol" style={{ marginTop: '40px' }}>
              <article>
                <p className="tag">SOLUÇÃO 01</p>
                <h3>Gestão de tráfego pago</h3>
                <p className="sub">Para empresas que precisam alcançar potenciais clientes.</p>
                <p className="lead" style={{ fontSize: '16px' }}>
                  Planejamento e gestão de campanhas para colocar sua oferta diante de pessoas com potencial interesse nos seus produtos ou serviços.
                </p>
                <ul>
                  <li>Planejamento de campanhas no Google Ads ou Meta Ads.</li>
                  <li>Segmentação por público, localização e intenção.</li>
                  <li>Configuração de conversões, quando aplicável.</li>
                  <li>Acompanhamento de custos e qualidade dos contatos.</li>
                  <li>Otimizações orientadas pelos dados.</li>
                </ul>
                <p className="note">O orçamento pago às plataformas é separado do valor da gestão.</p>
                <a 
                  className="btn" 
                  href={getWaLink("Olá! Tenho interesse em gestão de tráfego pago para meu negócio. Gostaria de entender como funciona o serviço.")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick("traffic_management", "service")}
                >
                  Tenho interesse em tráfego pago
                </a>
              </article>

              <article className="lp">
                <p className="tag">SOLUÇÃO 02</p>
                <h3>Criação de landing pages</h3>
                <p className="sub">Para empresas que precisam apresentar melhor seus serviços e gerar contatos.</p>
                <p className="lead" style={{ fontSize: '16px' }}>
                  Uma página planejada para explicar sua oferta, responder às principais dúvidas e direcionar o visitante para o WhatsApp, formulário ou pedido de orçamento.
                </p>
                <ul>
                  <li>Estrutura de conteúdo orientada à conversão.</li>
                  <li>Copy focada no problema e na solução do cliente.</li>
                  <li>Design responsivo para celular e computador.</li>
                  <li>Botões de contato e integração com WhatsApp.</li>
                  <li>Configuração de mensuração, conforme o escopo.</li>
                </ul>
                <p className="note">Domínio, hospedagem, integrações e eventuais custos recorrentes devem ser definidos na proposta.</p>
                <a 
                  className="btn" 
                  href={getWaLink("Olá! Tenho interesse em criar uma landing page para meu negócio. Gostaria de entender como funciona o serviço.")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick("landing_page", "service")}
                >
                  Quero criar minha landing page
                </a>
              </article>
            </div>
            <p className="aux">Os dois serviços são independentes. Você não precisa contratar ambos.</p>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona">
          <div className="wrap">
            <p className="eyebrow">Como funciona</p>
            <h2>Da estratégia à execução, com um processo claro.</h2>
            <ol className="steps" style={{ marginTop: '40px' }}>
              <li>
                <b>01</b>
                <h3>Entendimento do negócio</h3>
                <p>Conversamos sobre seus serviços, clientes, região de atendimento e objetivo comercial.</p>
              </li>
              <li>
                <b>02</b>
                <h3>Definição da solução</h3>
                <p>Identificamos se a prioridade é atrair público, melhorar a página de conversão ou trabalhar as duas frentes em momentos diferentes.</p>
              </li>
              <li>
                <b>03</b>
                <h3>Implementação</h3>
                <p>Executamos o serviço contratado, configuramos os elementos necessários e validamos o funcionamento.</p>
              </li>
              <li>
                <b>04</b>
                <h3>Acompanhamento</h3>
                <p>Conforme o serviço contratado, analisamos indicadores e identificamos oportunidades de melhoria.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Método e confiança */}
        <section>
          <div className="wrap">
            <p className="eyebrow">Método e confiança</p>
            <h2>Estratégia antes de execução.</h2>
            <p className="lead">Cada ação parte de uma necessidade comercial, com objetivos definidos e um processo transparente.</p>
            <div className="principles" style={{ marginTop: '40px' }}>
              <div>
                <h3>Objetivo claro</h3>
                <p>Cada ação parte de uma necessidade comercial.</p>
              </div>
              <div>
                <h3>Execução estruturada</h3>
                <p>Campanhas e páginas com um propósito definido.</p>
              </div>
              <div>
                <h3>Decisões por dados</h3>
                <p>Acompanhamento dos indicadores aplicáveis.</p>
              </div>
              <div>
                <h3>Transparência</h3>
                <p>Escopo, investimento e expectativas alinhados antes do início.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section id="duvidas">
          <div className="wrap">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2>Antes de chamar, as respostas.</h2>
            <div className="faq" style={{ marginTop: '40px' }}>
              <details>
                <summary>Preciso contratar tráfego e landing page juntos?</summary>
                <p>Não. Você pode contratar cada serviço separadamente. A recomendação depende do objetivo e da estrutura atual do seu negócio.</p>
              </details>
              <details>
                <summary>Quanto preciso investir em tráfego pago?</summary>
                <p>O orçamento depende do mercado, da região, da concorrência e do objetivo da campanha. O investimento em anúncios é separado da gestão, e o valor deve ser definido antes do início.</p>
              </details>
              <details>
                <summary>Já tenho Instagram. Preciso de uma landing page?</summary>
                <p>Não necessariamente. A landing page é útil quando você precisa apresentar uma oferta específica, organizar informações e facilitar uma ação como pedir orçamento ou agendar.</p>
              </details>
              <details>
                <summary>Em quanto tempo começo a ter resultados?</summary>
                <p>Não existe prazo universal. A campanha precisa de configuração, dados e otimizações; os resultados também dependem da oferta, da demanda e do atendimento comercial.</p>
              </details>
              <details>
                <summary>Vocês garantem clientes ou vendas?</summary>
                <p>Não seria responsável garantir vendas. O trabalho é estruturado para atrair potenciais clientes e melhorar o caminho até o contato, com acompanhamento dos indicadores previstos no escopo.</p>
              </details>
              <details>
                <summary>Como funciona a contratação?</summary>
                <p>O primeiro passo é uma conversa para entender o negócio. Depois, definimos a solução, o escopo, o investimento, os prazos e as responsabilidades antes de iniciar.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Próximo passo */}
        <section className="final">
          <div className="wrap">
            <div>
              <p className="eyebrow">Próximo passo</p>
              <h2>Seu negócio tem espaço para crescer. Vamos descobrir o melhor caminho.</h2>
              <p className="lead">
                Conte um pouco sobre sua empresa e seu principal desafio. Vamos conversar sobre como tráfego pago ou uma landing page podem contribuir para seu objetivo.
              </p>
            </div>
            <div>
              <a 
                className="btn" 
                href={getWaLink(CONFIG.defaultMsg)}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("general", "final")}
              >
                Falar com a D1 pelo WhatsApp
              </a>
              <p className="aux">Primeiro contato sem compromisso de contratação.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div>
            <img 
              src="/dayone-logo.jpg" 
              alt="Day One Digital" 
              width={285} 
              height={260} 
            />
            <p><strong style={{ color: 'var(--fg)' }}>Day One Digital</strong></p>
            <p>Tráfego pago e landing pages estratégicas para negócios locais.</p>
          </div>
          <div>
            <ul>
              <li><a href="#solucoes">Soluções</a></li>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#duvidas">Dúvidas</a></li>
            </ul>
          </div>
          <div>
            <p>Contato oficial pelo WhatsApp, pelo botão desta página.</p>
          </div>
        </div>

        <div className="wrap" style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--edge)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
            © {new Date().getFullYear()} Day One Digital. Todos os direitos reservados.
          </p>
          <button
            type="button"
            onClick={downloadHtmlFile}
            style={{
              background: '#D9AD4B',
              color: '#050505',
              border: 'none',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '2px',
              transition: 'filter 0.2s'
            }}
          >
            📥 Baixar index.html (Deploy)
          </button>
        </div>
      </footer>
    </>
  );
}
