function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data for ID:", id);
            // Simulate data fetching
            resolve(id);
        }, timeout);)
}