import React from 'react';

const TrangIphone = () => {
 return(
    <div className="bg-gray-100 min-h-screen">
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">IPhone Likenew</h1>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="p-2 border rounded-md"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-black hover:text-white">
          Tìm kiếm
        </button>
      </div>
    </header>

    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Tuyển dụng cộng tác viên online</h2>
        <p className="text-red-600">Hoa hồng 700k / 1 sản phẩm</p>
      </div>

      {/* Phần Bộ lọc và sắp xếp */}
      <div className="my-4 p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
        {/* Thay button "Bộ lọc" bằng khung xám có icon */}
        <div className="flex items-center bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white cursor-pointer">
          {/* <FaFilter className="mr-2" /> Icon kế bên chữ "Bộ lọc" */}
          <span>Bộ lọc</span>
        </div>

        <div className="flex space-x-4">
          <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
            Mặc định
          </button>
          <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
            Từ Giá thấp đến cao
          </button>
          <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
            Từ Giá cao đến thấp
          </button>
        </div>
      </div>

      {/* Danh sách sản phẩm
      <ProductList /> */}
    </div>
  </div>
 )
}
export default TrangIphone