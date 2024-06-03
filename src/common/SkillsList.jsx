import PropTypes from "prop-types";

function SkillsList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="CheckMark Icon" />
      <p>{skill}</p>
    </span>
  );
}

// Define prop types for the SkillsList component
SkillsList.propTypes = {
  src: PropTypes.string.isRequired, // 'src' prop is required and should be a string
  skill: PropTypes.string.isRequired,
};

export default SkillsList;
