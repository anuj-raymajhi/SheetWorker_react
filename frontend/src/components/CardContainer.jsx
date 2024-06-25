import React, { useState, useRef, useEffect } from 'react';
import Card from '../components/ColumnCard';  // Import the Card component

const CardContainer = ({ cards }) => {
    const [focusedIndex, setFocusedIndex] = useState(0); // State to track the focused card
    const containerRef = useRef(null); // Ref to the container to access its scroll properties

    // Function to update focus based on scroll position
    const handleScroll = () => {
        const container = containerRef.current;
        const cardWidth = container.firstChild.offsetWidth; // Assuming all cards have the same width
        const scrollLeft = container.scrollLeft;
        const newFocusedIndex = Math.round(scrollLeft / cardWidth); // Calculate focused card index based on scroll position
        setFocusedIndex(newFocusedIndex);
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);

        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="flex justify-start items-center overflow-x-scroll scroll-smooth p-4 gap-4 h-[750px] w-[900px]">
            {cards.map((card, index) => (
                <div 
                    key={index} 
                    className="snap-center shrink-0"
                    onClick={() => index === focusedIndex && setFocusedIndex(index)}  // Only clickable if in focus
                >
                    <Card year={card.value}/>
                </div>
            ))}
        </div>
    );
};

export default CardContainer;
