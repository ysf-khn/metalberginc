const WhatsAppButton = () => {
  const phoneNumber = "+919720999830";
  const message =
    "Hello, I am interested in your metal products and home décor. Could you please provide more details?";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="z-40 fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M20.52 3.48A11.68 11.68 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.03L0 24l6.14-1.6A12.04 12.04 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52ZM12 22c-1.87 0-3.69-.52-5.3-1.48l-.38-.23-3.63.95.97-3.58-.24-.38A10.02 10.02 0 0 1 2 12C2 6.48 6.48 2 12 2c2.68 0 5.19 1.05 7.07 2.93A10.02 10.02 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.28-7.9c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.64.15-.18.3-.73.97-.9 1.17-.16.2-.33.22-.61.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.46-.52.16-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.63-1.52-.87-2.1-.23-.55-.46-.48-.63-.49h-.53c-.18 0-.48.07-.73.35-.25.28-.95.92-.95 2.25 0 1.32.98 2.61 1.13 2.8.15.2 1.93 2.97 4.67 4.18.65.28 1.15.45 1.55.57.65.2 1.25.17 1.72.1.52-.08 1.76-.73 2.01-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.56-.35Z" />
      </svg>
      Chat with us
    </a>
  );
};

export default WhatsAppButton;
