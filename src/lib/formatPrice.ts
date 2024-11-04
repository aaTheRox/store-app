
const formatPrice = (price: number) => {
    const euro = new Intl.NumberFormat('es-EU', {
        style: 'currency',
        currency: 'EUR',
    });

    return euro.format(price)
}
export default formatPrice