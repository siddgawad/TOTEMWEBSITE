import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import image1 from "../assets/New folder/image-1.png";
import image2 from "../assets/New folder/image-2.png";
import image3 from "../assets/New folder/image-3.png";

// Reusable ImageDescriptionScroller component
const ImageDescriptionScroller = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const sectionHeight = scrollContainer.clientHeight;
      const scrollTop = scrollContainer.scrollTop;
      const newIndex = Math.floor(scrollTop / sectionHeight);

      if (newIndex >= 0 && newIndex < data.length) {
        setCurrentIndex(newIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [data.length]);

  const { image, description } = data[currentIndex];

  return (
    <div ref={scrollContainerRef} style={styles.scrollContainer}>
      {data.map((item, index) => (
        <div key={index} style={styles.section}>
          <div style={styles.imageContainer}>
            <img src={item.image} alt="Image" style={styles.image} />
          </div>
          <div style={styles.descriptionContainer}>
            <p style={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Sample data
const imageDescriptionData = [
  {
    image: image1,
    description: "Description for image 1",
  },
  {
    image: image2,
    description: "Description for image 2",
  },
  {
    image: image3,
    description: "Description for image 3",
  },
];

const Test = () => {
  return (
    <>
      <Navbar />
      <ImageDescriptionScroller data={imageDescriptionData} />
      <Footer />
    </>
  );
};

const styles = {
  scrollContainer: {
    height: "100vh", // Full viewport height
    overflowY: "scroll", // Enable vertical scrolling
    overflowX: "hidden", // Hide horizontal scrollbar
    margin: 0,
    padding: 0,
    border: "none",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE and Edge
  },
  scrollContainerWebkit: {
    height: "100vh", // Full viewport height
    overflowY: "scroll", // Enable vertical scrolling
    overflowX: "hidden", // Hide horizontal scrollbar
    margin: 0,
    padding: 0,
    border: "none",
  },
  section: {
    display: "flex",
    flexDirection: "row", // Align items side by side
    height: "100vh", // Full viewport height for each section
    width: "100vw", // Full viewport width
  },
  imageContainer: {
    flex: 1, // Take up half of the width
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    overflow: "hidden",
    borderRight: "1px solid #ccc", // Divider between image and description
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  descriptionContainer: {
    flex: 1, // Take up the other half of the width
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    overflow: "hidden",
  },
  description: {
    fontSize: "1.2rem",
    textAlign: "left",
    lineHeight: "1.5",
    padding: "20px",
  },
};

const globalStyles = `
  /* Webkit-based browsers */
  .scrollContainerWebkit::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Webkit-based browsers */
  }
`;

export default Test;
