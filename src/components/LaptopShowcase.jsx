import React from 'react';

const LaptopShowcase = () => {
  const laptops = [
    {
      id: 1,
      name: "MacBook Pro 13-inch M2",
      price: 1299,
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Dell XPS 15 9520",
      price: 1099,
      image: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "ThinkPad X1 Carbon Gen 10",
      price: 899,
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "ASUS ROG Strix G15",
      price: 1199,
      image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "HP Spectre x360 14",
      price: 799,
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Surface Laptop Studio",
      price: 1399,
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="laptop-showcase">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Laptops</h2>
          <p className="section-subtitle">
            Discover amazing deals on premium laptops from trusted sellers.
          </p>
        </div>

        <div className="laptop-grid">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="laptop-card">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="laptop-image"
              />
              <div className="laptop-info">
                <h3 className="laptop-name">{laptop.name}</h3>
                <div className="laptop-footer">
                  <span className="laptop-price">
                    ${laptop.price.toLocaleString()}
                  </span>
                  <button className="btn-buy">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all-btn">View All Laptops</button>
      </div>
    </section>
  );
};

export default LaptopShowcase;