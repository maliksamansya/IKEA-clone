import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../store/actions";
import PulseLoader from "react-spinners/PulseLoader";
import convertNumber from "../helpers/convertNumber";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination]);

function DetailPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const productDetail = useSelector((state) => {
    return state.detail.productDetail;
  });
  //   console.log(productDetail);
  //   console.log(productId, "<<<<<<<<<<<<<<");

  useEffect(() => {
    console.log("masukkkkkkkkkkkkkkkkkk");
    dispatch(fetchDetail(productId));
    setLoading(true);
  }, [dispatch, productId]);

  useEffect(() => {
    if (productDetail) {
      if (Object.keys(productDetail).length) {
        setLoading(false);
      }
    }
  }, [productDetail]);

  return (
    // <React.Fragment>
    <>
      <h1>Holllas</h1>
      {loading ? (
        <div className="sweet-loading flex items-center h-screen">
          <PulseLoader
            loading={loading}
            size={20}
            color={"#002672"}
            className="mx-auto"
          />
        </div>
      ) : (
        <div className="bg-white p-6">
          <div className="px-30 mt-20">
            <div className="grid grid-cols-3 gap-x-12">
              <div className="col-span-2">
                {/* <div className="w-1/2 mr-6"> */}
                <Swiper
                  navigation
                  pagination={{ clickable: true }}
                  className="mx-auto mb-12"
                >
                  <SwiperSlide>
                    <img
                      src={productDetail.mainImg}
                      alt="Image 1"
                      className="mx-auto mb-12"
                    />
                  </SwiperSlide>
                  {productDetail.Images?.map((image, index) => {
                    return (
                      <>
                        <SwiperSlide key={index}>
                          <img
                            src={image.imgUrl}
                            alt="Image 1"
                            className="mx-auto mb-12"
                          />
                        </SwiperSlide>
                      </>
                    );
                  })}
                </Swiper>

                <div className="flex overflow-x-auto">
                  {productDetail.Images?.map((image, index) => {
                    return (
                      <img
                        src={image.imgUrl}
                        alt=""
                        className="w-1/4 p-3 hover:border-gray-200 border-transparent border-2 rounded-xl"
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-darkSmalt">
                  {productDetail.name}
                </h1>
                <p className="mt-3">{productDetail.overview}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p className="mt-2 font-bold text-2xl">
                    <span className="mr-1 text-sm align-top">Rp</span>
                    {convertNumber(productDetail.price)}
                  </p>
                  <p
                    className="font-bold text-white"
                    style={{
                      backgroundColor: "greenyellow",
                      width: "70px",
                      height: "32px",
                      textAlign: "center",
                    }}
                  >
                    {productDetail.Category?.name}
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-200 pt-8" />
                <div>
                  <h1 className="text-2xl font-bold text-darkSmalt">
                    Product Detail
                  </h1>
                  <p className="mt-3 text-justify">
                    {productDetail.description}
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-200 pt-8" />
                <div className="flex items-center text-gray-500">
                  <svg
                    className="h-4 w-4 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9a5 5 0 1 1 10 0 5 5 0 0 1-10 0zm8-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6.24 1.477A6.982 6.982 0 0 0 4 9c0 2.973 1.813 5.49 4.395 6.535a1 1 0 0 0 1.21-1.57A5.002 5.002 0 0 1 9 11a5.002 5.002 0 0 1 1.395-3.465 1 1 0 0 0-1.565-1.245zm2.79 0A5.002 5.002 0 0 1 11 11a5.002 5.002 0 0 1-1.395 3.465 1 1 0 1 0 1.565 1.245A6.982 6.982 0 0 0 16 9c0-2.973-1.813-5.49-4.395-6.535a1 1 0 0 0-1.21 1.57z"
                    />
                  </svg>
                  <span className="text-sm">
                    Posted by: {productDetail.User?.username}
                  </span>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="items-center px-4 py-3 w-1/2 border border-transparent text-sm font-medium rounded-md shadow-sm text-cola bg-tangerine hover:bg-darkTangerine"
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="items-center px-4 py-3 w-1/2 border border-transparent text-sm font-medium rounded-md shadow-sm text-cola bg-smalt hover:bg-darkSmalt"
                  >
                    Add to Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* // </React.Fragment> */}
    </>
  );
}

export default DetailPage;
