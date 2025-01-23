const Map = () => {
  return (
    <section className="p-4 bg-gray-100 md:flex items-center justify-center gap-[10rem]">
      <div className="text-slate-900">
        <h2 className="text-3xl font-bold mb-8">Our Location</h2>
        <p className="mb-4">
          Visit us at our office or find us on the map. We&apos;re happy to help
          you with all your queries.
        </p>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.3522987370798!2d78.7764155!3d28.828369600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afb07ba8bbcdb%3A0x3e8be9ce1d1435e!2sMetalberg%20Inc!5e0!3m2!1sen!2sin!4v1737657946603!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "1rem" }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
