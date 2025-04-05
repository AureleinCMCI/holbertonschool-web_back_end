export default function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
      // Resolve the promise with the object containing firstName and lastName
      resolve({
        firstName: firstName,
        lastName: lastName
      });
    });
  }

  