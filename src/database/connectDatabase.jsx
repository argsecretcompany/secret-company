import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const ProductList = () => {
    const [productos, setProducts] = useState([]);

    useEffect(() => {
        const cachedProducts = JSON.parse(localStorage.getItem('productosCache'));
        if (cachedProducts) {
            setProducts(cachedProducts);
        }

        const db = getFirestore();
        const query = collection(db, "products");

        getDocs(query).then((querySnapshot) => {
            const results = [];
            querySnapshot.forEach((doc) => {
                results.push(doc.data());
            });

            localStorage.setItem('productosCache', JSON.stringify(results));

            setProducts(results);
        });
    }, []);

    return productos;
};

export default ProductList;
