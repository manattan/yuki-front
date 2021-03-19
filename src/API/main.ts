const BaseURL = 'http://shoumoji.codes:3000';

export const getEachData = async () => {
  const results = await fetch(`${BaseURL}/data/each`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return results;
};

export const getAllData = async () => {
  const results = await fetch(`${BaseURL}/data/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return results;
};

export const getTotalData = async () => {
  const results = await fetch(`${BaseURL}/data/total`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return results;
};
