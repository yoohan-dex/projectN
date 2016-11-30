import React, { PropTypes } from 'react';
const SkillItem = props => {
  const item =  props;
  console.log('SkillItem', item)
  const renderBrief = brief => {
    let brieise = '';
    brief.forEach(v => brieise + '/' + v);
    console.log('brieise', brieise);
    return brieise;
  };
  const renderDescription = desc =>
    <dd className="skill-description-item">{desc}</dd>;
  return (
    <dl className="skill-description">
      <dt className="skill-brief">{renderBrief(item.item.brief)}</dt>
      {item.item.description.map(renderDescription)}
    </dl>
  );
};

// SkillItem.propTypes = {
//   item: PropTypes.object,
// };
export default SkillItem;
