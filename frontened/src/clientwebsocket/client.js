const ws = new WebSocket('ws://localhost:5000');

ws.onopen = () => {
    console.log('Connected to WebSocket');
    document.getElementById('status').textContent = 'Connected to WebSocket';
};

ws.onclose = () => {
    console.log('Disconnected from WebSocket');
    document.getElementById('status').textContent = 'Disconnected from WebSocket';
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
    document.getElementById('status').textContent = 'WebSocket error!';
};
