import Image from '../assets/images/image.png'
import TeamImg from '../assets/images/person.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../assets/css/reviewClient.css"
import Image2 from "../assets/images/Group-1.png"

const ReviewClient = () => {

    return (
        <div className='review_main_container'>
            <Swiper
                direction={"horizontal"}
                autoplay={{ delay: 5000 }}
                loop={true}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true
                }}

            >
                <SwiperSlide>
                    <div className="review_container">
                        <div className="review_left_container">
                            <h1> <i className="fa fa-quote-left" aria-hidden="true"></i> You cant go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</h1>
                            <div className="review_profile_content">
                                <div className="review_info">
                                    <h2>Khalid Al Dawsry</h2>
                                    <p>Jeddah, Saudi</p>
                                </div>
                                <div className="review_info_image">
                                    <img src={TeamImg} alt="Image" />
                                </div>
                            </div>
                            <img className='review_victor_image' src={Image2} alt="Images" />
                        </div>
                        <div className="review_right_container">
                            <img src={Image} alt="images" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review_container">
                        <div className="review_left_container">
                            <h1> <i className="fa fa-quote-left" aria-hidden="true"></i> You cant go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it. </h1>
                            <div className="review_profile_content">
                                <div className="review_info">
                                    <h2>Khalid Al Dawsry</h2>
                                    <p>Jeddah, Saudi</p>
                                </div>
                                <div className="review_info_image">
                                    <img src={TeamImg} alt="Image" />
                                </div>
                            </div>
                            <img className='review_victor_image' src={Image2} alt="Images" />
                        </div>
                        <div className="review_right_container">
                            <img src={Image} alt="images" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review_container">
                        <div className="review_left_container">
                            <h1> <i className="fa fa-quote-left" aria-hidden="true"></i> You cant go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it. </h1>
                            <div className="review_profile_content">
                                <div className="review_info">
                                    <h2>Khalid Al Dawsry</h2>
                                    <p>Jeddah, Saudi</p>
                                </div>
                                <div className="review_info_image">
                                    <img src={TeamImg} alt="Image" />
                                </div>
                            </div>
                            <img className='review_victor_image' src={Image2} alt="Images" />
                        </div>
                        <div className="review_right_container">
                            <img src={Image} alt="images" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review_container">
                        <div className="review_left_container">
                            <h1> <i className="fa fa-quote-left" aria-hidden="true"></i> You cant go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</h1>
                            <div className="review_profile_content">
                                <div className="review_info">
                                    <h2>Khalid Al Dawsry</h2>
                                    <p>Jeddah, Saudi</p>
                                </div>
                                <div className="review_info_image">
                                    <img src={TeamImg} alt="Image" />
                                </div>
                            </div>
                            <img className='review_victor_image' src={Image2} alt="Images" />
                        </div>
                        <div className="review_right_container">
                            <img src={Image} alt="images" />
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper >
        </div>
    )
}

export default ReviewClient


