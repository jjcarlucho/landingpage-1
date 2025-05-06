import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from '../components/DashboardLayout';

interface Book {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  downloadUrl: string;
}

interface Bonus {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [books, setBooks] = useState<Book[]>([]);
  const [bonuses, setBonuses] = useState<Bonus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserContent = async () => {
      if (!user) return;

      try {
        // Obtener libros disponibles
        const booksQuery = query(collection(db, 'books'));
        const booksSnapshot = await getDocs(booksQuery);
        const booksData = booksSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Book[];
        setBooks(booksData);

        // Obtener bonos disponibles
        const bonusesQuery = query(collection(db, 'bonuses'));
        const bonusesSnapshot = await getDocs(bonusesQuery);
        const bonusesData = bonusesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Bonus[];
        setBonuses(bonusesData);
      } catch (error) {
        console.error('Error fetching user content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserContent();
  }, [user]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Sección de Libros */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mis Libros</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-6">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{book.description}</p>
                  <a
                    href={book.downloadUrl}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Bonos */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bonos Disponibles</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((bonus) => (
              <div
                key={bonus.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{bonus.description}</p>
                  <a
                    href={bonus.downloadUrl}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar Bono
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
} 