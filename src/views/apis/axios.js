const client = axios.create({
  baseURL: 'https://atzstore.net/api',
  headers: {
    'Authorization': localStorage.getItem('token') ?? '',
  } 
});

function responseHandler(res) {
  if (res.data.statusCode.toString().startsWith('2')) return res.data;
  throw new Error(res.data.message);
}
