import React from 'react';

const FeaturedNews = () => {
  const articles = [
    {
      id: 1,
      title: 'Apple công bố iPhone 16 với nhiều cải tiến',
      image: 'https://i.ytimg.com/vi/enh6Mvce__s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwKHmy3syB09E9SYDcxm_5J65pRA',
      summary: 'iPhone 16 được trang bị chip mới và camera nâng cấp, mang lại hiệu suất vượt trội.',
    },
    {
      id: 2,
      title: 'Samsung công bố S24 Ultra với tính năng vượt trội mang tính cách mạng',
      image: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_8_3_638266588013687420_galaxy-s24-ultra.jpg',
      summary: '1h00 sáng ngày 18/1 (giờ Việt Nam), sự kiện Galaxy Unpacked 2024 sẽ chính thức được Samsung tổ chức tại trung tâm SAP, San Jose (Mỹ), giới thiệu bộ ba Galaxy S24 series..',
    },
    {
      id: 3,
      title: 'iOS 18, bản cập nhật iOS mới nhất của Apple có gì mới? iPhone nào được cập nhật',
      image: 'https://tttctt.1cdn.vn/2024/09/18/image(9).png',
      summary: 'Apple đã chính thức ra mắt bản cập nhật iOS mới nhất iOS 18 vào lúc 0h ngày 17/9/2024 (theo giờ Việt Nam). Người dùng iPhone tương thích có thể nâng cấp lên iOS 18 thông qua tính năng Cập nhật phần mềm trong cài đặt.',
    },
    {
      id: 4,
      title: 'Công nghệ AI tiếp tục phát triển mạnh mẽ',
      image: 'https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/xpcwvovt/2024_10_01/tri-tue-nhan-tao-resize-7645.jpg.webp',
      summary: 'Các ứng dụng AI ngày càng được tích hợp sâu vào đời sống, từ y tế đến giáo dục.',
    },
  ];

  return (
    <section className="container mx-auto py-8">
      <h3 className="text-2xl font-bold mb-6">Tin Nổi Bật</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
              <p className="text-gray-600">{article.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
