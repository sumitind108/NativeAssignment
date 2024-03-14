// // const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'https://test.webyaparsolutions.com/';

// const submitFormData = async (token, formData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/form`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Submission failed. Please try again.');
//   }
// };

// const retrieveData = async (token) => {
//   try {
//     const response = await fetch(`${BASE_URL}/data`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Failed to retrieve data. Please try again.');
//   }
// };

// export { submitFormData, retrieveData };


// ----------------------


// const BASE_URL = 'https://test.webyaparsolutions.com/';

// const submitFormData = async (token, formData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/form`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Submission failed. Please try again.');
//   }
// };

// const retrieveData = async (token) => {
//   try {
//     const response = await fetch(`${BASE_URL}/data`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Failed to retrieve data. Please try again.');
//   }
// };

// export { submitFormData, retrieveData };


// --------------------

const BASE_URL = 'https://test.webyaparsolutions.com/';

const submitFormData = async (token, formData) => {
  try {
    const response = await fetch(`${BASE_URL}/form`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Submission failed. Please try again.');
  }
};

export { submitFormData };
