const Header = () => {
  return (
    <header className="bg-[#49bc3a] text-white py-3.5 px-4 font-mali">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <div className="flex items-center gap-2.5 flex-1">
          <img src="./wp-content/uploads/2021/06/emailicon.png" alt="Email" className="w-7 h-7" />
          <a href="mailto:ruralcan@gmail.com" className="text-xl hover:underline">
            ruralcan@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 flex-1">
          <a
            href="https://www.facebook.com/RuralCan-Residencia-Canina-Rural-416372205755934/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="./wp-content/uploads/2021/06/Faceicon.png" alt="Facebook" className="w-7 h-7" />
          </a>
          <a
            href="https://www.instagram.com/ruralcan_residenciacaninarural/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="./wp-content/uploads/2021/06/instaicon.png" alt="Instagram" className="w-7 h-7" />
          </a>
        </div>

        <div className="flex items-center justify-end gap-2.5 flex-1">
          <img src="./wp-content/uploads/2021/06/whatsapp.png" alt="Teléfono" className="w-7 h-7" />
          <a href="tel:606616861" className="text-xl hover:underline">
            606616861
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
