const serviceAreas = [
  "Vizianagaram", "Srikakulam", "Khammam", "Visakhapatnam",
  "Hyderabad", "Kakinada", "Rajahmundry", "Vijayawada",
];

export function ServiceAreas() {
  return (
    <section className="wrap service-areas" aria-labelledby="service-areas-title">
      <p className="eyebrow">Service areas</p>
      <h2 id="service-areas-title">Where we work.</h2>
      <p>We take on interior design projects across Andhra Pradesh and Telangana.</p>
      <ul>
        {serviceAreas.map((city) => <li key={city}>{city}</li>)}
      </ul>
    </section>
  );
}
