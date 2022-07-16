let url = "";

function getUrlConfig() {
  var request = new XMLHttpRequest();
  request.open("GET", "/assets/configs/axios_url.txt", false);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200 || request.status == 0) {
        var allText = request.responseText;
        url = allText;
      }
    }
  };
  request.send(null);
}

getUrlConfig();

const client = axios.create({
  baseURL: url,
  headers: {
    Authorization: localStorage.getItem("token") ?? "",
  },
});

function responseHandler(res) {
  if (res.data.statusCode.toString().startsWith("2")) return res.data;
  throw new Error(res.data.message);
}
