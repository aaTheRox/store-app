const formatPrice = (price: number) => {
  const formattedValue = Intl.NumberFormat("en", {
    currency: "EUR",
    style: "currency",
  }).format(price);

  // const euro = new Intl.NumberFormat("es-EU", {
  //   style: "currency",
  //   currency: "EUR",
  // });

  return formattedValue;
};
export default formatPrice;
