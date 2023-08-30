import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói về BookingCare
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <div className="quotations">DANH NGÔN VỀ SỨC KHOẺ</div>
            <p>
              <p className="quotations-en">
                1. He who has health, has hope; and he who has hope, has
                everything.
              </p>
              <p className="quotations-vi">
                Người có sức khỏe, có hy vọng; và người có hy vọng, có tất cả
                mọi thứ.
              </p>
              <p className="author">-Thomas Carlyle-</p>
            </p>
            <p>
              <p className="quotations-en">2. The first wealth is health.</p>
              <p className="quotations-vi">Tài sản đầu tiên là sức khỏe.</p>
              <p className="author">-Ralph Waldo Emerson-</p>
            </p>
            <p>
              <p className="quotations-en">
                3. Good health and good sense are two of life's greatest
                blessings.
              </p>
              <p className="quotations-vi">
                Sức khỏe tốt và trí tuệ minh mẫn là hai điều hạnh phúc nhất của
                cuộc đời.
              </p>
              <p className="author">-Publilius Syrus-</p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
