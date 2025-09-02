"use client";

export default function WhatsAppButton() {
  return (
    
    <a
      href="https://wa.me/51939162863"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full bg-white p-4 ring-1 ring-gray-900/5 shadow-lg hover:bg-green-50 transition animate-bounce"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="700"
      style={{ width: "100px", height: "100px" }}
    >
      <img
        src="/img/whatsapp_logo.png"
        alt="WhatsApp"
        style={{ width: "90px", height: "90px" }}
      />
    </a>
  );
}
