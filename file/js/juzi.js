fetch("https://international.v1.hitokoto.cn")
  .then((response) => response.json())
  .then((data) => {
    const hitokoto = document.getElementById("hitokoto_text");
    hitokoto.href = "https://hitokoto.cn/?uuid=" + data.uuid;
    hitokoto.innerText = data.hitokoto;
  })
  .catch(console.error);
