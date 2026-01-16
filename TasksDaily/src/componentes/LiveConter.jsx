import { useEffect, useState } from "react";

function LiveConter() {
  const [text, setText] = useState(true);         
    return (


        <div>
            <br />
            <br />
            <input type="text"  onChange={(e) => setText(e.target.value)}/>
            <br />
            {text && (
                <div>
                    <h2>This content can be Live</h2>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}

export default LiveConter;