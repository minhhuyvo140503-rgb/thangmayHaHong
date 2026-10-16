import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const danhSachBaiVietSEO = [
    {
        id: 1,
        title: "10 Ý tưởng thiết kế ban công chung cư đẹp không thể cưỡng lại được",
        slug: "10-y-tuong-thiet-ke-ban-cong-chung-cu-dep",
        category: "KIẾN TRÚC & KHÔNG GIAN SỐNG",
        publishDate: "06 Tháng 2, 2026",
        author: "ADMIN",
        thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Thiết kế ban công chung cư nghe có vẻ đơn giản nhưng lại đóng vai trò vô cùng quan trọng trong tổng thể kiến trúc căn hộ hiện đại. Không chỉ là nơi đón gió và ánh sáng tự nhiên, ban công còn là góc thư giãn lý tưởng sau mỗi ngày làm việc mệt mỏi.",
            "1. Biến ban công thành khu vườn tiểu cảnh xanh mướt: Sử dụng các chậu cây treo tường, giàn hoa leo kết hợp sàn gỗ nhựa ngoài trời giúp không gian trở nên gần gũi với thiên nhiên.",
            "2. Góc cà phê thu nhỏ: Đặt một bộ bàn ghế xếp gọn gàng kết hợp đèn LED dây trang trí để tạo không gian lung linh vào buổi tối.",
            "3. Giải pháp tối ưu diện tích: Tận dụng các kệ đựng đồ thông minh, tủ chứa dụng cụ làm vườn gọn gàng để giữ gìn vệ sinh sạch sẽ cho khu vực tiếp giáp phòng khách.",
            "Tại Thang Máy Hà Hồng, chúng tôi luôn chú trọng tư vấn các giải pháp thiết kế kiến trúc đồng bộ từ nội thất căn hộ đến hệ thống thang máy gia đình, mang lại sự sang trọng và tiện nghi tối ưu nhất cho ngôi nhà của bạn."
        ]
    },
    {
        id: 2,
        title: "Báo Giá, Kích Thước Và Tải Trọng Thang Máy 6 Người Mới Nhất 2026",
        slug: "bao-gia-kich-thuoc-va-tai-trong-thang-may-6-nguoi",
        category: "BÁO GIÁ & KỸ THUẬT THANG MÁY",
        publishDate: "08 Tháng 3, 2026",
        author: "ADMIN",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Thang máy tải trọng 6 người (tương đương 450kg đến 500kg) hiện là dòng sản phẩm được ưa chuộng nhất cho các công trình nhà ở kết hợp văn phòng, khách sạn mini và nhà phố diện tích vừa.",
            "1. Thông số kỹ thuật tiêu chuẩn:",
            "- Tải trọng: 450kg - 500kg (6 người lớn).",
            "- Tốc độ di chuyển: 60m/phút đến 90m/phút.",
            "- Kích thước hố thang tiêu chuẩn: 1600mm x 1500mm.",
            "- Kích thước cabin: 1200mm x 1000mm x 2300mm.",
            "2. Báo giá tham khảo năm 2026: Chi phí lắp đặt trọn gói phụ thuộc vào nguồn gốc thiết bị (liên doanh hay nhập khẩu nguyên chiếc), số tầng dừng và chất liệu nội thất cabin (inox gương, kính cường lực, đá granite).",
            "Quý khách hàng có nhu cầu tư vấn chi tiết bản vẽ thiết kế hố phạt và nhận bảng báo giá tối ưu nhất, vui lòng liên hệ ngay với đội ngũ kỹ thuật Thang Máy Hà Hồng để được hỗ trợ khảo sát tận nơi miễn phí 24/7."
        ]
    },
    {
        id: 3,
        title: "Làm Gì Khi Không Sử Dụng Thang Máy Trong Thời Gian Dài?",
        slug: "lam-gi-khi-khong-su-dung-thang-may-trong-thoi-gian-dai",
        category: "HƯỚNG DẪN VẬN HÀNH & BẢO DƯỠNG",
        publishDate: "06 Tháng 3, 2026",
        author: "ADMIN",
        thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Thang máy là thiết bị cơ khí điện tử phức tạp. Khi gia đình đi vắng dài ngày hoặc không sử dụng thang máy trong thời gian dài (từ vài tuần đến vài tháng), việc ngắt và bảo quản thiết bị đúng cách là cực kỳ cần thiết.",
            "1. Ngắt nguồn điện chính: Aptomat nguồn cấp điện cho thang máy trong phòng máy hoặc tủ điện chính cần được tắt hẳn để tránh tình trạng sét đánh, sụt áp hoặc chập cháy do nguồn điện không ổn định.",
            "2. Vệ sinh và hút ẩm cabin: Đảm bảo cửa cabin đóng kín, bật quạt thông gió định kỳ nếu có thể hoặc đặt các gói hút ẩm bên trong cabin để tránh ẩm mốc, hư hỏng hệ thống mạch điện tử cảm ứng.",
            "3. Quy trình kích hoạt lại sau thời gian dài: Trước khi đưa thang máy vào hoạt động trở lại, tuyệt đối không chở tải nặng ngay. Cần liên hệ đơn vị bảo trì chuyên nghiệp như Thang Máy Hà Hồng để kiểm tra tổng thể hệ thống phanh, cáp tải, thiết bị cứu hộ tự động (ARD) nhằm đảm bảo an toàn tuyệt đối."
        ]
    },
    {
        id: 4,
        title: "Tiếng Ồn Thang Máy – Nguyên Nhân Và Cách Xử Lý Triệt Để",
        slug: "tieng-on-thang-may-nguyen-nhan-va-cach-xu-ly-triet-de",
        category: "BẢO TRÌ & SỬA CHỮA",
        publishDate: "05 Tháng 3, 2026",
        author: "ADMIN",
        thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Tình trạng tiếng ồn hoặc tiếng kêu cót két phát ra khi thang máy vận hành là dấu hiệu cảnh báo các chi tiết cơ khí đang gặp vấn đề ma sát hoặc mài mòn.",
            "1. Các nguyên nhân phổ biến:",
            "- Ray dẫn hướng bị khô dầu mỡ, thiếu độ trơn tru.",
            "- Cáp tải hoặc puly bị mòn, lệch rãnh.",
            "- Động cơ máy kéo hoặc quạt làm mát gặp sự cố bạc đạn.",
            "- Giếng thang bị vướng vật cản hoặc kết cấu khung cơ khí bị lỏng ốc vít.",
            "2. Giải pháp xử lý chuyên sâu: Kỹ thuật viên cần tiến hành kiểm tra toàn diện, tra dầu mỡ chuyên dụng đúng chủng loại cho hệ thống ray, căn chỉnh lại độ đồng tâm của cabin và đối trọng.",
            "Đội ngũ kỹ sư Thang Máy Hà Hồng luôn áp dụng quy trình bảo dưỡng chuẩn quốc tế giúp triệt tiêu hoàn toàn tiếng ồn, mang lại không gian tĩnh lặng và êm ái tuyệt đối cho ngôi nhà của bạn."
        ]
    },
    {
        id: 5,
        title: "Tiêu Chuẩn Hố Thang Máy Gia Đình: Những Sai Lầm Thường Gặp Khi Xây Dựng",
        slug: "tieu-chuan-ho-thang-may-gia-dinh-nhung-sai-lam-thuong-gap",
        category: "THIẾT KẾ & XÂY DỰNG",
        publishDate: "28 Tháng 2, 2026",
        author: "ADMIN",
        thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Hố phạt (pit) và giếng thang là phần kết cấu chịu lực cốt lõi khi lắp đặt thang máy. Tuy nhiên, trong quá trình thi công xây dựng thô, các chủ đầu tư thường hay mắc phải một số sai lầm nghiêm trọng.",
            "1. Sai lầm về kích thước thông thủy: Xây dựng hố thang sai lệch vài centimet so với bản vẽ kỹ thuật, dẫn đến việc không lắp vừa khung cơ khí hoặc cabin bị bó hẹp.",
            "2. Không chống thấm hố pit đúng kỹ thuật: Hố pit bị ngấm nước ngầm gây rỉ sét thiết bị đáy hố, chập cháy hệ thống điện giới hạn hành trình.",
            "3. Giải pháp từ Thang Máy Hà Hồng: Chúng tôi cung cấp bản vẽ thiết kế kết cấu chi tiết riêng biệt cho từng công trình, đồng thời cử kỹ thuật viên xuống giám sát trực tiếp các giai đoạn đổ bê tông hố pit và dựng cột đà giếng thang để đảm bảo chính xác tuyệt đối."
        ]
    },
    {
        id: 6,
        title: "Lựa Chọn Nội Thất Cabin Thang Máy Hợp Phong Thủy Gia Chủ Mệnh Kim",
        slug: "lua-chon-noi-that-cabin-thang-may-hop-phong-thuy-menh-kim",
        category: "PHONG THỦY & NỘI THẤT",
        publishDate: "20 Tháng 2, 2026",
        author: "ADMIN",
        thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Phong thủy kiến trúc luôn là yếu tố được các gia chủ đặc biệt quan tâm khi xây dựng nhà ở. Đối với gia chủ mệnh Kim, việc lựa chọn màu sắc và vật liệu nội thất cabin thang máy phù hợp sẽ mang lại tài lộc, bình an và thịnh vượng.",
            "1. Màu sắc tương sinh, tương hợp: Gia chủ mệnh Kim rất hợp với các tông màu sáng như trắng, bạc, ánh kim hoặc vàng kim (Thổ sinh Kim).",
            "2. Gợi ý vật liệu thiết kế cabin:",
            "- Sử dụng inox gương vàng hoặc inox sọc nhuyễn màu vàng champagne.",
            "- Ốp đá tự động màu trắng vân mây hoặc vàng nhạt ở sàn cabin.",
            "- Hệ thống chiếu sáng âm trần ánh sáng vàng ấm hoặc trắng sáng tinh tế.",
            "Thang Máy Hà Hồng sở hữu hàng trăm mẫu thiết kế nội thất cabin đa dạng phong cách từ cổ điển đến hiện đại, đáp ứng trọn vẹn mọi yêu cầu phong thủy khắt khe nhất của quý khách."
        ]
    }
];

