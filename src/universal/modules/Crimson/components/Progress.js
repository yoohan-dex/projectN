import React, {PropTypes} from 'react';

const Progress = props => {
  const {cert} = props;
  console.log('here is progress')
  const scoreHeight = Math.floor(cert.score / cert.full * 100);
  const style = {
    transition: 'width 0.4s cubic-bezier(0.1, 1.24, 1, 1)',
    width: `${scoreHeight}%`,
  };
  return (
    <dl className="language-certifications">
      <dt className="language-cert-type">{cert.type}</dt>
      {cert.full && cert.score ? <dd className="progress">
        <div className="progress-status" style={style}>
          <span className="progress-score">{cert.score}</span>
        </div>
      </dd> : null }
    </dl>
  );
};

Progress.propTypes = {
  cert: PropTypes.object,
};

export default Progress;
