const PineBorder = () => {
  const imageSrc = `${import.meta.env.BASE_URL}images/Captura-de-pantalla-2021-06-27-a-las-16.03.12.png`;
  return (
    <div className="w-full overflow-hidden bg-[#f5f5dc]">
      <img
        src={imageSrc}
        alt="Separador de pinos"
        className="w-full h-8 md:h-10 object-cover"
      />
    </div>
  );
};

export default PineBorder;