const danhSachSanPham = [
    { name: "Thang Máy Văn Phòng", link: "/du-an?category=thang-may-van-phong" },
    { name: "Thang Máy Gia Đình", link: "/du-an?category=thang-may-gia-dinh" },
    { name: "Thang Máy Doanh Nghiệp", link: "/du-an?category=thang-doanh-nghiep" },
    { name: "Thang Máy Khách Sạn", link: "/du-an?category=thang-may-khach-san" },
    { name: "Cửa Sập", link: "/du-an?category=cua-sap" },
    { name: "Thang Cuốn", link: "/du-an?category=thang-cuon" },
];

export default function ChiTietBaiViet() {
    const { slug } = useParams();
    const baiViet = danhSachBaiVietSEO.find((b) => b.slug === slug) || danhSachBaiVietSEO[0];

    useEffect(() => {
        document.title = `${baiViet.title} | Thang Máy Hà Hồng`;
        window.scrollTo(0, 0);
    }, [baiViet]);

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#1f2937", fontFamily: "sans-serif" }}>

            <section
                className="about-banner project-banner"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(5, 14, 28, 0.95), rgba(5, 14, 28, 0.68)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "80px 20px",
                    color: "#ffffff",
                    borderBottom: "1px solid #374151"
                }}
            >
                <div className="site-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <nav className="about-breadcrumb" aria-label="breadcrumb" style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#9ca3af", marginBottom: "12px" }}>
                        <Link to="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Trang chủ</Link>
                        <span>/</span>
                        <Link to="/kien-thuc" style={{ color: "#9ca3af", textDecoration: "none" }}>Kiến thức</Link>
                        <span>/</span>
                        <span style={{ color: "#f3f4f6", fontWeight: 500 }}>Chi tiết bài viết</span>
                    </nav>
                    <span className="section-eyebrow" style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#facc15", display: "block", marginBottom: "8px" }}>
                        {baiViet.category}
                    </span>
                    <h1 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "12px", lineHeight: "1.2" }}>
                        {baiViet.title}
                    </h1>
                    <p style={{ fontSize: "0.95rem", color: "#d1d5db", maxWidth: "800px", lineHeight: "1.5" }}>
                        Đăng ngày {baiViet.publishDate} bởi {baiViet.author} | Chuyên mục kỹ thuật & kinh nghiệm thực tế Thang Máy Hà Hồng.
                    </p>
                </div>
            </section>

            <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>

                <header style={{ marginBottom: "32px", paddingBottom: "12px", borderBottom: "1px solid #e5e7eb" }}>
                    <h2 style={{ fontSize: "14px", fontWeight: "normal", color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        CHI TIẾT BÀI VIẾT: <span style={{ fontWeight: "bold", color: "#111827" }}>{baiViet.category}</span>
                    </h2>
                </header>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>

                    <article style={{ flex: "1 1 700px", display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "4px", backgroundColor: "#f3f4f6" }}>
                            <img
                                src={baiViet.thumbnail}
                                alt={baiViet.title}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>

                        <div style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "16px" }}>
                            {baiViet.content.map((paragraph, idx) => (
                                <p key={idx}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #e5e7eb" }}>
                            <Link to="/kien-thuc" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#eab308", fontWeight: "bold", textDecoration: "none", fontSize: "14px" }}>
                                &larr; Quay lại thư viện kiến thức
                            </Link>
                        </div>
                    </article>

                    <aside style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "24px" }}>
                        <div style={{ display: "flex", border: "1px solid #d1d5db", borderRadius: "4px", overflow: "hidden" }}>
                            <input
                                type="text"
                                placeholder="Search..."
                                style={{ width: "100%", padding: "10px 12px", fontSize: "13px", outline: "none", border: "none" }}
                            />
                            <button style={{ backgroundColor: "#facc15", color: "#111827", padding: "0 16px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>
                                🔍
                            </button>
                        </div>

                        <div style={{ border: "1px solid #e5e7eb", borderRadius: "4px", padding: "16px", backgroundColor: "#ffffff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                            <div style={{ backgroundColor: "#000000", color: "#ffffff", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", padding: "8px", letterSpacing: "1px", marginBottom: "12px", textAlign: "center" }}>
                                SẢN PHẨM – DỊCH VỤ
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                                {danhSachSanPham.map((sp, index) => (
                                    <li key={index} style={{ borderBottom: index < danhSachSanPham.length - 1 ? "1px solid #f3f4f6" : "none", paddingBottom: "8px" }}>
                                        <Link to={sp.link} style={{ color: "#eab308", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>
                                            {sp.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}