async function postImage() {
  const file = document.querySelector("input[type=file]").files[0];
  const caption = document.getElementById("caption").value;

  const formData = new FormData();
  formData.append("image", file);
  formData.append("caption", caption);

  await fetch("http://localhost:5000/posts", {
    method: "POST",
    body: formData
  });

  openUpload();
  loadPosts();
}



