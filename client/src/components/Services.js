import React from 'react';
import short from '../res/short.png';
import thumbnail from '../res/thumbnail.png'
import d_video from '../res/3d_video.png'
import '../css/Services.css';

const Services = () => {
    return (
        <div className="srv-outer-container">
            <div className="srv-inner-container">
                {/* Left Side - Cards */}
                <div className="srv-cards">
                    <div className="srv-card-wrapper">
                        <ServiceCard
                            icon={short}
                            title="Short Form Editor"
                            description="Expertly craft short, engaging video content to captivate your audience and elevate your brand."
                        />
                    </div>
                    <div className="srv-card-wrapper">
                        <ServiceCard
                            icon={thumbnail}
                            title="Thumbnail Designer"
                            description="Design eye-catching and click-worthy thumbnails to drive higher engagement on your content."
                        />
                    </div>
                    <div className="srv-card-wrapper">
                        <ServiceCard
                            icon={d_video}
                            title="3D Viral Reels"
                            description="Create stunning 3D video reels that go viral and leave a lasting impression on your audience."
                        />
                    </div>
                </div>

                {/* Right Side - Text */}
                <div className="srv-details">
                    <h2 className="srv-heading">
                        My Awesome<span className="srv-highlight"> Services</span>
                    </h2>
                    <p className="srv-description">
                        Elevate your brand with premium services designed to make a lasting impact. Simple, efficient, and tailored just for you.
                    </p>
                    <p className="srv-details-text">
                        Whether you need a polished presentation, standout designs, or innovative solutions, I offer a range of services to meet your needs. Let’s collaborate and bring your vision to life with creativity and precision.
                    </p>
                    <button className="srv-cta-button">Hire Me</button>
                </div>
            </div>
        </div>
    );
};
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="srv-card">
            <div className="srv-icon-container">
                <img src={icon} alt={title} />
            </div>
            <div className="srv-text-container">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default Services;
