import React, { useState } from "react";
import CryptoListItem from "components/moleculs/CryptoListItem/CryptoListItem";
import { cryptos as cryptosData } from "data/cryptos";
import { Wrapper } from "components/organisms/CryptoList/CryptoList.styles";
import { Title } from "components/atoms/Title/Title";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState(cryptosData);

  const followCrypto = (id) => {
    const newCryptos = cryptos.filter((crypto) => crypto.id !== id);
    setCryptos(newCryptos);
    console.log(cryptos);
  };

  return (
    <Wrapper>
      <Title text="Cryptos to follow" />
      {cryptos.slice(0, 4).map(({ name, imgSrc, id }) => (
        <CryptoListItem name={name} imgSrc={imgSrc} id={id} followCrypto={followCrypto} />
      ))}
    </Wrapper>
  );
};

export default CryptoList;
