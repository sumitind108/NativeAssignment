


const BASE_URL = 'https://test.webyaparsolutions.com/';



const signup = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error('Signup failed. Please try again.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Signup failed. Please try again.');
  }
};

const login = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error('Login failed. Please try again.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Login failed. Please try again.');
  }
};

export { signup, login };


// --------------------


