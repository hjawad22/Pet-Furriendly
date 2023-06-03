
export const getPlaces = (url) => {
    return fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Oops! We seem to be having some technical issues, please try again later!');
        }
        return res.json();
      })
      .catch(error => {
        console.error('Error fetching places', error);
        throw new Error('Oops! We seem to be having some technical issues, please try again later!');
      });
  };