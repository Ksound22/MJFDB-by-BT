/*
 *Easy HTTP Library
 *Library for making HTTP Requests
 *
 *
 * @version 3.0.0
 * @Author Kolade Chris
 * @licence MIT
 *
 **/

class EasyHTTP {
  //  Make HTTP Get request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //   Make Post request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  //   Put request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  //   Delete request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    const resData = await "Response Deleted";
    return resData;
  }
}
