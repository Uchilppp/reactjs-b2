import React, { Component } from 'react';
import dataGlasses from '../data/dataGlasses.json';
import './BaiTapChonKinh.css';

class BaiTapChonKinh extends Component {
  // State lưu trữ thông tin mẫu kính đang được chọn
  state = {
    selectedGlasses: dataGlasses[0], // Mặc định hiển thị mẫu kính đầu tiên
  };

  // Hàm xử lý sự kiện đổi kính khi người dùng click chọn mẫu kính
  changeGlasses = (newGlasses) => {
    this.setState({
      selectedGlasses: newGlasses,
    });
  };

  // Render danh sách các nút kính bên dưới
  renderGlassesList = () => {
    const { selectedGlasses } = this.state;

    return dataGlasses.map((glass) => {
      const isActive = selectedGlasses.id === glass.id;
      return (
        <div key={glass.id} className="col-4 col-md-2 mb-3">
          <button
            type="button"
            className={`glass-item-btn w-100 ${isActive ? 'active' : ''}`}
            onClick={() => this.changeGlasses(glass)}
          >
            <img
              src={`./glassesImage/g${glass.id}.jpg`}
              alt={glass.name}
              onError={(e) => {
                // Fallback nếu không tải được g{id}.jpg thì dùng glass.url
                e.target.onerror = null;
                e.target.src = glass.url;
              }}
            />
          </button>
        </div>
      );
    });
  };

  render() {
    const { selectedGlasses } = this.state;

    return (
      <div className="glasses-app">
        <div className="glasses-overlay">
          {/* Header */}
          <h3 className="header-title">TRY GLASSES APP ONLINE</h3>

          <div className="container py-4">
            {/* Khu vực hiển thị 2 người mẫu */}
            <div className="row text-center mb-5 justify-content-center">
              {/* Người mẫu bên trái: Người mẫu ban đầu (không đeo kính) */}
              <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
                <div className="model-container">
                  <img
                    src="./glassesImage/model.jpg"
                    alt="Người mẫu ban đầu"
                    className="model-base"
                  />
                </div>
              </div>

              {/* Người mẫu bên phải: Đeo kính và thay đổi tương ứng theo mẫu kính được chọn */}
              <div className="col-12 col-md-5 d-flex justify-content-center">
                <div className="model-container">
                  {/* Ảnh gốc người mẫu */}
                  <img
                    src="./glassesImage/model.jpg"
                    alt="Người mẫu thử kính"
                    className="model-base"
                  />

                  {/* Kính đeo lên khuôn mặt người mẫu (thay đổi theo state selectedGlasses) */}
                  <img
                    src={selectedGlasses.url}
                    alt={selectedGlasses.name}
                    className="glasses-try-on"
                  />

                  {/* Khối hiển thị thông tin kính tương ứng */}
                  <div className="glasses-info">
                    <div className="glasses-title">{selectedGlasses.name}</div>
                    <div className="glasses-price">${selectedGlasses.price}</div>
                    <p className="glasses-desc">{selectedGlasses.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Khu vực danh sách các mẫu kính để người dùng bấm chọn */}
            <div className="glasses-list-card p-4">
              <h5 className="text-secondary mb-3 text-center">Danh sách mẫu kính</h5>
              <div className="row justify-content-center">
                {this.renderGlassesList()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapChonKinh;
