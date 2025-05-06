import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <Layout>
      <SEO 
        title="Términos de Servicio - The Game Changer Books"
        description="Términos de servicio de The Game Changer Books. Información sobre el uso de nuestros servicios y recursos."
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos de Servicio</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-600 mb-4">
              Al acceder y utilizar nuestros servicios, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder a nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso del Servicio</h2>
            <p className="text-gray-600 mb-4">
              Nuestros servicios están disponibles para uso personal y no comercial. Al utilizar nuestros servicios, aceptas:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>No compartir tu cuenta con terceros</li>
              <li>No distribuir o revender nuestro contenido</li>
              <li>No utilizar nuestros servicios para fines ilegales</li>
              <li>No intentar acceder a áreas restringidas del sitio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propiedad Intelectual</h2>
            <p className="text-gray-600 mb-4">
              Todo el contenido disponible a través de nuestros servicios, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Libros y materiales descargables</li>
              <li>Diseños y elementos gráficos</li>
              <li>Contenido del sitio web</li>
              <li>Marcas comerciales y logos</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Está protegido por derechos de autor y otras leyes de propiedad intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitación de Responsabilidad</h2>
            <p className="text-gray-600 mb-4">
              No nos hacemos responsables por:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Daños indirectos o consecuentes</li>
              <li>Pérdida de datos o interrupción del servicio</li>
              <li>Contenido de sitios web de terceros enlazados</li>
              <li>Acciones de otros usuarios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Modificaciones</h2>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Para cualquier consulta sobre estos términos, contáctanos en:
            </p>
            <p className="text-gray-600">
              Email: legal@thegamechangerbooks.com
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
} 