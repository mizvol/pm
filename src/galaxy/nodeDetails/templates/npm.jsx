import React from 'react';
import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(npmTempalte, React);

function npmTempalte(props) {
  var model = props.model;

  var link = 'https://en.wikipedia.org/wiki/' + model.name;
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
