import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO 
        title="Política de Privacidad - The Game Changer Books"
        description="Política de privacidad de The Game Changer Books. Información sobre cómo recopilamos, usamos y protegemos tus datos personales."
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-600 mb-4">
              Recopilamos la siguiente información personal:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Preferencias de comunicación</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso de la Información</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Proporcionar acceso a nuestros libros y recursos</li>
              <li>Enviar actualizaciones y contenido relevante</li>
              <li>Mejorar nuestros servicios</li>
              <li>Comunicarnos con los usuarios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Protección de Datos</h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Acceso no autorizado</li>
              <li>Alteración o destrucción</li>
              <li>Divulgación no autorizada</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Tus Derechos</h2>
            <p className="text-gray-600 mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar información incorrecta</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Para cualquier consulta sobre nuestra política de privacidad, contáctanos en:
            </p>
            <p className="text-gray-600">
              Email: privacy@thegamechangerbooks.com
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
} 