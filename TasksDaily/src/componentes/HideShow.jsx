import { useState } from "react";

function HideShow() {
  const [isVisible, setIsVisible] = useState(true);     
    return (    
        <div>
            <br />
            <br />
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Content
            </button>  
            <br /> 
            {isVisible && (
                <div>
                    <h2>This content can be toggled</h2>
                    <p>Click the button to hide or show this content.</p>

                </div>
            )}
        </div>
    );
}   
export default HideShow;