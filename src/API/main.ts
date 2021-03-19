const BaseURL = 'http://128.199.0.5:3000';

export const getEachData = async () => {
  const results = await fetch(`${BaseURL}/test/each`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return results;
};

export const getTotalData = async () => {
  const results = await fetch(`${BaseURL}/test/total`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return results;
};
