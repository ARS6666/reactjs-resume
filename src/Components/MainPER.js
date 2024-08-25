import React, { useState } from "react";
import "../font/fontf.css";
import "../CSS/MainPER.css";
import pic from "../Assets/7r.png";
import "https://kit.fontawesome.com/6c2a0de8a3.js";
import { Navbar, Nav } from "react-bootstrap";

function Slider() {


  return (
    <>
      <div class="col-md-12 bgc">
        <div dir="rtl">
          <Navbar
            className="custom-navbar navbar-expand-md shadow navdis rounded fontf"
            expand="md"
            style={{ height: "80px" }}
          >
            <Navbar.Toggle aria-controls="basicNav" />
            <Navbar.Collapse
              id="basicNav"
              className="justify-content-center custom-navbar  rounded"
            >
              <span>
                <a href="/PER"class="hre">PER</a>
                 | 
                <a  href="/ENG"class="hre">ENG</a>
              </span>

              <Nav className="nav-links fontf">
                <Nav.Link href="#home">خانه</Nav.Link>
                <Nav.Link href="#about">درباره ی من</Nav.Link>
                <Nav.Link href="#skills">توانایی ها</Nav.Link>
                <Nav.Link href="#Contactme">ارتباط</Nav.Link>
                <Nav.Link href="https://github.com/ARS6666">گیت هاب</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div class="container" id="home" dir="ltr">
          <div class="pt-3 col-md-12">
            <div className="row bg-light bordrer ">
              <div className="col-md-3">
                <img src={pic} class="pic picbg" />
              </div>
              <div className="col-md-8" dir="ltr">
                <div className="text-container text-center">
                  <span class="fontf text5">عرشـــیا قاســـم زاده</span>
                  <br />
                  <div class="d-flex justify-content-center">
                    <span class="text3 fontf"> UI طراح</span>
                  </div>
                  <div class="d-flex justify-content-center">
                    <span class="text3 fontf">گرافیک دیزاینر</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="about">
          <div class="pt-4 col-md-12 " dir="ltr">
            <div className=" bg-light  bordrer ">
              <div class=" wavebg bordrer">
                <div class="border-bottom border-dark p-2" dir="rtl">
                  <span class="fontf text3 p-4 ">درباره ی من</span>
                </div>
                <div class=" ">
                  <h5 class="text-center fontf pt-2 p-3 ws col-md-12">
                    سلام! من عرشیا هستم من اهل زنجان، ایران هستم. من یک
                    برنامه‌نویس و طراح رابط کاربری پرشور هستم که به ایجاد
                    تجربیات دیجیتال شهودی و جذاب بصری تخصص دارم. با پیشینه‌ای
                    قوی در زمینه برنامه‌نویسی و طراحی، از چالش‌های زنده کردن
                    ایده‌ها از طریق راه‌حل‌های نوآورانه لذت می‌برم. هنوز
                    فارغ‌التحصیل نشده‌ام، اما مهارت‌های خود را در زبان‌های
                    برنامه‌نویسی و ابزارهای طراحی مختلف توسعه داده‌ام. در طول
                    سال‌ها، بر روی پروژه‌های متنوعی کار کرده‌ام که به من این
                    امکان را داده‌اند تا تخصص خود را در طراحی رابط کاربری و
                    توسعه فرانت‌اند تقویت کنم. به ویژه از استفاده از فتوشاپ برای
                    خلق تصاویری خیره‌کننده که تعامل کاربران را افزایش می‌دهد،
                    لذت می‌برم. وقتی که در کد یا طراحی غرق نیستم، می‌توانید مرا
                    در زمین فوتسال هم پیدا کنید. من عاشق بازی فوتسال در اوقات
                    فراغتم هستم، زیرا نه تنها مرا فعال نگه می‌دارد بلکه به من
                    این امکان را می‌دهد که با دوستانم ارتباط برقرار کنم و از
                    هیجان کار تیمی و رقابت لذت ببرم همیشه از ملاقات با افراد
                    جدید و به اشتراک گذاشتن ایده‌ها هیجان‌زده هستم، بنابراین اگر
                    به همکاری علاقه‌مند هستید یا فقط می‌خواهید درباره طراحی،
                    برنامه‌نویسی صحبت کنید، خوشحال می‌شوم که با من تماس بگیرید
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="skills">
          <div class="pt-4 col-md-12 " dir="ltr">
            <div className=" bg-light  bordrer ">
              <div class=" skillbg bordrer">
                <div class="p-2 text-center text-dark">
                  <span class="fontf text3 p-4">توانایی ها</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="Contactme">
          <div class="pt-4 col-md-12 pb-4" dir="ltr">
            <div className=" bg-light  bordrer ">
              <div class=" usbg">
                <div class="border-bottom border-dark p-2 text-center">
                  <span class="fontf text5 p-4 ">ارتباط با من</span>
                </div>
                <div class="text-center">
                  <div class="pt-5">
                    <span class="text3 fontf">
                      ایمیل : arsprogramming123@gmail.com
                    </span>
                  </div>
                  <div class="pt-4">
                    <span class="text3 fontf">تلفن همراه :</span>
                    <span class="text3 fontf" dir="ltr">
                      +98 9915910538
                    </span>
                  </div>
                  <div class="pt-4">
                    <span class="text3 fontf">
                      و می‌توانید در{" "}
                      <a href="https://t.me/AAARSARS">
                        <i class="fa fa-telegram"></i>
                      </a>{" "}
                      و{" "}
                      <a href="https://wa.me/qr/OEMAPGESEVUNA1" class="hre">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i> به من
                        پیام دهید
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className=" text-dark bg-light  fontf border-top">
          <div class="linkb p-2" dir="ltr" style={{ paddingBottom: "0" }}>
            <div class="col-md-12  d-flex justify-content-center">
              ©All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Slider;
