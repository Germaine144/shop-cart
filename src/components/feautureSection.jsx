import React from "react";
import ProductCard from "./productCard";
    const data = [
        { id: 0, img: "4.jpg", name: "Dried Mango", paragraphy: "lorem", price: "$500" },
        { id: 1, img: "5.jpg", name: "Crunchy", paragraphy: "lorem", price: "$700" },
        { id: 2, img: "6.jpg", name: "Dried Mango", paragraphy: "lorem", price: "$400" },
        { id: 3, img: "8.jpg", name: "Crunchy", paragraphy: "lorem", price: "$200" },
        { id: 4, img: "9.jpg", name: "Dried Mango", paragraphy: "lorem", price: "$600" },
        { id: 5, img: "10.jpg", name: "Dried Mango", paragraphy: "lorem", price: "$100" },
        { id: 6, img: "11.jpg", name: "Crunchy", paragraphy: "lorem", price: "$300" },
        { id: 7, img: "12.jpg", name: "Dried Mango", paragraphy: "lorem", price: "$120" },
        { id: 8, img: "13.jpg", name: "Crunchy", paragraphy: "lorem", price: "$2200" },
        { id: 9, img: "14.jpg", name: "Dried Mango", paragraphy: "lorem", price: "$900" },
        { id: 10, img: "15.jpg", name: "Dried Mango", paragraphy: "lorem", price: "$900" },
     
    ];

function FeatureSection (){
return (
    <div className=" container pt-16">
         <div className="flex justify-between items-center">
            <div>
            <h3>Dessert and Snacks</h3>
            <p>Buy Fresh Dessert and Snacks</p>
            </div>
            <div className="space-x-8 mt-8 lg:mt-0">
                <button className="text-white bg-orange-400 font-semibold rounded-lg hover:text-accent p-3">Dessert</button>
                <button className="text-white bg-orange-400 font-semibold rounded-lg hover:text-accent p-3">Snacks</button>
            </div>
         </div>
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-6">
            <div className="w-full object-cover rounded-lg">
                <img src="4.jpg" alt="banner"/>
            </div>
            {data.map((el, index) => (
          <ProductCard
          key={index}
          img={`/assets/images/${el.img}`}
          name={el.name}
          price={el.price}
          count={el.count || 0}
          paragraphy={el.paragraphy}
        />
        ))}
         </div>
    </div>
)
}
export default FeatureSection ;