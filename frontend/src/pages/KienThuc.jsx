import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const danhSachBaiViet = [
    {
        id: 1,
        title: "10 Ý tưởng thiết kế ban công chung cư đẹp không thể cưỡng lại được",
        slug: "10-y-tuong-thiet-ke-ban-cong-chung-cu-dep",
        summary: "Thiết kế ban công chung cư nghe có vẻ đơn giản nhưng lại đóng vai trò rất quan trọng và không thể bỏ qua...",
        thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        publishDate: { day: "06", month: "Th2" },
    },
    {
        id: 2,
        title: "Báo Giá, Kích Thước Và Tải Trọng Thang Máy 6 Người Mới Nhất 2026",
        slug: "bao-gia-kich-thuoc-va-tai-trong-thang-may-6-nguoi",
        summary: "Bài viết này chúng tôi tập trung cung cấp báo giá thang máy 6 người, các thông số kích thước hố thang tiêu chuẩn...",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
        publishDate: { day: "08", month: "Th3" },
    },
    {
        id: 3,
        title: "Làm Gì Khi Không Sử Dụng Thang Máy Trong Thời Gian Dài?",
        slug: "lam-gi-khi-khong-su-dung-thang-may-trong-thoi-gian-dai",
        summary: "Thang máy là một thiết bị cơ khí điện quan trọng trong nhà, nhiều khách hàng khi vắng nhà dài ngày cần lưu ý ngắt nguồn điện...",
        thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
        publishDate: { day: "06", month: "Th3" },
    },
    {
        id: 4,
        title: "Tiếng Ồn Thang Máy – Nguyên Nhân Và Cách Xử Lý Triệt Để",
        slug: "tieng-on-thang-may-nguyen-nhan-va-cach-xu-ly-triet-de",
        summary: "Tình trạng tiếng ồn thang máy xuất hiện diễn ra do nhiều nguyên nhân từ động cơ, ray dẫn hướng hoặc cáp tải...",
        thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        publishDate: { day: "05", month: "Th3" },
    },
    {
        id: 5,
        title: "Tiêu Chuẩn Hố Thang Máy Gia Đình: Những Sai Lầm Thường Gặp Khi Xây Dựng",
        slug: "tieu-chuan-ho-thang-may-gia-dinh-nhung-sai-lam-thuong-gap",
        summary: "Xây dựng hố phạt (pit) và giếng thang sai kích thước sẽ gây khó khăn lớn khi lắp đặt thiết bị...",
        thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        publishDate: { day: "28", month: "Th2" },
    },
    {
        id: 6,
        title: "Lựa Chọn Nội Thất Cabin Thang Máy Hợp Phong Thủy Gia Chủ Mệnh Kim",
        slug: "lua-chon-noi-that-cabin-thang-may-hop-phong-thuy-menh-kim",
        summary: "Màu sắc inox gương vàng, màu trắng sáng hay hệ thống đèn chiếu sáng thế nào để hợp phong thủy với gia chủ...",
        thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
        publishDate: { day: "20", month: "Th2" },
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

function BannerKienThuc() {
    return (
        <section
            className="about-banner project-banner"
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(5, 14, 28, 0.95), rgba(5, 14, 28, 0.68)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80')`
            }}
        >
            <div className="site-container">
                <nav className="about-breadcrumb" aria-label="breadcrumb">
                    <Link to="/">Trang chủ</Link>
                    <span>/</span>
                    <span>Kiến thức</span>
                </nav>
                <span className="section-eyebrow" style={{ color: "#facc15" }}>THƯ VIỆN KIẾN THỨC</span>
                <h1>Kiến Thức & Kinh Nghiệm Thang Máy</h1>
                <p>Tổng hợp kinh nghiệm chọn lựa, thông số kỹ thuật hố thang, báo giá và giải pháp thiết kế phong thủy kiến trúc cho công trình của bạn.</p>
            </div>
        </section>
    );
}

export default function KienThuc() {
    const [search, setSearch] = useState("");

    useEffect(() => {
        document.title = "Thư Viện Kiến Thức & Kinh Nghiệm | Thang Máy Hà Hồng";
    }, []);

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#1f2937", fontFamily: "sans-serif" }}>
            <BannerKienThuc />

            <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
                <header style={{ marginBottom: "32px", paddingBottom: "12px", borderBottom: "1px solid #e5e7eb" }}>
                    <h2 style={{ fontSize: "14px", fontWeight: "normal", color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        CATEGORY ARCHIVES: <span style={{ fontWeight: "bold", color: "#111827" }}>KIẾN THỨC</span>
                    </h2>
                </header>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
                    <div style={{ flex: "1 1 700px", display: "flex", flexDirection: "column", gap: "24px" }}>
                        {danhSachBaiViet.map((item) => (
                            <article
                                key={item.id}
                                style={{ display: "flex", gap: "20px", alignItems: "flex-start", paddingBottom: "24px", borderBottom: "1px solid #f3f4f6" }}
                            >
                                <div style={{ position: "relative", width: "220px", minWidth: "220px", aspectRatio: "16/10", overflow: "hidden", backgroundColor: "#f3f4f6", borderRadius: "4px" }}>
                                    <Link to={`/kien-thuc/${item.slug}`}>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            loading="lazy"
                                            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                                        />
                                    </Link>
                                    <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#facc15", color: "#111827", padding: "4px 10px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.2)", fontWeight: "bold" }}>
                                        <span style={{ display: "block", fontSize: "14px", lineHeight: 1 }}>{item.publishDate.day}</span>
                                        <span style={{ display: "block", fontSize: "10px", textTransform: "uppercase", fontWeight: 700, marginTop: "2px" }}>{item.publishDate.month}</span>
                                    </div>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#1f2937", lineHeight: "1.4", marginBottom: "8px" }}>
                                        <Link to={`/kien-thuc/${item.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.6", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                        {item.summary} <span style={{ color: "#9ca3af" }}>[...]</span>
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <aside style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "24px" }}>
                        <div style={{ display: "flex", border: "1px solid #d1d5db", borderRadius: "4px", overflow: "hidden" }}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
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