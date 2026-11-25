# Giới thiệu quê hương Lai Châu

Website tĩnh giới thiệu điểm đến, lịch sử, ẩm thực, văn hóa và lịch trình tham khảo tại Lai Châu. Dự án sử dụng HTML và CSS, không có bước build.

## Các trang

- `index.html`: Trang chủ và lịch sử.
- `places.html`: Điểm đến.
- `itinerary.html`: Lịch trình tham khảo.
- `food.html`: Ẩm thực.
- `culture.html`: Văn hóa.
- `contact.html`: Bản đồ và biểu mẫu góp ý minh họa.

## Mở và chạy

Có thể mở `index.html` trực tiếp bằng trình duyệt. Để chạy qua máy chủ web cục bộ, mở PowerShell tại thư mục dự án và chạy:

```powershell
python -m http.server 8000
```

Sau đó mở `http://localhost:8000/index.html`. Không cần cài thư viện hoặc chạy lệnh build. Bản đồ nhúng ở trang Liên hệ cần kết nối Internet.

## Phiên bản và triển khai

- Repository Git: `https://github.com/Hieu492003/baitaplon_Webgioithieuvequehuong`
- Nhánh được kiểm tra: `main`
- Commit mã nguồn trước khi thêm bộ tài liệu này: `1adc4ab5ff7c821812b8b25c235b491d854a137b`
- Commit đã thêm README, AI_LOG và release notes: `24795dcc3ba7fc59f318967516ee5a372588f40b`
- Tag bàn giao: `a3-handoff-v1.0.0` (đánh dấu phiên bản mã nguồn/tài liệu, không xác nhận website đã triển khai)
- Trạng thái GitHub Pages: chưa xác minh triển khai. URL dự kiến `https://hieu492003.github.io/baitaplon_Webgioithieuvequehuong/` trả về 404 khi kiểm tra ngày 20/11/2026. Không dùng URL này làm liên kết demo cho đến khi triển khai và kiểm tra lại.

Khi tạo bản bàn giao mới, cập nhật SHA commit trong báo cáo và kiểm tra URL triển khai có trỏ đúng phiên bản đó.

## Giới hạn đã biết

- Bản đồ Google Maps và các tính năng trực tuyến cần Internet.
- `script.js` hỗ trợ menu thu gọn trên màn hình nhỏ và cập nhật năm ở chân trang.
- Biểu mẫu góp ý chỉ xác thực dữ liệu nhập ở trình duyệt rồi thông báo đây là bản minh họa; không gửi hoặc lưu thông tin.
- Chưa có bộ kiểm thử tự động.
- Nguồn gốc và giấy phép của một số ảnh trong `assets/` chưa được ghi lại. Cần bổ sung nguồn và kiểm tra quyền sử dụng trước khi nộp.

## Nguồn và tài nguyên

- Ảnh được tham chiếu từ các tệp cục bộ trong `assets/`. Các ảnh món ăn trong `assets/amthuc/` do sinh viên cung cấp cho dự án; nguồn gốc/giấy phép chi tiết cần được đối chiếu với nguồn ban đầu.
- Bản đồ là nội dung nhúng từ Google Maps.
- Không thấy thư viện JavaScript hoặc CSS bên thứ ba trong các trang hiện tại.

## Tài liệu bàn giao

- [Nhật ký sử dụng AI](docs/AI_LOG.md)
- [Release notes](docs/RELEASE_NOTES.md)
