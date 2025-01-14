import React from "react";
import "../css/Projects.css";

const Projects = () => {
  const videos = [
    "https://youtube.com/shorts/CaXcJ0wrC30?feature=share",
    "https://youtube.com/shorts/EwEsUch13eg?feature=share",
    "https://youtube.com/shorts/ACOg6SybnjY?feature=share",
    "https://youtube.com/shorts/vQaOuVUCJ94?feature=share",
    "https://youtube.com/shorts/JXuGQGgeR80?feature=share",
    "https://youtube.com/shorts/-VF55IxdG4A?feature=share",
    "https://youtube.com/shorts/-VF55IxdG4A?feature=share",
    "https://youtube.com/shorts/xV50LtZnRbM?feature=share",
  ];

  return (
    <div className="projects">
      <div className="con-wrapper" id="#services">
        <section className="con-projects-section">
          <h2 className="con-projects-heading">
            <span className="recent">Recent</span> Projects
          </h2>
          <div className="con-projects-container">
            {videos.map((video, index) => (
              <ProjectCard key={index} video={video} altText={`Project ${index + 1}`} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const ProjectCard = ({ video, altText }) => {
  return (
    <div className="con-project-card">
      <iframe
        className="con-project-video"
        src={video.replace("shorts/", "embed/")} // Convert to embeddable YouTube URL
        title={altText}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Projects;
