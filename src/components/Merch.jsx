import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO

const Merch = () => {
  const merchItems = [
    /* tee shirt */
    {
      id: 1,
      name: "Official Team T-Shirt",
      price: "£25",
      description: "High-quality cotton T-shirt with team logo.",
      store: "Click below to visit our store for more color and size options.",
      link: "https://www.etsy.com/uk/listing/1707935381/brewers-organic-classic-tee-unisex?click_key=5ca08dfd1ccc5248abce2736f3614a7b45a74500%3A1707935381&click_sum=cd3fe343&ref=shop_home_active_4",
      image: "./images/merch/blueTee.webp",
    },
    /* sweatshirt */
    {
      id: 2,
      name: "Team Sweatshirt",
      price: "£35",
      description: "Cozy sweatshirt to keep you warm on game day.",
      store: "Click below to visit our store for more color and size options.",
      link: "https://www.etsy.com/uk/listing/1693727970/unisex-heavy-blend-crewneck-sweatshirt?click_key=7f139a7407fa1fa573af6162fa5c92167244bcdd%3A1693727970&click_sum=98f81977&ref=shop_home_active_2",
      image: "./images/merch/sweatshirtgray.webp",
    },
    /* mug */
    {
      id: 3,
      name: "Team Mug",
      price: "£10",
      description: "Ceramic mug for your favorite drinks.",
      store: "Click below to visit our store for more color and size options.",
      link: "https://www.etsy.com/uk/listing/1694289938/brewers-brew-time-mug?click_key=b0b74599f9b4883b31ffc4c35c9821f0ee7c7c52%3A1694289938&click_sum=367a18a5&ref=shop_home_active_1",
      image: "./images/merch/mug.webp",
    },
  ];

  return (
    <>
    <Helmet>
        <title>Shop Merch | Haddington Brewers Basketball Club</title>
        <meta name="description" content="Get official Haddington Brewers Basketball Club merchandise. Shop for jerseys, t-shirts, hats, and more." />
        <meta name="keywords" content="Basketball Merch, Haddington Basketball Merchandise, Buy Team Gear, Jerseys, Sports Apparel, Club Shop" />
    </Helmet>
    <div className="container mx-auto bg-customBlue text-customWhite py-12 relative top-10">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-center text-5xl font-extrabold uppercase tracking-wide text-customRed">
        &#127936;Team Merchandise &#127936;
        </h1>
        <p className="text-center text-lg mt-4 opacity-80">
          Get your official team gear and show your support!
        </p>
      </section>

      {/* Merchandise Items */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
          {merchItems.map((item) => (
            <div
              key={item.id}
              onClick={() => window.open(item.link, "_blank")}
              className="bg-customWhite bg-opacity-20 rounded-lg shadow-lg p-6 flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
            >
              {/* Product Image */}
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
              {/* Product Name */}
              <h3 className="text-2xl font-bold mb-2 text-center">
                {item.name}
              </h3>
              {/* Product Description */}
              <p className="text-sm opacity-80 mb-4 text-center">
                {item.description}
              </p>
              {/* Product Price */}
              <p className="text-lg font- text-center mb-4">
                {item.price}
              </p>
              {/* Store Description */}
              <p className="text-base font-light text-center mb-4">
                {item.store}
              </p>
              {/* Store Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  window.open(item.link, "_blank");
                }}
                className="bg-customRed text-customWhite py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Visit Store
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
    
  );
};

export default Merch;
