async function signin(username, password) {
  try {
    const response = await client.post('/signin', { username, password });
    const { data: { token } } = responseHandler(response);
    localStorage.setItem('token', token);
    return response;
  } catch (err) {
    // TODO: Xử lí show error ở UI, làm cho tất cả api luôn -> nếu mà được thì viết 1 hàm để handle show error bằng UI ở file axios
    return err
  }
}

async function signup(username, password, nickname) {
  try {
    const response = await client.post('/signup', { username, password, nickname });
    const { data: { token } } = responseHandler(response);
    // TODO: Xử lí lưu token vào local storage
    localStorage.setItem('token', token);
    return response;
  } catch (err) {
    return err;
  }
}

// signin('haha', '123456');
// signup('haha', '123456', 'huhu');