/* eslint-disable no-unused-vars */
import './Hero.css';
import Speech from './Speech';
import { Canvas } from '@react-three/fiber';
import Shape from './Shape';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ opacity: 0, y: -50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 2 }}
          className="hTitle"
        >
          <span>Dervişoğlu </span>
          <span className="two">Soğutma</span> <br />
          Beyaz Eşya Teknik Servisi
        </motion.h1>
        <div className="desc">
          <h2>Tamirat Ve Teknik Servis</h2>
          <p>Her Türlü Beyaz Eşaya Tamiratı Ve Bakımı Yapılır</p>
          <div className="esyaList">
            <img id="one" src="/camacırM.png" alt="Çamaşır Makinesi" />
            <img id="two" src="/bulasıkM.png" alt="Bulaşık Makinesi" />
            <img id="three" src="/ElectriliOcak.png" alt="Elektrikli Ocak" />
          </div>
        </div>
      </div>
      <div className="hSection right">
        <Speech />
        <div className="whatsap">
          <a
            href="https://wa.me/905352645648"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whatsapimg.png" alt="WhatsApp" />
          </a>
        </div>
        <div className="call">
          <a
            href="tel:+905352645648"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/call.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="hbg">
        {/**three d */}
        <div className="shape">
          <Canvas>
            <Suspense fallback="loading...">
              <Shape />
            </Suspense>
          </Canvas>
        </div>
        <div className="himg">
          <img src="/tamirci.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
