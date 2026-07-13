import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import studentAvatar from "@/assets/student-avatar.jpg.asset.json";
import bai1Img1 from "@/assets/bai1/img1.png.asset.json";
import bai1Img2 from "@/assets/bai1/img2.png.asset.json";
import bai1Img3 from "@/assets/bai1/img3.png.asset.json";
import bai1Img4 from "@/assets/bai1/img4.png.asset.json";
import bai1Img5 from "@/assets/bai1/img5.png.asset.json";
import bai1Img6 from "@/assets/bai1/img6.png.asset.json";
import bai1Img7 from "@/assets/bai1/img7.png.asset.json";
import bai1Img8 from "@/assets/bai1/img8.png.asset.json";
import bai1Img9 from "@/assets/bai1/img9.png.asset.json";
import bai1Img10 from "@/assets/bai1/img10.png.asset.json";
import bai1Img11 from "@/assets/bai1/img11.png.asset.json";
import bai1Img12 from "@/assets/bai1/img12.png.asset.json";
import bai1Img13 from "@/assets/bai1/img13.png.asset.json";
import bai1Img14 from "@/assets/bai1/img14.png.asset.json";
import bai1Img15 from "@/assets/bai1/img15.png.asset.json";
import bai1Img16 from "@/assets/bai1/img16.png.asset.json";
import bai1Img17 from "@/assets/bai1/img17.png.asset.json";
import bai1Img18 from "@/assets/bai1/img18.png.asset.json";
import bai1Img19 from "@/assets/bai1/img19.png.asset.json";
import bai1Img20 from "@/assets/bai1/img20.png.asset.json";
import bai1Report from "@/assets/bai1/report.docx.asset.json";
import bai3Img1 from "@/assets/bai3/img1.png.asset.json";
import bai3Img2 from "@/assets/bai3/img2.png.asset.json";
import bai3Img3 from "@/assets/bai3/img3.png.asset.json";
import bai3Img4 from "@/assets/bai3/img4.png.asset.json";
import bai3Img5 from "@/assets/bai3/img5.png.asset.json";
import bai3Img6 from "@/assets/bai3/img6.png.asset.json";
import bai3Img7 from "@/assets/bai3/img7.png.asset.json";
import bai3Img8 from "@/assets/bai3/img8.png.asset.json";
import bai3Img9 from "@/assets/bai3/img9.png.asset.json";
import bai3Report from "@/assets/bai3/report.docx.asset.json";
import bai4Img1 from "@/assets/bai4/img1.png.asset.json";
import bai4Img2 from "@/assets/bai4/img2.png.asset.json";
import bai4Img3 from "@/assets/bai4/img3.png.asset.json";
import bai4Img4 from "@/assets/bai4/img4.jpg.asset.json";
import bai4Img5 from "@/assets/bai4/img5.jpg.asset.json";
import bai4Img6 from "@/assets/bai4/img6.jpg.asset.json";
import bai4Img7 from "@/assets/bai4/img7.jpg.asset.json";
import bai4Report from "@/assets/bai4/report.docx.asset.json";
import bai2Img1 from "@/assets/bai2/img1.jpg.asset.json";
import bai2Img2 from "@/assets/bai2/img2.jpg.asset.json";
import bai2Img3 from "@/assets/bai2/img3.jpg.asset.json";
import bai5Img1 from "@/assets/bai5/img1.jpeg.asset.json";
import bai5Img2 from "@/assets/bai5/img2.jpeg.asset.json";
import bai5Img3 from "@/assets/bai5/img3.jpeg.asset.json";
import bai5Img4 from "@/assets/bai5/img4.jpeg.asset.json";
import bai5Img5 from "@/assets/bai5/img5.jpeg.asset.json";
import bai5Img6 from "@/assets/bai5/img6.png.asset.json";
import bai5Report from "@/assets/bai5/report.docx.asset.json";

const bai4Images = [bai4Img1, bai4Img2, bai4Img3, bai4Img4, bai4Img5, bai4Img6, bai4Img7];
const bai2Images = [bai2Img1, bai2Img2, bai2Img3];
const bai5Images = [bai5Img1, bai5Img2, bai5Img3, bai5Img4, bai5Img5, bai5Img6];

const bai3Images = [bai3Img1, bai3Img2, bai3Img3, bai3Img4, bai3Img5, bai3Img6, bai3Img7, bai3Img8, bai3Img9];

const bai1Images = [
  bai1Img1, bai1Img2, bai1Img3, bai1Img4, bai1Img5,
  bai1Img6, bai1Img7, bai1Img8, bai1Img9, bai1Img10,
  bai1Img11, bai1Img12, bai1Img13, bai1Img14, bai1Img15,
  bai1Img16, bai1Img17, bai1Img18, bai1Img19, bai1Img20,
];


export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

// ============================================================
// Dữ liệu: 6 nhiệm vụ / dự án học tập
// ============================================================
const tasks = [
  {
    id: "task-1",
    num: "01",
    icon: "📁",
    title: "Quản lý tệp và thư mục",
    short: "Tổ chức dữ liệu học tập khoa học, đặt tên nhất quán.",
    progress: 100,
    tags: ["File Explorer", "Google Drive", "OneDrive"],
  },
  {
    id: "task-2",
    num: "02",
    icon: "🔎",
    title: "Tìm kiếm & đánh giá thông tin học thuật",
    short: "Vận dụng toán tử nâng cao, đánh giá độ tin cậy nguồn.",
    progress: 100,
    tags: ["Google Scholar", "site:", "filetype:", "intitle:"],
  },
  {
    id: "task-3",
    num: "03",
    icon: "💬",
    title: "Viết Prompt hiệu quả",
    short: "So sánh prompt ban đầu và prompt cải tiến với AI.",
    progress: 100,
    tags: ["ChatGPT", "Gemini", "Prompt Engineering"],
  },
  {
    id: "task-4",
    num: "04",
    icon: "🤝",
    title: "Hợp tác trực tuyến",
    short: "Quản lý dự án nhóm, phân công, theo dõi tiến độ.",
    progress: 100,
    tags: ["Trello", "Notion", "Google Sheets"],
  },
  {
    id: "task-5",
    num: "05",
    icon: "🎨",
    title: "Sáng tạo nội dung với AI",
    short: "Sản xuất video/infographic học thuật với AI hỗ trợ.",
    progress: 100,
    tags: ["Canva", "CapCut", "DALL·E"],
  },
  {
    id: "task-6",
    num: "06",
    icon: "🛡️",
    title: "Sử dụng AI có trách nhiệm",
    short: "Bộ nguyên tắc cá nhân, phân tích đạo đức AI.",
    progress: 100,
    tags: ["Đạo đức AI", "Liêm chính học thuật"],
  },
];

const skills = [
  { name: "Quản lý tệp và dữ liệu số", level: 95, group: "Nền tảng số", use: "Tổ chức tài liệu học tập, dự án cá nhân." },
  { name: "Tìm kiếm thông tin học thuật", level: 92, group: "Học thuật & Nghiên cứu", use: "Nghiên cứu, viết tiểu luận, báo cáo." },
  { name: "Đánh giá độ tin cậy của nguồn", level: 90, group: "Học thuật & Nghiên cứu", use: "Kiểm chứng thông tin trước khi trích dẫn." },
  { name: "Viết prompt hiệu quả", level: 93, group: "AI & Sáng tạo", use: "Khai thác AI hỗ trợ học tập & sáng tạo." },
  { name: "Làm việc nhóm trực tuyến", level: 88, group: "Cộng tác & Cá nhân", use: "Điều phối dự án, phân công, deadline." },
  { name: "Sáng tạo nội dung số bằng AI", level: 90, group: "AI & Sáng tạo", use: "Video, infographic, thuyết trình số." },
  { name: "Sử dụng AI có trách nhiệm", level: 95, group: "AI & Sáng tạo", use: "Học thuật liêm chính, phản biện thông tin." },
  { name: "Tự đánh giá & cải thiện bản thân", level: 91, group: "Cộng tác & Cá nhân", use: "Phản tư, đặt mục tiêu học tập." },
];

const skillGroupOrder = ["Nền tảng số", "Học thuật & Nghiên cứu", "AI & Sáng tạo", "Cộng tác & Cá nhân"] as const;
const skillGroupIcon: Record<string, string> = {
  "Nền tảng số": "💾",
  "Học thuật & Nghiên cứu": "🔍",
  "AI & Sáng tạo": "🤖",
  "Cộng tác & Cá nhân": "🤝",
};
function skillLabel(level: number) {
  if (level >= 93) return "Thành thạo";
  if (level >= 88) return "Vững";
  return "Cơ bản";
}

