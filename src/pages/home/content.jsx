import React from 'react';
import { Link } from 'react-router-dom';
import she from '../../styles/images/she_with_phone.png';
import '../../styles/contentStyles.css'; // Certifique-se de importar o CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importando estilos do Swiper

export default function Content() {
  return (
    <>
      <div className="content">
        <div className="introduction">
          <img className="introduction-image" src={she} alt="Pedro Banks" />
          <p className="introduction-text">
            Pedro Banks is an innovative financial institution dedicated to providing personalized banking solutions. With a focus on technology and customer service, it offers a range of products, including personal and business accounts, loans, and investment options. Committed to community engagement, Pedro Banks actively supports local initiatives and promotes financial literacy among its clients.
          </p>
        </div>
        <button className="create-account-button">
          <Link to="/createaccount">Create Account</Link>
        </button>
      </div>

      <h1 className="main-heading">Account, Credit Card and various solutions to help you at every moment of your life.</h1>
      
      <section className="benefits-section">
        <Swiper
          spaceBetween={5} // Espaço entre os slides
          slidesPerView={2} // Número de slides visíveis
          pagination={{ clickable: true }} // Habilitando a paginação
        >
          {Array(3).fill().map((_, index) => (
            <SwiperSlide key={index}>
              <div className="benefit-card">
                <h2 className="benefit-title">10 days interest free on account limit</h2>
                <div className="benefit-details">
                  <p className="benefit-text">
                    Register and keep your CPF or cell phone as Pix keys at Banks Pedro and save time to manage unexpected expenses
                  </p>
                  <img className="benefit-icon" src="https://img.icons8.com/ios/50/us-dollar-circled--v1.png" alt="Dollar icon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
