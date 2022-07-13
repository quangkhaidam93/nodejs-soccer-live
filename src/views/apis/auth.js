async function signin(username, password) {
  try {
    const response = await client.post('/signin', { username, password });

    const { data: { token } } = responseHandler(response);
    localStorage.setItem('token', token);
    console.log('singin successfully');
  } catch (err) {
    // TODO: Xử lí show error ở UI, làm cho tất cả api luôn -> nếu mà được thì viết 1 hàm để handle show error bằng UI ở file axios
    console.log('Dùng cái error message này để show lỗi', err.message);
  }
}

async function signup(username, password, nickname) {
  try {
    const response = await client.post('/signup', { username, password, nickname });

    const { data: { token } } = responseHandler(response);
    // TODO: Xử lí lưu token vào local storage
    console.log(token);
  } catch (err) {

  }
}

// signin('haha', '123456');
// signup('haha', '123456', 'huhu');