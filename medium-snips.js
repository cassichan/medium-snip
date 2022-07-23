function washLaundry() {
    return new Promise ((resolve,reject) => {
        resolve('The laundry is clean!');
    }else {
        reject(Error('Error'));
    }
)}



const washLaundry = new Promise((resolve, reject)=> {
    const res = true;
    if (res) {
        resolve('The laundry is clean!');
    }else {
        reject(Error('Error'));
    }
});

washLaundry.then((res) => console.log(res), (err) => alert(err));



const dryLaundry = new Promise((resolve, reject) => {
    resolve('The laundry is dry!');
});

dryLaundry.then().catch(err)