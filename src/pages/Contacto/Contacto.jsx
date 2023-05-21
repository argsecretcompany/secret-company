import { useState } from 'react';
import { collection, query, where, getDocs, setDoc, doc, updateDoc, getDoc, getFirestore } from 'firebase/firestore';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './contacto.css';

const Contacto = () => {
  const db = getFirestore();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usuariosRef = collection(db, 'contacto');
      const q = query(usuariosRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // No se encontró un documento con el email, crear uno nuevo
        await setDoc(doc(db, 'contacto', email), {
          nombre,
          email,
          comentarios: [{
            nombre,
            comentario,
          }],
        });
      } else {
        // Documento existente con el email
        // Agregar un nuevo comentario al array existente
        const docRef = querySnapshot.docs[0].ref;
        const docSnapshot = await getDoc(docRef);
        const docData = docSnapshot.data();

        await updateDoc(docRef, {
          comentarios: [...docData.comentarios, {
            nombre,
            comentario,
          }],
        });
      }

      // Limpiar el formulario
      setNombre('');
      setEmail('');
      setComentario('');

      console.log('Datos enviados correctamente');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <>
      <NavBar />

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre completo:</label>
        <input id='name' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label htmlFor='email'>Email:</label>
        <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='comentario'>Comentario:</label>
        <textarea id='comentario' value={comentario} onChange={(e) => setComentario(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>

      <Footer />
    </>
  );
};

export default Contacto;