const client = axios.create({
  baseURL: "http://localhost:8080/api" 
});

function responseHandler(res) {
  if (res.data.statusCode.toString().startsWith('2')) return res.data;
  throw new Error(res.data.message);
}
