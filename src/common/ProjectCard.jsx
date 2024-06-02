import PropTypes from "prop-types"; // Import prop-types package

function ProjectCard({ src }) {
  return (
    <>
      <div>
        <img className="hover" src={src} alt="PokeCard Project Image" />
      </div>
    </>
  );
}

// Define prop types for the ProjectCard component
ProjectCard.propTypes = {
  src: PropTypes.string.isRequired, // 'src' prop is required and should be a string
};

export default ProjectCard;
