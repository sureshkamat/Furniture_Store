import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Make an API call to fetch the product details using the provided productId
    // Replace this with your actual API call
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://course-api.com/react-store-single-product?id=${id}`
        );
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const {
    stock,
    price,
    featured,
    colors,
    category,
    images,
    reviews,
    stars,
    name,
    description,
    company,
  } = product;

  return (
    <div className={styles["product-page"]}>
      <div className={styles["product-images"]}>
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.filename} />
        ))}
      </div>
      <div className={styles["product-details"]}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
        <p>Category: {category}</p>
        <p>Company: {company}</p>
        <p>Reviews: {reviews}</p>
        <p>Rating: {stars} stars</p>
        <ul>
          {colors.map((color, index) => (
            <li key={index} style={{ backgroundColor: color }}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
