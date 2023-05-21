import React, { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import './paycart.css';

initMercadoPago('APP_USR-46e63112-b644-4e98-a54f-957a411776ae', { locale: 'es-AR' });

const PayCart = ({ productos }) => {
  const [preferenceId, setPreferenceId] = useState("");
  const [walletLoaded, setWalletLoaded] = useState(false);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const items = productos.map(producto => ({
    title: `${producto.name} - Talle: ${producto.talle}`,
    unit_price: 10 * 1.055,
    currency_id: "ARS",
    quantity: producto.cantidad
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
          method: "POST",
          headers: {
            Authorization: "Bearer APP_USR-8842171396041507-051919-9a7f455f0217de32eaf0374d60070293-1378960406",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: items,
          }),
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        console.log('data', data);
        setPreferenceId(data.id);
        setFetchCompleted(true);
      } catch (error) {
        console.log(error);
      }
    };

    setPreferenceId(""); // Reiniciar preferenceId
    setWalletLoaded(false); // Reiniciar walletLoaded
    setFetchCompleted(false); // Reiniciar fetchCompleted

    if (productos.length > 0) {
      fetchData();
    }
  }, [productos, items]);

  useEffect(() => {
    if (preferenceId !== "" && !walletLoaded) {
      setWalletLoaded(true);
    }
  }, [preferenceId, walletLoaded]);

  return (
    <>
      {!fetchCompleted && (
        <div id='loadingPay'>
          <p>Cargando pago...</p>
        </div>
      )}

      {walletLoaded && fetchCompleted && (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      )}
    </>
  );
}

export default PayCart;