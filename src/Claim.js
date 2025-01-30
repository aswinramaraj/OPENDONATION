import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./main_component/ProductPage.css"; 
import axios from "axios";

const ClaimPage = () => {
    const navi = useNavigate()
  const location = useLocation();
  const item = location.state?.item; 
  
  var item_name = item.item

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
    
      const response = await axios.post('http://localhost:7010/claim-data', formData);
      console.log("Form submitted:", response);
      if(response.status === 201)
        {
            console.log(item)
            axios.post('http://localhost:7010/delete-data',  {name : item_name} )
            .then((res) => {
                console.log("Sent", res);
            })
            .catch((err) => {
                console.log("Error deleting data", err);
            });
            navi("/main/donate_page/donate_things/thank")
        }
      setIsSubmitting(false); // Reset submitting state
      setFormData({
        name: "",
        location: "",
        email: "",
        description: ""
      }); // Reset form data
    } catch (error) {
      setIsSubmitting(false); // Reset submitting state on error
      console.error("Error submitting form:", error);
    }
    
  };

  if (!item) return <p>No data available</p>;

  return (
    <div className="claim-container">
      <div className="claim-card">
        <img src={item.img} alt={item.name} />
        <div className="claim-card-details">
          <h2>{item.name}</h2>
          <p><strong>Location:</strong> {item.loc}</p>
          <p><strong>Description:</strong> {item.des}</p>
          <p><strong>Email:</strong> {item.email}</p>

          <form className="claim-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us why you want to claim this item"
                required
              />
            </div>
            <button type="submit" className="claim-form-button">
              {isSubmitting ? "Submitting..." : "Submit Claim"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClaimPage;
