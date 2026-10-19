function retrieve(key) { 
    const json = localStorage.getItem(key);
    if(json) {
        return JSON.parse(json);
    } else {
        return null;
    }
}

function store(key, data) { 
    localStorage.setItem(key, JSON.stringify(data)); 
}

function remove(key) { 
    localStorage.removeItem(key); 
}

export {retrieve, store, remove}