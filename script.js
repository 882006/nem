// Đếm số lượt xem trang web bằng cách sử dụng localStorage
let viewCount = localStorage.getItem('view-count');
if (!viewCount) {
    viewCount = 0; // Khởi tạo nếu chưa có giá trị
}
viewCount++; // Tăng số lượt xem lên 1
localStorage.setItem('view-count', viewCount); // Lưu lại số lượt xem

// Hiển thị số lượt xem trên trang web
document.getElementById('view-count').textContent = `Số lượt xem: ${viewCount}`;
