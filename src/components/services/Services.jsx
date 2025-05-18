import './Services.css';
const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <div className="image">
          <img src="/klima.png" alt="Klima Tamiri" />
        </div>
        <div className="aciklama">
          <h2>Klima Tamiri</h2>
          <p>
            Klima soğutmuyor, su akıtıyor ya da çalışmıyor mu? Deneyimli teknik
            ekibimizle tüm klima arızalarına hızlı ve garantili çözüm sunuyoruz.
          </p>
        </div>
      </div>
      <div className="service">
        <div className="image">
          <img src="/buzdolabı.png" alt="Buzdolabı Tamiri" />
        </div>
        <div className="aciklama">
          <h2>Buzdolabı Tamiri</h2>
          <p>
            Buzdolabınız yeterince soğutmuyor mu? Profesyonel teknik ekibimizle
            arızaları yerinde çözüyoruz.
          </p>
        </div>
      </div>
      <div className="service">
        <div className="image">
          <img src="/derindondurucu.png" alt="Derin Dondurucu Tamiri" />
        </div>
        <div className="aciklama">
          <h2>Derin Dondurucu Tamiri</h2>
          <p>
            Derin dondurucunuz soğutmuyor mu ya da buzlanma sorunu mu
            yaşıyorsunuz? Alanında uzman ustalarımızla arızaları kısa sürede
            gideriyoruz.
          </p>
        </div>
      </div>
      <div className="service">
        <div className="image">
          <img src="/camacırM.png" alt="Çamaşır Makinesi Tamiri" />
        </div>
        <div className="aciklama">
          <h2>Çamaşır Makinesi Tamiri</h2>
          <p>
            Makineniz su almıyor, ses yapıyor ya da durduk yere kapanıyor mu?
            Hemen servis çağırın.
          </p>
        </div>
      </div>
      <div className="service">
        <div className="image">
          <img src="/bulasıkM.png" alt="Bulaşık Makinesi Tamiri" />
        </div>
        <div className="aciklama">
          <h2>Bulaşık Makinesi Tamiri</h2>
          <p>
            Yıkama yapmıyor, su boşaltmıyor ya da arıza kodu veriyor mu? Uygun
            fiyatlarla garantili tamir hizmeti.
          </p>
        </div>
      </div>
      <div className="service">
        <div className="image">
          <img src="/ElectriliOcak.png" alt="Fırın ve Ocak Tamiri" />
        </div>
        <div className="aciklama">
          <h2>Fırın ve Ocak Tamiri</h2>
          <p>
            Fırın ısınmıyor ya da ocak ateşlemiyor mu? Hızlı ve güvenilir tamir
            için bizimle iletişime geçin.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
