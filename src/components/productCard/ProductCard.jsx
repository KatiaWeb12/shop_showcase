import "./ProductCard.css";

export default function ProductCard({cardInfo}) {
  return (
    <div className="product_card">
      <img src={cardInfo.image} alt="" />
      <div className="card_text">
         <p className="product_title">{cardInfo.title.length > 27 ? cardInfo.title.slice(0, 27) + '...' : cardInfo.title}</p>
         <div className="card_info">
            <p className="description">{cardInfo.description.length > 95 ? cardInfo.description.slice(0, 95) + '...' : cardInfo.description}</p>
            <p className="price">{cardInfo.price}$</p>
         </div>
      </div>
    </div>
  );
}
