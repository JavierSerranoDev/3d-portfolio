import { useRef } from 'react';

const ProjectGlowCard = ({ card, index }) => {
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
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
        <div className="glow"/>
        <div className="mb-5">
            <div>
                <img src={card.media[0].absolute_url} alt={card.title}/>
            </div>
            <p className="font-bold">{card.title}</p>
            <p className="text-white-50 text-lg">{card.teaser}</p>
        </div>
    </div>
  )
}

export default ProjectGlowCard
