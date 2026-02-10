const PineBorder = () => {
  const imageSrc = `${import.meta.env.BASE_URL}images/Captura-de-pantalla-2021-06-27-a-las-16.03.12.png`;
  return (
    <div className="w-full overflow-hidden bg-[#f5f5dc]">
      <div
        className="w-full h-8 md:h-10"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: 'auto 100%',
        }}
        aria-label="Separador de pinos"
        role="img"
      />
    </div>
  );
};

export default PineBorder;
