import './Hero.css';
import { TypeAnimation } from 'react-type-animation';
const Speech = () => {
  return (
    <div className="bubbleContainers">
      <div className="bubbleContainer One">
        <div className="bubble-one">
          <TypeAnimation
            sequence={[
              'Merhaba, buzdolabım soğutmuyor ve ses yapıyor. Yardımcı olabilir misiniz?',
              3000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={60}
            style={{
              fontSize: '16px',
              whiteSpace: 'pre-line',
              lineHeight: '1',
              color: '#333',
              padding: '20px',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'monospace',
            }}
          />
        </div>
        <img src="/man.png" alt="Müşteri" />
      </div>
      <div className="bubbleContainer Two">
        <img src="/tamirci.png" alt="Tamirci" />
        <div className="bubble-two">
          <TypeAnimation
            sequence={[
              1000,
              'Elbette yardımcı oluruz!',
              1000,
              'En kısa zamanda adresinize geleceğiz. Servis öncesi sizi arayacağız.',
            ]}
            wrapper="span"
            speed={40}
            deletionSpeed={60}
            repeat={Infinity}
            style={{
              fontSize: '16px',
              whiteSpace: 'pre-line',
              lineHeight: '1',
              color: '#333',
              padding: '20px',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'monospace',
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Speech;
