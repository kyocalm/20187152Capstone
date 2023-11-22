import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./MainPage.css";
import GREAPP1 from "/images/GREAPP-1.png";

import store12801_1 from "/images/store-5619201-1280-1.jpg";
import img021 from "/images/02-1.jpg";
import door from "/images/1.jpg";
import notebook from "/images/notebook.jpg";
import vegan from "/images/vegan.jpg";
import cycle1 from "/images/cycle-1.jpg";
import element4 from "/images/1(2).jpg";
import sport1 from "/images/sport-1.jpg";
import camera1 from "/images/camera-1.jpg";
import introduce2 from "/images/introduce-2.jpg";
import sellit2 from "/images/sellit-2.jpg";
import preview1 from "/images/preview-1.jpg";
import mypage1 from "/images/mypage-1.jpg";
import GrapeLogo from "/images/GREAPP.png";

const Main = () => {
  return (
    <section>
      <div className="frame">
        <div className="div">
          <div className="element-section">
            <div className="overlap-group">
              <img
                src={GrapeLogo}
                alt="GrapeLogo"
                className="d-inline-block align-text-top"
              />{" "}
            </div>
          </div>
          <div className="group">
            <div className="overlap">
              <div className="introduce">
                <img
                  className="div-wrapper"
                  alt="Introduce2"
                  src={introduce2}
                />
                <div className="text-wrapper">Introduce</div>
              </div>
              <div className="sellitgo">
                <img className="overlap-2" alt="Sellit2" src={sellit2} />
              </div>
              <div className="preview">
                <img className="overlap-3" alt="Preview1" src={preview1} />
                <div className="text-wrapper">Preview</div>
              </div>
              <div className="mypagego">
                <img className="overlap-4" alt="Mypage1" src={mypage1} />
                <div className="text-wrapper">Mypage</div>
              </div>
            </div>
          </div>
          <div className="overlap-5">
            <div className="element">
              <div className="text-wrapper-2">
                GREAP는 SNS를 기반으로 이루어지는
              </div>
              <p className="p">
                팔로워들간 거래를 목적으로 개설한 쇼핑몰입니다.
              </p>
              <img className="store" alt="Store" src={store12801_1} />
            </div>
            <div className="element-2" />
          </div>
          <div className="element-3">
            <img className="img" alt="Element" src={img021} />
            <div className="text-wrapper-3">자신있는 나의 제품을 소개하고,</div>
            <div className="text-wrapper-4">지인에게 판매해보세요!</div>
          </div>
          <div className="group-2">
            <p className="text-wrapper-5">
              그리고 가장 안전하고, 가까운 곳에서 구매해보세요
            </p>
            <div className="gotobutton"></div>
          </div>
          <div className="element-4">
            <div className="overlap-6">
              <div className="text-wrapper-7">GRAPE에서 종류에 상관없이</div>
              <div className="text-wrapper-8">자신의 물건을 선보여 보세요!</div>
            </div>
            <img className="door" alt="Door" src={door} />
            <img className="notebook" alt="Notebook" src={notebook} />
            <div className="text-wrapper-9">Electronic</div>
            <img className="vegan" alt="Vegan" src={vegan} />
            <div className="text-wrapper-10">sensuous</div>
            <div className="text-wrapper-11">Useful</div>
            <div className="sellitbutton"></div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-7">
              <div className="rectangle-2" />
              <div className="discover-people-s">
                Discover people's products
              </div>
              <p className="text-wrapper-13">
                Share your items with people on My Page
              </p>

              <div className="product">
                <img className="img-2" alt="Cycle" src={cycle1} />
                <div className="product-info">
                  <div className="text-wrapper-15">Product</div>
                  <div className="text-wrapper-16">Price</div>
                  <div className="text-wrapper-17">Name</div>
                  <div className="text-wrapper-18">date</div>
                </div>
              </div>
              <div className="product-2">
                <img className="img-2" alt="Camera" src={camera1} />
                <div className="product-info">
                  <div className="text-wrapper-15">Product</div>
                  <div className="text-wrapper-16">Price</div>
                  <div className="text-wrapper-17">Name</div>
                  <div className="text-wrapper-18">date</div>
                </div>
              </div>
              <div className="product-3">
                <img className="img-2" alt="Sport" src={sport1} />
                <div className="product-info">
                  <div className="text-wrapper-15">Product</div>
                  <div className="text-wrapper-16">Price</div>
                  <div className="text-wrapper-17">Name</div>
                  <div className="text-wrapper-18">date</div>
                </div>
              </div>
              <div className="product-4">
                <div className="group-wrapper">
                  <div className="group-3">
                    <img className="img-2" alt="Element" src={element4} />
                    <div className="product-info">
                      <div className="text-wrapper-15">Product</div>
                      <div className="text-wrapper-16">Price</div>
                      <div className="text-wrapper-17">Name</div>
                      <div className="text-wrapper-18">date</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center m-7">
        <div className="element-section">
          <div className="overlap-group">
            <div className="rectangle" />
            <img className="GREAPP" alt="Greapp" src={GREAPP1} />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Main;
