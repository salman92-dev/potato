export default function MapSection() {
  return (
    <section className="w-full bg-black">
      <div className="">

        {/* Map Box */}
        <div className="w-full h-[450px] overflow-hidden shadow-xl">
          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24174.31894918257!2d-74.23464994064418!3d40.76664621099683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1779371317902!5m2!1sen!2s"  style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </section>
  );
}