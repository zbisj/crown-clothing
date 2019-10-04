import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import MenuItem from '../menu-item/MenuItem';
import { seleDirectorySections} from '../../redux/selectors/DirectorySelectors';


const Directory = ({sections}) => (

  <div className="directory-menu">
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem
          key={ id }
          {...otherSectionProps}
        />
      ))
    }
  </div>

);


const mapStateToProps = createStructuredSelector(
  {
    sections: seleDirectorySections
  }
)

export default connect(mapStateToProps)(Directory);
