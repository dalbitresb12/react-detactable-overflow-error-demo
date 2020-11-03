import { useState } from 'react';
import DetectableOverflow from 'react-detectable-overflow';
import ReactResizeDetector from 'react-resize-detector';
import './App.css';

const shortText = "Hello";
const longText = "Hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo";

function App() {
  const [overflowed, setOverflowed] = useState(false);
  const [text, setText] = useState(shortText);

  const handleOverflow = isOverflowed => {
    if (isOverflowed) setOverflowed(true);
  };

  const handleClick = text => {
    setOverflowed(false);
    setText(text);
  };

  return (
    <div>
      <div>Is overflowed: {overflowed ? 'yes' : 'no'}</div>
      <div className="mt-2">
        <button onClick={() => handleClick(shortText)}>Change to short text</button>
        <button className="ml-2" onClick={() => handleClick(longText)}>Change to long text</button>
      </div>
      <div className="text-wrapper mt-2">
        <ReactResizeDetector handleWidth handleHeight={false} onResize={() => setOverflowed(false)}>
          <DetectableOverflow onChange={handleOverflow}>
            <span>{text}</span>
          </DetectableOverflow>
        </ReactResizeDetector>
      </div>
    </div>
  );
}

export default App;
