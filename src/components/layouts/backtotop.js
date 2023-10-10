import { useState, useEffect, useRef } from 'react';

function BackToTop() {

  const [visible, setVisible] = useState(false);
  
  const windowRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    windowRef.current = window;

    if (windowRef.current) {
      windowRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (windowRef.current) {
        windowRef.current.removeEventListener('scroll', handleScroll);
      }
    }

  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  return (
    <div>
      {visible && 
        <button className="show" id="back-to-top" onClick={scrollToTop}>
        </button>
      }
    </div>
  );
}

export default BackToTop;