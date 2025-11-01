import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const PostGlowCard = ({ card, index }) => {

  const isAboveMobileDevice = useMediaQuery({ query: '(min-width: 768px)' });

  const cardRefs = useRef([]);
    
  const handleMouseMove = (i) => (e) => {
      const card = cardRefs.current[i];
      
      if(!card) return;

      // Get the mouse position relative to the card
      const  rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      // Calculate the angle from the center of the card
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      card.style.setProperty('--start', angle + 60);
  }
    
  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border rounded-xl p-10 mb-5 break-inside-avoid-column">
        <div className="glow"/>
        {(!isAboveMobileDevice) ? 
          <div className="bg-gray-800 rounded-lg p-4 mt-2 mb-2">
            <div className="">
              <div className="w-full">
                <img
                  src={card.imgPath}
                  alt={card.name}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            </div>
            <p className="font-bold">{card.name}</p>
            <p className="line-clamp-3 text-white-50 text-sm">{card.description}</p>
          </div>
        : 
          <div className="flex items-center bg-gray-800 rounded-lg p-4 mt-2 mb-2 w-full">
            <div className="lg:w-1/6">
              <img
                src={card.imgPath}
                alt={card.name}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
            <div className="ml-4 lg:flex-1">
              <p className="font-bold text-white">{card.name}</p>
              <p className="text-gray-300 text-lg">{card.description}</p>
            </div>
          </div>
        }
    </div>
  )
}

export default PostGlowCard;