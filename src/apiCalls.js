
export function getPlaces () {
    return fetch('https://pet-furriendly-server.onrender.com/api/v1/places')
      .then(res => {
        if (!res.ok) {
          throw new Error('Oops! We seem to be having some technical issues, please try again later!');
        }
        return res.json();
    })
  };
