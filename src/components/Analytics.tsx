import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Inicializar GA4
ReactGA.initialize('G-XXXXXXXXXX'); // Reemplazar con tu ID de GA4

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Enviar vista de página
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null;
} 