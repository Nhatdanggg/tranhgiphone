import React from 'react';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-96 text-white flex items-center"
      style={{ backgroundImage: "url('https://www.shutterstock.com/shutterstock/videos/1027419536/thumb/1.jpg?ip=x480')" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Tin tức công nghệ hàng đầu</h2>
        <p className="text-lg">Cập nhật những xu hướng mới nhất, từ AI, 5G, cho đến các sản phẩm công nghệ đột phá.</p>
      </div>
    </section>
  );
};

export default Hero;
