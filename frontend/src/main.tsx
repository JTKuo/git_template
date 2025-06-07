import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [time, setTime] = React.useState<string>('');

  React.useEffect(() => {
    fetch('/api/time')
      .then(res => res.json())
      .then(data => setTime(data.time));
  }, []);

  return (
    <div>
      <h1>Hello from React + TypeScript!</h1>
      <p>Current time from backend: {time}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