// ============================================================
// Hook: reveal on scroll
// ============================================================
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ============================================================
// Trang Portfolio
// ============================================================
function PortfolioPage() {
  useReveal();
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#gioi-thieu", label: "Giới thiệu" },
    { href: "#tong-quan", label: "Tổng quan" },
    { href: "#du-an", label: "Dự án" },
    
    
    { href: "#tong-ket", label: "Tổng kết" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ================= NAV ================= */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary text-white shadow-soft">P</span>
            <span className="text-sm sm:text-base">Portfolio<br /></span>
          </a>
          <nav className="hidden gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-lg border border-border p-2 md:hidden"
            aria-label="Menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
        <div className="absolute inset-0 gradient-hero opacity-70" />
        <div
          className="absolute -top-24 -right-24 h-96 w-96 animate-blob animate-float opacity-40"
          style={{ background: "radial-gradient(circle, oklch(0.85 0.14 8) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-24 h-96 w-96 animate-blob animate-float opacity-40"
          style={{ background: "radial-gradient(circle, oklch(0.85 0.14 155) 0%, transparent 70%)", animationDelay: "2s" }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1.15fr_1fr] md:items-center">
          {/* CỘT TRÁI — Nội dung chính */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
              Portfolio{" "}
              <span className="bg-gradient-to-r from-[oklch(0.7_0.18_10)] to-[oklch(0.65_0.18_155)] bg-clip-text text-transparent">
                Kỹ thuật số
              </span>
              <br />
              cá nhân
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Hành trình học tập môn <em>Nhập môn Công nghệ số & AI</em> — nơi lưu trữ,
              trình bày và tự đánh giá quá trình học tập thông qua các sản phẩm số đã hoàn thành.
            </p>

            {/* CTA chính — chỉ 2 nút để tạo điểm nhấn */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#du-an"
                className="group inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
              >
                Khám phá 6 dự án
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#gioi-thieu"
                className="rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-accent"
              >
                Về tôi
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              <Stat n="06" label="Bài tập cuối kỳ" />
              <Stat n="08" label="Kỹ năng số" />
              <Stat n="100%" label="Hoàn thành" />
            </dl>
          </div>

          {/* CỘT PHẢI — Card thẻ sinh viên nổi bật */}
          <div className="reveal relative">
            <div className="relative mx-auto max-w-sm">
              {/* Blob nền trang trí */}
              <div className="absolute -inset-6 animate-blob gradient-secondary opacity-40 blur-2xl" />
              <div
                className="absolute -inset-2 animate-blob gradient-primary opacity-30 blur-xl"
                style={{ animationDelay: "3s" }}
              />

              {/* Thẻ ID nổi bật */}
              <div className="relative rounded-3xl border border-border bg-card/95 p-6 shadow-soft backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Student ID · 2025
                  </span>
                  <span className="text-lg">🎓</span>
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-primary/40 bg-[#3d4a2a]">
                    <img src={studentAvatar.url} alt="Ảnh đại diện" className="h-full w-full object-cover scale-110" loading="lazy" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold">Bùi Ngọc Phương Linh</h3>
                    <p className="text-xs text-muted-foreground">MSV 25050952</p>
                    <p className="text-xs text-muted-foreground">QH-2025-E KTQT 2</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-accent/50 p-3 text-center">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Khoa</div>
                    <div className="mt-0.5 text-xs font-bold">KTQT</div>
                  </div>
                  <div className="border-x border-border/60">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Trường</div>
                    <div className="mt-0.5 text-xs font-bold">UEB · VNU</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Năm</div>
                    <div className="mt-0.5 text-xs font-bold">Nhất</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["📁 Dữ liệu", "🔎 Học thuật", "🤖 AI", "🛡️ Đạo đức"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#gioi-thieu"
          className="reveal mx-auto mt-16 hidden max-w-6xl items-center justify-center gap-2 text-xs font-medium text-muted-foreground md:flex"
        >
          <span className="h-8 w-px bg-border" />
          Cuộn xuống để khám phá
          <span className="h-8 w-px bg-border" />
        </a>
      </section>

      {/* ================= ABOUT ================= */}
      <Section id="gioi-thieu" eyebrow="About Me" title="Giới thiệu bản thân" subtitle="Một sinh viên đang từng bước làm chủ công nghệ số và AI trong học tập.">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-card card-hover">
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-primary/30 shadow-soft bg-[#3d4a2a]">
              <img
                src={studentAvatar.url}
                alt="Ảnh sinh viên"
                className="h-full w-full object-cover scale-110"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-center text-xl font-bold">Bùi Ngọc Phương Linh</h3>
            <p className="text-center text-sm text-muted-foreground">Sinh viên năm nhất · MSV 25050952</p>
            <ul className="mt-5 space-y-2 text-sm">
              <Info label="MSV" value="25050952" />
              <Info label="Khoa" value="Kinh tế Quốc tế" />
              <Info label="Lớp" value="QH-2025-E KTQT 2" />
              <Info label="Trường" value="ĐH Kinh tế – ĐHQGHN" />
              <Info label="Môn học" value="Nhập môn CNS & AI" />
              <Info label="Email" value="25050952@vnu.edu.vn" />
            </ul>
          </div>
          <div className="reveal space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h4 className="text-lg font-bold">💡 Sở thích cá nhân</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Khám phá AI", "Đọc sách", "Du lịch", "Nghe nhạc acoustic", "Yoga & chạy bộ", "Học ngoại ngữ"].map((t) => (
                  <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h4 className="text-lg font-bold">🎯 Mục tiêu Portfolio</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "Hệ thống hóa toàn bộ các bài tập cuối kỳ theo cấu trúc khoa học.",
                  "Chứng minh năng lực vận dụng công cụ số và AI vào học tập.",
                  "Lưu trữ sản phẩm cá nhân để dễ truy cập, chia sẻ và phát triển tiếp.",
                  "Rèn luyện kỹ năng trình bày, phân tích, phản biện và tự đánh giá.",
                ].map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h4 className="text-lg font-bold">🚀 Mục tiêu học tập</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "Nắm vững nền tảng công nghệ số và tư duy dữ liệu để ứng dụng vào ngành Kinh tế Quốc tế.",
                  "Sử dụng thành thạo các công cụ AI (ChatGPT, Gemini, Copilot…) như một trợ lý học tập có trách nhiệm.",
                  "Rèn luyện tư duy phản biện: biết đặt câu hỏi, kiểm chứng thông tin và không lệ thuộc vào AI.",
                  "Phát triển kỹ năng tự học suốt đời, sẵn sàng thích nghi với môi trường số toàn cầu.",
                ].map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-6 shadow-card">
              <h4 className="text-lg font-bold">✨ Câu nói tâm đắc</h4>
              <blockquote className="mt-3 border-l-4 border-primary pl-4 text-base italic leading-relaxed text-foreground">
                “Công nghệ và AI không thay thế con người — nó chỉ thay thế những ai ngừng học hỏi.
                Vì vậy, mình chọn học mỗi ngày, để làm chủ công cụ thay vì bị công cụ dẫn dắt.”
              </blockquote>
              <p className="mt-3 text-right text-xs font-semibold uppercase tracking-wider text-primary">— Kim chỉ nam của bản thân</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= TIMELINE / OVERVIEW ================= */}
      <Section id="tong-quan" eyebrow="Project Overview" title="Hành trình 6 nhiệm vụ" subtitle="Timeline học tập gồm 6 nhiệm vụ tương ứng với 6 bài tập cuối kỳ.">
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary md:block" />
          <ol className="space-y-6 md:space-y-10">
            {tasks.map((t, i) => (
              <li key={t.id} className={`reveal grid gap-4 md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`rounded-3xl border border-border bg-card p-6 shadow-card card-hover ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`flex items-center gap-3 ${i % 2 ? "" : "md:justify-end"}`}>
                    <span className="text-3xl">{t.icon}</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Nhiệm vụ {t.num}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.short}</p>
                  <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 ? "" : "md:justify-end"}`}>
                    {t.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary/20 px-2.5 py-1 text-xs font-medium text-secondary-foreground">{tag}</span>
                    ))}
                  </div>
                  <a href={`#${t.id}`} className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline`}>
                    Xem chi tiết →
                  </a>
                </div>
                <div className="hidden md:block" />
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ================= PROJECTS ================= */}
      <Section id="du-an" eyebrow="Projects" title="Chi tiết 6 dự án học tập" subtitle="Mỗi dự án đều được trình bày theo cấu trúc thống nhất: mục tiêu, quá trình, công cụ, minh chứng, phân tích và bài học.">
        <div className="space-y-10">
          <Project1 />
          <Project2 />
          <Project3 />
          <Project4 />
          <Project5 />
          <Project6 />
        </div>
      </Section>





      {/* ================= CONCLUSION ================= */}
      <Section id="tong-ket" eyebrow="Conclusion" title="Tổng kết hành trình" subtitle="Tự đánh giá quá trình thực hiện Portfolio, khó khăn, khắc phục và định hướng tương lai.">
        <div className="reveal rounded-3xl border border-border gradient-hero p-8 shadow-card">
          <p className="text-lg italic leading-relaxed text-foreground">
            “Thông qua quá trình xây dựng Portfolio kỹ thuật số cá nhân, em không chỉ lưu trữ các sản phẩm học tập mà còn nhìn lại toàn bộ quá trình rèn luyện kỹ năng công nghệ số, tư duy phản biện và khả năng sử dụng AI có trách nhiệm. Portfolio giúp em hiểu rằng trong môi trường học tập hiện đại, công nghệ không chỉ là công cụ hỗ trợ mà còn là phương tiện để người học thể hiện năng lực, sự sáng tạo và thái độ học tập nghiêm túc. Những kỹ năng như quản lý dữ liệu, tìm kiếm học thuật, viết prompt, làm việc nhóm trực tuyến và đánh giá đạo đức AI sẽ tiếp tục có giá trị trong học tập, nghiên cứu và công việc tương lai.”
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card title="🌱 Điều em tâm đắc nhất">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Hiểu bản chất của <b>Prompt Engineering</b> — đặt câu hỏi tốt là một kỹ năng học tập.</li>
              <li>• Thấy rõ giá trị của <b>tổ chức dữ liệu</b> khi làm việc dài hạn.</li>
              <li>• Ý thức rõ hơn về <b>đạo đức AI</b> và trách nhiệm cá nhân trong học thuật.</li>
              <li>• Trưởng thành trong <b>tư duy phản biện</b>: không tin ngay, luôn kiểm chứng.</li>
            </ul>
          </Card>
          <Card title="⛰️ Khó khăn đã gặp">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Khó sắp xếp nội dung Portfolio sao cho khoa học, logic.</li>
              <li>• Khó đánh giá độ tin cậy giữa nhiều nguồn thông tin trái chiều.</li>
              <li>• Khó viết prompt đủ rõ ràng để AI trả lời đúng ý.</li>
              <li>• Khó cân bằng giữa sử dụng AI và tư duy cá nhân.</li>
            </ul>
          </Card>
          <Card title="🛠️ Cách khắc phục">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Lập <b>kế hoạch chi tiết</b> trước khi bắt tay thực hiện.</li>
              <li>• <b>Kiểm chứng chéo</b> thông tin từ ít nhất 2–3 nguồn uy tín.</li>
              <li>• So sánh <b>nhiều phiên bản prompt</b> để chọn phương án tốt nhất.</li>
              <li>• Chủ động <b>chỉnh sửa cá nhân hóa</b> sản phẩm AI thay vì sao chép.</li>
            </ul>
          </Card>
          <Card title="🚀 Định hướng tương lai">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Tiếp tục dùng Portfolio để <b>lưu trữ sản phẩm</b> học tập lâu dài.</li>
              <li>• Ứng dụng kỹ năng số vào <b>nghiên cứu và công việc</b> sau này.</li>
              <li>• Sử dụng AI như <b>công cụ hỗ trợ</b>, luôn giữ tư duy độc lập.</li>
              <li>• Cập nhật liên tục các công cụ số và mô hình AI mới.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 font-bold">
                <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary text-white shadow-soft">P</span>
                <span>Portfolio Kỹ thuật số</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng lực số.
              </p>
            </div>
            <div className="text-sm">
              <h4 className="font-bold">Thông tin sinh viên</h4>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                <li>Họ tên: <b className="text-foreground">Bùi Ngọc Phương Linh</b></li>
                <li>MSV: <b className="text-foreground">25050952</b></li>
                <li>Lớp: <b className="text-foreground">QH-2025-E KTQT 2</b></li>
                <li>Khoa: <b className="text-foreground">Kinh tế Quốc tế – ĐH Kinh tế, ĐHQGHN</b></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
              </ul>
            </div>
            <div className="text-sm">
              <h4 className="font-bold">Điều hướng nhanh</h4>
              <ul className="mt-3 grid grid-cols-2 gap-1 text-muted-foreground">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-foreground">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
            © 2026 Portfolio Kỹ thuật số cá nhân&nbsp;
          </div>
        </div>
      </footer>

      {/* ================= BACK TO TOP ================= */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Về đầu trang"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full gradient-primary text-white shadow-soft transition hover:scale-110"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ============================================================
// Helper components
// ============================================================
function Section({
  id, eyebrow, title, subtitle, children,
}: { id: string; eyebrow: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="reveal mb-10 max-w-3xl">
        <span className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">{eyebrow}</span>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-3 text-center backdrop-blur">
      <div className="text-2xl font-black text-primary">{n}</div>
      <div className="text-[11px] font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between gap-2 border-b border-border/60 pb-2 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{value}</span>
    </li>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-card card-hover">
      <h4 className="text-lg font-bold">{title}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

// Reusable project shell
function ProjectShell({
  id, num, icon, title, tags, children,
}: { id: string; num: string; icon: string; title: string; tags: string[]; children: React.ReactNode }) {
  return (
    <article id={id} className="reveal scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 gradient-hero p-6 sm:p-8">
        <div className="flex min-w-0 items-center gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/80 text-3xl shadow-soft backdrop-blur">{icon}</div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-primary">DỰ ÁN {num}</div>
            <h3 className="truncate text-xl font-black sm:text-2xl">{title}</h3>
          </div>
        </div>
        <div className="hidden shrink-0 flex-wrap gap-2 sm:flex">
          {tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold backdrop-blur">{t}</span>
          ))}
        </div>
      </header>
      <div className="p-6 sm:p-8">{children}</div>
    </article>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-black uppercase tracking-wider text-primary">{label}</h4>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

function EvidenceBox({ label }: { label: string }) {
  return (
    <div className="mt-4 grid place-items-center rounded-2xl border-2 border-dashed border-border bg-muted/40 p-6 text-center">
      <div className="text-3xl">🖼️</div>
      <p className="mt-2 text-xs font-semibold text-muted-foreground">{label}</p>
      <p className="text-[11px] text-muted-foreground">Thay bằng minh chứng thật khi nộp bài</p>
    </div>
  );
}

/**
 * EvidenceGallery — khung ảnh minh chứng đặt cuối mỗi bài tập.
 * Hiển thị lưới ảnh có số thứ tự, đủ rộng để nhìn rõ, có thể bấm phóng to.
 * Truyền `items` là mảng { title, src? }. Nếu chưa có src sẽ hiện placeholder.
 */
function EvidenceGallery({
  title = "ẢNH MINH CHỨNG THỰC HÀNH",
  items,
}: {
  title?: string;
  items: { title: string; src?: string }[];
}) {
  return (
    <div className="mt-6 rounded-3xl border border-border bg-muted/30 p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-primary">
          <span>📸</span>
          <span>{title} ({items.length} ảnh)</span>
        </h4>
        <span className="text-[11px] font-medium text-muted-foreground">Bấm vào ảnh để phóng to nét</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <figure
            key={i}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <a
              href={it.src ?? "#"}
              target={it.src ? "_blank" : undefined}
              rel={it.src ? "noreferrer" : undefined}
              className="block"
              onClick={(e) => { if (!it.src) e.preventDefault(); }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-muted to-muted/40">
                {it.src ? (
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="text-4xl opacity-60">🖼️</div>
                      <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground backdrop-blur">
                        Thay bằng ảnh thật
                      </span>
                    </div>
                  </div>
                )}
                <span className="absolute left-2 top-2 grid h-7 min-w-7 place-items-center rounded-full bg-primary px-2 text-[11px] font-black text-primary-foreground shadow-soft">
                  {i + 1}
                </span>
              </div>
            </a>
            <figcaption className="border-t border-border/60 px-3 py-2.5 text-[13px] font-semibold leading-snug text-foreground">
              {i + 1}. {it.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/**
 * EvalAndIntegrity — khối "Phân tích - Đánh giá" + "Liêm chính học thuật & Sử dụng AI"
 * dùng chung cho cuối mỗi bài tập. Nội dung khác nhau ở từng bài.
 */
function EvalAndIntegrity({
  good,
  improve,
  lesson,
  aiUsage,
  commitments,
}: {
  good: string[];
  improve: string[];
  lesson: string[];
  aiUsage: string[];
  commitments: string[];
}) {
  return (
    <div className="mt-8 space-y-6">
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-primary">
          <span>📊</span><span>Phân tích – Đánh giá</span>
        </h4>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4">
            <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400">
              <span>✅</span><span>Điểm tốt</span>
            </h5>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {good.map((x, i) => <li key={i}>• {x}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4">
            <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-700 dark:text-amber-400">
              <span>🛠️</span><span>Cần cải thiện</span>
            </h5>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {improve.map((x, i) => <li key={i}>• {x}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4">
            <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-sky-700 dark:text-sky-400">
              <span>💡</span><span>Bài học rút ra</span>
            </h5>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {lesson.map((x, i) => <li key={i}>• {x}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-muted/30 p-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-primary">
          <span>🎓</span><span>Liêm chính học thuật & Sử dụng AI</span>
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h5 className="mb-2 text-sm font-bold text-foreground">Cách tôi sử dụng AI:</h5>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {aiUsage.map((x, i) => <li key={i}>→ {x}</li>)}
            </ul>
          </div>
          <div>
            <h5 className="mb-2 text-sm font-bold text-foreground">Cam kết liêm chính:</h5>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {commitments.map((x, i) => <li key={i}>☑ {x}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



// ============================================================
// PROJECT 1 — Quản lý tệp
// ============================================================
function ExpandableGallery({
  images,
  label,
  previewCount = 5,
  cols = 6,
}: {
  images: { url: string }[];
  label: string;
  previewCount?: number;
  cols?: 4 | 6;
}) {
  const [expanded, setExpanded] = useState(false);
  const rest = images.slice(previewCount);
  const shown = expanded ? images : images.slice(0, previewCount);
  const gridCls = cols === 4
    ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
    : "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6";
  const collapseSpan = cols === 4
    ? "col-span-2 sm:col-span-3 lg:col-span-4"
    : "col-span-2 sm:col-span-3 lg:col-span-6";
  return (
    <div className={gridCls}>
      {shown.map((img, i) => (
        <a
          key={i}
          href={img.url}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-xl border border-border bg-muted"
        >
          <img
            src={img.url}
            alt={`${label} – ảnh ${i + 1}`}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
          />
          <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-black text-primary backdrop-blur">
            #{String(i + 1).padStart(2, "0")}
          </span>
        </a>
      ))}
      {!expanded && rest.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-primary/40 bg-primary/10 text-primary transition hover:bg-primary/20"
        >
          <div className="text-center">
            <div className="text-2xl font-black">+{rest.length}</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider">Xem thêm</div>
          </div>
        </button>
      )}
      {expanded && rest.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className={`${collapseSpan} mt-1 rounded-full border-2 border-primary/40 bg-primary/15 px-6 py-3 text-sm font-black text-primary shadow-sm transition hover:bg-primary/25 hover:shadow-md`}
        >
          ▲ Thu gọn
        </button>
      )}
    </div>
  );
}

function Bai1Gallery() {
  return <ExpandableGallery images={bai1Images} label="Minh chứng bài 1" previewCount={5} cols={6} />;
}


function Project1() {
  return (
    <ProjectShell id="task-1" num="01" icon="📁" title="Bài tập 1 – Thao tác cơ bản với tệp tin và thư mục" tags={["File Explorer", "Google Drive", "OneDrive"]}>
      <div className="grid gap-6 md:grid-cols-2">
        <Block label="🎯 Mục tiêu">
          Biết tạo thư mục, lưu trữ tài liệu khoa học, đặt tên tệp nhất quán và quản lý dữ liệu học tập hiệu quả trong suốt học kỳ.
        </Block>
        <Block label="🛠️ Công cụ sử dụng">
          File Explorer (Windows/macOS), Google Drive, OneDrive.
        </Block>
        <Block label="⚙️ Quá trình thực hiện">
          <ol className="ml-4 list-decimal space-y-1">
            <li>Tạo thư mục gốc cho môn học: <code className="rounded bg-muted px-1">NMCNS_AI_2026</code>.</li>
            <li>Chia 4 thư mục con: <i>Bài tập</i>, <i>Tài liệu tham khảo</i>, <i>Hình ảnh minh chứng</i>, <i>Sản phẩm cuối kỳ</i>.</li>
            <li>Đặt tên tệp theo quy tắc: <code className="rounded bg-muted px-1">STT_TenBaiTap_NgayThucHien_PhienBan</code>.</li>
            <li>Ví dụ: <code className="rounded bg-muted px-1">NMCNS_Bai01_QuanLyTep_2026-11-20_v1.docx</code>.</li>
          </ol>
        </Block>
        <Block label="📊 Minh chứng">
          Ảnh chụp màn hình cây thư mục có phân cấp rõ ràng và file được đặt tên đúng quy tắc.
        </Block>
      </div>

      <div className="mt-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">📄 Nội dung báo cáo chi tiết</div>
        <p className="mb-4 text-sm text-muted-foreground">
          Thực hành 12 thao tác nền tảng trên <b>File Explorer</b> (Windows) theo đúng quy trình quản lý dữ liệu số.
        </p>
        <ol className="grid gap-2 text-sm sm:grid-cols-2">
          {[
            ["Mở File Explorer", "Win + E hoặc biểu tượng thư mục trên thanh tác vụ."],
            ["Truy cập ổ đĩa", "This PC → chọn ổ D:/E: (hoặc thư mục Documents nếu chỉ có ổ C:)."],
            ["Tạo thư mục gốc", "Chuột phải → New → Folder → đặt tên ThucHanh_hotensinhvien."],
            ["Vào thư mục vừa tạo", "Nhấp đúp mở thư mục ThucHanh_NguyenVanA."],
            ["Tạo tệp văn bản", "New → Text Document → GhiChu.txt."],
            ["Đổi tên tệp", "Rename → GhiChuQuanTrong.txt."],
            ["Tạo thư mục con", "New → Folder → TaiLieu."],
            ["Sao chép (Copy)", "Ctrl + C → mở TaiLieu → Ctrl + V để dán bản sao."],
            ["Di chuyển (Cut)", "Tạo DiChuyen.txt → Ctrl + X → dán vào TaiLieu."],
            ["Xoá vào Thùng rác", "Chuột phải → Delete: tệp vào Recycle Bin."],
            ["Xoá vĩnh viễn", "Shift + Delete: tệp bị xoá không qua Thùng rác."],
            ["Khôi phục dữ liệu", "Recycle Bin → Restore để đưa tệp về vị trí gốc."],
          ].map(([t, d], i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-border bg-card/60 p-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-black text-primary">{i + 1}</span>
              <span><b>{t}:</b> <span className="text-muted-foreground">{d}</span></span>
            </li>
          ))}
        </ol>
        <p className="mt-4 rounded-xl bg-primary/10 p-3 text-xs">
          <b>Chốt lại:</b> Nắm vững chu trình <i>Tạo → Đổi tên → Sao chép → Di chuyển → Xoá → Khôi phục</i> là nền tảng để quản lý dữ liệu học tập khoa học, tránh mất mát và dễ đồng bộ đám mây.
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card/60 p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
            🖼️ Minh chứng thực tế (20 ảnh)
          </div>
          <a
            href={bai1Report.url}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/15 px-6 py-3 text-sm font-black text-primary shadow-sm transition hover:bg-primary/25 hover:shadow-md"
          >
            ⬇️ Tải file báo cáo (.docx)
          </a>
        </div>
        <Bai1Gallery />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Block label="🔬 Phân tích">
          <ul className="space-y-1">
            <li>• Cấu trúc phân cấp giúp <b>tìm kiếm nhanh</b> và tránh thất lạc dữ liệu.</li>
            <li>• Quy tắc đặt tên giúp phân biệt <b>phiên bản cũ – mới</b>, hỗ trợ làm việc lâu dài.</li>
            <li>• Đồng bộ đám mây (Drive/OneDrive) đảm bảo <b>truy cập mọi nơi</b> và <b>sao lưu an toàn</b>.</li>
            <li>• Đặt tên tiếng Việt không dấu, dùng <code>_</code> giúp tương thích đa hệ điều hành.</li>
          </ul>
        </Block>
        <Block label="💡 Bài học rút ra">
          <ul className="space-y-1">
            <li>• Quản lý dữ liệu khoa học là <b>kỹ năng nền tảng</b> của công dân số.</li>
            <li>• Một cấu trúc thư mục tốt giúp <b>tiết kiệm thời gian</b> và tăng hiệu quả học tập.</li>
            <li>• Chuẩn hóa quy tắc từ đầu học kỳ dễ hơn nhiều so với sửa lại về sau.</li>
          </ul>
        </Block>
      </div>
      <EvalAndIntegrity
        good={[
          "Thực hiện đầy đủ các thao tác cơ bản với tệp và thư mục.",
          "Chụp màn hình chi tiết từng bước làm minh chứng.",
          "Tổ chức cấu trúc thư mục khoa học, dễ quản lý.",
        ]}
        improve={[
          "Cần tìm hiểu thêm phím tắt File Explorer để thao tác nhanh.",
          "Học cách dùng tính năng tìm kiếm nâng cao trong Explorer.",
        ]}
        lesson={[
          "Quản lý tệp có tổ chức giúp tiết kiệm thời gian tìm kiếm.",
          "Biết dùng Recycle Bin để khôi phục tệp đã xoá nhầm.",
          "Shortcut giúp truy cập nhanh các thư mục thường dùng.",
        ]}
        aiUsage={[
          "Không sử dụng AI trong bài tập này.",
          "Tự thực hành trực tiếp trên máy theo hướng dẫn giảng viên.",
        ]}
        commitments={[
          "Tự thực hiện tất cả thao tác trên máy tính cá nhân.",
          "Ảnh chụp màn hình là minh chứng thực tế từ quá trình làm.",
          "Toàn bộ báo cáo được viết dựa trên trải nghiệm thực tế.",
        ]}
      />
    </ProjectShell>
  );
}

// ============================================================
// PROJECT 2 — Tìm kiếm & đánh giá thông tin
// ============================================================
function Project2() {
  const rows = [
    { src: "Google Scholar", author: "Đại học nhiều nước", year: "2022–2024", trust: "Cao", why: "Bài báo bình duyệt, có trích dẫn.", limit: "Một số bài trả phí." },
    { src: "Website ĐH (edu.vn)", author: "Giảng viên/Khoa CNTT", year: "2023", trust: "Cao", why: "Nguồn học thuật chính thống.", limit: "Cập nhật không đều." },
    { src: "Báo cáo PDF của UNESCO", author: "UNESCO", year: "2023", trust: "Rất cao", why: "Tổ chức quốc tế, dữ liệu chuẩn.", limit: "Phạm vi rộng, cần chọn phần liên quan." },
    { src: "Blog cá nhân", author: "Không rõ", year: "2021", trust: "Thấp", why: "Có góc nhìn thực tiễn.", limit: "Không có kiểm chứng, dễ chủ quan." },
  ];
  return (
    <ProjectShell id="task-2" num="02" icon="🔎" title="Bài tập 2 – Tìm kiếm và đánh giá thông tin học thuật" tags={["Google Scholar", "Toán tử nâng cao", "Đánh giá nguồn"]}>
      <div className="grid gap-6 md:grid-cols-2">
        <Block label="🎯 Mục tiêu">
          Biết sử dụng toán tử tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn thông tin học thuật.
        </Block>
        <Block label="🛠️ Công cụ sử dụng">
          Google Search, Google Scholar, thư viện số trường đại học, báo cáo PDF của tổ chức quốc tế.
        </Block>
      </div>

      <div className="mt-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">📄 Nội dung báo cáo chi tiết</div>
        <p className="text-sm">
          <b>Chủ đề nghiên cứu:</b> <i>Tác động của các Hiệp định Thương mại Tự do thế hệ mới (CPTPP &amp; EVFTA) đến dòng vốn FDI vào Việt Nam giai đoạn 2019–2026.</i>
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="mb-1 font-bold text-primary">🔍 Quy trình tìm kiếm đa tầng</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>• CSDL học thuật: <b>Google Scholar</b>, <b>ScienceDirect</b>.</li>
              <li>• Chuỗi Boolean: <code className="rounded bg-muted px-1">("CPTPP" OR "EVFTA") AND "FDI" AND "Vietnam"</code>.</li>
              <li>• Nguồn thứ cấp: <b>GSO</b> (Tổng cục Thống kê), <b>World Bank Open Data</b>.</li>
              <li>• Tiêu chí: peer-reviewed hoặc báo cáo chính thống từ định chế tài chính toàn cầu.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="mb-1 font-bold text-primary">📚 10 nguồn tiêu biểu đã thẩm định</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Bài báo KH: Le &amp; Nguyen (2021), Tran (2022), Phan (2023), Đào (2022).</li>
              <li>• Báo cáo quốc tế: <b>UNCTAD WIR 2024</b>, <b>IMF Article IV 2024</b>, <b>World Bank 2023</b>.</li>
              <li>• Số liệu gốc: <b>GSO – Niên giám thống kê 2024</b>.</li>
              <li>• Sách &amp; luận án: Baker (2023) – Pearson, Nguyen M.H. (2020) – NEU.</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-secondary/30 bg-secondary/10 p-4 text-sm">
          <div className="mb-2 font-bold">⭐ Top nguồn theo thang <b>CRAAP</b> (1–5)</div>
          <div className="grid gap-2 sm:grid-cols-3 text-xs">
            <div className="rounded-lg bg-card/70 p-2"><b>UNCTAD 2024</b> — 5.0 ⭐⭐⭐⭐⭐</div>
            <div className="rounded-lg bg-card/70 p-2"><b>IMF 2024</b> — 4.9 ⭐⭐⭐⭐⭐</div>
            <div className="rounded-lg bg-card/70 p-2"><b>Le &amp; Nguyen 2021</b> — 4.8 ⭐⭐⭐⭐⭐</div>
            <div className="rounded-lg bg-card/70 p-2"><b>Baker 2023</b> — 4.7 ⭐⭐⭐⭐⭐</div>
            <div className="rounded-lg bg-card/70 p-2"><b>World Bank 2023</b> — 4.6 ⭐⭐⭐⭐</div>
            <div className="rounded-lg bg-card/70 p-2"><b>Tran 2022 / GSO 2025</b> — 4.5 ⭐⭐⭐⭐</div>
          </div>
        </div>
        <p className="mt-4 rounded-xl bg-primary/10 p-3 text-xs">
          <b>Kết luận:</b> FTA thế hệ mới là "cú hích" thu hút FDI chất lượng cao (công nghệ, quản trị hiện đại). Kỹ năng <i>tìm kiếm Boolean + thẩm định CRAAP</i> giúp phân biệt <b>nguồn gốc</b>, <b>nguồn thứ cấp</b> và <b>nguồn tổng hợp</b>, đảm bảo tính khách quan cho nghiên cứu.
        </p>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-sm font-black uppercase tracking-wider text-primary">🔧 Chiến lược tìm kiếm — hơn 4 toán tử nâng cao</h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { op: "site:", ex: "AI trong giáo dục site:edu.vn", why: "Giới hạn trong tên miền học thuật." },
            { op: "filetype:", ex: "generative AI filetype:pdf", why: "Chỉ lấy tài liệu PDF, thường là báo cáo/giáo trình." },
            { op: "intitle:", ex: 'intitle:"trí tuệ nhân tạo"', why: "Lọc kết quả có từ khóa nằm trong tiêu đề." },
            { op: '"…"', ex: '"đạo đức AI trong giáo dục"', why: "Bắt buộc khớp chính xác cụm từ." },
            { op: "OR", ex: "AI OR machine learning giáo dục", why: "Mở rộng phạm vi với từ đồng nghĩa." },
            { op: "-", ex: "chatgpt -marketing", why: "Loại bỏ chủ đề không liên quan." },
            { op: "after:", ex: "AI education after:2023", why: "Chỉ lấy nội dung cập nhật mới." },
          ].map((o) => (
            <div key={o.op} className="rounded-2xl border border-border bg-muted/40 p-4">
              <code className="rounded bg-primary/10 px-2 py-0.5 text-sm font-bold text-primary">{o.op}</code>
              <p className="mt-2 text-xs"><b>VD:</b> <code className="rounded bg-background px-1">{o.ex}</code></p>
              <p className="mt-1 text-xs text-muted-foreground">{o.why}</p>
            </div>
          ))}
        </div>
      </div>




      <div className="mt-6">
        <h4 className="mb-2 text-sm font-black uppercase tracking-wider text-primary">📋 Bảng đánh giá nguồn</h4>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-accent">
              <tr>
                {["Nguồn", "Tác giả/Tổ chức", "Năm", "Tin cậy", "Lý do chọn", "Hạn chế"].map((h) => (
                  <th key={h} className="p-3 font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.src} className="border-t border-border">
                  <td className="p-3 font-semibold">{r.src}</td>
                  <td className="p-3 text-muted-foreground">{r.author}</td>
                  <td className="p-3 text-muted-foreground">{r.year}</td>
                  <td className="p-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      r.trust === "Rất cao" || r.trust === "Cao"
                        ? "bg-secondary/30 text-secondary-foreground"
                        : "bg-primary/20 text-primary"
                    }`}>{r.trust}</span>
                  </td>
                  <td className="p-3 text-muted-foreground">{r.why}</td>
                  <td className="p-3 text-muted-foreground">{r.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Block label="🔬 Phân tích">
          <ul className="space-y-1">
            <li>• Tìm kiếm không chỉ là nhập từ khóa — cần có <b>chiến lược</b>.</li>
            <li>• Toán tử nâng cao giúp <b>thu hẹp phạm vi</b> và tăng chất lượng kết quả.</li>
            <li>• Nguồn học thuật, tổ chức quốc tế đáng tin hơn nguồn <b>không rõ tác giả</b>.</li>
            <li>• Luôn đối chiếu <b>2–3 nguồn</b> trước khi kết luận.</li>
          </ul>
        </Block>
        <Block label="💡 Bài học">
          <ul className="space-y-1">
            <li>• Cần <b>kiểm chứng thông tin</b> trước khi sử dụng.</li>
            <li>• Không phụ thuộc vào một nguồn duy nhất.</li>
            <li>• Kết hợp toán tử là cách khai thác công cụ tìm kiếm hiệu quả nhất.</li>
          </ul>
        </Block>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card/60 p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
          🖼️ Minh chứng thực tế ({bai2Images.length} ảnh)
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {bai2Images.map((img, i) => (
            <a
              key={i}
              href={img.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-border bg-muted"
            >
              <img
                src={img.url}
                alt={`Minh chứng bài 2 – ảnh ${i + 1}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-black text-primary backdrop-blur">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </div>
      <EvalAndIntegrity
        good={[
          "Áp dụng thành thạo toán tử site:, filetype:, \"...\", AND/OR.",
          "Đánh giá độ tin cậy nguồn theo 4 tiêu chí rõ ràng.",
          "Ưu tiên nguồn học thuật bình duyệt và tổ chức quốc tế.",
        ]}
        improve={[
          "Cần tìm hiểu thêm database chuyên ngành (Scopus, WoS).",
          "Bổ sung kỹ thuật trích dẫn APA/IEEE bằng Zotero.",
        ]}
        lesson={[
          "Từ khoá tốt tiết kiệm 80% thời gian tìm tài liệu.",
          "Không nguồn nào tuyệt đối đúng — cần đối chiếu chéo.",
          "Blog cá nhân chỉ nên dùng làm gợi ý, không làm dẫn chứng.",
        ]}
        aiUsage={[
          "Dùng ChatGPT gợi ý từ khoá tiếng Anh chuyên ngành.",
          "Dùng AI tóm tắt nhanh bài báo dài để sàng lọc trước khi đọc.",
          "Không dùng AI thay thế cho việc đọc và trích dẫn gốc.",
        ]}
        commitments={[
          "Luôn kiểm tra bản gốc trước khi trích dẫn tài liệu.",
          "Không bịa nguồn hoặc trích dẫn nguồn chưa đọc.",
          "Ghi rõ khi AI được dùng để hỗ trợ tìm kiếm.",
        ]}
      />
    </ProjectShell>
  );
}

// ============================================================
// PROJECT 3 — Prompt hiệu quả
// ============================================================
function Project3() {
  return (
    <ProjectShell id="task-3" num="03" icon="💬" title="Bài tập 3 – Viết Prompt hiệu quả cho các tác vụ học tập" tags={["ChatGPT", "Gemini", "Prompt Engineering"]}>
      <div className="grid gap-6 md:grid-cols-2">
        <Block label="🎯 Mục tiêu">
          Biết cách viết prompt rõ ràng để AI trả lời đúng và hữu ích hơn cho học tập.
        </Block>
        <Block label="🛠️ Công cụ sử dụng">
          ChatGPT, Gemini, Claude.
        </Block>
      </div>

      <div className="mt-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">📄 Nội dung báo cáo chi tiết</div>
        <p className="text-sm">
          Thử nghiệm chiến lược <b>Prompt Engineering</b> trên 3 tác vụ học tập ngành Kinh tế, so sánh 3 cấp độ prompt: <i>Cơ bản → Cải tiến → Nâng cao</i>.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="text-xs font-bold text-primary">Tác vụ 1</div>
            <div className="font-semibold">Tóm tắt bài đọc học thuật</div>
            <p className="mt-1 text-xs text-muted-foreground">"Tác động của EVFTA đến FDI tại Việt Nam" — Kỹ thuật <b>Role + Chain-of-Thought + Structural Output</b> (bảng Markdown).</p>
          </div>
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="text-xs font-bold text-primary">Tác vụ 2</div>
            <div className="font-semibold">Giải thích khái niệm phức tạp</div>
            <p className="mt-1 text-xs text-muted-foreground">"Bẫy thu nhập trung bình" — Kỹ thuật <b>Few-shot + Analogy Prompting</b> (ẩn dụ vận động viên).</p>
          </div>
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="text-xs font-bold text-primary">Tác vụ 3</div>
            <div className="font-semibold">Tạo bộ câu hỏi ôn tập</div>
            <p className="mt-1 text-xs text-muted-foreground">"Cung – Cầu &amp; Thuế" — Kỹ thuật <b>Deliberative Prompting + Feedback Loop</b>, câu hỏi tình huống thực tế (hạn hán Brazil, giá cà phê).</p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-secondary/30 bg-secondary/10 p-4">
          <div className="mb-2 text-sm font-bold">🧭 Nguyên tắc <b>"4C"</b> đúc rút từ thực nghiệm</div>
          <div className="grid gap-2 sm:grid-cols-2 text-xs">
            <div className="rounded-lg bg-card/70 p-2"><b>C – Context</b>: Xác định vai trò và mục đích cuối của tác vụ.</div>
            <div className="rounded-lg bg-card/70 p-2"><b>C – Clarity</b>: Động từ mạnh, chia nhỏ nhiệm vụ phức tạp.</div>
            <div className="rounded-lg bg-card/70 p-2"><b>C – Constraints</b>: Định dạng, số từ, điều AI <i>không</i> được làm.</div>
            <div className="rounded-lg bg-card/70 p-2"><b>C – Constructive Examples</b>: Dữ liệu/phong cách mẫu (few-shot).</div>
          </div>
        </div>

        <p className="mt-4 rounded-xl bg-primary/10 p-3 text-xs">
          <b>Kết luận:</b> Nâng cấp prompt không phải là "viết dài hơn" mà là cung cấp <b>khung tư duy logic</b> cho AI — buộc AI truy xuất kiến thức chuyên sâu, thực hiện các bước trung gian và trả kết quả đúng định dạng cần dùng.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <div className="mb-2 text-xs font-bold uppercase text-primary">⚠️ Prompt ban đầu</div>
          <p className="rounded-xl bg-card p-3 text-sm italic">
            “Tóm tắt lý thuyết về AI trong giáo dục.”
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            → Kết quả: chung chung, dài dòng, không có cấu trúc, không phù hợp một bài học cụ thể.
          </p>
        </div>
        <div className="rounded-2xl border border-secondary/40 bg-secondary/10 p-5">
          <div className="mb-2 text-xs font-bold uppercase text-secondary-foreground">✅ Prompt cải tiến</div>
          <p className="rounded-xl bg-card p-3 text-sm italic">
            “Bạn là <b>giảng viên môn Nhập môn Công nghệ số</b>. Hãy tóm tắt vai trò của AI tạo sinh trong giáo dục đại học Việt Nam cho <b>sinh viên năm nhất</b>. Trình bày theo cấu trúc: (1) khái niệm, (2) 3 ứng dụng, (3) 3 rủi ro, (4) 2 khuyến nghị. Độ dài ~250 từ, dùng gạch đầu dòng, có ví dụ minh họa.”
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            → Kết quả: có cấu trúc rõ, phù hợp trình độ, dễ dùng cho bài thuyết trình.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card/60 p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
            🖼️ Minh chứng thực tế ({bai3Images.length} ảnh)
          </div>
          <a
            href={bai3Report.url}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/15 px-6 py-3 text-sm font-black text-primary shadow-sm transition hover:bg-primary/25 hover:shadow-md"
          >
            ⬇️ Tải file báo cáo (.docx)
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {bai3Images.map((img, i) => (
            <a
              key={i}
              href={img.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-border bg-muted"
            >
              <img
                src={img.url}
                alt={`Minh chứng bài 3 – ảnh ${i + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-black text-primary backdrop-blur">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-sm font-black uppercase tracking-wider text-primary">📋 Bảng so sánh Prompt</h4>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-accent">
              <tr>
                {["Tiêu chí", "Prompt ban đầu", "Prompt cải tiến", "Nhận xét"].map((h) => (
                  <th key={h} className="p-3 font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Độ rõ ràng", "Mơ hồ", "Rõ ràng, cụ thể", "Cải tiến tốt hơn hẳn"],
                ["Vai trò", "Không xác định", "Giảng viên môn học", "Định hình văn phong AI"],
                ["Bối cảnh", "Không có", "Sinh viên năm nhất VN", "AI trả lời sát đối tượng"],
                ["Yêu cầu đầu ra", "Không định dạng", "4 phần, ~250 từ, ví dụ", "Kiểm soát cấu trúc tốt"],
                ["Mức chính xác", "Thấp – dàn trải", "Cao – trọng tâm", "Đúng mục tiêu học tập"],
                ["Khả năng kiểm soát", "Yếu", "Mạnh", "Dễ chỉnh sửa & tái sử dụng"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  <td className="p-3 font-semibold">{r[0]}</td>
                  <td className="p-3 text-muted-foreground">{r[1]}</td>
                  <td className="p-3 text-muted-foreground">{r[2]}</td>
                  <td className="p-3 text-muted-foreground">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Block label="🔬 Phân tích">
          <ul className="space-y-1">
            <li>• AI phản hồi theo <b>ngữ cảnh</b> và <b>mức độ cụ thể</b> của yêu cầu.</li>
            <li>• Prompt càng rõ vai trò – bối cảnh – tiêu chí, kết quả càng đúng ý.</li>
            <li>• Prompt Engineering biến AI thành <b>công cụ hỗ trợ tư duy</b>, không phải làm thay.</li>
          </ul>
        </Block>
        <Block label="💡 Bài học">
          <ul className="space-y-1">
            <li>• Muốn AI trả lời tốt, cần <b>đặt câu hỏi tốt</b>.</li>
            <li>• Cấu trúc chuẩn: <i>vai trò – bối cảnh – nhiệm vụ – tiêu chí – định dạng</i>.</li>
            <li>• Luôn <b>đọc lại và tinh chỉnh</b> prompt trước khi gửi.</li>
          </ul>
        </Block>
      </div>
      <EvalAndIntegrity
        good={[
          "So sánh có hệ thống 2 phiên bản prompt trên cùng chủ đề.",
          "Áp dụng công thức Vai trò – Ngữ cảnh – Yêu cầu – Định dạng.",
          "Đầu ra V2 rõ ràng, đúng ý và dễ tái sử dụng hơn V1.",
        ]}
        improve={[
          "Cần thử thêm mô hình khác (Claude) để đối chiếu kết quả.",
          "Bổ sung ví dụ prompt phản mẫu (anti-pattern) để tránh.",
        ]}
        lesson={[
          "Prompt càng cụ thể, đầu ra càng chất lượng.",
          "Đặt vai trò cho AI giúp tăng độ chuyên môn hoá.",
          "Luôn kiểm chứng thông tin AI bằng nguồn thứ hai.",
        ]}
        aiUsage={[
          "ChatGPT và Gemini là đối tượng thử nghiệm chính.",
          "Prompt do cá nhân thiết kế, chỉnh sửa qua nhiều vòng.",
          "Kết luận và đánh giá đầu ra hoàn toàn do cá nhân viết.",
        ]}
        commitments={[
          "Không dùng đầu ra AI làm bài mẫu để nộp trực tiếp.",
          "Ghi lại prompt gốc để có thể tái hiện kết quả.",
          "Trích dẫn nguồn khi trích lại thông tin AI cung cấp.",
        ]}
      />
    </ProjectShell>
  );
}

// ============================================================
// PROJECT 4 — Hợp tác trực tuyến
// ============================================================
function Project4() {
  const members = [
    { name: "Thành viên A", task: "Thu thập tài liệu, tổng hợp lý thuyết", due: "20/11", status: "Hoàn thành", note: "Đã chia sẻ Drive" },
    { name: "Thành viên B", task: "Thiết kế slide, infographic", due: "25/11", status: "Đang làm", note: "Bản v2" },
    { name: "Thành viên C", task: "Viết kịch bản video, chỉnh sửa", due: "28/11", status: "Đang làm", note: "Chờ duyệt" },
    { name: "Thành viên D", task: "Tổng hợp báo cáo, kiểm tra chính tả", due: "30/11", status: "Chưa làm", note: "Sau khi có slide" },
  ];
  return (
    <ProjectShell id="task-4" num="04" icon="🤝" title="Bài tập 4 – Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm" tags={["Trello", "Notion", "Google Sheets"]}>
      <div className="grid gap-6 md:grid-cols-2">
        <Block label="🎯 Mục tiêu">
          Biết lập kế hoạch, phân công công việc và theo dõi tiến độ bằng công cụ trực tuyến.
        </Block>
        <Block label="🛠️ Công cụ sử dụng">
          Trello (kanban), Notion (tài liệu), Google Sheets (bảng tiến độ), Microsoft Planner.
        </Block>
      </div>

      <div className="mt-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">📄 Nội dung báo cáo chi tiết</div>
        <p className="text-sm">
          Dự án nhóm kéo dài 1 tuần — vai trò <b>thành viên phụ trách nội dung và quản lý tài liệu</b>. Sử dụng bộ 3 công cụ Google tạo thành một <i>hệ sinh thái làm việc số</i>.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="text-xs font-bold text-primary">📝 Google Docs</div>
            <div className="font-semibold">Xử lý nội dung</div>
            <p className="mt-1 text-xs text-muted-foreground">Cộng tác thời gian thực; Comment, Suggestion mode, Version History để minh bạch đóng góp.</p>
          </div>
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="text-xs font-bold text-primary">📂 Google Drive</div>
            <div className="font-semibold">Quản lý tài nguyên</div>
            <p className="mt-1 text-xs text-muted-foreground">Thư mục phân cấp <i>Dự án → Nội dung → Chi tiết</i>; quy tắc đặt tên <code className="rounded bg-muted px-1">NoiDung_Nhom_Ngay_Phienban</code>; phân quyền view/edit.</p>
          </div>
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="text-xs font-bold text-primary">🎥 Google Meet</div>
            <div className="font-semibold">Điều phối giao tiếp</div>
            <p className="mt-1 text-xs text-muted-foreground">Họp đồng bộ, chia sẻ màn hình, thống nhất nội dung trước khi chỉnh sửa tài liệu.</p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-secondary/30 bg-secondary/10 p-4">
          <div className="mb-2 text-sm font-bold">🔬 Phân tích 4 góc nhìn hệ thống</div>
          <ul className="grid gap-1 text-xs sm:grid-cols-2">
            <li>• <b>Năng suất</b>: từ quy trình tuần tự → real-time collaboration; giảm <i>information latency</i> và <i>coordination cost</i>.</li>
            <li>• <b>Cộng tác</b>: hình thành <i>collaborative intelligence</i> qua co-creation, minh bạch đóng góp.</li>
            <li>• <b>Quản trị tri thức</b>: Drive như <i>knowledge repository</i>, tái sử dụng và bảo toàn dữ liệu.</li>
            <li>• <b>Giao tiếp</b>: mô hình <i>hybrid</i> — kết hợp đồng bộ (Meet) &amp; phi đồng bộ (Docs/Drive).</li>
          </ul>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-card/60 p-4">
          <div className="mb-2 text-sm font-bold">⚠️ 4 thách thức → giải pháp</div>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• <b>Xung đột nội dung khi cộng tác real-time</b> → phân chia phạm vi, dùng Suggestion mode, chốt qua Meet.</li>
            <li>• <b>Thiếu cấu trúc quản lý tài liệu</b> → thư mục nhiều cấp, quy tắc đặt tên thống nhất, phân quyền rõ.</li>
            <li>• <b>Giao tiếp không đồng đều</b> → tăng tần suất họp, chia sẻ màn hình, tóm tắt sau họp vào Docs.</li>
            <li>• <b>Phụ thuộc công nghệ</b> → chuẩn bị offline, lưu Drive, ghi chú lại khi mất kết nối.</li>
          </ul>
        </div>

        <p className="mt-4 rounded-xl bg-primary/10 p-3 text-xs">
          <b>Bài học:</b> Hiệu quả không nằm ở công cụ mà ở <b>cách tổ chức</b> và <b>ý thức phối hợp</b>. Kết hợp đồng bộ + phi đồng bộ là chìa khoá tối ưu năng suất nhóm.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-accent">
            <tr>
              {["Thành viên", "Nhiệm vụ", "Hạn", "Trạng thái", "Ghi chú"].map((h) => (
                <th key={h} className="p-3 font-bold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.name} className="border-t border-border">
                <td className="p-3 font-semibold">{m.name}</td>
                <td className="p-3 text-muted-foreground">{m.task}</td>
                <td className="p-3 text-muted-foreground">{m.due}</td>
                <td className="p-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                    m.status === "Hoàn thành" ? "bg-secondary/30 text-secondary-foreground"
                      : m.status === "Đang làm" ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}>{m.status}</span>
                </td>
                <td className="p-3 text-muted-foreground">{m.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card/60 p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
            🖼️ Minh chứng thực tế ({bai4Images.length} ảnh)
          </div>
          <a
            href={bai4Report.url}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/15 px-6 py-3 text-sm font-black text-primary shadow-sm transition hover:bg-primary/25 hover:shadow-md"
          >
            ⬇️ Tải file báo cáo (.docx)
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {bai4Images.map((img, i) => (
            <a
              key={i}
              href={img.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-border bg-muted"
            >
              <img
                src={img.url}
                alt={`Minh chứng bài 4 – ảnh ${i + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-black text-primary backdrop-blur">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Block label="🔬 Phân tích quy trình">
          <ul className="space-y-1">
            <li>• <b>Chia việc</b> theo năng lực từng thành viên, tránh trùng lặp.</li>
            <li>• <b>Theo dõi trạng thái</b>: Chưa làm → Đang làm → Cần chỉnh sửa → Hoàn thành.</li>
            <li>• <b>Nhắc hạn tự động</b> qua Trello/Notion giúp tránh trễ deadline.</li>
            <li>• <b>Phản hồi</b> tại chỗ trong công cụ giữ mọi ý kiến ở cùng một nơi.</li>
          </ul>
        </Block>
        <Block label="💡 Bài học">
          <ul className="space-y-1">
            <li>• Làm việc nhóm hiệu quả cần <b>kế hoạch rõ ràng</b>.</li>
            <li>• Công cụ số giúp nâng cao <b>tính trách nhiệm</b> và khả năng phối hợp.</li>
            <li>• Minh bạch tiến độ giúp phát hiện vấn đề <b>sớm</b> và điều chỉnh kịp thời.</li>
          </ul>
        </Block>
      </div>
      <EvalAndIntegrity
        good={[
          "Phân công công việc rõ ràng theo năng lực từng thành viên.",
          "Sử dụng Trello/Notion giúp tiến độ minh bạch, dễ theo dõi.",
          "Họp nhóm định kỳ có biên bản, tránh trùng lặp công việc.",
        ]}
        improve={[
          "Một số buổi họp còn kéo dài do chưa có agenda cụ thể.",
          "Cần thống nhất quy ước đặt tên file khi cộng tác.",
        ]}
        lesson={[
          "Giao tiếp chủ động quan trọng hơn công cụ đang dùng.",
          "Deadline nội bộ nên đặt sớm hơn deadline chính thức.",
          "Ghi nhận đóng góp cá nhân giúp nhóm gắn kết hơn.",
        ]}
        aiUsage={[
          "Dùng ChatGPT để gợi ý mẫu biên bản họp nhóm.",
          "Dùng AI dịch nhanh tài liệu tham khảo tiếng Anh.",
          "Không dùng AI để thay thế trao đổi giữa các thành viên.",
        ]}
        commitments={[
          "Đóng góp trung thực, không nhận công của thành viên khác.",
          "Ghi nhận rõ phần việc AI hỗ trợ trong tài liệu nhóm.",
          "Bảo mật thông tin nội bộ của nhóm khi trao đổi.",
        ]}
      />
    </ProjectShell>
  );
}

// ============================================================
// PROJECT 5 — Sáng tạo nội dung với AI
// ============================================================
function Project5() {
  const steps = [
    { s: "1. Xác định câu hỏi", d: "Nêu rõ điều cần biết và phạm vi kiểm chứng trước khi hỏi AI." },
    { s: "2. Yêu cầu dữ kiện", d: "Yêu cầu AI tách dữ kiện, giả định và điểm chưa chắc chắn." },
    { s: "3. Đối chiếu 3 nguồn", d: "Ưu tiên sách, bài báo học thuật hoặc trang chính thức." },
    { s: "4. Kiểm tra bối cảnh", d: "Rà soát thời gian, đối tượng và ngữ cảnh của thông tin." },
    { s: "5. Tự viết kết luận", d: "Tổng hợp bằng lời của mình, ghi nguồn khi cần thiết." },
  ];
  const tools = [
    {
      name: "ChatGPT",
      role: "Xây dựng nội dung",
      pros: "Chuyển chủ đề rộng thành các ý ngắn theo trình tự nhanh chóng, hỗ trợ hình thành cấu trúc infographic 5 bước.",
      cons: "Nội dung ban đầu còn dài, mang tính khái quát — cần chọn lọc, rút gọn và chuyển sang dạng hành động.",
    },
    {
      name: "Microsoft Designer",
      role: "Tạo hình minh họa",
      pros: "Sinh nhanh nhiều phương án ảnh giáo dục về AI, tài liệu, đối chiếu nguồn theo chủ đề.",
      cons: "Phụ thuộc nhiều vào từ khóa; một số hình dư chi tiết, chưa đúng trọng tâm kiểm chứng thông tin.",
    },
    {
      name: "Canva AI",
      role: "Hoàn thiện bố cục",
      pros: "Cho phép thử nhiều bố cục, sắp xếp nội dung và hoàn thiện sản phẩm trong cùng một môi trường thiết kế.",
      cons: "Gợi ý tự động chưa thay được căn chỉnh thủ công về khoảng cách, mật độ chữ và biểu tượng.",
    },
  ];
  return (
    <ProjectShell id="task-5" num="05" icon="🎨" title="Bài tập 5 – Ứng dụng AI tạo sinh để thiết kế Infographic hướng dẫn kiểm chứng thông tin" tags={["ChatGPT", "Microsoft Designer", "Canva AI", "Infographic"]}>
      <div className="grid gap-6 md:grid-cols-2">
        <Block label="🎯 Mục tiêu">
          Kết hợp ba công cụ AI tạo sinh (ChatGPT, Microsoft Designer, Canva AI) để xây dựng infographic hướng dẫn sinh viên <b>kiểm chứng thông tin do AI hỗ trợ</b>, đồng thời đánh giá vai trò của tư duy con người trong sáng tạo nội dung số.
        </Block>
        <Block label="🎁 Sản phẩm">
          Infographic <b>“5 bước kiểm chứng thông tin cùng AI”</b> — bố cục 5 khối độc lập, đánh số, dùng biểu tượng và ngôn ngữ hành động, giúp người xem nắm quy trình ngay từ lần quan sát đầu tiên.
        </Block>
      </div>

      <div className="mt-6">
        <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-primary">🧭 5 bước kiểm chứng thông tin cùng AI</h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((st) => (
            <div key={st.s} className="rounded-2xl border border-border bg-muted/40 p-4">
              <div className="text-sm font-bold text-primary">{st.s}</div>
              <p className="mt-1 text-xs text-muted-foreground">{st.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs italic text-muted-foreground">
          Nguyên tắc cốt lõi: <b>AI gợi ý — người học kiểm chứng — người học chịu trách nhiệm.</b>
        </p>
      </div>

      <div className="mt-6">
        <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-primary">🛠️ Quy trình thiết kế với 3 công cụ AI</h4>
        <div className="grid gap-4 md:grid-cols-3">
          {tools.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="text-base font-black text-primary">{t.name}</div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.role}</div>
              <p className="text-xs text-foreground"><b>Ưu điểm:</b> {t.pros}</p>
              <p className="mt-1 text-xs text-muted-foreground"><b>Hạn chế:</b> {t.cons}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card/60 p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
            🖼️ Minh chứng thực tế ({bai5Images.length} ảnh)
          </div>
          <a
            href={bai5Report.url}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/15 px-6 py-3 text-sm font-black text-primary shadow-sm transition hover:bg-primary/25 hover:shadow-md"
          >
            ⬇️ Tải file báo cáo (.docx)
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {bai5Images.map((img, i) => (
            <a
              key={i}
              href={img.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-border bg-muted"
            >
              <img
                src={img.url}
                alt={`Minh chứng bài 5 – ảnh ${i + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-black text-primary backdrop-blur">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Block label="🔬 Vai trò AI vs. con người">
          <ul className="space-y-1">
            <li>• <b>AI</b>: rút ngắn thời gian tạo bản nháp, gợi ý cấu trúc nội dung và sinh nhiều phương án hình ảnh, bố cục.</li>
            <li>• <b>Con người</b>: đặt yêu cầu, chọn lọc thông tin, sắp xếp trình tự, kiểm chứng và chịu trách nhiệm về sản phẩm.</li>
            <li>• Kết quả tốt = <b>AI tăng tốc</b> + <b>tư duy phản biện của người dùng</b>.</li>
          </ul>
        </Block>
        <Block label="💡 Bài học">
          <ul className="space-y-1">
            <li>• Prompt rõ ràng, có ràng buộc (độ dài, phong cách, đối tượng) quyết định phần lớn chất lượng đầu ra.</li>
            <li>• Cần chuyển nội dung AI từ <b>mô tả dài</b> sang <b>hành động ngắn</b> để phù hợp infographic.</li>
            <li>• Sao chép nguyên câu trả lời AI hoặc dùng dữ kiện chưa đối chiếu làm giảm độ tin cậy của sản phẩm.</li>
          </ul>
        </Block>
      </div>

      <EvalAndIntegrity
        good={[
          "Kết hợp hợp lý 3 công cụ AI ở 3 khâu: nội dung, hình ảnh, bố cục.",
          "Nội dung chuyển thành 5 bước hành động ngắn gọn, đúng chuẩn infographic.",
          "Bố cục trực quan, ưu tiên khoảng trắng và biểu tượng đơn giản.",
        ]}
        improve={[
          "Một số hình do Microsoft Designer sinh còn nhiều chi tiết, cần lọc kỹ hơn.",
          "Gợi ý bố cục tự động của Canva AI vẫn phải căn chỉnh lại thủ công.",
        ]}
        lesson={[
          "AI hỗ trợ ý tưởng và bản nháp, không thay thế tư duy phản biện.",
          "Kiểm chứng thông tin qua tối thiểu 3 nguồn trước khi công bố.",
          "Luôn tự viết kết luận bằng ngôn ngữ của mình và ghi nguồn khi cần.",
        ]}
        aiUsage={[
          "ChatGPT: xây khung 5 bước, sau đó cá nhân rút gọn và chuyển sang dạng hành động.",
          "Microsoft Designer: tạo hình minh họa AI/nguồn/đối chiếu theo prompt tiếng Anh.",
          "Canva AI: gợi ý bố cục 5 bước, cá nhân căn chỉnh cỡ chữ, biểu tượng và khoảng cách.",
        ]}
        commitments={[
          "Khai báo rõ các công cụ AI đã dùng trong mô tả sản phẩm.",
          "Đối chiếu dữ kiện AI với nguồn học thuật/chính thức trước khi sử dụng.",
          "Tôn trọng bản quyền hình ảnh, biểu tượng và tài nguyên mở đã dùng.",
        ]}
      />
    </ProjectShell>
  );
}

// ============================================================
// PROJECT 6 — AI có trách nhiệm
// ============================================================
function Project6() {
  const principles = [
    "Không dùng AI để gian lận hoặc làm thay toàn bộ bài tập.",
    "Luôn kiểm chứng thông tin do AI cung cấp bằng ít nhất 2 nguồn khác.",
    "Ghi rõ khi có sử dụng AI trong quá trình học tập và làm bài.",
    "Không nhập dữ liệu cá nhân hoặc thông tin nhạy cảm vào AI.",
    "Không sao chép nguyên văn nội dung AI khi chưa kiểm tra và chỉnh sửa.",
    "Sử dụng AI để hỗ trợ tư duy, không thay thế tư duy cá nhân.",
    "Chịu trách nhiệm cuối cùng với sản phẩm học tập của bản thân.",
  ];
  const issues = [
    { t: "Đạo văn & gian lận", d: "Chép nguyên nội dung AI → vi phạm liêm chính học thuật.", fix: "Diễn đạt lại theo hiểu biết cá nhân, trích dẫn AI." },
    { t: "Sai lệch thông tin", d: "AI có thể “hallucination” — bịa dữ kiện.", fix: "Đối chiếu với nguồn chính thống, không tin ngay." },
    { t: "Thiên kiến thuật toán", d: "Dữ liệu huấn luyện lệch → kết quả thiên lệch.", fix: "Ý thức về hạn chế của AI, đọc nhiều góc nhìn." },
    { t: "Quyền riêng tư", d: "Nhập dữ liệu cá nhân có thể bị lưu trữ, rò rỉ.", fix: "Không nhập thông tin nhạy cảm; đọc kỹ chính sách." },
    { t: "Phụ thuộc AI", d: "Dùng AI cho mọi việc → giảm khả năng tự tư duy.", fix: "Tự làm phần cốt lõi, dùng AI cho bước hỗ trợ." },
  ];
  return (
    <ProjectShell id="task-6" num="06" icon="🛡️" title="Bài tập 6 – Sử dụng AI có trách nhiệm trong học tập và nghiên cứu" tags={["Đạo đức AI", "Liêm chính", "Phản biện"]}>
      <div className="grid gap-6 md:grid-cols-2">
        <Block label="🎯 Mục tiêu">
          Hiểu các vấn đề đạo đức khi sử dụng AI và xây dựng bộ nguyên tắc cá nhân.
        </Block>
        <Block label="🛠️ Nguồn tham khảo">
          Tài liệu học thuật môn học, quy định nhà trường, hướng dẫn của UNESCO về AI trong giáo dục.
        </Block>
      </div>

      <div className="mt-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">📄 Nội dung báo cáo chi tiết</div>
        <p className="text-sm">
          Nghiên cứu chính sách sử dụng AI trong giáo dục đại học, thực hiện nhiệm vụ học tập có sự hỗ trợ của AI và phân tích các vấn đề đạo đức liên quan.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="mb-1 font-bold text-primary">📜 Chính sách AI trong ĐH</div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• AI là <b>công cụ hỗ trợ</b>, không thay thế tư duy.</li>
              <li>• Cho phép dùng AI cho ý tưởng, dàn ý, chỉnh sửa ngôn ngữ.</li>
              <li>• Không sao chép nguyên văn sản phẩm AI để nộp bài.</li>
              <li>• Minh bạch việc sử dụng AI khi được yêu cầu.</li>
              <li>• Kiểm chứng thông tin AI bằng nguồn đáng tin cậy.</li>
              <li>• Xu hướng quốc tế: <b>không cấm</b> — quản lý qua minh bạch &amp; trung thực học thuật.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card/60 p-4 text-sm">
            <div className="mb-1 font-bold text-primary">🧪 Nhiệm vụ thực hành</div>
            <p className="text-xs text-muted-foreground">
              Chuẩn bị thuyết trình <i>"Tác động của AI đối với giáo dục đại học"</i> với 3 prompt ChatGPT:
            </p>
            <ul className="mt-1 space-y-1 text-xs">
              <li>① Liệt kê 5 tác động tích cực + 5 tiêu cực.</li>
              <li>② Xây dàn ý 10 slide.</li>
              <li>③ Đề xuất giải pháp dùng AI có trách nhiệm.</li>
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              → Đánh giá – chỉnh sửa – bổ sung ví dụ thực tiễn tại VN – biên tập lại theo phong cách cá nhân.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-secondary/30 bg-secondary/10 p-4">
          <div className="mb-2 text-sm font-bold">⚖️ 3 vấn đề đạo đức trọng tâm</div>
          <ul className="grid gap-1 text-xs sm:grid-cols-3">
            <li>• <b>Ranh giới hỗ trợ / gian lận</b>: nằm ở <i>mức độ tham gia thực sự</i> của người học.</li>
            <li>• <b>Sở hữu trí tuệ &amp; trích dẫn</b>: AI có thể tạo tài liệu tham khảo <i>không tồn tại</i> → phải kiểm chứng.</li>
            <li>• <b>Phát triển kỹ năng</b>: phụ thuộc AI làm giảm tư duy phản biện, viết học thuật &amp; sáng tạo.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-card/60 p-4">
          <div className="text-sm font-bold">📢 Trích dẫn AI mẫu</div>
          <p className="mt-1 text-xs italic text-muted-foreground">
            "Một phần nội dung ban đầu được xây dựng với sự hỗ trợ của ChatGPT. Tác giả đã kiểm chứng, chỉnh sửa và chịu trách nhiệm hoàn toàn đối với nội dung cuối cùng."
          </p>
        </div>

        <p className="mt-4 rounded-xl bg-primary/10 p-3 text-center text-sm font-semibold italic text-primary">
          "Học cùng AI – nhưng không ngừng tư duy."
        </p>
      </div>

      <div className="mt-6">
        <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-primary">📜 Bộ nguyên tắc cá nhân — 7 điều</h4>
        <ol className="grid gap-3 sm:grid-cols-2">
          {principles.map((p, i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-border bg-muted/40 p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full gradient-primary text-sm font-black text-white">{i + 1}</span>
              <span className="text-sm">{p}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6">
        <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-primary">⚖️ Vấn đề đạo đức & Giải pháp</h4>
        <div className="grid gap-4 md:grid-cols-2">
          {issues.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="font-bold">{it.t}</div>
              <p className="mt-1 text-xs text-muted-foreground"><b>Vấn đề:</b> {it.d}</p>
              <p className="mt-1 text-xs text-secondary-foreground"><b>Giải pháp:</b> {it.fix}</p>
            </div>
          ))}
        </div>
      </div>

      <EvidenceGallery
        items={[
          { title: "Infographic 7 nguyên tắc dùng AI có trách nhiệm" },
          { title: "Ví dụ prompt vi phạm & prompt cải thiện" },
          { title: "Ảnh chụp phần khai báo dùng AI trong bài" },
          { title: "Bảng phân biệt phần tự làm và phần AI hỗ trợ" },
          { title: "Cam kết trung thực học thuật cá nhân" },
          { title: "Ghi chú kiểm chứng thông tin AI trả về" },
        ]}
      />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Block label="🔬 Phân tích – Tư duy phản biện">
          <ul className="space-y-1">
            <li>• AI mang lại cơ hội lớn nhưng cũng tạo <b>rủi ro đạo đức học thuật</b>.</li>
            <li>• Người học cần phát triển năng lực <b>tự đánh giá, phản biện, kiểm chứng</b>.</li>
            <li>• AI <b>không thể thay thế hoàn toàn</b> tư duy con người trong nghiên cứu.</li>
          </ul>
        </Block>
        <Block label="💡 Bài học">
          <ul className="space-y-1">
            <li>• <b>Trách nhiệm số</b> là kỹ năng quan trọng trong thời đại AI.</li>
            <li>• Sử dụng AI đúng cách giúp <b>phát triển bền vững</b> hơn.</li>
            <li>• Minh bạch việc dùng AI xây dựng <b>uy tín học thuật</b> cá nhân.</li>
          </ul>
        </Block>
      </div>
      <EvalAndIntegrity
        good={[
          "Xác định rõ 7 nguyên tắc dùng AI cá nhân, dễ áp dụng.",
          "Phân biệt được phần tự làm và phần AI hỗ trợ trong bài.",
          "Luôn kiểm chứng thông tin AI trả về trước khi trích dẫn.",
        ]}
        improve={[
          "Cần khai báo chi tiết hơn về prompt và mô hình đã dùng.",
          "Bổ sung ví dụ tình huống vi phạm để tự cảnh báo.",
        ]}
        lesson={[
          "AI là công cụ hỗ trợ, không thay thế tư duy cá nhân.",
          "Trung thực học thuật quan trọng hơn kết quả nhanh.",
          "Ghi rõ nguồn AI giúp bài viết đáng tin cậy hơn.",
        ]}
        aiUsage={[
          "Dùng ChatGPT để gợi ý cấu trúc bộ nguyên tắc.",
          "Dùng Gemini để đối chiếu ví dụ đạo đức AI.",
          "Toàn bộ nội dung cuối cùng do cá nhân biên tập lại.",
        ]}
        commitments={[
          "Không sao chép nguyên văn đầu ra AI vào bài nộp.",
          "Ghi chú rõ đoạn nào có AI hỗ trợ, đoạn nào tự viết.",
          "Sẵn sàng chịu trách nhiệm với mọi nội dung đã công bố.",
        ]}
      />
    </ProjectShell>
  );
}
