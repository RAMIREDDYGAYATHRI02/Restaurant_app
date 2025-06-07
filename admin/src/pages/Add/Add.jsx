import React, { useState, useRef, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./Add.css";
import axios from "axios";
import { toast } from "react-toastify";

const inputStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "4px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
};

const selectStyle = {
  ...inputStyle,
};

const Add = () => {
  const url = "http://localhost:4000";

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const fileInputRef = useRef(null);

  // Update image preview URL when image changes
  useEffect(() => {
    if (!image) {
      setImagePreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setImagePreview(objectUrl);

    // Cleanup URL object when component unmounts or image changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("image", image);

      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        // Reset form data
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        // Clear image states and file input value
        setImage(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        // Handle failure (optional)
        console.error("Submission failed:", response.data.message);
        toast.error(response.data.message)
      }
      toast.success(response.data.message)

    } catch (error) {
      // Handle error (optional)
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={imagePreview || assets.upload_area}
              alt="upload-img"
              style={{ cursor: "pointer" }}
            />
          </label>
          <input
            ref={fileInputRef}
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            placeholder="Type here"
            style={inputStyle}
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            placeholder="Write content here"
            required
            style={textareaStyle}
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}
              style={selectStyle}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="number"
              onChange={onChangeHandler}
              value={data.price}
              name="price"
              placeholder="$20"
              style={inputStyle}
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
